import mainPage from "../pageobjects/main.page";

fixture('Start').page('https://todomvc.com/examples/react/dist/#/');

test('Task is displayed after adding it', async t => {
    let taskText = 'Write an essay';
    let expectedItemCount = 0;
    await mainPage.addTask(taskText);
    expectedItemCount++;
    
    await t.expect(mainPage.lblTask(taskText).exists).ok();
    
    let actualItemCount = (await mainPage.getTextFromTheItemCountLbl()).match(/\d+/);
    
    await t.expect(parseInt(actualItemCount[0])).eql(expectedItemCount);
});

test('Task is marked as completed', async t => {
    let taskText = 'Feed a cat';
    let expectedItemCount = 0;
    await mainPage.addTask(taskText);
    expectedItemCount++;

    await t.expect(mainPage.lblTask(taskText).exists).ok();
    
    await mainPage.markTaskAsCompleted(taskText);
    expectedItemCount--;
    
    await t.expect(mainPage.lblCompletedTask(taskText).exists).ok();
    
    let actualItemCount = (await mainPage.getTextFromTheItemCountLbl()).match(/\d+/);
    
    await t.expect(parseInt(actualItemCount[0])).eql(expectedItemCount);
});

test('Task is deleted', async t => {
    let taskText = 'Go to the gym';
    await mainPage.addTask(taskText);

    await t.expect(mainPage.lblTask(taskText).exists).ok();

    await mainPage.deleteTask(taskText);
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(0);
});

test('Active tab does not have completed tasks', async t => {
    let listOfTasks = ['first', 'second', 'third', 'forth'];
    let itemCount = listOfTasks.length;

    for(let task of listOfTasks) {
        await mainPage.addTask(task);
    }
    
    await mainPage.markTaskAsCompleted(listOfTasks[1]);
    itemCount--;

    await mainPage.clickActiveTab();

    let actualItemCount = parseInt((await mainPage.getTextFromTheItemCountLbl()).match(/\d+/)[0]);
    
    await t.expect(actualItemCount).eql(itemCount);
    
    let listSize = await mainPage.getSizeOfItemList();
    await t.expect(listSize).eql(itemCount);

    await t.expect(mainPage.lblTask(listOfTasks[1]).exists).notOk();
});