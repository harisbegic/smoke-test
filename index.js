const {Builder, By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;

(async function firstScript() {
  try {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.navigator.ba');

    let search = await driver.findElement(By.id('ember564'));

    await search.click();
    await search.sendKeys('Pekara');

    let choices = await driver.findElements(By.className('tt-sugestion'));
    for (const choice of choices) {
        expect(choice.getText()).toContain('Pekara');
    }

    let zoomIn = await driver.findElement(By.className('leaflet-control-zoom-in'));
    await zoomIn.click();

    let zoomOut = await driver.findElement(By.className('leaflet-control-zoom-out'));
    await zoomOut.click();

    let enterCategory = await driver.findElement(By.id('ember713'));
    await enterCategory.click();

    let enterObject = await driver.findElement(By.id('ember1459'));
    await enterObject.click();

    let showOnMap = await driver.findElement(By.className('show-on-map'));
    await showOnMap.click();

    let clickFeedback = await driver.findElement(By.id('ember587'));
    await clickFeedback.click();

    let clickCreatePlace = await driver.findElement(By.id('ember587'));
    await clickCreatePlace.click();

    let translateToBosnian = await driver.findElement(By.className('btn-bs'));
    await translateToBosnian.click();

    let translateToEnglish = await driver.findElement(By.className('btn-bs'));
    await translateToEnglish.click();

    await driver.quit();
        
  } catch (error) {
    console.log(error)
  }
})();