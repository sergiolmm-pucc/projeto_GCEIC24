// npm install selenium-webdriver
// npm install --save-dev start-server-and-test
//"e2e-test": "start-server-and-test http://localhost:3000/ht test2"
const { Builder, By, until } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

(async () => {
  const screen = {
    width: 1024,
    height: 720,
  };

  const chromeOptions = new Options();
  chromeOptions.addArguments("--headless");
  chromeOptions.addArguments("--no-sandbox");
  chromeOptions.windowSize(screen);

  const builder = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions);

  let driver = await builder.build();

  try {
    await driver.get("https://aeolian-momentous-cellar.glitch.me/caloricExpenditure");

    await driver.sleep(15000);

    await driver.wait(until.elementLocated(By.name("gender")), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("gender"))), 10000);

    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/caloricExpenditure/inicio-caloricExpenditure.png",
        image,
        "base64",
        function(err) {
          if (err == null) {
            console.log("Gravou Foto");
          } else {
            console.log("Erro ->" + err);
          }
        }
      );
    });

  
    await driver.findElement(By.name("gender")).sendKeys("male");
    await driver.findElement(By.name("age")).sendKeys("30");
    await driver.findElement(By.name("weight")).sendKeys("70");


    await driver.findElement(By.id("termsCheckbox")).click();

  
    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/caloricExpenditure/campos-preenchidos-caloricExpenditure.png",
        image,
        "base64",
        function(err) {
          if (err == null) {
            console.log("Gravou Foto");
          } else {
            console.log("Erro ->" + err);
          }
        }
      );
    });


    await driver.findElement(By.className("btn")).click();

    await driver.wait(until.elementIsVisible(driver.findElement(By.id("result"))), 10000);
  
    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/caloricExpenditure/fim-caloricExpenditure.png",
        image,
        "base64",
        function(err) {
          if (err == null) {
            console.log("Gravou Foto");
          } else {
            console.log("Erro ->" + err);
          }
        }
      );
    });
  } catch (error) {
    console.error("Teste funcional falhou:", error);
  } finally {
    await driver.quit();
  }
})();
