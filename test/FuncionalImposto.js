const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const fs = require('fs');

(async () => {
    const screen = {
        width: 1024,
        height: 720
    };

    const options = new chrome.Options();
    options.headless().windowSize(screen);

    const driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('http://localhost:3000/ifsp');

        const priceInput = await driver.findElement(By.id('price'));
        const taxInput = await driver.findElement(By.id('tax'));
        const submitButton = await driver.findElement(By.css('input[type="submit"]'));

        await priceInput.sendKeys('100');
        await taxInput.sendKeys('10');

        await driver.takeScreenshot().then((image) => {
            fs.writeFileSync(path.join(__dirname, 'screenshots', 'before_submit.png'), image, 'base64');
        });

        await submitButton.click();

        await driver.wait(until.alertIsPresent(), 10000);
        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();
        await alert.accept();

        await driver.takeScreenshot().then((image) => {
            fs.writeFileSync(path.join(__dirname, 'screenshots', 'after_submit.png'), image, 'base64');
        });

        if (alertText.includes('O valor do imposto é: R$ 10.00.\nO valor final do produto é: R$ 110.00')) {
            console.log('Teste funcional passou');
        } else {
            console.log('Teste funcional falhou');
        }

    } catch (err) {
        console.error('Erro durante o teste funcional:', err);
    } finally {
        await driver.quit();
    }
})();
