const puppeteer  = require('puppeteer');

describe('Interactuando con elementos', () => {

    it('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });

        const page = await browser.newPage();

        await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

        //Listener para aceptar los alerts.
        page.on('dialog', async (dialog) => {
            await dialog.accept();
        });

        //Click derecho,
        // await page.click('#authentication > span', {
        //     button: 'right', 
        //     delay: 500,
        // });

        //await page.waitForTimeout(3000);

        //Doble click.
        await page.click('#authentication > button', {
            clickCount: 2, 
            delay: 500,
        });
        
        await page.goto('https://devexpress.github.io/testcafe/example/');
        
        //Con la configuración de "delay" simulamos un posible comportamiento de el ser humano en cuestión de tiempos.
        await page.type('#developer-name', 'José', {
            delay: 100,
        });

        await page.click('#remote-testing');

        await page.click('#tried-test-cafe');

        await page.click('#slider');

        await page.type('#comments', 'Esto es un comentario');

        await page.click('#windows');

        //Select.
        await page.select('#preferred-interface', 'Both');
        
        await page.waitForTimeout(3000);

        await page.click('#submit-button');

        
        await browser.close();
    }, 30000);

});