import { Routes, RouteBuilder } from "@pkg/server/routing";

const r = RouteBuilder();

const routes: Routes = [
  r.get("/modules", async (req, res) => res.send("GET Modules")),
];


export {
  routes as ModuleRoutes
}
