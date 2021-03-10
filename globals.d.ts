import { Page, BrowserContext, Browser } from "playwright";

declare global {
  var browser: Browser;
  var page: Page;
  var context: BrowserContext;
}