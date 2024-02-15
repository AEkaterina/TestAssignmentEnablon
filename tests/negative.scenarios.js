import mainPage from "../pageobjects/main.page";

fixture('Start').page('https://todomvc.com/examples/react/dist/#/');

test('Leave field empty', async t => {
    await mainPage.clickTxbToAddToDo();
    await t.pressKey('enter');
    
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(0);
});

test('Input only spaces', async t => {
    let strWithSpaces = '     ';
    await mainPage.addTask(strWithSpaces);
    
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(0);
});

test('Input one symbol', async t => {
    let taskText = 's';
    await mainPage.addTask(taskText);
    
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(0);
});

test('Click near the checkbox', async t => {
    let taskText = 'read a book';
    await mainPage.addTask(taskText);
    await mainPage.clickChkWithOffset(taskText, 50, 25);
    
    let actualItemCount = (await mainPage.getTextFromTheItemCountLbl()).match(/\d+/);
    await t.expect(parseInt(actualItemCount[0])).eql(1);
    await t.expect(mainPage.lblCompletedTask(taskText).exists).notOk();
});