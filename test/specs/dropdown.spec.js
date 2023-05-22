describe('dropdowns', () => {
    it('ddropdown test case', async () => {
        browser.url('http://omayo.blogspot.com');
        
        $('#drop1').selectByVisibleText('doc 3');
       await browser.pause(5000);
    })
})