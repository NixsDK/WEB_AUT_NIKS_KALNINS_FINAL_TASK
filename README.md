# WEB_AUT_NIKS_KALNINS_FINAL_TASK

This repository contains the final task for the Web Automation project using Cypress.

## ✅ Task Overview

Automated the form submission on:

👉 https://demoqa.com/automation-practice-form

## 🔧 Tools Used
- Cypress v14.4.0
- Node.js
- JavaScript

## 🧪 Test Scenario Covered
- Fill in all form fields:
  - Name, Email, Gender, Phone
  - Date of Birth: 28 February, 1930
  - Subject: Economics
  - Hobby: Music
  - Picture upload: `cypress/files/looneytunesthuglifepng.png`
  - Address: Meldru iela 101
  - State: NCR, City: Delhi
- Submit the form
- Validate that each label-value pair in the confirmation modal is correct

## 📂 Project Structure

## 🚀 How to Run
1. Clone this repo
2. Run `npm install`
3. Launch Cypress with `npx cypress open`
4. Run `final_form.cy.js` under e2e specs
