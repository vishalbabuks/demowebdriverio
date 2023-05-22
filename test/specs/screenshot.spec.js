describe('taking screenshot', () => {
    
    it('screenshot test', async() => {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/")
        await browser.saveScreenshot('screenshotofwebpage.png')

    });
});