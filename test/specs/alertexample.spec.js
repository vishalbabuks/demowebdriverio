describe('Alert test suite', () => {

    it('alert test case one', async() => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        
        await (await $("#confirmbtn")).waitForExist({timeout:25000})
        await (await $("#confirmbtn")).click(); 
        const alerttext= browser.isAlertOpen();
        console.log('alert validation',alerttext);
        
        await (await $("#confirmbtn")).waitForExist({timeout:25000})
        await (await $("#confirmbtn")).click();
        await browser.acceptAlert();

        const alerttwo=await browser.isAlertOpen();
        console.log('alert validation',alerttwo);
        await (await $("#confirmbtn")).waitForExist({timeout:25000})
        await (await $("#confirmbtn")).click();
        await browser.dismissAlert();

    });
    
});