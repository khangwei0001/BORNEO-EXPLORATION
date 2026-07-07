import puppeteer from 'puppeteer-core'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const url = process.argv[2] || 'http://localhost:5173'
const label = process.argv[3] || 'mobile'

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
})
const page = await browser.newPage()
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
await page.evaluate(async () => {
  const h = document.body.scrollHeight
  for (let y = 0; y <= h; y += 300) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)) }
  window.scrollTo(0, 0)
})
await new Promise((r) => setTimeout(r, 1500))
const out = join(__dirname, 'temporary screenshots', `mobile-${label}.png`)
await page.screenshot({ path: out, fullPage: true })
await browser.close()
console.log(`Saved: ${out}`)
