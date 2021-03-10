import "jest-allure/dist/setup";
import { chromium, Browser, Page, BrowserContext } from "playwright";
import { setupJestScreenshot } from 'jest-screenshot';
const dotenv = require("dotenv");

dotenv.config();

setupJestScreenshot({
    colorThreshold: 0,
});

let browserType = chromium;
let browser: Browser;
let context: BrowserContext;
let page: Page;

const viewportWidth: number = 1920;
const viewportHeight: number = 1080;

beforeAll(async () => {
    browser = await browserType.launch({ headless: true });
    global.browser = browser;
});

afterAll(() => {
    global.browser.close();
});

beforeEach(async () => {
    global.context = context
    context = await browser.newContext();
    await context.addCookies([{ name: "endpoint", value: "some-important-value", path: "/", domain: process.env.DOMAIN!}]);
    const page = await context.newPage();
    global.page = page;
    await page.goto(process.env.SERVER!, { waitUntil: 'networkidle' });
    await page.setViewportSize({width:viewportWidth, height:viewportHeight});
});


afterEach(() => {
    context.close()
})

jest.setTimeout(20000);
