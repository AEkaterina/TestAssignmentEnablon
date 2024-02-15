import { Selector, t } from "testcafe";

class MainPage{
    get txbAddToDo() { 
        return Selector('#todo-input');
    }
    
    get lblItemLeft() {
        return Selector('.todo-count');
    }

    get btnDelete() {
        return Selector('.destroy')
    }

    get itemList() {
        return Selector('ul.todo-list li');
    }

    get btnActive() {
        return Selector('a').withText('Active');
    }
    
    lblTask(text) { return Selector('label').withText(`${text}`)}
    chkCompleteTask(text) {return Selector('label').withText(`${text}`).prevSibling()}
    lblCompletedTask(text) { return Selector('label').withText(`${text}`).parent('li.completed')}

    async addTask(text) {
        await t
            .typeText(this.txbAddToDo, text)
            .pressKey('enter');
    }

    async getTextFromTheItemCountLbl() {
        return await this.lblItemLeft.textContent;
    }

    async markTaskAsCompleted(tastText) {
        await t.click(this.chkCompleteTask(tastText));
    }

    async deleteTask(taskText) {
        await t
            .hover(this.lblTask(taskText))
            .click(this.btnDelete);
    }

    async getSizeOfItemList() {
        return await Selector('ul.todo-list li').count;
    }

    async clickActiveTab () {
        await t.click(this.btnActive);
    }

    async clickTxbToAddToDo() {
        await t.click(this.txbAddToDo);
    }

    async clickChkWithOffset(taskText, offsetX, offsetY) {
        await t.click(this.lblTask(taskText), { offsetX : offsetX, offsetY : offsetY });
    }
}

export default new MainPage();