import { defineHandler, html } from "nitro/deps/h3"

export default defineHandler((event) => {
  return html`
      <meta charset="utf-8">
      <h1>This is your brand new Nitro project 🚀 </h1>
      <p>Get started by editing the <code>server/routes/index.ts</code> file.</p>
      <p>Learn more from 📖 <a href="https://v3.nitro.build/guide" target="_blank">Nitro Documentation</a></p>
    `;
});
