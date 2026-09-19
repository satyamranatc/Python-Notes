/* ==========================================================================
   SATYAM SIR'S PYTHON CLEAN CODE CURRICULUM & DATA
   ========================================================================== */

export const cleanCodePriorityTable = [
  { id: 1, topic: "What is Clean Code?", learn: "Yes", priority: 3, stars: "⭐⭐⭐" },
  { id: 2, topic: "Meaningful Names", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 3, topic: "Variables & Constants", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 4, topic: "Functions", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 5, topic: "Function Arguments", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 6, topic: "Single Responsibility", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 7, topic: "Small Functions", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 8, topic: "Boolean Conditions", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 9, topic: "Avoiding Deep Nesting", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 10, topic: "Error Handling", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 11, topic: "Comments", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 12, topic: "Formatting & Code Layout", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 13, topic: "Pythonic Code", learn: "Very important", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 14, topic: "Lists, Dictionaries & Sets", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 15, topic: "Comprehensions", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 16, topic: "Modules & Packages", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 17, topic: "Classes & Objects", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 18, topic: "Encapsulation", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 19, topic: "Inheritance", learn: "Basic understanding", priority: 3, stars: "⭐⭐⭐" },
  { id: 20, topic: "Composition", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 21, topic: "Abstraction", learn: "Yes", priority: 3, stars: "⭐⭐⭐" },
  { id: 22, topic: "Interfaces / Protocols", learn: "Later", priority: 3, stars: "⭐⭐⭐" },
  { id: 23, topic: "Unit Testing", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 24, topic: "Testable Code", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 25, topic: "Refactoring", learn: "Very important", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 26, topic: "Code Smells", learn: "Very important", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 27, topic: "DRY (Don't Repeat Yourself)", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 28, topic: "KISS (Keep It Simple)", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 29, topic: "YAGNI (You Aren't Gonna Need It)", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 30, topic: "Dependency Management", learn: "Later", priority: 3, stars: "⭐⭐⭐" },
  { id: 31, topic: "Logging", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 32, topic: "Type Hints", learn: "Very important in modern Python", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 33, topic: "dataclass", learn: "Yes", priority: 4, stars: "⭐⭐⭐⭐" },
  { id: 34, topic: "Exceptions", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" },
  { id: 35, topic: "Context Managers", learn: "Later", priority: 3, stars: "⭐⭐⭐" },
  { id: 36, topic: "Iterators & Generators", learn: "Later", priority: 3, stars: "⭐⭐⭐" },
  { id: 37, topic: "Decorators", learn: "Later", priority: 3, stars: "⭐⭐⭐" },
  { id: 38, topic: "Concurrency", learn: "No, not initially", priority: 2, stars: "⭐⭐" },
  { id: 39, topic: "Architecture", learn: "Later", priority: 3, stars: "⭐⭐⭐" },
  { id: 40, topic: "Clean Project Structure", learn: "Yes", priority: 5, stars: "⭐⭐⭐⭐⭐" }
];

export const top20EssentialSyllabus = [
  { rank: 1, title: "Meaningful Names", desc: "Use reveal-intent names for variables, functions, and classes." },
  { rank: 2, title: "Variables & Constants", desc: "Use snake_case for variables and ALL_CAPS for constants." },
  { rank: 3, title: "Data Structures", desc: "Choose the right structure: Lists (ordered), Dicts (key-val), Sets (unique)." },
  { rank: 4, title: "Conditions", desc: "Write explicit, readable boolean checks without nested chaos." },
  { rank: 5, title: "Loops", desc: "Use Pythonic iteration like for item in collection instead of index counters." },
  { rank: 6, title: "Functions", desc: "Functions should be small and do one thing clearly." },
  { rank: 7, title: "Small Functions", desc: "Keep functions under 15-20 lines so they fit entirely in human working memory." },
  { rank: 8, title: "Single Responsibility", desc: "Separate data validation, calculation, storage, and notification." },
  { rank: 9, title: "Function Parameters", desc: "Limit parameters to 2-3 max; pass objects when arguments multiply." },
  { rank: 10, title: "Boolean Logic", desc: "Avoid double negatives and complex boolean expressions." },
  { rank: 11, title: "Error Handling", desc: "Catch specific exceptions; never use bare except: blocks." },
  { rank: 12, title: "Comments", desc: "Explain WHY code exists, not WHAT the code is doing." },
  { rank: 13, title: "Pythonic Code", desc: "Leverage comprehensions, unpacking, enumerate(), zip(), and built-ins." },
  { rank: 14, title: "Modules & Packages", desc: "Organize code into logical files and maintain clean imports." },
  { rank: 15, title: "Classes & Objects", desc: "Use OOP when modeling state and behavior together." },
  { rank: 16, title: "Composition over Inheritance", desc: "Prefer composing objects over complex deep inheritance trees." },
  { rank: 17, title: "Type Hints", desc: "Use type annotations to make code self-documenting and IDE-friendly." },
  { rank: 18, title: "Unit Testing", desc: "Write small, isolated pytest tests to verify your logic." },
  { rank: 19, title: "Refactoring", desc: "Continuously improve code structure without changing its external behavior." },
  { rank: 20, title: "Code Smells", desc: "Train your intuition to spot God functions, duplication, and high coupling." }
];

export const cleanCodeLevels = [
  {
    level: 1,
    id: "l1",
    title: "LEVEL 1 — Learn to Write Understandable Python",
    subtitle: "The absolute baseline of readable code",
    topics: [
      "1. What is Clean Code?",
      "2. Meaningful names",
      "3. Variables",
      "4. Constants",
      "5. Data types",
      "6. Conditions",
      "7. Loops",
      "8. Functions",
      "9. Function parameters",
      "10. Return values",
      "11. Boolean expressions",
      "12. Avoiding unnecessary nesting",
      "13. Formatting",
      "14. Comments"
    ],
    badCode: `# Bad: Unclear names, magic numbers, no structure
def p(x, y):
    if x > 18:
        if y == 1:
            return x * 0.9
    return x`,
    cleanCode: `# Clean: Meaningful names, clear constants, early return
ADULT_AGE = 18
DISCOUNT_RATE = 0.90

def calculate_ticket_price(age: int, has_membership: bool) -> float:
    base_price = 100.0
    if age >= ADULT_AGE and has_membership:
        return base_price * DISCOUNT_RATE
    return base_price`,
    explanation: "Notice how meaningful variable names and named constants instantly eliminate the need for explanatory comments."
  },
  {
    level: 2,
    id: "l2",
    title: "LEVEL 2 — Pythonic Thinking",
    subtitle: "Don't just write working code. Write code that looks natural in Python.",
    topics: [
      "15. Lists",
      "16. Tuples",
      "17. Dictionaries",
      "18. Sets",
      "19. List comprehensions",
      "20. Dictionary comprehensions",
      "21. enumerate()",
      "22. zip()",
      "23. any() / all()",
      "24. sorted()",
      "25. map() / filter() (understand, but don't overuse)",
      "26. Unpacking",
      "27. *args / **kwargs"
    ],
    badCode: `# Non-Pythonic: Manual index counter & manual array building
scores = [88, 92, 79, 95]
passing_scores = []
i = 0
while i < len(scores):
    if scores[i] >= 80:
        passing_scores.append(scores[i])
    i += 1`,
    cleanCode: `# Pythonic: Elegant List Comprehension
scores = [88, 92, 79, 95]
passing_scores = [score for score in scores if score >= 80]`,
    explanation: "Pythonic code uses built-in idioms like list comprehensions to write intent-focused, readable code in fewer lines."
  },
  {
    level: 3,
    id: "l3",
    title: "LEVEL 3 — Functions Properly",
    subtitle: "The most important Clean Code section for beginners",
    topics: [
      "28. One function ➔ One responsibility (SRP)",
      "29. Function size (Keep small)",
      "30. Good parameters",
      "31. Avoid too many parameters (Pass objects)",
      "32. Predictable return values",
      "33. Avoid side-effecting secret operations",
      "34. Pure vs. side-effecting functions"
    ],
    badCode: `# Bad: Single God Function doing 5 unrelated jobs
def process_student(name, age, city, course, phone, email):
    # read student data...
    # validate student...
    # calculate marks...
    # save student to DB...
    # send welcome email...
    pass`,
    cleanCode: `# Clean: Single Responsibility Principle (SRP)
def validate_student(student: Student) -> bool:
    ...

def calculate_marks(student: Student) -> float:
    ...

def save_student(student: Student) -> None:
    ...

def send_welcome_email(student: Student) -> None:
    ...`,
    explanation: "Small, single-responsibility functions are effortless to test, debug, reuse, and explain."
  },
  {
    level: 4,
    id: "l4",
    title: "LEVEL 4 — Errors & Defensive Programming",
    subtitle: "Gracefully handling edge cases without swallowing errors",
    topics: [
      "35. Exceptions",
      "36. try / except / else / finally",
      "37. Specific exceptions (ValueError, TypeError, etc.)",
      "38. Don't catch everything blindly (No bare except:)",
      "39. Custom exception classes",
      "40. Data validation at boundaries",
      "41. Helpful error messages for users & devs",
      "42. Logging"
    ],
    badCode: `# Dangerous: Catching all exceptions silently
try:
    age = int(input("Age: "))
except:
    pass  # Swallows syntax errors, keyboard interrupts, everything!`,
    cleanCode: `# Clean: Catch specific exception & provide guidance
try:
    age = int(input("Enter your age: "))
except ValueError:
    print("Please enter a valid whole number for age.")`,
    explanation: "Defensive code anticipates user error and handles failures gracefully without hiding bugs."
  },
  {
    level: 5,
    id: "l5",
    title: "LEVEL 5 — Object-Oriented Clean Code (OOP)",
    subtitle: "Structuring domain models with encapsulation and composition",
    topics: [
      "43. Classes & Objects",
      "44. Constructors (__init__)",
      "45. Instance attributes",
      "46. Methods",
      "47. Class responsibility",
      "48. Encapsulation",
      "49. Properties (@property)",
      "50. Composition (Prefer over inheritance)",
      "51. Inheritance",
      "52. Polymorphism",
      "53. Abstract classes (abc)",
      "54. Protocols (typing.Protocol)",
      "55. dataclass (@dataclass)"
    ],
    badCode: `# Fragile: Deep inheritance hierarchy for things that aren't true 'is-a'
class Vehicle: ...
class Car(Vehicle): ...
class FlyingCar(Car): ...  # Gets bloated with irrelevant wheels & wing methods`,
    cleanCode: `# Robust: Composition over Inheritance
class Engine:
    def start(self): ...

class Wings:
    def extend(self): ...

class FlyingVehicle:
    def __init__(self, engine: Engine, wings: Wings):
        self.engine = engine
        self.wings = wings`,
    explanation: "Prefer composition when inheritance doesn't represent a genuine 'is-a' relationship."
  },
  {
    level: 6,
    id: "l6",
    title: "LEVEL 6 — Modules & Project Structure",
    subtitle: "How production Python projects are organized",
    topics: [
      "56. Modules",
      "57. Imports",
      "58. Packages",
      "59. __init__.py",
      "60. Absolute vs relative imports",
      "61. Virtual Environments (venv)",
      "62. Dependency management (pip)",
      "63. requirements.txt / pyproject.toml",
      "64. Environment variables (.env)",
      "65. Clean directory structure"
    ],
    badCode: `my_app.py  # 4000 lines of mixed DB, UI, routing, and business logic!`,
    cleanCode: `my_project/
├── app/
│   ├── models/
│   ├── services/
│   ├── utils/
│   ├── config.py
│   └── main.py
├── tests/
├── requirements.txt
└── README.md`,
    explanation: "A clean folder structure keeps team members focused and prevents monolithic spaghetti files."
  },
  {
    level: 7,
    id: "l7",
    title: "LEVEL 7 — Type Hints",
    subtitle: "Essential for modern production Python",
    topics: [
      "66. Basic type hints (str, int, float, bool)",
      "67. Function argument and return annotations",
      "68. Collection hints (list[str], dict[str, int])",
      "69. Optional[T] / Union (X | Y)",
      "70. TypedDict & TypeAlias",
      "71. Protocol",
      "72. Static type checking with mypy / pyright"
    ],
    badCode: `# Unclear function contract
def get_user_discount(user, cart):
    return user.points * cart.total * 0.05`,
    cleanCode: `# Self-documenting with Type Hints
from typing import Optional

def get_user_discount(user_points: int, cart_total: float) -> float:
    return user_points * cart_total * 0.05`,
    explanation: "Type hints prevent subtle runtime bugs and enable rich IDE auto-completion."
  },
  {
    level: 8,
    id: "l8",
    title: "LEVEL 8 — Testing & Testable Code",
    subtitle: "Writing code that proves itself correct automatically",
    topics: [
      "73. Why testing matters",
      "74. Unit tests",
      "75. pytest test runner",
      "76. Assertions",
      "77. Test naming conventions (test_should_...) ",
      "78. Arrange ➔ Act ➔ Assert pattern",
      "79. Testing functions & classes",
      "80. Fixtures",
      "81. Mocking",
      "82. Testable architecture"
    ],
    badCode: `# Untestable function (Hardcoded external API dependency)
def calculate_tax(amount):
    live_rate = fetch_from_government_api()  # Fails without internet!
    return amount * live_rate`,
    cleanCode: `# Testable function (Injecting dependency)
def calculate_tax(amount: float, tax_rate: float) -> float:
    return amount * tax_rate

# In test_tax.py:
def test_calculate_tax():
    assert calculate_tax(100.0, 0.10) == 10.0`,
    explanation: "Testable code separates core business calculation logic from external side-effects like APIs and databases."
  },
  {
    level: 9,
    id: "l9",
    title: "LEVEL 9 — Refactoring",
    subtitle: "Progressively improving existing code without altering external behavior",
    topics: [
      "83. What is Refactoring?",
      "84. Rename Variable / Function",
      "85. Extract Function / Method",
      "86. Simplify Conditionals (Guard Clauses)",
      "87. Remove Duplication",
      "88. Reduce Arrow Anti-pattern (Deep Nesting)",
      "89. Replace Magic Numbers with Constants",
      "90. Refactor safely under green tests"
    ],
    badCode: `# Deep nesting / Arrow Anti-pattern
def process_order(x, y, z):
    if x > 10:
        if y > 20:
            if z == "yes":
                return x * y
    return 0`,
    cleanCode: `# Refactored with Guard Clauses
def process_order(quantity: int, price: int, confirmed: str) -> int:
    if quantity <= 10 or price <= 20 or confirmed != "yes":
        return 0
    return quantity * price`,
    explanation: "Guard clauses return early to eliminate nested block indentation."
  },
  {
    level: 10,
    id: "l10",
    title: "LEVEL 10 — Code Smells",
    subtitle: "Training your intuition to spot problems before they turn into bugs",
    topics: [
      "91. Long Function smell",
      "92. Long Parameter List smell",
      "93. Duplicate Code smell",
      "94. Huge Class / God Class smell",
      "95. Magic Numbers smell",
      "96. Meaningless Names smell",
      "97. Deep Nesting smell",
      "98. Excessive Comments smell",
      "99. Dead Code smell",
      "100. Global State mutation smell",
      "101. Tight Coupling smell"
    ],
    badCode: `# Code Smell: God Function doing everything
def process_everything(): ...`,
    cleanCode: `# Clean intuition: Alarm bells should ring when seeing process_everything()!
# Solution: Decompose into modular, named functions.`,
    explanation: "Recognizing code smells allows you to refactor proactively during peer code reviews."
  },
  {
    level: 11,
    id: "l11",
    title: "LEVEL 11 — Clean Code Core Principles",
    subtitle: "The timeless mantras every engineer keeps in mind",
    topics: [
      "KISS — Keep It Simple, Stupid",
      "DRY — Don't Repeat Yourself (without over-engineering)",
      "YAGNI — You Aren't Gonna Need It (No imaginary future features)",
      "Single Responsibility Principle (SRP)",
      "Separation of Concerns (SoC)",
      "Low Coupling & High Cohesion"
    ],
    badCode: `# Violation of YAGNI & KISS: Building a complex plugin framework for a script that prints a PDF`,
    cleanCode: `# Applied KISS & YAGNI: Write the simplest possible function that solves today's problem cleanly`,
    explanation: "Principles guide architectural decisions. Simple, clean code today beats over-architected frameworks tomorrow."
  },
  {
    level: 12,
    id: "l12",
    title: "LEVEL 12 — Advanced Python Concepts",
    subtitle: "Mastering Python's specialized tools after solidifying fundamentals",
    topics: [
      "Iterators & Generators (yield)",
      "Decorators (@functools.wraps)",
      "Context Managers (__enter__, __exit__, @contextmanager)",
      "Dunder methods (__str__, __repr__, __len__, __getitem__)",
      "Closures & Higher-order functions",
      "Async/Await & Concurrency (asyncio)",
      "Performance & Memory profiling"
    ],
    badCode: `# Loading 10 million rows into a list simultaneously (Memory crash!)`,
    cleanCode: `# Clean Generator yielding one row at a time (O(1) memory)
def read_large_file(file_path):
    with open(file_path) as file:
        for line in file:
            yield line.strip()`,
    explanation: "Advanced constructs like generators and context managers unlock maximum performance and elegance once clean code foundations are set."
  }
];
