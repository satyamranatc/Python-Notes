/* ==========================================================================
   PYTHON, BUT DIFFERENT — Curriculum & Story Data
   Curriculum Architect & Lead Teacher: Satyam Sir
   Pedagogy: Curiosity -> Prediction -> Surprising Experiment -> Mental Model -> Challenge
   ========================================================================== */

export const chaptersData = [
  // --------------------------------------------------------------------------
  // CHAPTER 00: Before We Learn Python (Target Depth: 4/10)
  // --------------------------------------------------------------------------
  {
    id: 0,
    number: "Chapter 00",
    title: "Before We Learn Python",
    subtitle: "Understanding what computers, bits, software, and programming languages actually are.",
    readTime: "8 min read",
    category: "basics",
    depthTag: "Concept Depth: 4/10 (Foundational Mental Model)",
    story: `
      <p class="lead-text">
        Hey. Before we write our first line of Python, let's take a step back and look around.
      </p>
      <p>
        Your phone has apps. Your laptop has software. There are operating systems, banking networks, social media, games, and now AI models that can speak, see, and write code.
      </p>
      <p>
        It feels like there's an overwhelming amount happening inside a computer. But underneath it all, computers are surprisingly simple.
      </p>
      <h3>Hardware vs. Software</h3>
      <p>
        <strong>Hardware</strong> is the physical body: the <strong>CPU</strong> (the engine that executes steps), <strong>RAM / Memory</strong> (the temporary workspace where active thoughts live), and <strong>Storage</strong> (the permanent notebook where files sit).
      </p>
      <p>
        <strong>Software</strong> is the mind: the instructions that tell that hardware what to do.
      </p>
      <p>
        At the lowest hardware level, computers work with <strong>bits</strong> — tiny electrical switches represented as <code>0</code> and <code>1</code>.
      </p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.9rem;"><code>01001000 01100101 01101100 01101100 01101111</code></pre>
      <p>
        You <em>could</em> try to program by talking directly in 0s and 1s machine code. But humans are not built to stare at binary streams and say: <em>"Ah yes, let's build an app."</em>
      </p>
      <p>
        We needed another layer. So humans created <strong>programming languages</strong> (C, C++, Java, JavaScript, Rust, Go... and <strong>Python</strong>).
      </p>
    `,
    comicPanels: [
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "Python gives us a human-friendly way to write instructions using clear words and symbols. Python lets us write print(\"Hello\") instead of typing a sea of 0s and 1s!"
      },
      {
        speaker: "riya",
        name: "Riya",
        text: "So what actually happens when I press 'Run' on Python code?"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "I am the Python Interpreter! I read your Python source code line-by-line, understand your intent, and coordinate with the Operating System, CPU, and RAM to execute it!"
      }
    ],
    explanation: `
      <h3>The True Mental Model of Execution</h3>
      <div style="background: var(--bg-paper); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; font-family: var(--font-mono); font-size: 0.9rem; text-align: center; line-height: 1.8;">
        Your Idea ➔ Python Source Code ➔ Python Interpreter / Runtime ➔ Operating System &amp; CPU ➔ Output Result
      </div>
      <p style="margin-top: 1rem;">
        An <strong>algorithm</strong> is simply a precise step-by-step recipe to solve a problem. Python executes that recipe from top to bottom, line by line.
      </p>
    `,
    interactiveCode: {
      initialCode: `# Your first Python instruction!\nprint("Hello World!")\nprint("I am instructing a computer through Python.")`,
      expectedOutput: `Hello World!\nI am instructing a computer through Python.`,
      brokenCode: `print(Hello World!)`,
      brokenExplanation: `<strong>SyntaxError / NameError</strong>: Without quotation marks, Python thinks "Hello" is a variable name in memory! Quotes tell Python: <em>"This is raw text!"</em>`
    },
    predictionQuestion: {
      question: "What will happen if you remove both quotes around \"Hello World!\" in print()?",
      options: [
        "It will print Hello World! normally",
        "Python will throw a SyntaxError / NameError because it looks for a variable",
        "The computer will turn off"
      ],
      correctIndex: 1,
      explanation: "Without quotation marks, Python thinks you are referring to a variable name in memory drawer!"
    },
    challenge: {
      prompt: "Write a line of Python code using print() that displays your own name on the screen.",
      targetKeyword: "print"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Deep interpreter internals yet",
      content: "Satyam Sir's Rule: Focus on the high-level mental model: Your Code ➔ Python Interpreter ➔ OS & Hardware ➔ Output!"
    }
  },

  // --------------------------------------------------------------------------
  // CHAPTER 01: How Does Python Remember? (Target Depth: 8/10)
  // --------------------------------------------------------------------------
  {
    id: 1,
    number: "Chapter 01",
    title: "How Does Python Remember? (Variables & Memory)",
    subtitle: "Understanding names, values, assignment, dynamic typing, and memory reassignment.",
    readTime: "10 min read",
    category: "basics",
    depthTag: "Concept Depth: 8/10 (Core Foundation)",
    story: `
      <p class="lead-text">
        Riya made the computer say "Hello". But a second later, the data vanished.
      </p>
      <p>
        "I need the computer to remember the player's name and score," Riya said. "Where does Python store things?"
      </p>
    `,
    comicPanels: [
      {
        speaker: "riya",
        name: "Riya",
        text: "Why doesn't Python remember my player's name after printing it?"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "Because you didn't give Python a labeled box in RAM to hold onto it!"
      },
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "Important mental model: A variable in Python is NOT a box that holds the number. A variable is a NAME (sticky label) that points to an OBJECT value living in RAM!"
      }
    ],
    explanation: `
      <h3>What does <code>=</code> actually mean?</h3>
      <p>
        In mathematics, <code>=</code> means "both sides are equal". But in programming, <code>=</code> is the <strong>Assignment Operator</strong>!
      </p>
      <p>
        It tells Python: <em>"Evaluate the value on the right, create that value object in memory, and stick the name on the left onto it!"</em>
      </p>

      <h3>Crucial Mental Model: Reassignment &amp; Dynamic Typing</h3>
      <p>
        Consider this code:
      </p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: 8px;"><code>age = 20\nage = 21</code></pre>
      <p>
        Did Python "change the number 20 into 21"? <strong>No!</strong> The integer object <code>20</code> still exists in memory. Python simply moved the label <code>age</code> to point to a new integer object <code>21</code>!
      </p>

      <h3>The 4 Core Data Types &amp; <code>type()</code></h3>
      <ul>
        <li><code>str</code> (String): Text inside quotes, e.g. <code>"Riya"</code></li>
        <li><code>int</code> (Integer): Whole numbers, e.g. <code>20</code></li>
        <li><code>float</code> (Float): Numbers with decimals, e.g. <code>9.5</code></li>
        <li><code>bool</code> (Boolean): <code>True</code> or <code>False</code></li>
      </ul>
      <p>
        You can inspect any variable's data type using the built-in <span class="term-link" data-id="function">type()</span> function!
      </p>

      <h3>Variable Naming Rules (snake_case)</h3>
      <p>
        Names can contain letters, numbers, and underscores <code>_</code>. They cannot start with a number or contain spaces. Python convention uses <code>snake_case</code> (e.g. <code>player_score</code>).
      </p>
    `,
    visualizerType: "variable-inspector",
    interactiveCode: {
      initialCode: `# Variable Creation & Reassignment\nage = 20\nprint("Initial Age:", age)\nprint("Data type of age:", type(age))\n\n# Reassignment (Label moves to new value!)\nage = 21\nprint("Reassigned Age:", age)\n\nname = "Riya"\nprint("Data type of name:", type(name))`,
      expectedOutput: `Initial Age: 20\nData type of age: <class 'int'>\nReassigned Age: 21\nData type of name: <class 'str'>`,
      brokenCode: `player_name = "Riya"\nprint(player_nam)`,
      brokenExplanation: `<strong>NameError: name 'player_nam' is not defined</strong><br>Python searched memory labels for 'player_nam' and found nothing! Check your spelling.`
    },
    predictionQuestion: {
      question: "If we execute: x = 10; x = 'Hello', what will type(x) return?",
      options: [
        "It will throw an error because you can't change a variable's type",
        "<class 'str'> because Python is dynamically typed",
        "<class 'int'>"
      ],
      correctIndex: 1,
      explanation: "Python features Dynamic Typing! A variable name can be reassigned from an integer to a string seamlessly."
    },
    challenge: {
      prompt: "Create a variable named user_score with value 100, then print both user_score and type(user_score).",
      targetKeyword: "user_score"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Variable containers as rigid boxes",
      content: "Satyam Sir's Golden Rule: Remember that variable names are just sticky note labels pointing to objects in RAM memory!"
    }
  },

  // --------------------------------------------------------------------------
  // CHAPTER 02: The Secret Powers of print() (Target Depth: 5/10)
  // --------------------------------------------------------------------------
  {
    id: 2,
    number: "Chapter 02",
    title: "The Secret Powers of print(): Arguments, sep, & end",
    subtitle: "Unlocking print()'s parameters progressively without overwhelming yourself.",
    readTime: "6 min read",
    category: "basics",
    depthTag: "Concept Depth: 5/10 (Focused Output Mastery)",
    story: `
      <p class="lead-text">
        Riya noticed something interesting. Whenever she printed multiple items separated by commas like <code>print("Score:", 100)</code>, Python automatically put a space between them.
      </p>
      <p>
        And whenever she called two separate <code>print()</code> statements, the second print statement always jumped to a brand new line underneath!
      </p>
    `,
    comicPanels: [
      {
        speaker: "riya",
        name: "Riya",
        text: "Satyam Sir, why does print() automatically add spaces between comma items and jump to a new line every single time?"
      },
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "Because print() has two secret default parameters: sep=' ' (separator) and end='\\n' (newline)! You can override them whenever you want!"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "Try print('19', '09', '2026', sep='-') and I'll join them with dashes instead of spaces!"
      }
    ],
    explanation: `
      <h3>Progressive Breakdown of <code>print()</code></h3>
      
      <p><strong>1. Single String</strong>:</p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.5rem 0.75rem;"><code>print("Hello")</code></pre>

      <p><strong>2. Multiple Items (Comma Separated)</strong>:</p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.5rem 0.75rem;"><code>print("Hello", "Riya")  # Output: Hello Riya</code></pre>

      <p><strong>3. Mixing Text &amp; Variables</strong>:</p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.5rem 0.75rem;"><code>name = "Riya"\nage = 20\nprint("Name:", name, "Age:", age)</code></pre>

      <p><strong>4. Custom Separator (<code>sep</code>)</strong>:</p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.5rem 0.75rem;"><code>print("A", "B", "C", sep="-")  # Output: A-B-C</code></pre>

      <p><strong>5. Custom End Character (<code>end</code>)</strong>:</p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.5rem 0.75rem;"><code>print("Hello", end=" ")\nprint("World")  # Output: Hello World (same line!)</code></pre>

      <p><strong>6. Modern f-strings (Formatted Strings)</strong>:</p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.5rem 0.75rem;"><code>print(f"Player {name} is {age} years old.")</code></pre>
    `,
    interactiveCode: {
      initialCode: `# 1. Comma separation\nprint("Name:", "Riya", "Level:", 5)\n\n# 2. Custom sep\nprint("2026", "09", "19", sep="-")\n\n# 3. Custom end\nprint("Loading", end="... ")\nprint("DONE!")\n\n# 4. f-string\nscore = 350\nprint(f"Final Score: {score}")`,
      expectedOutput: `Name: Riya Level: 5\n2026-09-19\nLoading... DONE!\nFinal Score: 350`,
      brokenCode: `print("Name:", name sep="-")`,
      brokenExplanation: `<strong>SyntaxError: invalid syntax</strong><br>Arguments inside <code>print()</code> must be separated by commas! Correct: <code>print("Name:", name, sep="-")</code>`
    },
    predictionQuestion: {
      question: "What will print('A', 'B', end='!') followed by print('C') output?",
      options: [
        "A B\nC!",
        "A B!C",
        "A-B-C"
      ],
      correctIndex: 1,
      explanation: "end='!' replaces the newline character with '!', so 'C' prints immediately on the same line right after '!'!"
    },
    challenge: {
      prompt: "Use print() with sep=':' to print 'Time', '10', '30'.",
      targetKeyword: "sep"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Obscure print arguments",
      content: "Satyam Sir's Rule: Focus on mastering <code>sep</code>, <code>end</code>, and f-strings <code>f\"...{var}...\"</code>."
    }
  },

  // --------------------------------------------------------------------------
  // CHAPTER 03: Operators (Target Depth: 8/10)
  // --------------------------------------------------------------------------
  {
    id: 3,
    number: "Chapter 03",
    title: "Operators & Logic (Arithmetic, Comparison, Logical, Assignment)",
    subtitle: "Mastering Python's decision engines and the critical distinction between = and ==.",
    readTime: "9 min read",
    category: "logic",
    depthTag: "Concept Depth: 8/10 (Core Logic Foundation)",
    story: `
      <p class="lead-text">
        Now that Riya mastered variables and formatting print output, she wanted her game to calculate damage, check coin balances, and decide if the player won.
      </p>
    `,
    comicPanels: [
      {
        speaker: "riya",
        name: "Riya",
        text: "Can Python do math and compare scores for me?"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "Python is a supercalculator! Use + - * / for math, and > < == != for decisions!"
      },
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "Pay extreme attention to the difference between single = and double ==! Single = saves a value into a variable label. Double == asks Python a question: 'Are these two things equal?'"
      }
    ],
    explanation: `
      <h3>1. Arithmetic Operators</h3>
      <p><code>+</code> (Add), <code>-</code> (Subtract), <code>*</code> (Multiply), <code>/</code> (Float Divide), <code>//</code> (Floor Divide), <code>%</code> (Modulo / Remainder), <code>**</code> (Power / Exponent).</p>

      <h3>2. Comparison Operators (Return <code>True</code> or <code>False</code>)</h3>
      <p><code>==</code> (Equal to), <code>!=</code> (Not equal to), <code>&gt;</code> (Greater than), <code>&lt;</code> (Less than), <code>&gt;=</code> (Greater or equal), <code>&lt;=</code> (Less or equal).</p>

      <h3>3. Logical Operators</h3>
      <p><code>and</code> (True if BOTH are true), <code>or</code> (True if AT LEAST ONE is true), <code>not</code> (Flips True to False).</p>

      <h3>4. Augmented Assignment Operators</h3>
      <p><code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code> (Shortcut to update a variable, e.g. <code>score += 10</code> is short for <code>score = score + 10</code>).</p>
    `,
    interactiveCode: {
      initialCode: `coins = 50\ncoins += 25  # Shortcut for coins = coins + 25\nprint(f"Total Coins: {coins}")\n\n# Comparison asking a question:\nis_rich = coins >= 70\nprint("Is player rich?", is_rich)\n\n# Logical Operators:\nhas_key = True\nhas_energy = True\ncan_open_door = has_key and has_energy\nprint("Can open door?", can_open_door)`,
      expectedOutput: `Total Coins: 75\nIs player rich? True\nCan open door? True`
    },
    predictionQuestion: {
      question: "What is the output of 10 % 3?",
      options: [
        "3.33",
        "1 (the remainder after division)",
        "3"
      ],
      correctIndex: 1,
      explanation: "Modulo % gives the remainder after integer division! 3 goes into 10 three times (9) leaving 1 remainder."
    },
    challenge: {
      prompt: "Create a variable score = 50, use score += 20, then print whether score > 60.",
      targetKeyword: "+="
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Operator precedence tables",
      content: "Satyam Sir's Rule: When in doubt, use parentheses <code>(a + b) * c</code> to make your intent 100% clear!"
    }
  },

  // --------------------------------------------------------------------------
  // CHAPTER 04: Types, Input & Typecasting (Target Depth: 7/10)
  // --------------------------------------------------------------------------
  {
    id: 4,
    number: "Chapter 04",
    title: "Typecasting: Mixing Incompatible Universes",
    subtitle: "Why adding '20' + 5 causes a crash, and why type conversion isn't magical.",
    readTime: "8 min read",
    category: "logic",
    depthTag: "Concept Depth: 7/10 (Input & Type Mastery)",
    story: `
      <p class="lead-text">
        Riya wanted to ask the player for their age using <code>input()</code> and calculate how old they will be in 5 years.
      </p>
      <p>
        She wrote: <code>age = input("Enter your age: ")</code>. The user typed <code>20</code>. Then Riya tried to do <code>age + 5</code>.
      </p>
      <p>
        Suddenly, a scary red message exploded on her screen!
      </p>
    `,
    comicPanels: [
      {
        speaker: "riya",
        name: "Riya",
        text: "AAAH! Python broke! It says: TypeError: can only concatenate str (not 'int') to str!"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "Python didn't break! Python is protecting you. input() ALWAYS returns a string (text), even if the user typed numbers!"
      },
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "You can't add text '20' + 5. You must convert text '20' into integer 20 using int(). That process is called Typecasting!"
      }
    ],
    explanation: `
      <h3>Conversion Functions</h3>
      <ul>
        <li><code>int("20")</code> ➔ Converts string text <code>"20"</code> into integer <code>20</code></li>
        <li><code>float("9.5")</code> ➔ Converts string text into decimal <code>9.5</code></li>
        <li><code>str(100)</code> ➔ Converts integer <code>100</code> into string <code>"100"</code></li>
        <li><code>bool(1)</code> ➔ Converts <code>1</code> to <code>True</code>, and <code>bool(0)</code> to <code>False</code></li>
      </ul>

      <h3>Conversion Isn't Magic!</h3>
      <p>
        What happens if you try <code>int("hello")</code>?
      </p>
      <pre style="font-family: var(--font-mono); background: #FEF2F2; color: #991B1B; padding: 0.75rem 1rem; border-radius: 8px;"><code>ValueError: invalid literal for int() with base 10: 'hello'</code></pre>
      <p>
        Python cannot magically turn arbitrary text words into numbers! Typecasting requires valid literal representations.
      </p>
    `,
    interactiveCode: {
      initialCode: `# Satyam Sir's Input & Typecast Pattern\nage_str = "20"  # Simulating user input()\n\n# Convert text string to integer number:\nage_num = int(age_str)\n\nfuture_age = age_num + 5\nprint(f"In 5 years, you will be: {future_age}")\n\n# Combining input() and int() in one line:\nscore = int("100") + 50\nprint(f"Updated score: {score}")`,
      expectedOutput: `In 5 years, you will be: 25\nUpdated score: 150`,
      brokenCode: `text = "hello"\nnumber = int(text)`,
      brokenExplanation: `<strong>ValueError: invalid literal for int()</strong><br>Typecasting is not magic! Python cannot turn word text 'hello' into a whole integer number.`
    },
    predictionQuestion: {
      question: "What will int('25') + int('5') output?",
      options: [
        "255",
        "30",
        "TypeError"
      ],
      correctIndex: 1,
      explanation: "Both string texts are converted into real integer numbers (25 + 5), resulting in 30!"
    },
    challenge: {
      prompt: "Convert the string variable val = '45' to an integer using int() and print val + 5.",
      targetKeyword: "int"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Obscure base conversions in int()",
      content: "Satyam Sir's Rule: Master <code>int(x)</code>, <code>str(x)</code>, <code>float(x)</code>, and <code>bool(x)</code>."
    }
  },

  // --------------------------------------------------------------------------
  // CHAPTER 05: Thinking Like a Programmer (Conditions & Logic)
  // --------------------------------------------------------------------------
  {
    id: 5,
    number: "Chapter 05",
    title: "Thinking Like a Programmer: Decisions (if / else)",
    subtitle: "Moving from syntax transcription to real-world problem decomposition.",
    readTime: "9 min read",
    category: "logic",
    depthTag: "Concept Depth: 9/10 (Programming Thinking)",
    story: `
      <p class="lead-text">
        Satyam Sir walked up to the whiteboard and wrote a real-world problem:
      </p>
      <p>
        <em>"A school wants to evaluate student exam marks. If the student scores 40 or higher, print 'Passed'. Otherwise, print 'Failed'."</em>
      </p>
    `,
    comicPanels: [
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "Don't jump straight into typing code! First, break the problem into human thinking steps: 1. Get marks. 2. Compare marks >= 40. 3. Make a choice!"
      },
      {
        speaker: "riya",
        name: "Riya",
        text: "So the logic pipeline is: Input ➔ Decision Check ➔ Action A or Action B!"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "And Python represents that decision check using 'if condition:' followed by 4 indented spaces!"
      }
    ],
    explanation: `
      <h3>Problem Decomposition Pipeline</h3>
      <div style="background: var(--bg-paper); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; font-family: var(--font-mono); font-size: 0.88rem; line-height: 1.8;">
        Real Problem ➔ Human Logic Pipeline ➔ Pseudocode Steps ➔ Python if/else Syntax
      </div>

      <h3 style="margin-top: 1.5rem;">Python Decision Syntax</h3>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: 8px;"><code>marks = 65\n\nif marks >= 40:\n    print("Passed")\nelse:\n    print("Failed")</code></pre>
      
      <p>
        Notice the <strong>colon <code>:</code></strong> at the end of the <code>if</code> and <code>else</code> lines, followed by <strong>4 indented spaces</strong>. Indentation defines which code blocks belong to which decision outcome!
      </p>
    `,
    interactiveCode: {
      initialCode: `marks = 65\n\nif marks >= 40:\n    print("Result: Student Passed! 🎉")\nelse:\n    print("Result: Student Failed. Need retake.")\n\n# Multiple decisions with elif:\nscore = 85\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelse:\n    print("Grade: C")`,
      expectedOutput: `Result: Student Passed! 🎉\nGrade: B`
    },
    predictionQuestion: {
      question: "If marks = 35, what will print in the if/else block above?",
      options: [
        "Result: Student Passed! 🎉",
        "Result: Student Failed. Need retake.",
        "Nothing will print"
      ],
      correctIndex: 1,
      explanation: "35 >= 40 is False, so Python skips the if block and executes the indented else block!"
    },
    challenge: {
      prompt: "Write an if/else statement checking if age >= 18. If true, print 'Adult', else print 'Minor'.",
      targetKeyword: "if"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Rigid syntax templates",
      content: "Satyam Sir's Rule: Focus on the human decision pipeline first: Understand ➔ Decompose ➔ Logic ➔ Code!"
    }
  }
];
