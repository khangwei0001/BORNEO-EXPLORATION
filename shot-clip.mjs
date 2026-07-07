import puppeteer from 'puppeteer-core'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const url = process.argv[2] || 'http://localhost:5173'
const scrollY = parseInt(process.argv[3] || '0')
const label = process.argv[4] || 'clip'
const width = parseInt(process.argv[5] || '1440')

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
})
const page = await browser.newPage()
await page.setViewport({ width, height: width < 600 ? 844 : 900, deviceScaleFactor: 1, isMobile: width < 600 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
await page.evaluate((y) => window.scrollTo(0, y), scrollY)
await new Promise((r) => setTimeout(r, 1400))
const out = join(__dirname, 'temporary screenshots', `clip-${label}.png`)
await page.screenshot({ path: out })
await browser.close()
console.log(`Saved: ${out}`)
