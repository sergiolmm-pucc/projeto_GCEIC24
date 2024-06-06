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
		// Navegar até a página de cálculo de peso nos planetas
		await driver.get("http://localhost:3000/planetweight");

		// Espera para o carregamento completo da página
		await driver.sleep(5000);

		// Verificar e interagir com o campo de entrada de peso
		await driver.wait(until.elementLocated(By.id("weight")), 10000);
		await driver.wait(
			until.elementIsVisible(driver.findElement(By.id("weight"))),
			10000
		);

		// Captura de tela inicial
		await driver.takeScreenshot().then((image, err) => {
			require("fs").writeFile(
				"./fotos/planetweight/inicio-planetweight.png",
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

		// Preencher o campo de peso e selecionar um planeta
		await driver.findElement(By.id("weight")).sendKeys(70);
		await driver
			.findElement(By.css("button[onclick=\"calculateWeight('mars')\"]"))
			.click();

		// Captura de tela após preencher os campos
		await driver.takeScreenshot().then((image, err) => {
			require("fs").writeFile(
				"./fotos/planetweight/campos-preenchidos-planetweight.png",
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

		// Esperar e verificar o resultado
		await driver.wait(
			until.elementIsVisible(driver.findElement(By.id("result"))),
			10000
		);

		// Captura de tela final com o resultado
		await driver.takeScreenshot().then((image, err) => {
			require("fs").writeFile(
				"./fotos/planetweight/fim-planetweight.png",
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
