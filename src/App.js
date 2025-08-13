import React, { useState } from 'react';
import { Play, Book, Code, ChevronRight, ChevronDown } from 'lucide-react';

const RLearningSite = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [expandedSections, setExpandedSections] = useState({ 0: true });
  const [demoOutputs, setDemoOutputs] = useState({});
  const [userCode, setUserCode] = useState({});
  const [feedback, setFeedback] = useState({});
  const [userOutputs, setUserOutputs] = useState({});
  const [showSolutions, setShowSolutions] = useState({});
  const [showCongratulations, setShowCongratulations] = useState(false);

  const lessons = [
    {
      id: 0,
      title: "Getting Started with R",
      category: "Basics",
      content: "Hey there, future R superstar! R is this absolutely amazing programming language that's going to become your best friend for working with data. I'm so excited to show you the basics - trust me, you're going to love how easy and fun this can be!",
      examples: [
        {
          title: "Basic Arithmetic",
          code: `# Basic arithmetic operations
5 + 3
10 - 4
6 * 7
20 / 4
2^3  # Power`,
          explanation: "Guess what? R can be your personal calculator! How cool is that? Let's try some basic math - I promise it's way more fun than it sounds!",
          exercise: {
            prompt: "Calculate 15 + 25:",
            solution: "15 + 25",
            hint: "Just type the two numbers with a + sign between them!"
          }
        },
        {
          title: "Variables and Assignment",
          code: `# Creating variables
x <- 5
y <- 10
name <- "R Programming"

# Display values
x
y
name`,
          explanation: "Okay, this is where things get really exciting! Variables are like little boxes where you can store your data. Think of them as your personal assistants - they remember things for you! The <- arrow is super special in R - it's like saying 'hey, remember this for me!'",
          exercise: {
            prompt: "Create a variable called 'age' and assign it the value 25:",
            solution: "age <- 25",
            hint: "Remember to use the <- operator: variable_name <- value"
          }
        }
      ]
    },
    {
      id: 1,
      title: "Vectors and Data Types",
      category: "Data Structures",
      content: "Alright, my amazing student, here's where R gets REALLY cool! Vectors are like the building blocks of everything in R. Think of them as lists that can hold multiple things at once - kind of like a shopping cart for your data! You're going to absolutely love how versatile these are!",
      examples: [
        {
          title: "Creating Vectors",
          code: `# Numeric vector
numbers <- c(1, 2, 3, 4, 5)
numbers

# Character vector
fruits <- c("apple", "banana", "orange")
fruits

# Logical vector
boolean_values <- c(TRUE, FALSE, TRUE)
boolean_values`,
          explanation: "This is going to blow your mind! The c() function is like a magic wand that combines things together. You can mix numbers, words, or even true/false values. It's like creating your own custom lists - so satisfying!",
          exercise: {
            prompt: "Create a vector called 'colors' containing exactly these three color names: red, blue, green:",
            solution: `colors <- c("red", "blue", "green")`,
            hint: "Use c() and put the color names in quotes: c(\"color1\", \"color2\", \"color3\")"
          }
        },
        {
          title: "Vector Operations",
          code: `# Vector arithmetic
vec1 <- c(1, 2, 3, 4)
vec2 <- c(5, 6, 7, 8)

vec1 + vec2
vec1 * 2
length(vec1)  # Get vector length`,
          explanation: "Hold onto your hat because this is pure magic! R can do math on entire lists at once - no need to do it one by one like a caveman! When you multiply a vector by 2, R says 'got it!' and multiplies EVERY number. It's like having superpowers!",
          exercise: {
            prompt: "Create a vector named 'numbers' containing the numbers 2, 4, 6, then multiply the entire vector by 3. Write this as two separate lines:",
            solution: `numbers <- c(2, 4, 6)
numbers * 3`,
            hint: "First create the vector with c(), then multiply by 3 on the next line"
          }
        }
      ]
    },
    {
      id: 2,
      title: "Data Frames",
      category: "Data Structures",
      content: "OH MY GOODNESS, you're going to LOVE data frames! Think of them as the ultimate organizer - like a super smart spreadsheet that can hold all your information perfectly arranged in rows and columns. This is where R really starts to shine and you'll feel like a data wizard!",
      examples: [
        {
          title: "Creating Data Frames",
          code: `# Create a data frame
students <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(20, 22, 21),
  grade = c("A", "B", "A")
)

students
str(students)  # Structure of data frame`,
          explanation: "Get ready to feel like a data architect! Data frames are like building the perfect filing cabinet where everything has its place. You're literally creating a mini database right now - how awesome is that?! The str() function is like peeking behind the curtain to see how your creation is built!",
          exercise: {
            prompt: "Create a data frame called 'cars' with a 'brand' column containing Toyota and Honda, and a 'year' column containing 2020 and 2019:",
            solution: `cars <- data.frame(
  brand = c("Toyota", "Honda"),
  year = c(2020, 2019)
)`,
            hint: "Use data.frame() with column_name = c(values) format"
          }
        },
        {
          title: "Accessing Data Frame Elements",
          code: `# Access columns
students$name
students[["age"]]
students[, 1]  # First column

# Access rows
students[1, ]  # First row
students[1:2, ]  # First two rows`,
          explanation: "This is like having secret passwords to access your data! The $ symbol is my personal favorite - it's like saying 'hey data frame, give me that specific column please!' And those square brackets? They're like GPS coordinates for your data. You're becoming a data detective!",
          exercise: {
            prompt: "Access the 'age' column from the students data frame using the dollar sign ($) notation:",
            solution: "students$age",
            hint: "Use the $ symbol: dataframe$column_name"
          }
        }
      ]
    },
    {
      id: 3,
      title: "Basic Functions",
      category: "Functions",
      content: "Buckle up, superstar! We're about to explore R's incredible built-in functions - these are like having a toolbox full of the most amazing gadgets! Each function is designed to make your life easier and your data analysis more powerful. You're going to feel like you have superpowers!",
      examples: [
        {
          title: "Statistical Functions",
          code: `# Create sample data
scores <- c(85, 90, 78, 92, 88, 76, 94, 89)

# Basic statistics
mean(scores)     # Average
median(scores)   # Middle value
sd(scores)       # Standard deviation
min(scores)      # Minimum
max(scores)      # Maximum
summary(scores)  # Summary statistics`,
          explanation: "This is where R becomes your personal data analyst! These functions are like having a smart friend who can instantly tell you everything about your numbers. Mean, median, standard deviation - R calculates them all in a flash! You're literally doing professional-level statistics right now!",
          exercise: {
            prompt: "Find the maximum value in this vector: c(12, 45, 23, 67, 34):",
            solution: "max(c(12, 45, 23, 67, 34))",
            hint: "Use max() function with the vector inside: max(c(numbers...))"
          }
        },
        {
          title: "String Functions",
          code: `# Working with text
text <- "Hello R Programming"

nchar(text)           # Number of characters
toupper(text)         # Convert to uppercase
tolower(text)         # Convert to lowercase
substr(text, 1, 5)    # Extract substring
paste("Hello", "World") # Combine strings`,
          explanation: "Text manipulation in R is like being a word wizard! You can count letters, change cases, slice and dice words, and even glue sentences together. It's so satisfying to see R transform your text exactly how you want it!",
          exercise: {
            prompt: "Convert the text 'learning r' to uppercase:",
            solution: `toupper("learning r")`,
            hint: "Use toupper() function with the text in quotes"
          }
        }
      ]
    },
    {
      id: 4,
      title: "Control Structures",
      category: "Programming",
      content: "Now we're getting into the REALLY exciting stuff! Control structures are like giving your code a brain - they help your programs make decisions and repeat tasks automatically. You're about to become a true programmer, and I couldn't be more excited for you!",
      examples: [
        {
          title: "If-Else Statements",
          code: `# If-else example
score <- 85

if (score >= 90) {
  grade <- "A"
} else if (score >= 80) {
  grade <- "B"
} else if (score >= 70) {
  grade <- "C"
} else {
  grade <- "F"
}

print(paste("Grade:", grade))`,
          explanation: "This is like teaching your computer to think! If-else statements are decision trees that make your code smart. Your program can now look at data and decide what to do - just like how you might choose an outfit based on the weather. You're creating intelligent code!",
          exercise: {
            prompt: "Create a variable x with value 15, then write an if statement to check if x is greater than 10 and print a message if true:",
            solution: `x <- 15
if (x > 10) {
  print("x is greater than 10")
}`,
            hint: "First assign x, then use if (condition) { action }"
          }
        },
        {
          title: "For Loops",
          code: `# For loop example
numbers <- c(1, 2, 3, 4, 5)

# Square each number
for (i in numbers) {
  squared <- i^2
  print(paste(i, "squared is", squared))
}

# Loop with index
for (i in 1:5) {
  print(paste("Iteration", i))
}`,
          explanation: "For loops are absolutely magical! Instead of typing the same thing over and over (boring!), you can tell R 'do this thing for each item in my list' and watch it work like a tireless assistant. It's like having a robot helper that never gets tired!",
          exercise: {
            prompt: "Write a for loop that prints the numbers 1, 2, and 3:",
            solution: `for (i in 1:3) {
  print(i)
}`,
            hint: "Use for (i in 1:3) { print(i) }"
          }
        }
      ]
    },
    {
      id: 5,
      title: "Data Visualization",
      category: "Visualization",
      content: "OH WOW, we've reached my absolute FAVORITE part! This is where your data comes alive and tells beautiful stories through charts and graphs. R's visualization powers are going to absolutely blow your mind - you're about to create some seriously gorgeous plots that will make everyone go 'WOW!'",
      examples: [
        {
          title: "Basic Plotting",
          code: `# Sample data
x <- 1:10
y <- x^2

# Basic scatter plot
plot(x, y, main="Square Function", 
     xlab="X values", ylab="Y values",
     col="blue", pch=16)

# Add a line
lines(x, y, col="red")`,
          explanation: "This is pure art meets science! With just a few lines of code, you're creating beautiful visualizations that can reveal patterns and insights. The plot() function is like your magic paintbrush, and adding colors and lines makes your data come alive!",
          exercise: {
            prompt: "Create vectors x with values 1 through 5, and y where each value is x multiplied by 2, then create a plot:",
            solution: `x <- 1:5
y <- x * 2
plot(x, y)`,
            hint: "Create x and y vectors, then use plot(x, y)"
          }
        },
        {
          title: "Histograms and Bar Plots",
          code: `# Random data for histogram
data <- rnorm(100, mean=50, sd=10)
hist(data, main="Normal Distribution", 
     xlab="Values", col="lightblue")

# Bar plot
categories <- c("A", "B", "C", "D")
values <- c(23, 17, 35, 28)
barplot(values, names.arg=categories, 
        main="Category Counts", col="orange")`,
          explanation: "Histograms and bar plots are like giving your data a voice! They help tell the story hidden in your numbers - showing patterns, distributions, and comparisons that might be invisible in raw data. You're becoming a data storyteller!",
          exercise: {
            prompt: "Create a histogram using these numbers: 1, 2, 2, 3, 3, 3, 4, 4, 5. First store them in a variable, then create the histogram:",
            solution: `data <- c(1, 2, 2, 3, 3, 3, 4, 4, 5)
hist(data)`,
            hint: "Create the data vector, then use hist(data)"
          }
        }
      ]
    }
  ];

  const getDemoOutput = (lessonId, exampleIndex) => {
    const demoOutputData = {
      "0-0": `[1] 8\n[1] 6\n[1] 42\n[1] 5\n[1] 8`,
      "0-1": `[1] 5\n[1] 10\n[1] "R Programming"`,
      "1-0": `[1] 1 2 3 4 5\n[1] "apple"  "banana" "orange"\n[1]  TRUE FALSE  TRUE`,
      "1-1": `[1]  6  8 10 12\n[1] 2 4 6 8\n[1] 4`,
      "2-0": `     name age grade\n1   Alice  20     A\n2     Bob  22     B\n3 Charlie  21     A\n'data.frame':	3 obs. of  3 variables:\n $ name : chr  "Alice" "Bob" "Charlie"\n $ age  : num  20 22 21\n $ grade: chr  "A" "B" "A"`,
      "2-1": `[1] "Alice"   "Bob"     "Charlie"\n[1] 20 22 21\n[1] "Alice"   "Bob"     "Charlie"\n     name age grade\n1   Alice  20     A\n     name age grade\n1   Alice  20     A\n2     Bob  22     B`,
      "3-0": `[1] 86.5\n[1] 88.5\n[1] 6.345289\n[1] 76\n[1] 94\n   Min. 1st Qu.  Median    Mean 3rd Qu.    Max. \n   76.0    83.5    88.5    86.5    91.0    94.0`,
      "3-1": `[1] 19\n[1] "HELLO R PROGRAMMING"\n[1] "hello r programming"\n[1] "Hello"\n[1] "Hello World"`,
      "4-0": `[1] "Grade: B"`,
      "4-1": `[1] "1 squared is 1"\n[1] "2 squared is 4"\n[1] "3 squared is 9"\n[1] "4 squared is 16"\n[1] "5 squared is 25"\n[1] "Iteration 1"\n[1] "Iteration 2"\n[1] "Iteration 3"\n[1] "Iteration 4"\n[1] "Iteration 5"`,
      "5-0": `# A scatter plot with blue points and red connecting line would be displayed`,
      "5-1": `# A histogram showing normal distribution with light blue bars\n# A bar plot with orange bars for categories A, B, C, D would be displayed`
    };
    
    return demoOutputData[`${lessonId}-${exampleIndex}`] || "Output would be displayed here";
  };

  const getExerciseOutput = (lessonId, exampleIndex) => {
    const exerciseOutputData = {
      "0-0": `[1] 40`,
      "0-1": `[1] 25`,
      "1-0": `[1] "red"   "blue"  "green"`,
      "1-1": `[1] 2 4 6\n[1]  6 12 18`,
      "2-0": `  brand year\n1 Toyota 2020\n2  Honda 2019`,
      "2-1": `[1] 20 22 21`,
      "3-0": `[1] 67`,
      "3-1": `[1] "LEARNING R"`,
      "4-0": `[1] "x is greater than 10"`,
      "4-1": `[1] 1\n[1] 2\n[1] 3`,
      "5-0": `# A scatter plot showing points at (1,2), (2,4), (3,6), (4,8), (5,10)`,
      "5-1": `# A histogram showing the frequency distribution of the values`
    };
    
    return exerciseOutputData[`${lessonId}-${exampleIndex}`] || "Output would be displayed here";
  };

  const normalizeCode = (code) => {
    return code
      .replace(/\s+/g, ' ')
      .replace(/\s*<-\s*/g, '<-')
      .replace(/\s*\(\s*/g, '(')
      .replace(/\s*\)\s*/g, ')')
      .replace(/\s*,\s*/g, ',')
      .replace(/\s*=\s*/g, '=')
      .trim()
      .toLowerCase();
  };

  const checkUserCode = (userInput, expectedSolution) => {
    const normalizedUser = normalizeCode(userInput);
    const normalizedExpected = normalizeCode(expectedSolution);
    
    if (normalizedUser === normalizedExpected) {
      return { correct: true, message: "🎉 Excellent! Your code is correct!" };
    }
    
    const userLines = normalizedUser.split('\n').map(line => line.trim()).filter(line => line);
    const expectedLines = normalizedExpected.split('\n').map(line => line.trim()).filter(line => line);
    
    if (userLines.length !== expectedLines.length) {
      return { 
        correct: false, 
        message: `❌ Your code has ${userLines.length} line(s), but the expected solution has ${expectedLines.length} line(s).` 
      };
    }
    
    for (let i = 0; i < expectedLines.length; i++) {
      if (userLines[i] !== expectedLines[i]) {
        return { 
          correct: false, 
          message: `❌ Line ${i + 1} doesn't match. Expected: "${expectedLines[i]}"` 
        };
      }
    }
    
    return { correct: true, message: "🎉 Excellent! Your code is correct!" };
  };

  const runDemoCode = (lessonId, exampleIndex) => {
    const key = `${lessonId}-${exampleIndex}`;
    const expectedOutput = getDemoOutput(lessonId, exampleIndex);
    
    setDemoOutputs(prev => ({
      ...prev,
      [key]: expectedOutput
    }));
    
    setTimeout(() => {
      setDemoOutputs(prev => {
        const newOutputs = { ...prev };
        delete newOutputs[key];
        return newOutputs;
      });
    }, 8000);
  };

  const runUserCode = (lessonId, exampleIndex) => {
    const key = `${lessonId}-${exampleIndex}`;
    const userInput = userCode[key] || '';
    const expectedSolution = lessons[lessonId].examples[exampleIndex].exercise.solution;
    
    const result = checkUserCode(userInput, expectedSolution);
    
    if (result.correct) {
      const expectedOutput = getExerciseOutput(lessonId, exampleIndex);
      setUserOutputs(prev => ({
        ...prev,
        [key]: expectedOutput
      }));
      setFeedback(prev => ({
        ...prev,
        [key]: { type: 'success', message: result.message }
      }));
    } else {
      setFeedback(prev => ({
        ...prev,
        [key]: { type: 'error', message: result.message }
      }));
    }
    
    setTimeout(() => {
      setFeedback(prev => {
        const newFeedback = { ...prev };
        delete newFeedback[key];
        return newFeedback;
      });
      setUserOutputs(prev => {
        const newOutputs = { ...prev };
        delete newOutputs[key];
        return newOutputs;
      });
    }, 5000);
  };

  const showHint = (lessonId, exampleIndex) => {
    const key = `${lessonId}-${exampleIndex}`;
    const hint = lessons[lessonId].examples[exampleIndex].exercise.hint;
    setFeedback(prev => ({
      ...prev,
      [key]: { type: 'hint', message: `💡 Hint: ${hint}` }
    }));
    
    setTimeout(() => {
      setFeedback(prev => {
        const newFeedback = { ...prev };
        delete newFeedback[key];
        return newFeedback;
      });
    }, 5000);
  };

  const toggleSolution = (lessonId, exampleIndex) => {
    const key = `${lessonId}-${exampleIndex}`;
    setShowSolutions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const finishAllLessons = () => {
    setShowCongratulations(true);
  };

  const closeCongratulations = () => {
    setShowCongratulations(false);
  };

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [...new Set(lessons.map(lesson => lesson.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">A Very Basic Introduction to R Programming</h1>
                <p className="text-purple-100">Interactive lessons to learn the basics of R programming before getting started with data-related adventures!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-6 sticky top-8 border border-blue-100">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 flex items-center">
                <Book className="h-5 w-5 mr-2 text-blue-600" />
                Lessons
              </h2>
              
              {categories.map(category => (
                <div key={category} className="mb-4">
                  <button
                    onClick={() => toggleSection(category)}
                    className="w-full flex items-center justify-between p-3 text-left font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300"
                  >
                    {category}
                    {expandedSections[category] ? 
                      <ChevronDown className="h-4 w-4" /> : 
                      <ChevronRight className="h-4 w-4" />
                    }
                  </button>
                  
                  {expandedSections[category] && (
                    <div className="ml-4 space-y-1">
                      {lessons.filter(lesson => lesson.category === category).map(lesson => (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLesson(lesson.id)}
                          className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                            selectedLesson === lesson.id
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105 border-l-4 border-yellow-400'
                              : 'text-gray-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50'
                          }`}
                        >
                          {lesson.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-xl overflow-hidden border border-pink-100">
              {/* Lesson Header */}
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{lessons[selectedLesson].title}</h2>
                <p className="text-pink-100">{lessons[selectedLesson].content}</p>
                <div className="mt-4 inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-orange-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <span className="mr-1">📂</span>
                  {lessons[selectedLesson].category}
                </div>
              </div>

              {/* Examples */}
              <div className="p-6 space-y-8">
                {lessons[selectedLesson].examples.map((example, index) => (
                  <div key={index} className="border-2 border-purple-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b-2 border-purple-200">
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{example.title}</h3>
                      <p className="text-gray-700">{example.explanation}</p>
                    </div>
                    
                    {/* Code Block */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-gray-900 to-purple-900 p-6">
                        <pre className="text-green-300 text-sm font-mono overflow-x-auto">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                      
                      {/* Run Button */}
                      <button
                        onClick={() => runDemoCode(selectedLesson, index)}
                        className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <Play className="h-4 w-4" />
                        <span>Run Code</span>
                      </button>
                    </div>

                    {/* Demo Output */}
                    {demoOutputs[`${selectedLesson}-${index}`] && (
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-t-2 border-green-200 p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Output:</h4>
                        <pre className="text-sm text-green-700 bg-white p-3 rounded-lg border border-green-200 whitespace-pre-wrap shadow-inner">
                          {demoOutputs[`${selectedLesson}-${index}`]}
                        </pre>
                      </div>
                    )}

                    {/* Interactive Exercise */}
                    {example.exercise && (
                      <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 border-t-2 border-orange-200 p-6">
                        <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                          <span className="mr-2">🎯</span>
                          Try it yourself!
                        </h4>
                        <p className="text-orange-800 mb-4">{example.exercise.prompt}</p>
                        
                        <div className="space-y-3">
                          <textarea
                            value={userCode[`${selectedLesson}-${index}`] || ''}
                            onChange={(e) => setUserCode(prev => ({
                              ...prev,
                              [`${selectedLesson}-${index}`]: e.target.value
                            }))}
                            placeholder="Type your R code here..."
                            className="w-full h-24 p-3 border-2 border-orange-200 rounded-xl font-mono text-sm resize-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
                          />
                          
                          <div className="flex space-x-2 flex-wrap">
                            <button
                              onClick={() => runUserCode(selectedLesson, index)}
                              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                              <Play className="h-4 w-4" />
                              <span>Run My Code</span>
                            </button>
                            
                            <button
                              onClick={() => showHint(selectedLesson, index)}
                              className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                              💡 Hint
                            </button>

                            <button
                              onClick={() => toggleSolution(selectedLesson, index)}
                              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                              {showSolutions[`${selectedLesson}-${index}`] ? 'Hide Solution' : 'Show Solution'}
                            </button>
                          </div>

                          {/* Show Solution */}
                          {showSolutions[`${selectedLesson}-${index}`] && (
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 p-4 rounded-xl shadow-inner">
                              <h5 className="font-semibold text-purple-900 mb-2">Solution:</h5>
                              <pre className="text-sm text-purple-700 bg-white p-3 rounded-lg border border-purple-200 font-mono whitespace-pre-wrap shadow-inner">
                                {example.exercise.solution}
                              </pre>
                            </div>
                          )}

                          {/* User Code Feedback */}
                          {feedback[`${selectedLesson}-${index}`] && (
                            <div className={`p-4 rounded-xl shadow-lg ${
                              feedback[`${selectedLesson}-${index}`].type === 'success' 
                                ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-2 border-green-300' 
                                : feedback[`${selectedLesson}-${index}`].type === 'error'
                                ? 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-2 border-red-300'
                                : 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-2 border-yellow-300'
                            }`}>
                              {feedback[`${selectedLesson}-${index}`].message}
                            </div>
                          )}

                          {/* User Code Output */}
                          {userOutputs[`${selectedLesson}-${index}`] && (
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 p-4 rounded-xl shadow-lg">
                              <h5 className="font-semibold text-green-900 mb-2">Your Output:</h5>
                              <pre className="text-sm text-green-700 bg-white p-3 rounded-lg border border-green-200 whitespace-pre-wrap shadow-inner">
                                {userOutputs[`${selectedLesson}-${index}`]}
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-t-2 border-purple-200 flex justify-between items-center">
                <button
                  onClick={() => setSelectedLesson(Math.max(0, selectedLesson - 1))}
                  disabled={selectedLesson === 0}
                  className="px-4 py-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 rounded-lg hover:from-gray-400 hover:to-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Previous Lesson
                </button>
                
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Lesson {selectedLesson + 1} of {lessons.length}
                </span>
                
                {selectedLesson === lessons.length - 1 ? (
                  <button
                    onClick={finishAllLessons}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white rounded-xl hover:from-green-600 hover:via-blue-600 hover:to-purple-600 font-semibold transition-all duration-300 transform hover:scale-110 shadow-xl animate-pulse"
                  >
                    🎉 Finish All Lessons!
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedLesson(Math.min(lessons.length - 1, selectedLesson + 1))}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Next Lesson
                  </button>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">Made by Praggnya Kanungo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations Modal */}
      {showCongratulations && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-3xl shadow-2xl max-w-md w-full p-8 text-center transform animate-bounce border-4 border-purple-400">
            <div className="text-6xl mb-6 animate-pulse">🎉</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Congratulations!</h2>
            <p className="text-lg text-gray-700 mb-6">
              You've completed all the lessons and mastered the basics of R programming!
            </p>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-pulse">
              You R now ready! 🚀
            </div>
            <button
              onClick={closeCongratulations}
              className="px-8 py-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white rounded-xl hover:from-green-600 hover:via-blue-600 hover:to-purple-600 font-semibold transition-all duration-300 transform hover:scale-110 shadow-xl"
            >
              Awesome! Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RLearningSite;