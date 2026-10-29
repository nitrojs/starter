import { defineHandler } from "nitro";

export default defineHandler(() => {
  return { message: "Hello from Nitro!" };
});
