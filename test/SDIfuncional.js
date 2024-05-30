// npm install selenium-webdriver
// npm install --save-dev start-server-and-test
//"e2e-test": "start-server-and-test http://localhost:3000/ht test2"

const { Builder, Browser, By,Key,  until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');

(async () => {

   // Configuração do ambiente do WebDriver e opções do navegador
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

    // Criação da instância do WebDriver
  let driver = await builder.build();

  try {

    // Navegação para a página HTML
    await driver.get('https://aeolian-momentous-cellar.glitch.me/SDI');

    // Wait for 5 secs to let the dynamic content to load
    await driver.sleep(15000);

    // Esperar o site carregar completamente

    //await driver.wait(until.elementLocated(By.id('valorBase')), 10000);
    //await driver.wait(until.elementIsVisible(driver.findElement(By.id('valorBase'))), 10000);
    //await driver.wait(until.elementLocated(By.id('valorAltura')), 10000);
    //await driver.wait(until.elementIsVisible(driver.findElement(By.id('valorAltura'))), 10000);

    //Grupo SDI:
    await driver.wait(until.elementLocated(By.id('nome')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('nome'))), 10000);
    await driver.wait(until.elementLocated(By.id('Juros')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('Juros'))), 10000);
    await driver.wait(until.elementLocated(By.id('Aporte')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('Aporte'))), 10000);
    await driver.wait(until.elementLocated(By.id('tempo')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('tempo'))), 10000);

    await driver.takeScreenshot().then((image, err) => {
        require('fs').writeFile('./fotos/SDI/inicio-SDI.png', image, 'base64', function (err) {
          if (err == null){
              console.log('Gravou Foto');
          }else{
              console.log('Erro ->' + err);
          }

        });
      });

    //await driver.findElement(By.name('valorBase')).sendKeys(4, Key.RETURN);
    //await driver.findElement(By.name('valorAltura')).sendKeys(4, Key.RETURN);
    await driver.findElement(By.id('nome')).sendKeys('eric', Key.RETURN)
    await driver.findElement(By.id('Juros')).sendKeys(4, Key.RETURN)
    await driver.findElement(By.id('Aporte')).sendKeys(500, Key.RETURN)
    await driver.findElement(By.id('tempo')).sendKeys(10, Key.RETURN)

   // Captura de tela final
    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFile('./fotos/SDI/valorDigitado-SDI.png', image, 'base64', function (err) {
        if (err == null){
            console.log('Gravou Foto');
        }else{
            console.log('Erro ->' + err);
        }
      });
    });


    // Verificação dos botões
    const calculaButton = await driver.findElement(By.name('calcular'));
    // Verifica se os botões estão visíveis
    if ( (await calculaButton.isDisplayed()) ) {
      console.log('Passou: Botões de impostos estão visíveis');
    } else {
      console.log('Falhou: Botões de impostos não estão visíveis');
    }

   // valorAltura = await driver.findElement(By.id('valorAltura'));
   // await valorAltura.sendKeys('10');

   // valorBase = await driver.findElement(By.id('valorBase'));
   // await valorBase.sendKeys('4');

    // Clique no botão
    await calculaButton.click();

    // Captura de tela final
    await driver.takeScreenshot().then((image, err) => {
      require('fs').writeFile('./fotos/SDI/fim-SDI.png', image, 'base64', function (err) {
        if (err == null){
            console.log('Gravou Foto');
        }else{
            console.log('Erro ->' + err);
        }

      });
    });
    // Encerramento do WebDriver

  } catch (error) {
    console.error('Teste funcional falhou:', error);
  } finally {
    await driver.quit();
  }

})();

