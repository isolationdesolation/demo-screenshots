import fs from "fs";
var ls = require('ls');
import * as helpers from "./helpers";


describe("Тест для страницы с ожиданием загрузки рубрикатора", () => {

  it("Rubricator", async () => {
    reporter.addLabel("testType", "screenshotDiff");
    await page.click("//sd-categories-menu//button");
    await page.waitForSelector("//cx-spinner", {state: "detached"});
    await page.waitForSelector("//sd-submenu-categories-menu");
    const img = await page.screenshot();
    const testName = 'rubricator-';
    try {
      expect(img).toMatchImageSnapshot({});
    }
    catch (e) {
      await helpers.checkExistsWithTimeout(ls(`jest-screenshot-report/reports/*${testName}*/diff.png`)[0].full, 5000);
      reporter.addAttachment('diff', fs.readFileSync(ls(`jest-screenshot-report/reports/*${testName}*/diff.png`)[0].full), "image/png");
      reporter.addAttachment('actual', img, "image/png");
      reporter.addAttachment('expected', fs.readFileSync(ls(`jest-screenshot-report/reports/*${testName}*/snapshot.png`)[0].full), "image/png");
      throw e;
    }
  });

});

