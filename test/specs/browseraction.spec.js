describe('browser actions test suite', () => {
    it('test case for browser actions', async() => {

        await browser.navigateTo("http://google.com");
        console.log(await browser.getTitle());
        console.log(await browser.getUrl());

        
    });
    it('test case for browser actions two', async() => {

        await browser.navigateTo("http://google.com");
        console.log(await browser.getTitle());
        console.log(await browser.getUrl());
        await browser.navigateTo("www.google.com")
        await browser.back();
        await browser.forward();
        await browser.refresh();
        await browser.setWindowSize(400,600);
        await browser.maximizeWindow();
        await browser.minimizeWindow();

        
    });
});

