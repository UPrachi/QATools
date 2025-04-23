# ✨ QA Tools Automation with Cypress + Allure Report ✨

Hey there! 👋 Welcome to my Cypress automation project with Allure Reporting integration.  
This repo contains test cases for various UI functionalities, all automated using Cypress, with detailed reports powered by Allure. 🚀

---

## 🛠 Prerequisites

Make sure you have the following installed on your machine:

- 📦 **Node.js** (v14 or above)
- ☕ **Java JDK** (v8 or above) – required for Allure reports
- 📈 **Allure Commandline Tool**

---

## 📥 Installation & Setup

### 1. Clone this repo:

```bash
git clone https://github.com/your-username/QATools.git
cd QATools
```

### 2. Install all dependencies:

```bash
npm install
```

### 3. Install Allure command line tool:

#### Option 1: (NPM)
```bash
npm install -g allure-commandline --save-dev
```

#### Option 2: (Scoop - Windows)
```bash
npm install -g allure-commandline --save-dev
```

#### Option 3: (Brew - macOS)
```bash
brew install allure
```

---
This will:

Install the Allure CLI globally so you can use allure commands anywhere.

Save it as a development dependency (--save-dev) in your package.json.

### 4. Make sure Java is installed and set:

```bash
java -version
```
If not, install from [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-downloads.html).

---

## ✅ Running the Tests

To launch Cypress in interactive mode (GUI):

```bash
npx cypress open
```

Or to run tests in headless mode:

```bash
npx cypress run
```

---

## 📊 Generate Allure Report

Follow these steps after running your tests:

1. 🧪 Run tests and generate Allure results:

```bash
npx cypress run --env allure=true
```

2. 🛠 Generate the report from results:

```bash
allure generate allure-results --clean
```

3. 🌐 Open the report in your browser:

```bash
allure open
```

---

## 🧱 Page Object Model (POM) Design

This project follows the **Page Object Model** (POM) design pattern for better maintainability and scalability. 🧩

- Each page/component has its own JS file under the `pageobjects_prachi` directory.
- Test scripts (located in `cypress/e2e/`) import these page objects and use their methods to interact with UI elements.

📌 _Benefits of POM:_
- Centralized selectors for easy updates 🛠
- Reusable actions and logic 🔁
- Cleaner, readable test scripts 📖

---

## 📁 Project Structure

```bash
QATools/
├── cypress/
│   ├── e2e/                   # Test specs 🧪
│   ├── fixtures/              # Static test data 📁
│   ├── pageobjects_prachi/    # Page Object Models 📄
│   └── downloads/             # Downloaded files from tests 📥
├── cypress.config.js          # Cypress Configuration ⚙️
├── package.json               # Project Dependencies 📦
└── README.md                  # You're reading it! 📘
```

---

## 💬 Notes

- All test cases are written using JavaScript and Cypress best practices.
- Allure makes it super easy to analyze test reports visually.
- You can integrate this suite into your CI/CD pipelines for full automation! 🔄

Thanks for checking it out! 😊  
Feel free to fork or contribute if you find this helpful.

---

✨ _Happy Testing!_ ✨
