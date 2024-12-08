import { BootstrapServer } from "./server/bootstrap";
import { ModuleRoutes } from "@pkg/core/module/routes";
import { diContainer, fastifyAwilixPlugin } from "@fastify/awilix";
import { asClass, asFunction, Lifetime } from "awilix";
import { ModuleRepository } from "@pkg/core/module/__internal/module.repository";
import { nanoid } from "nanoid";


const server = BootstrapServer([...ModuleRoutes]);
server.register(fastifyAwilixPlugin, {
  disposeOnClose: true,
  disposeOnResponse: true,
  strictBooleanEnforced: true
})


diContainer.register({
  moduleRepository: asClass(ModuleRepository, {
    lifetime: Lifetime.SINGLETON
  })
})

server.addHook('onRequest', (request, reply, done) => {
  request.diScope.register({
    repository: asFunction(
      ({ moduleRepository }) => {
        return new ModuleRepository();
      },
      {
        lifetime: Lifetime.SCOPED,
      }
    ),
  })
  done()
})

server.get('/', (req, res) => {
  const r = req.diScope.resolve<ModuleRepository>('repository');
  const id = r.createModule({ title: `Test ${nanoid()}` });
  const m = r.getModuleById(id);

  res.send({
    data: {
      _id: id,
      ...m
    }
  })

})


server.listen({ port: 8081 }, (err, addr) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
})
