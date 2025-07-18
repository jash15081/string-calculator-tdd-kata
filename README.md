# 💻 String Calculator TDD Kata — Incubyte Assessment

This repository contains my solution to the **String Calculator TDD Kata** as part of the **Incubyte Software Craftsperson hiring process**.

The solution is built in **JavaScript** using the **Jest** testing framework and follows the **Test-Driven Development (TDD)** cycle strictly:

> 🔴 Write a failing test → 🟢 Make it pass → ♻️ Refactor

---

## 📦 Tech Stack

- Language: **JavaScript (ES6+)**
- Test Framework: **Jest**
- Environment: Node.js v18+

---

## 🚀 Getting Started

### 🔧 Setup

1. Clone the repo  
   `git clone https://github.com/your-username/string-calculator-kata.git`
2. Navigate to project  
   `cd string-calculator-kata`
3. Install dependencies  
   `npm install`
4. Run tests  
   `npm test`

---

## 📋 Features and TDD Test Cases

| #   | Requirement                                                   | Input                                          | Output       | 🔴 Failing Test Screenshot               | 🟢 Passing Test Screenshot               |
| --- | ------------------------------------------------------------- | ---------------------------------------------- | ------------ | ---------------------------------------- | ---------------------------------------- |
| 1   | Empty string returns 0                                        | `""`                                           | `0`          | ![Fail](./docs/screen-shots/1_fail.png)  | ![Pass](./docs/screen-shots/1_pass.png)  |
| 2   | Single number returns the number                              | `"1"`                                          | `1`          | ![Fail](./docs/screen-shots/2_fail.png)  | ![Pass](./docs/screen-shots/2_pass.png)  |
| 3   | Two numbers return their sum                                  | `"1,2"`                                        | `3`          | ![Fail](./docs/screen-shots/3_fail.png)  | ![Pass](./docs/screen-shots/3_pass.png)  |
| 4   | Multiple comma-separated numbers                              | `"1,2,3,4"`                                    | `10`         | Test did not fail initially              | ![Pass](./docs/screen-shots/4_pass.png)  |
| 5   | Support newline `\n` as delimiter                             | `"1\n2,3"`                                     | `6`          | ![Fail](./docs/screen-shots/5_fail.png)  | ![Pass](./docs/screen-shots/5_pass.png)  |
| 6   | Custom single-character delimiter                             | `"//;\n1;2"`                                   | `3`          | ![Fail](./docs/screen-shots/6_fail.png)  | ![Pass](./docs/screen-shots/6_pass.png)  |
| 7   | Exception on one negative number                              | `"1,-2"`                                       | Error        | ![Fail](./docs/screen-shots/7_fail.png)  | ![Pass](./docs/screen-shots/7_pass.png)  |
| 8   | Exception on multiple negative numbers                        | `"1,-2,3,-5"`                                  | Error        | Test did not fail initially              | ![Pass](./docs/screen-shots/8_pass.png)  |
| 9   | Ignore numbers >1000 but include 1000                         | `"2,1001"` / `"2,1000"`                        | `2` / `1002` | ![Fail](./docs/screen-shots/9_fail.png)  | ![Pass](./docs/screen-shots/9_pass.png)  |
| 10  | Support multi-character custom delimiter (e.g. `[***]`)       | `"//[***]\n1***2***3"`                         | `6`          | Test did not fail initially              | ![Pass](./docs/screen-shots/10_pass.png) |
| 11  | Support multiple delimiters `[*,%]` and multi-char `[**][%%]` | `"//[*][%]\n1*2%3"`<br>`"//[**][%%]\n1**2%%3"` | `6`          | ![Fail](./docs/screen-shots/11_fail.png) | ![Pass](./docs/screen-shots/11_pass.png) |
