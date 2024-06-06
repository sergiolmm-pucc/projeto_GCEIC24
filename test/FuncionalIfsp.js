// FuncionalIfsp.js
const { Builder, By, Key, until } = require('selenium-webdriver');
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
        await driver.get('http://localhost:3000/ifsp');

        // Preenchimento do formulário
        await driver.findElement(By.id('price')).sendKeys('100');
        await driver.findElement(By.id('tax')).sendKeys('10');

        // Clique no botão de calcular
        await driver.findElement(By.css('.SubmitInput')).click();

        // Espera a resposta e verifica o resultado
        await driver.wait(until.alertIsPresent(), 10000);
        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();
        expect(alertText).toContain('O valor do imposto é:');
        expect(alertText).toContain('O valor final do produto é:');

    } catch (error) {
        console.error('Teste funcional falhou:', error);
    } finally {
        await driver.quit();
    }
})();
