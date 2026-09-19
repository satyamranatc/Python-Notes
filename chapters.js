/* ==========================================================================
   PYTHON, BUT DIFFERENT — Chapter Story Content & Comic Dialogues
   Story Characters: Riya (Learner), Byte (Computer Guide), Satyam Rana / SR (Teacher)
   ========================================================================== */

export const chaptersData = [
  {
    id: 0,
    number: "Chapter 00",
    title: "Before We Learn Python",
    subtitle: "Taking a step back before writing our first line of code.",
    readTime: "5 min read",
    category: "basics",
    story: `
      <p class="lead-text">
        Hey.
      </p>
      <p>
        Before we write our first line of Python, let's take a step back.
      </p>
      <p>
        Look around you.
      </p>
      <p>
        Your phone has apps. Your laptop has software. There are websites, games, operating systems, banking apps, social media, and now AI systems that can talk, see, create images, write code and do all kinds of things.
      </p>
      <p>
        It can feel like there is a huge amount happening inside a computer. But underneath all of it, computers are surprisingly simple.
      </p>
      <p>
        At the lowest level, computers work with <strong>bits</strong> — tiny pieces of information represented as <code>0</code> and <code>1</code>.
      </p>
      <p>
        Something like:
      </p>
      <pre style="font-family: var(--font-mono); background: var(--bg-subtle); padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.9rem; margin-bottom: 1.25rem;"><code>01001000 01100101 01101100 01101100 01101111</code></pre>
      <p>
        You <em>could</em> try to learn programming by talking directly in 0s and 1s.
      </p>
      <p>
        But... please don't.
      </p>
      <p>
        Humans are not very good at looking at <code>01001000 01100101 01101100 01101100 01101111</code> and thinking:
      </p>
      <blockquote class="editorial-quote" style="font-size: 1.25rem; margin: 1.5rem 0;">
        "Ah yes. Let's build an app."
      </blockquote>
      <p>
        We needed another layer. So humans created <strong>programming languages</strong>.
      </p>
      <p>
        Programming languages give us a way to describe what we want a computer to do using words, symbols and rules that are much easier for humans to understand.
      </p>
      <p>
        There are many programming languages: <strong>C, C++, Java, JavaScript, Rust, Go...</strong>
      </p>
      <p>
        And the one we're going to spend a lot of time with: <strong>Python</strong>.
      </p>
    `,
    comicPanels: [
      {
        speaker: "sr",
        name: "Satyam Rana (SR)",
        text: "Python lets us write print(\"Hello\") instead of trying to communicate directly with a machine using a sea of 0s and 1s. And that tiny line is where our journey begins."
      },
      {
        speaker: "riya",
        name: "Riya",
        text: "Wait... so Python is like the human bridge between my thoughts and the computer's 0s and 1s?"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "Exactly! I take your Python print(\"Hello\") recipe and translate it into electrical pulses for CPU silicon in milliseconds."
      },
      {
        speaker: "sr",
        name: "Satyam Rana (SR)",
        text: "But before we start writing Python, there's one more question: What actually happens between our code and the computer? That's where things get interesting."
      }
    ],
    explanation: `
      <p>
        <strong>Programming</strong> is giving a computer a step-by-step recipe. 
        Python reads your recipe line by line from top to bottom.
      </p>
      <p>
        Your very first instruction is <span class="term-link" data-id="function">print()</span> — which tells Python to display text on your screen.
      </p>
    `,
    interactiveCode: {
      initialCode: `# Your first step into programming with Satyam Rana (SR)\nprint("Hello World!")\nprint("I am communicating with a computer through Python.")`,
      expectedOutput: `Hello World!\nI am communicating with a computer through Python.`,
      brokenCode: `print(Hello World!)`,
      brokenExplanation: `<strong>SyntaxError / NameError: name 'Hello' is not defined</strong><br>Without quotation marks, Python thinks "Hello" is a variable label inside memory! Quotes tell Python: <em>"This is raw text string!"</em>`
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: 0s and 1s binary translation",
      content: "Satyam's Rule: You don't need to memorize binary code. Focus on expressing clear instructions!"
    },
    underHood: {
      title: "UNDER THE HOOD: What happens between Python code and the CPU?",
      content: "Your text goes to the Python Interpreter, which compiles it into bytecode (.pyc), which CPU hardware executes as electrical pulses!"
    }
  },

  {
    id: 1,
    number: "Chapter 01",
    title: "How Does Python Remember?",
    subtitle: "Introducing Variables as labeled boxes in memory and the 4 basic Data Types.",
    readTime: "6 min read",
    category: "basics",
    story: `
      <p class="lead-text">
        Riya managed to make the computer say "Hello". But a second later, the computer forgot everything.
      </p>
      <p>
        "I need the computer to remember the user's name and score," Riya said. "Where does it store things?"
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
        name: "Satyam Rana (SR)",
        text: "Think of memory like a cabinet of drawers. When you write player_name = \"Riya\", Python creates a new drawer in RAM and sticks the label 'player_name' right on the front!"
      },
      {
        speaker: "riya",
        name: "Riya",
        text: "Aha! So player_name is the variable label, and \"Riya\" is the value stored inside!"
      }
    ],
    explanation: `
      <p>
        Satyam breaks down the 4 core Python data types every programmer starts with:
      </p>
      <ul>
        <li><strong>String (str)</strong>: Text inside quotes, e.g. <code>"Riya"</code></li>
        <li><strong>Integer (int)</strong>: Whole numbers, e.g. <code>25</code></li>
        <li><strong>Float (float)</strong>: Numbers with decimals, e.g. <code>9.5</code></li>
        <li><strong>Boolean (bool)</strong>: Yes/No switches, e.g. <code>True</code> or <code>False</code></li>
      </ul>
    `,
    visualizerType: "variable-inspector",
    interactiveCode: {
      initialCode: `player_name = "Riya"\nplayer_score = 100\nteacher = "Satyam Rana (SR)"\n\nprint("Player Name:")\nprint(player_name)\nprint("Guided by Teacher:")\nprint(teacher)`,
      expectedOutput: `Player Name:\nRiya\nGuided by Teacher:\nSatyam Rana (SR)`,
      brokenCode: `player_name = "Riya"\nprint(player_nam)`,
      brokenExplanation: `<strong>NameError: name 'player_nam' is not defined</strong><br>Python checked its memory cabinet for 'player_nam' and found nothing! Check your spelling.`
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Data Type definitions",
      content: "Satyam's Rule: Just ask yourself: Is this text, a whole number, a decimal number, or a yes/no switch?"
    }
  },

  {
    id: 2,
    number: "Chapter 02",
    title: "Python Can Do Math & Magic (Operators)",
    subtitle: "How Python calculates scores, health points, remainders, and comparisons.",
    readTime: "6 min read",
    category: "logic",
    story: `
      <p class="lead-text">
        Now that Riya knew how to store numbers, she wanted her game to calculate damage, double coins, and check if the player won.
      </p>
    `,
    comicPanels: [
      {
        speaker: "riya",
        name: "Riya",
        text: "Can Python do math for me? What happens if I multiply coins by 2?"
      },
      {
        speaker: "byte",
        name: "Byte",
        text: "Python is a supercalculator! Use + for addition, - for subtraction, * for multiplication, and / for division."
      },
      {
        speaker: "sr",
        name: "Satyam Rana (SR)",
        text: "Pay special attention to % (Modulo). It doesn't calculate percentage — it gives you the REMAINDER after division! 10 % 3 equals 1 because 3 fits into 10 three times with 1 left over."
      }
    ],
    explanation: `
      <p>
        Satyam highlights two main operator families:
      </p>
      <h3>1. Arithmetic Operators</h3>
      <p><code>+</code> (Add), <code>-</code> (Subtract), <code>*</code> (Multiply), <code>/</code> (Divide), <code>//</code> (Floor division without decimals), <code>%</code> (Remainder), <code>**</code> (Exponent/Power).</p>
      
      <h3>2. Comparison Operators</h3>
      <p><code>==</code> (Equal to), <code>!=</code> (Not equal to), <code>&gt;</code> (Greater than), <code>&lt;</code> (Less than).</p>
    `,
    interactiveCode: {
      initialCode: `coins = 50\nmultiplier = 3\n\ntotal_coins = coins * multiplier\nprint("Total Coins Collected:")\nprint(total_coins)\n\n# Ask Python if player has more than 100 coins\nprint("Is player rich?")\nprint(total_coins > 100)`,
      expectedOutput: `Total Coins Collected:\n150\nIs player rich?\nTrue`
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Difference between = and ==",
      content: "Satyam's Golden Rule: Single <code>=</code> is for SAVING into a drawer. Double <code>==</code> is for ASKING A QUESTION: 'Are these two equal?'"
    }
  },

  {
    id: 3,
    number: "Chapter 03",
    title: "Typecasting: Mixing Incompatible Universes",
    subtitle: "Why adding '20' + 5 causes an explosion, and how int(), str(), float() fix it.",
    readTime: "7 min read",
    category: "logic",
    story: `
      <p class="lead-text">
        Riya wanted to ask the player for their age and calculate how many years until they turn 100.
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
        text: "Python didn't break! Python is trying to protect you. input() ALWAYS returns a string (text), even if the user typed numbers!"
      },
      {
        speaker: "sr",
        name: "Satyam Rana (SR)",
        text: "Think of it like trying to plug a garden hose directly into a USB port. You can't add text '20' + 5. You must convert text '20' into integer 20 using int(). That process is called Typecasting!"
      }
    ],
    explanation: `
      <p>
        <strong>Typecasting</strong> is converting a value from one data type to another:
      </p>
      <ul>
        <li><code>int("20")</code> ➔ Converts string text <code>"20"</code> into integer <code>20</code></li>
        <li><code>str(100)</code> ➔ Converts integer number <code>100</code> into string text <code>"100"</code></li>
        <li><code>float("9.5")</code> ➔ Converts string text into decimal number <code>9.5</code></li>
      </ul>
    `,
    interactiveCode: {
      initialCode: `# Satyam's Typecast Solution!\nage_text = "20"  # String text\n\n# Convert text into integer number:\nage_number = int(age_text)\n\nfuture_age = age_number + 5\nprint("In 5 years, you will be:")\nprint(future_age)\n\n# Convert back to string for printing:\nprint("Message: You are " + str(future_age) + " years old.")`,
      expectedOutput: `In 5 years, you will be:\n25\nMessage: You are 25 years old.`,
      brokenCode: `age_text = "20"\nprint(age_text + 5)`,
      brokenExplanation: `<strong>TypeError: can only concatenate str (not "int") to str</strong><br>You tried to glue text <code>"20"</code> directly to integer <code>5</code>. Wrap it in <code>int("20") + 5</code> to fix it!`
    },
    dontMemorize: {
      title: "DON'T MEMORIZE: Typecast syntax variants",
      content: "Satyam's Rule: Master the 3 core converters: <code>int()</code> for whole numbers, <code>str()</code> for text, and <code>float()</code> for decimals."
    }
  }
];
