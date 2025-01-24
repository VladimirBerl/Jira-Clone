import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => c.json({ message: "Hello World" }));

app.get("/project/:id", (c) => {
  const { id } = c.req.param();
  return c.json({ project: id });
});

export const GET = handle(app);
