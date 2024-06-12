// npm install selenium-webdriver
// npm install --save-dev start-server-and-test
// "e2e-test": "start-server-and-test http://localhost:3000/ifsp test"

const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { Options } = require("selenium-webdriver/chrome");


(async () => {
  const screen = {
    width: 1024,
    height: 720
  };

  const chromeOptions = new Options();
  chromeOptions.addArguments('--headless');
  chromeOptions.addArguments('--no-sandbox');
  chromeOptions.windowSize(screen);

  const builder = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions);

  let driver = await builder.build();

  try {
    // Navegação para a página HTML
    await driver.get("https://aeolian-momentous-cellar.glitch.me/ifsp");

    
    await driver.sleep(15000);

    await driver.wait(until.elementLocated(By.id('price')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('price'))), 10000);
    await driver.wait(until.elementLocated(By.id('tax')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('tax'))), 10000);


    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/ifsp/inicio-ifsp.png",
        image,
        "base64",
        function(err) {
          if (err == null) {
            console.log("Gravou Foto Inicial");
          } else {
            console.log("Erro ->" + err);
          }
        }
      );
    });


    await driver.findElement(By.id('price')).sendKeys('33');
    await driver.findElement(By.id('tax')).sendKeys('10');


    await driver.takeScreenshot().then((image, err) => {
      require("fs").writeFile(
        "./fotos/ifsp/valorDigitado-ifsp.png",
        image,
        "base64",
        function(err) {
          if (err == null) {
            console.log("Gravou Foto com valores");
          } else {
            console.log("Erro ->" + err);
          }
        }
      );
    });


    const calcularButton = await driver.findElement(By.className('SubmitInput'));
    await calcularButton.click();

// Espera pelo alerta
try {
  await driver.wait(until.alertIsPresent(), 5000);
  const alert = await driver.switchTo().alert();
  console.log("PopUp com resultados aparece.");
  console.log("Texto do alerta:", await alert.getText());

  // Aceita o alerta
  await alert.accept();
  console.log("Alerta aceito.");

} catch (e) {
  // Se não houver alerta, exibir mensagem no console
  console.log("Erro de não aparecer alerta.");
}
    // Encerramento do WebDriver
  } catch (error) {
    console.error("Teste funcional falhou:", error);
  } finally {
    await driver.quit();
  }
})();
