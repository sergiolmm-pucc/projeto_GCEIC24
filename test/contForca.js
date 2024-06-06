const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = require('s e l e n i u m - webdriver/chrome');

(async () => {
  // Configuração do ambiente do WebDriver e opções do navegador
  const screen = {
    width: 1024,
    height: 720
  };

  const chromeOptions = new Options();
  chromeOptions.addArguments('--headless');
  chromeOptions.addArguments('--no-sandbox');
  chromeOptions.addArguments(`--window-size=${screen.width},${screen.height}`);

  const builder = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions);

  // Criação da instância do WebDriver
  let driver = await builder.build();

  try {
    // Navegação para a página HTML
    await driver.get('https://aeolian-momentous-cellar.glitch.me/contForca');

    // Espera de 5 segundos para carregamento dinâmico de conteúdo
    await driver.sleep(5000);  // Considerar usar waits explícitos conforme a necessidade

    // Esperar o formulário de cálculo de força carregar
    await driver.wait(until.elementLocated(By.id('weightForm')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('weightForm'))), 10000);

    // Inserção dos dados nos campos do formulário
    await driver.findElement(By.id('currentWeight')).sendKeys('65');
    await driver.findElement(By.id('exercise')).sendKeys('1.07');
    await driver.findElement(By.id('difficulty')).sendKeys('1.05');

    // Captura de tela antes da submissão
    await driver.takeScreenshot().then((image) => {
      require('fs').writeFile('./fotos/contForca/inicio-contForca.png', image, 'base64', function (err) {
        if (err) {
          console.log('Erro ->' + err);
        } else {
          console.log('Gravou Foto antes da submissão');
        }
      });
    });

    // Clique no botão de submissão do formulário
    await driver.findElement(By.css('button[type="submit"]')).click();

    // Espera até que o resultado seja visível
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('result'))), 10000);

    // Captura de tela com os resultados
    await driver.takeScreenshot().then((image) => {
      require('fs').writeFile('./fotos/contForca/componentes-preenchidos-contForca.png', image, 'base64', function (err) {
        if (err) {
          console.log('Erro ->' + err);
        } else {
          console.log('Gravou Foto após submissão');
        }
      });
    });

    // Captura de tela final após todas as interações
    await driver.takeScreenshot().then((image) => {
      require('fs').writeFile('./fotos/contForca/fim-contForca.png', image, 'base64', function (err) {
        if (err) {
          console.log('Erro ->' + err);
        } else {
          console.log('Gravou Foto final');
        }
      });
    });

  } catch (error) {
    console.error('Teste funcional falhou:', error);
  } finally {
    await driver.quit();
  }
})();
