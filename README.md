# REMWASTE# REMWASTE QA Engineer (Automation Specialist) Challenge - Automation Test Suite

This repository contains the automated test suite for the REMWASTE To-Do web application challenge. The tests are written using [Playwright](https://playwright.dev/) and cover core functionalities such as login, task creation, editing, and deletion.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Test Scenarios Covered](#test-scenarios-covered)  
- [Prerequisites](#prerequisites)  
- [Environment Setup](#environment-setup)  
- [Running the Tests](#running-the-tests)  
- [Test Reports](#test-reports)  
- [Contact](#contact)  

---

## Project Overview

This Playwright test suite automates testing for the REMWASTE To-Do web app, validating essential user workflows:

- Login with valid and invalid credentials  
- Adding new tasks  
- Editing task status  
- Deleting tasks  

---

## Test Scenarios Covered

1. **Login - Valid Credentials**  
2. **Login - Invalid Credentials**  
3. **Create - Add New Task**  
4. **Edit - Update Task Status**  
5. **Delete - Delete a Task**

---

## Prerequisites

- Node.js (version 18.x or higher recommended)  
- npm package manager  

---

## Environment Setup

Follow the steps below to set up the test environment locally:

Clone the repository
  
   git clone https://github.com/your-repo/remwaste-automation.git
   cd remwaste-automation

Install dependencies

npm ci
npx playwright install

Running the Tests

Run all tests with the default Playwright test runner:

npx playwright test

Run tests headed (with browser UI):

npx playwright test --headed

Test Reports
After test execution, Playwright generates test reports with summary details.

You can generate an HTML report using:

npx playwright show-report

For CI/CD integrations, consider uploading reports or artifacts for visibility.

Contact
For any questions, please contact:

Ahmed Ur Rehman
Email: linktoahmed@gmail.com

Thank you for reviewing this automation project!