import { Routes, RouteBuilder } from "../../../server/routing";
import { ModuleRepository } from "./__internal/module.repository";

const r = RouteBuilder();

const routes: Routes = [
  r.get("/modules", async (req, res) => {
    const r = req.diScope.resolve<ModuleRepository>('repository');
    const id = r.createModule({ title: `Test Module` });
    const m = r.getModuleById(id);

    res.send({
      _id: id,
      ...m
    })
  }),
];


export {
  routes as ModuleRoutes
}
