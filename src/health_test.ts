import { assertEquals } from "https://deno.land/std/assert/assert_equals.ts";

Deno.test("health check", () => {
  const result = "ok";
  assertEquals(result, "ok");
});