/* ==========================================================================
   PYTHON, BUT DIFFERENT — Curriculum & Story Data
   Curriculum Architect & Lead Teacher: Satyam Sir
   Reference: Python For Beginners - 1 & Python Crash Course
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
        text: "Python gives us a human-friendly way to write instructions using clear words and symbols. Python lets us write print(\"Hello, World!\") instead of typing a sea of 0s and 1s!"
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
        Your Idea ➔ Python Source Code ➔ Python Interpreter ➔ Operating System &amp; CPU ➔ Output Result
      </div>
      <p style="margin-top: 1rem;">
        An <strong>algorithm</strong> is simply a precise step-by-step recipe to solve a problem. Python executes that recipe from top to bottom, line by line.
      </p>
    `,
    interactiveCode: {
      initialCode: `# 1. Printing Output\nprint("Hello, World!")\nprint("Welcome to Python For Beginners with Satyam Sir!")`,
      expectedOutput: `Hello, World!\nWelcome to Python For Beginners with Satyam Sir!`,
      brokenCode: `print(Hello, World!)`,
      brokenExplanation: `<strong>SyntaxError / NameError</strong>: Without quotation marks, Python thinks "Hello" is a variable name in memory! Quotes tell Python: <em>"This is raw text string!"</em>`
    },
    predictionQuestion: {
      question: "What will happen if you remove both quotes around \"Hello, World!\" in print()?",
      options: [
        "It will print Hello, World! normally",
        "Python will throw a SyntaxError / NameError because it looks for a variable",
        "The computer will turn off"
      ],
      correctIndex: 1,
      explanation: "Without quotation marks, Python thinks you are referring to a variable name in memory drawer!"
    },
    challenge: {
      prompt: "Write a line of Python code using print() that displays 'Hello, World!'.",
      targetKeyword: "print"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Deep interpreter internals yet",
      content: "Satyam Sir's Rule: Focus on the high-level mental model: Your Code ➔ Python Interpreter ➔ OS & Hardware ➔ Output!"
    }
  },

  // --------------------------------------------------------------------------
  // CHAPTER 01: Variables, Types & Naming Rules (Target Depth: 8/10)
  // --------------------------------------------------------------------------
  {
    id: 1,
    number: "Chapter 01",
    title: "Variables, Data Types & Naming Conventions",
    subtitle: "Creating valid variables, snake_case, constants, and RAM object allocation.",
    readTime: "10 min read",
    category: "basics",
    depthTag: "Concept Depth: 8/10 (Core Foundation)",
    story: `
      <p class="lead-text">
        Riya created her first variable. But when she tried to name a variable <code>1user</code>, Python refused to run her code!
      </p>
      <p>
        "Why is Python rejecting my variable name?" Riya asked.
      </p>
    `,
    comicPanels: [
      {
        speaker: "riya",
        name: "Riya",
        text: "Satyam Sir, why did Python accept user1 = 'Bob' but reject 1user = 'Charlie'?"
      },
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "Because Python has strict Variable Naming Rules! Variable names MUST start with a letter or an underscore (_), NEVER a number!"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "Also, Python is Case-Sensitive! age and Age are two completely different variable drawers in memory!"
      }
    ],
    explanation: `
      <h3>1. Data Types Overview</h3>
      <ul>
        <li><code>message = "Hello, World!"</code> ➔ <strong>String (str)</strong></li>
        <li><code>number = 10</code> ➔ <strong>Integer (int)</strong></li>
        <li><code>pi = 3.14</code> ➔ <strong>Float (float)</strong></li>
      </ul>

      <h3>2. Valid vs. Invalid Variable Names</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <div style="background: #ECFDF5; border: 1px solid #A7F3D0; padding: 1rem; border-radius: 8px;">
          <strong style="color: #065F46;">✅ Valid Examples:</strong>
          <pre style="font-family: var(--font-mono); font-size: 0.85rem; margin-top: 0.5rem;"><code>name = "Alice"\n_age = 25\nuser1 = "Bob"\nuser_age = 30</code></pre>
        </div>
        <div style="background: #FEF2F2; border: 1px solid #FCA5A5; padding: 1rem; border-radius: 8px;">
          <strong style="color: #991B1B;">❌ Invalid Examples:</strong>
          <pre style="font-family: var(--font-mono); font-size: 0.85rem; margin-top: 0.5rem;"><code>1user = "Charlie"  # Starts with number\nuser-name = "Dave" # Contains hyphen</code></pre>
        </div>
      </div>

      <h3>3. Naming Conventions (Satyam Sir's Standard)</h3>
      <ul>
        <li><strong>Meaningful Names</strong>: Use <code>user_age</code> instead of vague shortcuts like <code>ua</code>.</li>
        <li><strong>snake_case</strong>: Join multiple words with underscores (e.g. <code>user_score</code>).</li>
        <li><strong>Constants (ALL_CAPS)</strong>: Fixed constant values use UPPERCASE (e.g. <code>MAX_CONNECTIONS = 5</code>).</li>
      </ul>
    `,
    visualizerType: "variable-inspector",
    interactiveCode: {
      initialCode: `# Valid Variable Declarations\nmessage = "Hello, World!"  # String\nnumber = 10                # Integer\npi = 3.14                  # Float\n\n# Naming Conventions\nuser_age = 30              # snake_case\nMAX_CONNECTIONS = 5        # ALL_CAPS Constant\n\nprint(message)\nprint("User Age:", user_age)\nprint("Max Connections:", MAX_CONNECTIONS)`,
      expectedOutput: `Hello, World!\nUser Age: 30\nMax Connections: 5`,
      brokenCode: `1user = "Charlie"`,
      brokenExplanation: `<strong>SyntaxError: invalid syntax</strong><br>Variable names cannot start with a number! Rename <code>1user</code> to <code>user1</code> or <code>_1user</code>.`
    },
    predictionQuestion: {
      question: "Which of the following is a valid Python variable name?",
      options: [
        "2nd_place",
        "user-email",
        "_user_age"
      ],
      correctIndex: 2,
      explanation: "Variable names can start with letters or an underscore (_), but NEVER numbers or hyphens (-)."
    },
    challenge: {
      prompt: "Create a valid snake_case variable named user_age with value 25 and print it.",
      targetKeyword: "user_age"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Overly cryptic variable names",
      content: "Satyam Sir's Rule: Code is read 10x more often than written! Use meaningful snake_case names."
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
  // CHAPTER 03: Operators Basics (Target Depth: 8/10)
  // --------------------------------------------------------------------------
  {
    id: 3,
    number: "Chapter 03",
    title: "Operators Basics (Arithmetic, Comparison, Logical)",
    subtitle: "Complete operator reference and the crucial distinction between = and ==.",
    readTime: "9 min read",
    category: "logic",
    depthTag: "Concept Depth: 8/10 (Operators Foundation)",
    story: `
      <p class="lead-text">
        Now that Riya mastered storing variables, she wanted her game to calculate health points, damage multipliers, and evaluate win conditions.
      </p>
    `,
    comicPanels: [
      {
        speaker: "riya",
        name: "Riya",
        text: "Satyam Sir, how do I calculate floor division or exponentiation in Python?"
      },
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "Use ** for exponentiation (powers) and // for floor division (integer division without decimals)! And use % for modulus (remainder)."
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "Here is your quick operator cheat sheet!"
      }
    ],
    explanation: `
      <h3>1. Arithmetic Operators (x = 5, y = 2)</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-family: var(--font-mono); font-size: 0.88rem;">
        <thead>
          <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-color);">
            <th style="padding: 0.5rem; text-align: left;">Operation</th>
            <th style="padding: 0.5rem; text-align: left;">Syntax</th>
            <th style="padding: 0.5rem; text-align: left;">Result (x=5, y=2)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 0.4rem;">Addition</td><td>x + y</td><td>7</td></tr>
          <tr><td style="padding: 0.4rem;">Subtraction</td><td>x - y</td><td>3</td></tr>
          <tr><td style="padding: 0.4rem;">Multiplication</td><td>x * y</td><td>10</td></tr>
          <tr><td style="padding: 0.4rem;">Division</td><td>x / y</td><td>2.5</td></tr>
          <tr><td style="padding: 0.4rem;">Modulus (Remainder)</td><td>x % y</td><td>1</td></tr>
          <tr><td style="padding: 0.4rem;">Exponentiation</td><td>x ** y</td><td>25</td></tr>
          <tr><td style="padding: 0.4rem;">Floor Division</td><td>x // y</td><td>2</td></tr>
        </tbody>
      </table>

      <h3>2. Comparison Operators (a = 10, b = 20)</h3>
      <ul>
        <li><code>a == b</code> ➔ <strong>Equal to</strong>: <code>False</code> (Single <code>=</code> assigns; double <code>==</code> compares!)</li>
        <li><code>a != b</code> ➔ <strong>Not equal to</strong>: <code>True</code></li>
        <li><code>a &gt; b</code> ➔ <strong>Greater than</strong>: <code>False</code></li>
        <li><code>a &lt; b</code> ➔ <strong>Less than</strong>: <code>True</code></li>
        <li><code>a &gt;= b</code> ➔ <strong>Greater than or equal to</strong>: <code>False</code></li>
        <li><code>a &lt;= b</code> ➔ <strong>Less than or equal to</strong>: <code>True</code></li>
      </ul>

      <h3>3. Logical Operators (a = True, b = False)</h3>
      <ul>
        <li><code>a and b</code> ➔ <strong>Logical AND</strong>: <code>False</code> (BOTH must be True)</li>
        <li><code>a or b</code> ➔ <strong>Logical OR</strong>: <code>True</code> (AT LEAST ONE is True)</li>
        <li><code>not a</code> ➔ <strong>Logical NOT</strong>: <code>False</code> (Flips boolean)</li>
      </ul>
    `,
    interactiveCode: {
      initialCode: `# Arithmetic Operators\nx = 5\ny = 2\nprint("Addition:", x + y)\nprint("Floor Division:", x // y)\nprint("Modulus:", x % y)\nprint("Exponentiation:", x ** y)\n\n# Comparison Operators\na = 10\nb = 20\nprint("a == b:", a == b)\nprint("a != b:", a != b)\n\n# Logical Operators\nprint("a > 5 and b > 15:", a > 5 and b > 15)`,
      expectedOutput: `Addition: 7\nFloor Division: 2\nModulus: 1\nExponentiation: 25\na == b: False\na != b: True\na > 5 and b > 15: True`
    },
    predictionQuestion: {
      question: "What will 5 ** 2 output in Python?",
      options: [
        "10",
        "25 (5 raised to the power of 2)",
        "2.5"
      ],
      correctIndex: 1,
      explanation: "** is the Exponentiation operator! 5 ** 2 means 5 * 5 = 25."
    },
    challenge: {
      prompt: "Write code calculating 7 // 2 (Floor Division) and print the result.",
      targetKeyword: "//"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Operator precedence tables",
      content: "Satyam Sir's Rule: Use parentheses (a + b) * c whenever you want to be 100% clear!"
    }
  },

  // --------------------------------------------------------------------------
  // CHAPTER 04: Flow Control (if, if-else) (Target Depth: 7/10)
  // --------------------------------------------------------------------------
  {
    id: 4,
    number: "Chapter 04",
    title: "Flow Control (if & if-else Statements)",
    subtitle: "Executing code based on conditions and decision branches.",
    readTime: "8 min read",
    category: "logic",
    depthTag: "Concept Depth: 7/10 (Flow Control Mastery)",
    story: `
      <p class="lead-text">
        Riya was building a user registration check. If a user is 18 or older, they are an adult. Otherwise, they are a minor.
      </p>
    `,
    comicPanels: [
      {
        speaker: "riya",
        name: "Riya",
        text: "How do I make Python branch into different execution paths depending on user age?"
      },
      {
        speaker: "sr",
        name: "Satyam Sir",
        text: "Use Flow Control statements! The if statement checks a boolean condition. If true, it runs the indented code. The else statement handles everything else!"
      }
    ],
    explanation: `
      <h3>1. Simple <code>if</code> Statement</h3>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: 8px;"><code>age = 18\nif age >= 18:\n    print("You are an adult.")</code></pre>

      <h3>2. <code>if-else</code> Statement</h3>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: 8px;"><code>age = 17\nif age >= 18:\n    print("You are an adult.")\nelse:\n    print("You are a minor.")</code></pre>

      <p style="margin-top: 1rem;">
        <strong>Remember</strong>: Always place a colon <code>:</code> at the end of decision lines, and indent the statements underneath by 4 spaces!
      </p>
    `,
    interactiveCode: {
      initialCode: `# Flow Control Demo\nage = 17\n\nif age >= 18:\n    print("You are an adult.")\nelse:\n    print("You are a minor.")`,
      expectedOutput: `You are a minor.`
    },
    predictionQuestion: {
      question: "If age = 20, which print statement will execute?",
      options: [
        "You are an adult.",
        "You are a minor.",
        "Neither"
      ],
      correctIndex: 0,
      explanation: "20 >= 18 is True, so Python executes the if block and prints 'You are an adult.'!"
    },
    challenge: {
      prompt: "Write an if-else statement checking if score >= 50. Print 'Pass' if true, else 'Fail'.",
      targetKeyword: "if"
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Deep nested branching yet",
      content: "Satyam Sir's Rule: Master clean single-level if-else blocks before nesting!"
    }
  }
];
