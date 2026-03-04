import { Application } from "@oak/oak";
import router from "./routes/index.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
