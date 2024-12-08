import path from "node:path/posix";
import { t_httpMethod, t_routePath, t_handlerFunc } from "./__internal/types";

type RouteDef = {
  method: t_httpMethod;
  path: t_routePath;
  handler: t_handlerFunc;
};

export type Routes = RouteDef[];

export function RouteBuilder(basePath?: t_routePath) {
  const get = (path: t_routePath, handler: t_handlerFunc): RouteDef => ({
    method: "GET",
    path,
    handler,
  });
  const post = (path: t_routePath, handler: t_handlerFunc): RouteDef => ({
    method: "POST",
    path,
    handler,
  });
  const put = (path: t_routePath, handler: t_handlerFunc): RouteDef => ({
    method: "PUT",
    path,
    handler,
  });
  const patch = (path: t_routePath, handler: t_handlerFunc): RouteDef => ({
    method: "PATCH",
    path,
    handler,
  });

  const del = (path: t_routePath, handler: t_handlerFunc): RouteDef => ({
    method: "DELETE",
    path,
    handler,
  });

  return {
    get,
    post,
    put,
    patch,
    delete: del,
  };
}
