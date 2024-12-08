import Fastify from "fastify";
import { Routes } from "../routing";

export function fn_bootstrapFastify(routes: Routes) {
  const api = Fastify({
    logger: true,
  });

  for(const route of routes){
    switch(route.method){
      case "GET":
        api.get(route.path,route.handler)
        break;
      case "POST":
        api.post(route.path,route.handler)
        break;
      case "PUT":
        api.put(route.path,route.handler)
        break;
      case "DELETE":
        api.delete(route.path,route.handler)
        break;
      case "PATCH":
        api.patch(route.path,route.handler)
        break;
      default:
        console.error('BOOm')
    }
  }

  return api
}
