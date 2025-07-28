import { test } from "../lib/fixtures"

test.describe("REMWASTE QA Engineer (Automation Specialist) Challenge", () => {
    test.beforeEach(async ({ actions }) => {
            await actions.visit();
    })

    test("Login - with valid credentials", async ({ actions }) => {
            await actions.login('abc@test.com', '123canon!');
            await actions.assertLoginSuccess();

    })

    test("Login - with invalid credentials", async ({ actions }) => {
            await actions.login('baduser@test.com', '12345679');
            await actions.assertLoginFailure();
    })

    test("Create - Add new Task", async ({ actions }) => {
            await actions.login('abc@test.com', '123canon!');
            await actions.addTask('Automation Task-');
            await actions.assertTaskAdded('Automation Task-abc@test.com');
    })

    test("Edit - Update Task Status", async ({ actions }) => {
            await actions.login('abc@test.com', '123canon!');
            await actions.editTask('Completed');
            await actions.assertTaskEdit();
    })
    
  test("Delete - Deleting a Task ", async ({ actions }) => {
            await actions.login('abc@test.com', '123canon!');
            await actions.delTask();
            await actions.assertTaskDel();
    })
})


