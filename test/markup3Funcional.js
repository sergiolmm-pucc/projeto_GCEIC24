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
    await driver.get("https://aeolian-momentous-cellar.glitch.me/dev-ops-3-mark-up");

    await driver.sleep(15000);

    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/dev-ops-3-mark-up/inicio-markup3.png",
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




    await driver.findElement(By.name("cp")).sendKeys("60");
    await driver.findElement(By.name("df")).sendKeys("12");
    await driver.findElement(By.name("dv")).sendKeys("8");
    await driver.findElement(By.name("ml")).sendKeys("20");

    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/dev-ops-3-mark-up/valoresDigitados-markup3.png",
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


    await driver.findElement(By.id("btn")).click();

    await driver.wait(until.elementIsVisible(driver.findElement(By.id("resposta"))), 10000);
  
    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/dev-ops-3-mark-up/fim-markup3.png",
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
