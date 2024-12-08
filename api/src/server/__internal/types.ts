import { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify";

export type t_httpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD";
export type t_routePath = string;

export type t_handlerFunc<
  TRequest extends RouteGenericInterface = RouteGenericInterface,
  TReply = unknown,
> = (
  request: FastifyRequest<TRequest>,
  reply: FastifyReply,
) => Promise<TReply> | TReply;
