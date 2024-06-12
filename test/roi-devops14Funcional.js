const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { Options } = require("selenium-webdriver/chrome");
const fs = require("fs");
const path = require("path");

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
    // Criação dos diretórios se não existirem
    const screenshotDir = path.join(__dirname, '..', 'fotos', 'roi-devops14');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    // Navegação para a página HTML
    await driver.get("https://aeolian-momentous-cellar.glitch.me/roi");

    // Esperar o site carregar completamente
    await driver.sleep(20000); // Espera de 20 segundos

    // Verificar se os elementos existem e estão visíveis
    await driver.wait(until.elementLocated(By.id('investimento')), 20000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('investimento'))), 20000);
    await driver.wait(until.elementLocated(By.id('retorno')), 20000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('retorno'))), 20000);

    // Captura de tela inicial
    await driver.takeScreenshot().then((image, err) => {
      const filePath = path.join(screenshotDir, 'inicio-roi-devops14.png');
      fs.writeFileSync(filePath, image, "base64", function(err) {
          if (err == null) {
            console.log("Gravou Foto: " + filePath);
          } else {
            console.log("Erro ->" + err);
          }
        }
      );
      console.log("Imagem capturada: inicio-roi-devops14.png");
    });

    // Inserir valores nos campos
    await driver.findElement(By.id('investimento')).sendKeys('10000');
    await driver.findElement(By.id('retorno')).sendKeys('15000');

    // Captura de tela após inserir valores
    await driver.takeScreenshot().then((image, err) => {
      const filePath = path.join(screenshotDir, 'valorDigitado-roi-devops14.png');
      fs.writeFileSync(filePath, image, "base64");
      console.log("Imagem capturada: valorDigitado-roi-devops14.png");
    });

    // Clique no botão
    const calcularButton = await driver.findElement(By.css('input[type="submit"]'));
    await calcularButton.click();

    // Verificar se o resultado é exibido
    await driver.wait(until.elementLocated(By.id('label-roi')), 20000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('label-roi'))), 20000);

    // Captura de tela final
    await driver.takeScreenshot().then((image, err) => {
      const filePath = path.join(screenshotDir, 'fim-roi-devops14.png');
      fs.writeFileSync(filePath, image, "base64");
      console.log("Imagem capturada: fim-roi-devops14.png");
    });

  } catch (error) {
    console.error("Teste funcional falhou:", error);
  } finally {
    await driver.quit();
  }
})();
