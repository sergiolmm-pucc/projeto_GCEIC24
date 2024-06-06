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
    await driver.get("https://aeolian-momentous-cellar.glitch.me/contForca");
    await driver.sleep(5000); // Espera a página carregar completamente

    // Espera até que o formulário esteja carregado
    await driver.wait(until.elementLocated(By.id("weightForm")), 20000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("weightForm"))), 20000);

    // Faz uma captura de tela inicial
    await driver.takeScreenshot().then((image) => {
      require("fs").writeFile(
        "./fotos/contForca/inicio-contForca.png",
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

    // Insere dados nos campos
    await driver.findElement(By.id("currentWeight")).sendKeys("65");
    await driver.findElement(By.id("exercise")).sendKeys("1.07");
    await driver.findElement(By.id("difficulty")).sendKeys("1.05");

    // Realiza uma segunda captura de tela com campos preenchidos
    await driver.takeScreenshot().then((image) => {
      require("fs").writeFile(
        "./fotos/ContForca/componentes-preenchidos-contForca.png",
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

    // Submete o formulário
    await driver.findElement(By.css("button[type='submit']")).click();

    // Espera até que o resultado seja visível
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("result"))), 10000);

    // Realiza uma terceira captura de tela com o resultado
    await driver.takeScreenshot().then((image) => {
      require("fs").writeFile(
        "./fotos/contForca/fim-contForca.png",
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
