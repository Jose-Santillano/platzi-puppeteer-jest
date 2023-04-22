const puppeteer  = require('puppeteer');

describe('Mi primer test en puppeteer', () => {

    it('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: true,
            slowMo: 0,
            devtools: false,
            defaultViewport: null,
        });

        const page = await browser.newPage();

        await page.goto('https://www.kali.org/get-kali/#kali-installer-images');

        await page.waitForSelector('img');

        //Recargar la página.
        await page.reload();

        await page.waitForSelector('img');

        //Navegar a otro sitio.
        await page.goto('https://www.google.com/?hl=es');

        await page.waitForSelector('#hplogo');

        //Navegar hacia atras.
        await page.goBack();

        await page.waitForSelector('img');

        //Navegar hacia adelante.
        await page.goForward();

        //Abrir otra pagina.
        const page2 = await browser.newPage();
        
        await page2.goto("https://www.platzi.com");

        await browser.close();
    }, 30000);

});