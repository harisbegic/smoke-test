const { Browser } = require('selenium-webdriver');
const { withTagName } = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { titleContains } = require('selenium-webdriver/lib/until');
const expect = require('chai').expect;

(async function smokeTest() {
  try {
    // Chrome Builder
    let driver = await new Builder().forBrowser('chrome').build();

    // GET functions
    getElementById = async (id) => await driver.findElement(By.id(id));
    getElementByClass = async (className) => await driver.findElement(By.className(className));
    getElementByXpath = async (xpath) => await driver.findElement(By.xpath(xpath));
    
    // Initialize website
    await driver.get('https://www.navigator.ba');

    // Search bar testing whether the results match typed word
    let search = await getElementById('ember564');

    await search.click();
    await search.sendKeys('Pekara')
    await driver.wait(until.elementLocated(By.className('tt-suggestion'), 10000));

    let choicesElement = await getElementByClass('tt-suggestions');
    let choices = await choicesElement.findElements(By.className('tt-suggestion'));

    for (const choice of choices) {
      expect(await choice.getText()).to.include('Pekara');
    }

    // slow it down :)
    await driver.sleep(2000);

    // zooming functionality
    let zoomIn = await getElementByClass('leaflet-control-zoom-in');
    await zoomIn.click();

    let zoomOut = await getElementByClass('leaflet-control-zoom-out');
    await zoomOut.click();

    // entering into one of the categories and testing whether the object address matches address on map
    let enterCategory = await getElementById('ember713');
    await enterCategory.click();

    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.className('menu_content_list list-items'), 10000));

    let objectsElement = await getElementByClass('ember-view left-menu-pane list-container mCustomScrollbar _mCS_3');
    let enterObject = await objectsElement.findElement(By.className('menu_content_list list-items'));
    
    await enterObject.click();
    await driver.sleep(3000);
    await driver.wait(until.elementLocated(By.className('show-on-map'), 10000));

    let address = await getElementByXpath('//*[@id="mCSB_4"]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/span');
    let mapAddress = await getElementByXpath('//*[@id="ember628"]/div[2]/div[2]/div[4]/div/div[1]/div/div/div[1]/div[2]')

    expect(await address.getText()).to.be.equal(await mapAddress.getAttribute('title')); 

    // enter feedback page
    let clickFeedback = await getElementById('ember587');
    await clickFeedback.click();

    await driver.sleep(2000);

    // enter create a place page
    let clickCreatePlace = await getElementById('ember572');
    await clickCreatePlace.click();

    // test translating to English
    let translateToEnglish = await getElementByClass('btn-en');
    await translateToEnglish.click();

    let englishCheck = await getElementById('ember586');
    expect(await englishCheck.getAttribute('placeholder')).to.include('Search street or place');

    // test translating back to Bosnian
    let translateToBosnian = await getElementByClass('btn-bs');
    await translateToBosnian.click();

    let bosnianCheck = await getElementById('ember586');
    expect(await bosnianCheck.getAttribute('placeholder')).to.include('Traži ulicu ili objekat');

    await driver.sleep(3000);

    await driver.quit();

  } catch (error) {
    console.log(error)
  }
})();