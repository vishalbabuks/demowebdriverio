describe('windows handles test suite', () => {
    it('test case for switching window', async() => {
        await browser.url("https://the-internet.herokuapp.com/windows"); 
        const parentwindow=await browser.getWindowHandle();

        await (await $("//div/a[normalize-space()='Click Here']")).click();
        const windowhandles=await browser.getWindowHandles();

        console.log('list of unique window id',windowhandles)

        await browser.switchToWindow(windowhandles[1]);

        await browser.pause(5000)

         expect(await (await $("//h3")).getText()).toEqual('New Window');

         await browser.switchToWindow(windowhandles[0]);

         expect(await $("//div/a[normalize-space()='Click Here']")).toBeExisting();

         expect(await (await $("//h3")).getText()).toEqual('Opening a new window');



        
    });

   
    
});

