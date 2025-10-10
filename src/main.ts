import './assets/main.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://v3.nitro.build/" target="_blank">
      <img src="/nitro.svg" class="logo nitro" alt="Nitro logo" />
    </a>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <h1>Vite + Nitro</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Checkout <a href="/api/hello">/api/hello</a> to see the Nitro API in action.
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
