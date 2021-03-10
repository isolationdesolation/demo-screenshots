import fs from "fs";
var ls = require('ls');
import * as helpers from "./helpers";

describe("Тест для элемента страницы", () => {

  it("Header 1", async () => {
    reporter.addLabel("testType", "screenshotDiff")
    const header = await page.$("xpath=//header");
    const img = await header!.screenshot();
    const testName = 'header-1-'
    try {
      expect(img).toMatchImageSnapshot({});
    }
    catch (e) {
      await helpers.checkExistsWithTimeout(ls(`jest-screenshot-report/reports/*${testName}*/diff.png`)[0].full, 5000)
      reporter.addAttachment('diff', fs.readFileSync(ls(`jest-screenshot-report/reports/*${testName}*/diff.png`)[0].full), "image/png")
      reporter.addAttachment('actual', img, "image/png")
      reporter.addAttachment('expected', fs.readFileSync(ls(`jest-screenshot-report/reports/*${testName}*/snapshot.png`)[0].full), "image/png")
      throw e
    }
  });
});

