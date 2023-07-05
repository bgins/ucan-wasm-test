import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import init, { decode } from 'ucan-wasm'
import * as rhizome from 'rhizome-wasm'



async function test() {
  await init()
  
  const ucan = await decode("eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCIsInVjdiI6IjAuOS4wLWNhbmFyeSJ9.eyJhdHQiOlt7ImNhbiI6ImVtYWlsL3NlbmQiLCJuYiI6bnVsbCwid2l0aCI6Im1haWx0bzphbGljZUBlbWFpbC5jb20ifV0sImF1ZCI6ImRpZDprZXk6ejZNa3RhZlpUUkVqSmt2VjVtZkp4Y0xwTkJvVlB3RExoVHVNZzluZzdkWTR6TUFMIiwiZXhwIjo5MjQ2MjExMjAwLCJmY3QiOlt7ImNoYWxsZW5nZSI6ImFiY2RlZiJ9XSwiaXNzIjoiZGlkOmtleTp6Nk1rZmZEWkNrQ1RXcmVnODg2OGZHMUZHRm9nY0pqNVg2UFk5M3BQY1dEbjlib2IiLCJwcmYiOlsiYmFma3I0aWdmM3N6N2tqNWRoeHJkanVmeHZhdmtraW5wazJpNzNpNXBzdXA2Y3h1dmR5bTJqZWN3MmUiXX0.nTJl6kKrEKYzp6D4tTc-xYgNxH4urv8tfGU7so6ZIf5s86yMnb6bLpSPMeRchbOafVIy9vil9vjjYACzY1GvBg")
  console.log('ucan', ucan)

}

test()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
