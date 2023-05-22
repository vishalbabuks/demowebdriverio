describe('frame handling test suite', () => {
    it('test case for handling frames', async() => {
        await browser.url("https://the-internet.herokuapp.com/iframe"); 
        const frameid=await $("#mce_0_ifr")
        await browser.switchToFrame(frameid);

        await (await $("//body/p")).click();
        await (await $("//body/p")).addValue('typing inside the frame');

        await browser.pause(5000)

        await browser.switchToParentFrame();


        expect(await $("//h3")).toBeExisting();

        expect(await (await $("//h3")).getText()).toEqual('An iFrame containing the TinyMCE WYSIWYG Editor');



        
    });

   
    
});