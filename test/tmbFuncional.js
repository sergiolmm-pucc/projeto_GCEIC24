// npm install selenium-webdriver
// npm install --save-dev start-server-and-test
//"e2e-test": "start-server-and-test http://localhost:3000/ht test2"
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
        await driver.get("https://aeolian-momentous-cellar.glitch.me/tmb");

        await driver.sleep(15000);

        await driver.wait(until.elementLocated(By.id("altura")), 10000);
        await driver.wait(until.elementIsVisible(driver.findElement(By.id("altura"))), 10000);

        await driver.takeScreenshot().then((image, err) => {
            require("fs").writeFile(
                "./fotos/tmb/inicio-tmb.png",
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

        await driver.findElement(By.id("atividade")).sendKeys("sedentario");

        await driver.findElement(By.id("altura")).sendKeys(180);
        await driver.findElement(By.id("peso")).sendKeys(100);
        await driver.findElement(By.id("idade")).sendKeys(20);

        await driver.findElement(By.id("atividade")).click();

        await driver.findElement(By.id("homem")).click()


        await driver.takeScreenshot().then((image, err) => {
            require("fs").writeFile(
                "./fotos/tmb/campos-preenchidos-tmb.png",
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


        await driver.findElement(By.tagName("button")).click();

        await driver.wait(until.elementIsVisible(driver.findElement(By.id("resultado"))), 10000);

        await driver.takeScreenshot().then((image, err) => {
            require("fs").writeFile(
                "./fotos/tmb/fim-tmb.png",
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
