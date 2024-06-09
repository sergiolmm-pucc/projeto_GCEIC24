// npm install selenium-webdriver
// npm install --save-dev start-server-and-test
// "e2e-test": "start-server-and-test http://localhost:3000/ifsp test"

const { Builder, By, Key, until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const fs = require('fs');

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
    await driver.get('http://localhost:3000/ifsp');


    await driver.wait(until.elementLocated(By.id('price')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('price'))), 10000);
    await driver.wait(until.elementLocated(By.id('tax')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('tax'))), 10000);


    await driver.takeScreenshot().then((image) => {
      fs.writeFile('./screenshots/inicio-ifsp.png', image, 'base64', function (err) {
        if (err) {
          console.log('Erro ao gravar a captura de tela inicial:', err);
        } else {
          console.log('Captura de tela inicial gravada.');
        }
      });
    });


    await driver.findElement(By.id('price')).sendKeys('100', Key.RETURN);
    await driver.findElement(By.id('tax')).sendKeys('20', Key.RETURN);


    await driver.takeScreenshot().then((image) => {
      fs.writeFile('./screenshots/valores-digitados-ifsp.png', image, 'base64', function (err) {
        if (err) {
          console.log('Erro ao gravar a captura de tela com valores digitados:', err);
        } else {
          console.log('Captura de tela com valores digitados gravada.');
        }
      });
    });


    const calcularButton = await driver.findElement(By.className('SubmitInput'));
    await calcularButton.click();


    await driver.wait(until.alertIsPresent(), 5000);
    const alert = await driver.switchTo().alert();
    const alertText = await alert.getText();
    console.log('Alert Text:', alertText);
    await alert.accept();


    const expectedAlertText = 'Valor do Produto: R$ 100.00\nAlíquota: 20.00%\nImposto: R$ 20.00\nPreço Final: R$ 120.00';
    if (alertText === expectedAlertText) {
      console.log('Passou: O texto do alerta está correto.');
    } else {
      console.log('Falhou: O texto do alerta está incorreto.');
    }


    await driver.takeScreenshot().then((image) => {
      fs.writeFile('./screenshots/fim-ifsp.png', image, 'base64', function (err) {
        if (err) {
          console.log('Erro ao gravar a captura de tela final:', err);
        } else {
          console.log('Captura de tela final gravada.');
        }
      });
    });

  } catch (error) {
    console.error('Teste funcional falhou:', error);
  } finally {
    await driver.quit();
  }
})();
