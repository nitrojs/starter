import { defineHandler, html } from "nitro/deps/h3";

// Learn more: https://nitro.build/guide/routing
export default defineHandler((event) => {
  return html(`
    <meta charset="utf-8">
    <h1>This is your brand new Nitro project 🚀 </h1>
    <p>Get started by editing the <code>routes/index.ts</code> file.</p>
    <p>Learn more from 📖 <a href="https://nitro.build/guide" target="_blank">Nitro Documentation</a></p>
  `);
});
