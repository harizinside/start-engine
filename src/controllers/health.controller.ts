import { Context } from "@oak/oak";

export const health = (ctx: Context) => {
  ctx.response.body = {
    status: "ok",
    message: "Oak API running",
  };
};