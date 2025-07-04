# 📐 String Calculator – TDD Kata (Incubyte Assessment)

This project is a solution to the Incubyte TDD Assessment. It demonstrates disciplined software craftsmanship using **JavaScript** and **Jest**, following strict **Test-Driven Development (TDD)** principles.

---

## 📋 Problem Statement

Implement a `StringCalculator.add()` function that takes a string of numbers and returns their sum. The input can include:
- Comma and newline-separated values
- Custom delimiters
- Multiple and multi-character delimiters
- Edge cases like empty input, negative numbers, and numbers > 1000

The solution was developed using **Red-Green-Refactor** cycles and includes all bonus steps.

---

## ✅ Features Implemented

| Step | Feature Description |
|------|---------------------|
| 1    | Return 0 for an empty string |
| 2    | Return value when a single number is given |
| 3    | Add two comma-separated numbers |
| 4    | Add multiple comma-separated numbers |
| 5    | Support newline `\n` as delimiter |
| 6    | Support custom delimiter format: `//;\n1;2` |
| 7    | Track how many times `add()` is called |
| 8    | Throw exception for negative numbers |
| 9    | Ignore numbers greater than 1000 |
| 10   | Support multi-character delimiters (e.g. `//[***]`) |
| 11   | Support multiple delimiters (e.g. `//[*][%]`) |
| 12   | Support multi-character multiple delimiters (e.g. `//[**][%%]`) |

---

## 🧪 Tech Stack

- **Language:** JavaScript (Node.js)
- **Testing:** Jest
- **Approach:** Test-Driven Development (TDD)

---

## 🗂️ Project Structure

stringCalculator/
├── calculator.js # StringCalculator class
├── calculator.test.js # Jest test suite
├── package.json # Node project configuration
├── String_Calculator_TDD_Final_JanviPatel.pdf # Final documentation
└── README.md


---

## 🚀 How to Run

1. Clone the repository  
   `git clone https://github.com/JanviJPatel30/stringCalculator-TDD`

2. Navigate to the project directory  
   `cd stringCalculator`

3. Install dependencies  
   `npm install`

4. Run the tests  
   `npm test`

---

## 📄 Documentation

The complete TDD evolution, test cases, screenshots, and final implementation are available in:  
📎 [`stringCalculator_TDD_JanviPatel.pdf`](./stringCalculator_TDD_JanviPatel.pdf)

---

## 🙏 Acknowledgement

Created for the **Incubyte TDD Assessment** to demonstrate test-first thinking, clean code practices, and disciplined software craftsmanship.
