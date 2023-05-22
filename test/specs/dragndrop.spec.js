describe('drag and drop', () => {
    it('drag and drop test case', async () => {
        await browser.url('https://jqueryui.com/droppable/')
        const frame1 = await $('/html/body/div[1]/div[2]/div/div[1]/iframe')
        await browser.switchToFrame(frame1)
        const drag = await $('#draggable')
        await drag.waitForExist(5000)
        console.log(drag)
        const drop = await $('#droppable')
        console.log(drop)
        await drag.dragAndDrop(drop, 5000)
        await browser.pause(8000);
    })
})