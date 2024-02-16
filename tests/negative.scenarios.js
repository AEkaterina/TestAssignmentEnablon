import mainPage from "../pageobjects/main.page";
import { enterKey } from "../utils/keys";

const baseUrl = 'https://todomvc.com/examples/react/dist/#/';

fixture('Start').page(baseUrl);

test('Leave field empty', async t => {
    await mainPage.clickTxbToAddToDo();
    await t.pressKey(enterKey);
    
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(0);
});

test('Input only spaces', async t => {
    const strWithSpaces = '     ';
    await mainPage.addTask(strWithSpaces);
    
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(0);
});

test('Input one symbol', async t => {
    const taskText = 's';
    await mainPage.addTask(taskText);
    
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(0);
});

test('Click near the checkbox', async t => {
    const taskText = 'read a book';
    await mainPage.addTask(taskText);

    let offsetX = 50;
    let offsetY = 25
    await mainPage.clickChkWithOffset(taskText, offsetX, offsetY);
    
    let actualItemCount = await mainPage.getItemCountFromLbl();
    await t.expect(parseInt(actualItemCount[0])).eql(1);
    await t.expect(mainPage.lblCompletedTask(taskText).exists).notOk();
});