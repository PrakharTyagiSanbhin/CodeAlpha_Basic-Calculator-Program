# Smart Calculator

A modern and responsive calculator application developed using **HTML, CSS, and JavaScript** for **Frontend** and **C programming** for **Backend implementation**. The project features a professional glassmorphism-inspired user interface with a real calculator button layout and performs basic arithmetic operations using **Switch-Case Logic**.

---

# Project Overview

The Smart Calculator is designed to provide a user-friendly interface for performing basic mathematical calculations. The frontend is built using HTML, CSS, and JavaScript, while the backend logic is also implemented separately in C language (`calculator.c`) to demonstrate the use of switch-case statements and arithmetic operations.

This project was developed as part of academic learning to strengthen concepts of:

* Web Development
* User Interface Design
* JavaScript Programming
* C Programming
* Switch-Case Statements
* Event Handling
* Problem Solving

---

# Features

### Frontend Features

* Modern Glassmorphism Design
* Responsive User Interface
* Green-Teal Gradient Theme
* Real Calculator Layout (0–9 Buttons)
* Operator Buttons (+, −, ×, ÷)
* Clear (C) Button
* Delete (⌫) Button
* Percentage (%) Button
* Smooth Hover Animations
* Interactive Display Screen

### Functional Features

* Addition
* Subtraction
* Multiplication
* Division
* Percentage Calculation
* Error Handling
* Division-by-Zero Validation

### Backend Features (C Program)

* Menu-Driven Calculator
* Switch-Case Implementation
* User Input Validation
* Arithmetic Operations
* Division-by-Zero Handling

---

# Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript (ES6)

## Backend

* C Programming Language

---

# Project Structure

```text
Smart-Calculator/
│
├── index.html
├── style.css
├── script.js
├── backend c language calculator.c
├── README.md
```

---

#  How to Run the Web Application

### Method 1: Direct Browser Execution

1. Download or Clone the Repository

```bash
git clone https://github.com/your-username/smart-calculator.git
```

2. Open the project folder.

3. Double-click:

```text
index.html
```

4. The calculator will automatically open in your browser.

### Supported Browsers

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Opera

---

# 🚀 How to Run the C Backend Program

### Using GCC Compiler

Compile the source code:

```bash
gcc calculator.c -o calculator
```

Run the program:

### Windows

```bash
calculator.exe
```

### Linux / Mac

```bash
./calculator
```

---

#  Working Principle

## Frontend Workflow

1. User clicks calculator buttons.
2. The expression appears on the display.
3. The selected operation is identified.
4. JavaScript processes the calculation using switch-case logic.
5. The result is displayed instantly.

Example:

```text
7 + 8 = 15
```

---

## Backend Workflow

1. User selects an operation from the menu.
2. User enters two numbers.
3. The selected operation is executed using a switch-case statement.
4. The result is displayed on the console.

Example:

```text
1. Addition
2. Subtraction
3. Multiplication
4. Division

Choice: 1

Enter first number: 10
Enter second number: 5

Result = 15.00
```

---

#  Switch-Case Logic

## JavaScript

```javascript
switch(operator)
{
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;

    case '*':
        result = num1 * num2;
        break;

    case '/':
        result = num1 / num2;
        break;
}
```

## C Language

```c
switch(choice)
{
    case 1:
        result = num1 + num2;
        break;

    case 2:
        result = num1 - num2;
        break;

    case 3:
        result = num1 * num2;
        break;

    case 4:
        result = num1 / num2;
        break;
}
```

---

#  Learning Outcomes

Through this project, I learned:

* HTML Structure and Layout Design
* CSS Styling and Glassmorphism Effects
* Responsive Web Design
* JavaScript DOM Manipulation
* Event Handling
* Switch-Case Statements
* C Programming Fundamentals
* Problem Solving and Logic Building
* GitHub Project Management

---

#  Project Screenshot

Add a screenshot of your calculator interface.

Example:

```markdown
![Smart Calculator](screenshot.png)
```

---

#  Future Enhancements

* Scientific Calculator Functions
* Keyboard Input Support
* Dark / Light Theme Toggle
* Calculation History
* Memory Functions (M+, M-, MR)
* Square Root and Power Operations
* Mobile Application Version

---

#  Code Alpha Internship Project
Developed as part of my Code Alpha internship task.
