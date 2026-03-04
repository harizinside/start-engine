import app from "./app.ts";

const PORT = Number(Deno.env.get("PORT")) || 8000;

console.log(`🚀 Server running on http://localhost:${PORT}`);

await app.listen({ port: PORT });