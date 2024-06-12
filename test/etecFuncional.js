const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
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
    await driver.get("https://aeolian-momentous-cellar.glitch.me/etec");
    await driver.sleep(15000);
    await driver.wait(until.elementLocated(By.id("inputValue")), 10000);
    await driver.wait(
      until.elementIsVisible(driver.findElement(By.id("inputValue"))),
      10000
    );

    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/etec/inicio-etec.png",
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

    await driver.findElement(By.id("inputValue")).sendKeys(3000, Key.RETURN);

    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/etec/valorDigitado-etec.png",
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

    const calculaButton = await driver.findElement(By.id("calcular"));
    if (await calculaButton.isDisplayed()) {
      console.log("Passou: Botões dos encargos estão visíveis");
    } else {
      console.log("Falhou: Botões dos encargos não estão visíveis");
    }

    await calculaButton.click();

    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/etec/fim-etec.png",
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
