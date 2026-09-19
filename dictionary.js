/* ==========================================================================
   PYTHON, BUT DIFFERENT — Idea Dictionary Data Module
   ========================================================================== */

export const dictionaryData = [
  {
    id: "variable",
    term: "Variable",
    metaphor: "A labeled sticky note attached to a box inside memory.",
    explanation: "Instead of remembering numbers and strings directly, you create a variable. The computer creates an object in memory and sticks your variable name onto it.",
    example: "name = \"Riya\""
  },
  {
    id: "function",
    term: "Function",
    metaphor: "A vending machine or automated recipe box.",
    explanation: "A reusable block of code that takes zero or more inputs (coins/ingredients), performs a predictable action, and optional returns an output (a soda/finished dish).",
    example: "def greet(user):\n    return \"Hello \" + user"
  },
  {
    id: "string",
    term: "String (str)",
    metaphor: "A necklace of letter beads strung together.",
    explanation: "Text enclosed in quotes. Python treats string characters in exact order, allowing you to slice them or glue them together with '+' (concatenation).",
    example: "text = \"Hello World\""
  },
  {
    id: "integer",
    term: "Integer (int)",
    metaphor: "Whole counting marbles with no fractional pieces.",
    explanation: "Whole positive or negative numbers without a decimal point. Used for counting turns, scores, or loop iterations.",
    example: "score = 100"
  },
  {
    id: "conditional",
    term: "Conditional (if / else)",
    metaphor: "A security guard checking your ticket before letting you pass.",
    explanation: "Tells Python to make a choice. If the condition is True, one path executes; otherwise, Python skips to the alternative else block.",
    example: "if age >= 18:\n    print(\"Allowed\")"
  },
  {
    id: "loop",
    term: "Loop (for / while)",
    metaphor: "A runner completing laps around a track until the bell sounds.",
    explanation: "Repeats a block of code multiple times without needing to write the same line over and over.",
    example: "for lap in range(5):\n    print(\"Lap\", lap)"
  },
  {
    id: "list",
    term: "List",
    metaphor: "A row of numbered locker boxes.",
    explanation: "An ordered collection of items. Each item gets an index starting at 0.",
    example: "inventory = [\"Key\", \"Map\", \"Torch\"]"
  },
  {
    id: "dictionary",
    term: "Dictionary (dict)",
    metaphor: "A physical address book where names map directly to phone numbers.",
    explanation: "Stores data in key-value pairs. You look up items by key instead of numeric index position.",
    example: "player = {\"name\": \"Riya\", \"level\": 5}"
  },
  {
    id: "indentation",
    term: "Indentation",
    metaphor: "Paragraph indentation showing who belongs to which chapter.",
    explanation: "Python uses whitespace (4 spaces) to group code blocks together. It replaces braces {} used in other languages.",
    example: "if True:\n    # This line belongs inside the if block\n    print(\"Inside\")"
  },
  {
    id: "syntax-error",
    term: "SyntaxError",
    metaphor: "The Grammar Police catching a missing punctuation mark.",
    explanation: "Occurs when Python cannot understand your sentence because of a missing colon, quote, or bracket.",
    example: "print(\"Hello)  # Missing closing quote"
  },
  {
    id: "name-error",
    term: "NameError",
    metaphor: "Someone calling out a name in a room full of strangers.",
    explanation: "Occurs when you ask Python to use a variable name that hasn't been created yet.",
    example: "print(nam)  # Typo for 'name'"
  },
  {
    id: "type-error",
    term: "TypeError",
    metaphor: "Trying to plug a garden hose directly into a USB socket.",
    explanation: "Occurs when performing an operation on incompatible data types (like adding text string + integer number).",
    example: "\"Age: \" + 20  # Cannot concatenate str and int"
  }
];
