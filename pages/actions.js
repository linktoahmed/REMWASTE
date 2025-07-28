
import { expect } from "@playwright/test";

export class actions {
    constructor(page, context) {
        this.page = page;
        this.context = context;
        this.loginEmail = page.locator('input[placeholder="Email"]');
        this.loginAssertion = page.locator('#root > div > header > h1');
        this.loginAssertionText = 'My To-Do List 📝';
        this.loginFailureAssertion = page.locator('.error-message');
        this.loginFailureAssertionText = 'Invalid credentials';
        this.loginPassword = page.locator('input[placeholder="Password"]');
        this.addTaskButton = page.locator('button', { hasText: 'Add Task' });
        this.submitButton = page.locator('button[type="submit"]');
        this.taskInput = page.getByPlaceholder('What needs to be done?');
        this.taskList = page.locator('.todo-list');
        this.taskContent = page.locator('.task-content');
        this.statusDropdown  = page.locator('div.todo-item.pending select');
        this.completedItem = page.locator('.todo-item.completed');
        this.deleteTaskButton = page.locator('button:has-text("Delete")');
        this.toDoList = page.locator('.todo-list');
        this.noTaskYet = page.locator('main > p');
        this.noTaskYetText = 'No tasks yet. Add one to get started!';
    }

    async visit() {
        await this.page.goto("/login");
    }


    async login(email, password) {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.submitButton.click();  
    }


    async assertLoginSuccess() {
        await expect(this.loginAssertion).toHaveText(this.loginAssertionText);
        //await expect(this.page).toHaveScreenshot('home-page.png'); 

    }

    async assertLoginFailure() {
        await expect(this.loginFailureAssertion).toHaveText(this.loginFailureAssertionText);
    }

    async addTask(taskName) {
        await expect(this.noTaskYet).toHaveText(this.noTaskYetText);
        await this.taskInput.type(taskName);
        await this.page.waitForTimeout(3000);
        await this.addTaskButton.click();
    }

    async assertTaskAdded(taskName) {
        await this.taskList.waitFor();
        await expect(this.taskContent).toHaveText(taskName);
    }

    async editTask(Completed) {
        await this.taskList.waitFor();
        await this.statusDropdown.selectOption(Completed);
    }

    async assertTaskEdit() {
        await this.completedItem.waitFor();
        await expect(this.completedItem).toBeVisible();
    }

    async delTask() {
        await this.deleteTaskButton.click();
    }

    async assertTaskDel() {
        await expect(this.toDoList).toBeHidden();
        await expect(this.noTaskYet).toHaveText(this.noTaskYetText);

    }
};


