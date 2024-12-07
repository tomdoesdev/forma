import { BootstrapServer } from "@pkg/server/bootstrap";
import { ModuleRoutes } from "@pkg/module/routes";

const server = BootstrapServer([...ModuleRoutes]);

server.listen({ port: 8081 }, (err, addr) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
})