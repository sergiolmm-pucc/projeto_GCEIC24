const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');

(async () => {
  let driver;

  beforeAll(async () => {
    const screen = {
      width: 1024,
      height: 720
    };

    const chromeOptions = new Options();
    chromeOptions.addArguments('--headless');
    chromeOptions.addArguments('--no-sandbox');
    chromeOptions.windowSize(screen);

    driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions)
      .build();

    await driver.get('http://localhost:4000');
  }, 20000); // Aumenta o tempo limite para 20 segundos para garantir que o servidor esteja pronto

  afterAll(async () => {
    await driver.quit();
  });

  it('deve calcular corretamente o imposto e exibir o resultado', async () => {
    await driver.findElement(By.id('price')).sendKeys('100', Key.RETURN);
    await driver.findElement(By.id('tax')).sendKeys('10', Key.RETURN);
    await driver.findElement(By.className('SubmitInput')).click();

    await driver.wait(until.elementLocated(By.id('resultado')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('resultado'))), 10000);

    const resultadoDiv = await driver.findElement(By.id('resultado')).getText();
    expect(resultadoDiv).toContain('O valor do imposto é: R$');
    expect(resultadoDiv).toContain('O valor final do serviço é: R$');
  });

  it('deve mostrar uma mensagem de erro para entradas inválidas', async () => {
    await driver.findElement(By.id('price')).clear();
    await driver.findElement(By.id('tax')).clear();
    await driver.findElement(By.id('price')).sendKeys('abc', Key.RETURN);
    await driver.findElement(By.id('tax')).sendKeys('def', Key.RETURN);
    await driver.findElement(By.className('SubmitInput')).click();

    const alertText = await driver.switchTo().alert().getText();
    await driver.switchTo().alert().accept();
    expect(alertText).toBe('Por favor, insira valores válidos para o valor do serviço e a alíquota.');
  });
});
