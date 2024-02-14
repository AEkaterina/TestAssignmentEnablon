import mainPage from "../pageobjects/main.page";

fixture('Start').page('https://todomvc.com/examples/react/dist/#/');

test('Task is displayed after adding it', async t => {
    let taskText = 'Write an essay';
    let expectedItemCount = 0;
    await mainPage.addTask(taskText);
    expectedItemCount++;
    
    await t.expect(mainPage.lblTask(taskText).exists).ok();
    
    let actualItemCount = (await mainPage.getTextFromTheItemCountLbl()).match(/\d+/);
    
    await t.expect(expectedItemCount).eql(parseInt(actualItemCount[0]));
});

test('Task is marked as completed', async t => {
    let taskText = 'Feed a cat';
    let expectedItemCount = 0;
    await mainPage.addTask(taskText);
    expectedItemCount++;

    await t.expect(mainPage.lblTask(taskText).exists).ok();
    
    let actualItemCount = (await mainPage.getTextFromTheItemCountLbl()).match(/\d+/);
    
    await t.expect(expectedItemCount).eql(parseInt(actualItemCount[0]));
    
    await mainPage.markTaskAsCompleted(taskText);
    expectedItemCount--;
    
    await t.expect(mainPage.lblCompletedTask(taskText).exists).ok();
    
    actualItemCount = (await mainPage.getTextFromTheItemCountLbl()).match(/\d+/);
    
    await t.expect(expectedItemCount).eql(parseInt(actualItemCount[0]));
});


test('Task is deleted', async t => {
    let taskText = 'Go to the gym';
    await mainPage.addTask(taskText);

    await t.expect(mainPage.lblTask(taskText).exists).ok();

    await mainPage.deleteTask(taskText);
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(0);
});