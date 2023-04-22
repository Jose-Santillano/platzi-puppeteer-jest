const puppeteer  = require('puppeteer');

describe('Mi primer test en puppeteer', () => {

    it('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0,
            devtools: false,
            // defaultViewport: {
            //     width: 2100,
            //     height: 1080
            // }
            // args: ['--window-size-=1920, 1080'],
            // defaultViewport: null,
        });

        const page = await browser.newPage();

        await page.goto('https://www.kali.org/get-kali/#kali-installer-images');

        await page.waitForTimeout(5000);

        await browser.close();
    }, 30000);

});