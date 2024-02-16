# Test Assignment Enablon

## Table of Contents
- [Introduction](#introduction)
    + [Build with](#build-with)
- [Getting Started](#getting-started)
    + [Prerequisites](#prerequisites)
    + [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Reporting](#reporting)

## Introduction
This project contains automated tests for a web application designed for creating and managing a to-do list. 

### Build with
The testing is implemented using JavaScript and TestCafe framework. Additionally, the Page Object Pattern is used to encapsulate the details of the UI components (e.g., buttons, forms, input fields) on a particular page. This makes test scripts more readable and understandable. The allure report was chosen to analyze the test results. It provides detailed and interactive reports, making it easier to understand and interpret test results. 

## Getting Started
This is an instruction on setting up this project locally.

### Prerequisites
Before running the tests, make sure the following tools are installed:

- Node.js 
- npm 

### Installation
Clone the repository:

`git clone https://github.com/AEkaterina/TestAssignmentEnablon.git`

## Project Structure
The common structure of the project:
- pageobjects - contains a Page Object class with description of the web page.
- tests - contains test files with positive and negative scenarios.

## Running Tests
To run the tests execute the following command:

`testcafe chrome tests/*.js --reporter allure`

## Test Scenarios
There are 4 positive and 4 negative test scenarios. 

#### Positive scenarios
**Scenario 1** User can add the task to the to-do list.
- Steps:
    
    1.1. Open the web app.

    1.2. Enter the task in the field. 
    
    1.3. Click Enter.
- Expected result: The task is added to the to-do list.

**Scenario 2** User can mark a task as completed.
- Steps:
    
    2.1. Open the web app.

    2.2. Enter the task in the field. 
    
    2.3. Click Enter.

    2.4. Click the checkbox to mark the task as completed. 

- Expected result: The task is marked as completed.

**Scenario 3**  User can delete a task from the to-do list.
- Steps:

    3.1. Open the web app.

    3.2. Enter the task in the field. 
    
    3.3. Click Enter.

    3.4. Click on the cross to delete the task.    

- Expected result: The task is removed from the to-do list.

**Scenario 4**  User can switch the list to Active tasks.
- Steps:
    
    4.1. Open the web app.

    4.2. Add several tasks to the list by entering them in the field and clicking Enter.

    4.3. Click the checkbox on the one task to mark it as completed.

    4.4. Switch to Active tab

- Expected result: The list of task contains only active tasks.

#### Negative scenarios

**Scenario 1** Leave the field empty.
- Steps:

    1.1. Open the web app.

    1.2. Click on the field.
    
    1.3. Click Enter.

- Expected result: The empty task is not added.

**Scenario 2** Enter only spaces in the field.
- Steps:

    2.1. Open the web app.

    2.2. Enter only spaces in the field.
    
    2.3. Click Enter.

- Expected result: The task with spaces is not added.

**Scenario 3** Input only one symbol in the field.
- Steps:

    3.1. Open the web app.

    3.2. Enter one symbol in the field.

    3.3. Click Enter.

- Expected result: The task with one symbol is not added.

**Scenario 4** Click near the checkbox.
- Steps:

    4.1. Open the web app.

    4.2. Enter the task in the field.
    
    4.3. Click Enter.

    4.4. Click near the checkbox to complete the task.

- Expected result: The tast is not marked as completed.

## Reporting

Generate Allure reports to view detailed test results. Execute the following commands:

`allure generate allure/allure-results --clean`

`allure open`
