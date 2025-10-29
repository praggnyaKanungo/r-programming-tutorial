# A Very Basic Introduction to R Programming

An interactive web-based tutorial designed to teach the fundamentals of R programming through hands-on exercises with **real R code execution** powered by WebR.

## About This Project

This tutorial was created to provide newcomers with a friendly, approachable introduction to R programming. I built this during my time being a Teacher's Assistant for APMA 3150 at UVA. 

What makes this tutorial special is that it runs **actual R code directly in your browser** using WebAssembly technology - no installation required! Students can write and execute real R code and see immediate results, making learning interactive and engaging.

## ✨ Features

- **Real R Code Execution** - Powered by WebR, all code runs directly in your browser
- **6 Comprehensive Lessons** - From basics to data visualization
- **Interactive Exercises** - Write and run your own R code after each concept
- **Built-in Hints** - Get help when you're stuck
- **Solution Checking** - Automatically validates your code

## 📖 Lesson Overview

1. **Getting Started with R** - Basic arithmetic and variables
2. **Vectors and Data Types** - Creating and manipulating vectors
3. **Data Frames** - Working with tabular data
4. **Basic Functions** - Statistical and string functions
5. **Control Structures** - If-else statements and loops
6. **Data Visualization** - Creating plots and graphs

## Built With

- **React** - Frontend framework
- **Tailwind CSS** - Styling and design
- **Lucide React** - Icons
- **WebR** - R execution engine running in the browser via WebAssembly
- **GitHub Pages** - Hosting

## How to Use

1. Visit the tutorial website (link below)
2. Wait for the R engine to load (shown in the header)
3. Start with Lesson 1 and work through each section
4. Read the explanations and run the demo code examples
5. Try the interactive exercises after each example
6. Write your own R code and click "Run My Code" to execute it
7. Use hints when you get stuck
8. Check solutions if you need additional help
9. Complete all lessons to become "R-eady" for data adventures!

## 🌐 Try It Out!

**Live Tutorial:** [https://praggnyakanungo.github.io/r-programming-tutorial/](https://praggnyakanungo.github.io/r-programming-tutorial/)

### WebR Integration

This project uses [WebR](https://docs.r-wasm.org/webr/latest/) to run R code in the browser:
- WebR is loaded dynamically from CDN on page load
- R code is executed in a sandboxed WebAssembly environment
- No backend server required - everything runs client-side
- Supports most core R functionality and base packages



## Purpose

This was created (and is still a work in progress as I try to trouble shoot some issues) as a teaching resource for APMA 3150 students at the University of Virginia. Thank you to Prof. Heze Chen, the professor whose sections of APMA 3150 I TA-ed for over Summer 2025 for always inpsiring me to pursue my passion for making teaching material!
