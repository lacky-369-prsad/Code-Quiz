# CodeQuiz

> A lightweight, timed coding quiz built for beginners and students to
> practice, revise, and strengthen their HTML, CSS, and JavaScript
> fundamentals.

[![Live
Demo](https://img.shields.io/badge/Live-Demo-6A5ACD?style=for-the-badge)](https://lacky-369-prsad.github.io/Code-Quiz/)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/lacky-369-prsad/Code-Quiz)

**Live Demo:** https://lacky-369-prsad.github.io/Code-Quiz/\
**Source Code:** https://github.com/lacky-369-prsad/Code-Quiz

------------------------------------------------------------------------

## Table of Contents

-   [Overview](#overview)
-   [Why I Built CodeQuiz](#why-i-built-codequiz)
-   [Who Is It For?](#who-is-it-for)
-   [Key Features](#key-features)
-   [Question Bank](#question-bank)
-   [How the Quiz Works](#how-the-quiz-works)
-   [Scoring System](#scoring-system)
-   [Timer System](#timer-system)
-   [Randomization](#randomization)
-   [Best Score and Local Storage](#best-score-and-local-storage)
-   [Result Screen](#result-screen)
-   [Technology Stack](#technology-stack)
-   [Project Structure](#project-structure)
-   [Core JavaScript Logic](#core-javascript-logic)
-   [Question Data Structure](#question-data-structure)
-   [UI and UX](#ui-and-ux)
-   [Development Process](#development-process)
-   [AI-Assisted Development](#ai-assisted-development)
-   [Testing and Debugging](#testing-and-debugging)
-   [Problems I Solved](#problems-i-solved)
-   [How to Use](#how-to-use)
-   [Run Locally](#run-locally)
-   [Deployment](#deployment)
-   [Limitations](#limitations)
-   [Future Improvements](#future-improvements)
-   [Learning Outcomes](#learning-outcomes)
-   [Credits](#credits)
-   [License](#license)

------------------------------------------------------------------------

## Overview
## Preview

### Start Screen

<img width="180" height="378" alt="1000052908" src="https://github.com/user-attachments/assets/43eaeda2-8b7e-46e5-9da4-b663a76943f6" />



**CodeQuiz** is a browser-based coding quiz designed around a simple
problem: learning syntax and concepts is not enough if you do not
regularly revise theme. 

The project lets a user choose:

-   a coding category,
-   a difficulty level,
-   and the number of questions,

then complete a timed multiple-choice quiz and see their performance at
the end.

The current question bank contains **60 questions** covering:

  Category       Beginner   Advanced    Total
  ------------ ---------- ---------- --------
  HTML                 10         10       20
  CSS                  10         10       20
  JavaScript           10         10       20
  **Total**        **30**     **30**   **60**

Every question has **4 answer options**.

------------------------------------------------------------------------

## Why I Built CodeQuiz

The idea came from a problem I experienced myself while learning to
code.

After learning HTML, CSS, JavaScript, and other concepts, I noticed that
I sometimes forgot **where and when to use the things I had already
learned**. Writing code requires remembering concepts, syntax, and
logic---not just reading them once.

I wanted a small tool that would let me repeatedly test myself.

That led to CodeQuiz.

The main goals were:

1.  Make coding revision quick and simple.
2.  Help new learners practice what they have studied.
3.  Make revision feel more interactive than simply reading notes.
4.  Give users an idea of their current understanding.
5.  Encourage repeated practice through randomized questions and saved
    best performance.

------------------------------------------------------------------------

## Who Is It For?

CodeQuiz is primarily designed for:

-   **Beginners learning web development**
-   **Students revising HTML, CSS, and JavaScript**
-   Learners who want quick coding knowledge checks
-   Anyone who wants a simple timed practice session

It is intentionally lightweight and does not require an account,
backend, database, or installation.

------------------------------------------------------------------------

## Key Features

### 1. Multiple Coding Categories

Users can practice:

-   HTML
-   CSS
-   JavaScript
-   All categories together

### 2. Difficulty Selection

Two difficulty levels are available:

-   Beginner
-   Advanced

Users can also keep the difficulty set to **All**.

### 3. Flexible Question Count

A quiz can contain:

-   5 questions
-   10 questions
-   15 questions

### 4. 20-Second Timer

Every question gets **20 seconds**.

The timer changes its visual state as time decreases:

-   More than 10 seconds → normal
-   10 seconds or less → warning state
-   5 seconds or less → danger state

### 5. Random Questions

Questions are filtered according to the selected settings and then
shuffled before the quiz begins.

This prevents every attempt from following the same question order.

### 6. Random Answer Options

The four answer options are also shuffled.

The original answer index is preserved internally, so the correct answer
can move between A/B/C/D without breaking answer validation.

This is important because otherwise a user could potentially memorize
the position of the correct answer instead of understanding the
question.

### 7. Streak System

Correct consecutive answers increase the current streak.

A wrong answer or timeout resets the streak to zero.

### 8. Score System

Correct answers award points, with an additional streak-based bonus.

### 9. Progress Indicator

The quiz screen shows:

-   Current question number
-   Total questions
-   Progress bar
-   Current streak
-   Remaining time

### 10. Result Summary

After the quiz, the result screen shows:

-   Final score
-   Accuracy percentage
-   Correct answers / total questions
-   Best streak
-   Best performance for the selected setup
-   Category-wise performance breakdown

### 11. Local Storage

Best performance is stored in the browser using `localStorage`.

This means the record remains available even after the page is closed or
refreshed, as long as the browser's site data has not been cleared.

### 12. No Backend Required

CodeQuiz runs entirely in the browser.

There is no server-side database or login system.

------------------------------------------------------------------------

## Question Bank

The project currently contains 60 questions:

### HTML

-   10 Beginner
-   10 Advanced

Topics include HTML tags, attributes, semantic elements, forms, media,
and other HTML fundamentals.

### CSS

-   10 Beginner
-   10 Advanced

Topics include selectors, properties, layout, positioning, and CSS
fundamentals.

### JavaScript

-   10 Beginner
-   10 Advanced

Topics include JavaScript syntax, variables, functions, arrays, objects,
DOM-related concepts, and other fundamentals.

Each question follows a consistent structure containing:

-   Category
-   Difficulty
-   Question
-   Four options
-   Correct answer index

------------------------------------------------------------------------

## How the Quiz Works

CodeQuiz is organized into **three screens**:

``` text
START SCREEN
     │
     │ Select category
     │ Select difficulty
     │ Select question count
     ▼
QUIZ SCREEN
     │
     │ Filter questions
     │ Shuffle questions
     │ Shuffle options
     │ Start 20-second timer
     │ Answer question
     ▼
RESULT SCREEN
     │
     │ Score
     │ Accuracy
     │ Best streak
     │ Category breakdown
     │ Best performance
     ▼
Play Again / Change Settings
```

### Step 1 --- Select Settings

The user chooses:

-   Category
-   Difficulty
-   Number of questions

The selected values are stored in JavaScript variables.

### Step 2 --- Start Quiz

When **Start Quiz** is clicked, `startQuiz()`:

1.  Filters the full question bank.
2.  Matches the selected category.
3.  Matches the selected difficulty.
4.  Shuffles the filtered questions.
5.  Selects the requested number of questions.
6.  Resets score, streak, counters, and breakdown data.
7.  Opens the quiz screen.
8.  Loads the first question.

### Step 3 --- Load a Question

### Quiz Screen

 <img width="180" height="378" alt="1000052911" src="https://github.com/user-attachments/assets/fab0c127-c0c2-46d0-86a7-0131198ce406" />



`loadQuestion()`:

1.  Stops any previous timer.
2.  Resets the timer to 20 seconds.
3.  Displays the current question.
4.  Displays its category and difficulty.
5.  Creates four answer buttons.
6.  Shuffles the answer options.
7.  Starts the countdown timer.

### Step 4 --- Answer the Question

When an option is clicked, `selectAnswer()` compares the selected
option's original index with the question's correct answer index.

The selected buttons are then disabled so the user cannot answer the
same question multiple times.

The correct answer is highlighted, and an incorrect selected answer is
highlighted when applicable.

### Step 5 --- Continue or Finish

After a short delay:

-   the next question is loaded, or
-   the result screen is displayed when the quiz is complete.

------------------------------------------------------------------------

## Scoring System

The scoring logic is implemented in JavaScript.

For a correct answer:

``` text
Points = 10 + (current streak × 2)
```

The streak value used for the bonus is the streak before it is
incremented for the newly correct answer.

For example:

    Consecutive correct answer   Points
  ---------------------------- --------
                           1st       10
                           2nd       12
                           3rd       14
                           4th       16
                           5th       18

A wrong answer gives no points for that question and resets the streak
to zero.

This creates an incentive to maintain a consecutive-answer streak
instead of only chasing individual correct answers.

------------------------------------------------------------------------

## Timer System

Each question starts with:

``` text
20 seconds
```

The timer uses JavaScript's `setInterval()` and decreases once every
second.

When the timer reaches zero:

1.  The interval is stopped with `clearInterval()`.
2.  The question is treated as unanswered/incorrect.
3.  The normal answer-processing flow continues.
4.  The quiz moves to the next question.

### Timer Visual States

The timer uses CSS classes to communicate urgency:

``` text
20–11 seconds → normal
10–6 seconds  → warning
5–0 seconds   → danger
```

This provides a visual signal without requiring sound or external
libraries.

------------------------------------------------------------------------

## Randomization

CodeQuiz uses a Fisher-Yates-style shuffle implementation.

The same shuffle function is used for:

-   the filtered question list
-   the answer options

For answer options, each option is temporarily paired with its original
index:

``` text
Option → Original Index
```

After shuffling, the original index is retained.

That means the displayed order can change while the application can
still correctly determine whether the selected answer matches
`question.answer`.

------------------------------------------------------------------------

## Best Score and Local Storage

CodeQuiz uses the browser's `localStorage` API to preserve the best
performance.

The storage key is generated from:

``` text
category + difficulty + question count
```

Conceptually:

``` text
codequiz_best_<category>_<difficulty>_<count>
```

This means different quiz configurations can maintain separate records.

For example:

``` text
All + Beginner + 10 questions
HTML + Advanced + 15 questions
JavaScript + All + 5 questions
```

can each have their own stored record.

### What Is Stored?

The current implementation stores the **highest number of correct
answers** for the selected configuration.

The displayed quiz score is a separate points-based value.

------------------------------------------------------------------------

## Result Screen

## Result Screen

<img width="180" height="378" alt="1000052905" src="https://github.com/user-attachments/assets/63db47c7-2013-4deb-85c4-4cc0b5dc5319" />



The result screen summarizes the completed attempt.

### Score

The points earned from correct answers and streak bonuses.

### Accuracy

Calculated as:

``` text
Accuracy = (Correct Answers / Total Questions) × 100
```

The displayed percentage is rounded to the nearest whole number.

### Best Streak

The highest number of consecutive correct answers achieved during the
attempt.

### Category Breakdown

The application tracks the total questions attempted and correct answers
for each category.

Example:

``` text
HTML        4 / 5
CSS         3 / 3
JavaScript  1 / 2
```

This gives the learner a quick view of which areas they performed well
in during that attempt.

### Performance Feedback

The result screen also uses accuracy to select a simple feedback emoji:

-   90%+ → 🏆
-   70--89% → 🎉
-   50--69% → 👍
-   Below 50% → 📚

------------------------------------------------------------------------

## Technology Stack

CodeQuiz is intentionally built with fundamental web technologies.

  -----------------------------------------------------------------------
  Technology                          Purpose
  ----------------------------------- -----------------------------------
  **HTML5**                           Page structure and three-screen UI

  **CSS3**                            Styling, layout, colors, states,
                                      animations

  **JavaScript**                      Quiz logic, filtering,
                                      randomization, timer, scoring and
                                      DOM updates

  **Browser Local Storage**           Saving best performance

  **Git / GitHub**                    Version control and source hosting

  **GitHub Codespaces**               Development environment

  **GitHub Pages**                    Deployment
  -----------------------------------------------------------------------

No external JavaScript framework or backend is required.

------------------------------------------------------------------------

## Project Structure

``` text
Code-Quiz/
│
├── index.html
├── style.css
├── script.js
└── questions.js
```

### `index.html`

Contains the structure of the application:

-   Start screen
-   Quiz screen
-   Result screen
-   Category controls
-   Difficulty controls
-   Question-count controls
-   Timer display
-   Progress bar
-   Answer container
-   Result information
-   Action buttons

The question data file is loaded before the main script so the
`QUESTION` array is available when the quiz logic starts.

### `style.css`

Controls the visual design:

-   Layout
-   Colors
-   Typography
-   Cards
-   Pills
-   Buttons
-   Progress bar
-   Timer warning states
-   Correct/wrong answer states
-   Result screen
-   Fade-in animation

### `questions.js`

Contains the quiz question bank.

Each question has:

``` javascript
{
  category: "...",
  difficulty: "...",
  question: "...",
  options: ["...", "...", "...", "..."],
  answer: 0
}
```

### `script.js`

Contains the application logic:

-   Settings
-   Screen switching
-   Question filtering
-   Randomization
-   Question loading
-   Timer
-   Answer checking
-   Streak calculation
-   Score calculation
-   Result generation
-   Local storage

------------------------------------------------------------------------

## Core JavaScript Logic

The most important functions are:

### `startQuiz()`

Responsible for creating a quiz session.

Main responsibilities:

``` text
QUESTION
   ↓
Filter by category
   ↓
Filter by difficulty
   ↓
Shuffle
   ↓
Select requested number
   ↓
Reset quiz state
   ↓
Show quiz screen
   ↓
Load first question
```

### `loadQuestion()`

Responsible for displaying the current question and preparing the timer.

It:

-   resets the timer,
-   displays question information,
-   creates answer buttons,
-   preserves original option indexes,
-   shuffles the visible options,
-   starts the countdown.

### `selectAnswer()`

Responsible for processing an answer.

It:

-   stops the timer,
-   disables all options,
-   checks whether the selected index matches the correct index,
-   highlights correct/wrong options,
-   updates the category breakdown,
-   updates score and streak,
-   advances the quiz.

These three functions form the main flow of the quiz engine.

------------------------------------------------------------------------

## Question Data Structure

A question is represented using a JavaScript object:

``` javascript
{
  category: "HTML",
  difficulty: "beginner",
  question: "Which tag is used to create a hyperlink?",
  options: [
    "<link>",
    "<a>",
    "<href>",
    "<url>"
  ],
  answer: 1
}
```

The `answer` property represents the zero-based index of the correct
option.

For the example above:

``` text
0 → <link>
1 → <a>        ← correct
2 → <href>
3 → <url>
```

Keeping the answer as an index makes option randomization possible
without losing the correct answer.

------------------------------------------------------------------------

## UI and UX

The design goal was to keep CodeQuiz **simple, smooth, readable, and not
visually overwhelming**.

Instead of using a complicated dashboard, the interface is centered
around a compact quiz card.

### Design Principles

-   Simple layout
-   Clear controls
-   Soft colors
-   Large readable question text
-   Easy-to-tap answer buttons
-   Clear timer states
-   Minimal distractions
-   Smooth screen transitions
-   Beginner-friendly interaction

The main visual design and UI structure were designed by me.

I used AI assistance while choosing and refining the color combination,
but the overall UI concept and structure were my own.

The interface uses a light purple/lavender visual direction with white
content surfaces and clear green/red feedback for correct and incorrect
answers.

------------------------------------------------------------------------

## Development Process

The project developed from a personal learning problem rather than
starting with a fixed technical specification.

### 1. Idea

I noticed that after learning programming concepts, I sometimes forgot
what I had learned or where a particular concept should be used.

I wanted a small application that could repeatedly test those concepts.

### 2. UI Design

I wanted the interface to feel:

-   simple,
-   smooth,
-   easy to understand,
-   and comfortable to use.

The goal was to avoid making the application feel like a complicated
examination system.

### 3. Question Database

I needed enough questions to make repeated practice useful.

The final question bank contains:

-   20 HTML questions
-   20 CSS questions
-   20 JavaScript questions

with an even split between Beginner and Advanced questions.

AI assistance was used to help generate question ideas/content because
creating a large, balanced question bank manually would have taken
significantly longer.

The questions were then included in the project's own data structure.

### 4. JavaScript Implementation

The quiz logic was implemented in JavaScript.

The main functionality was built around:

-   DOM manipulation
-   event listeners
-   arrays and objects
-   filtering
-   randomization
-   timers
-   conditional logic
-   local storage

### 5. Timer

A 20-second timer was added for each question using `setInterval()`.

The timer also changes visual state as the remaining time decreases.

### 6. Scoring

A streak-based scoring system was added so consecutive correct answers
receive increasing bonuses.

### 7. Local Storage

A persistent best-performance system was added using the browser's
`localStorage`.

### 8. Manual Testing

I tested the application by manually clicking through the interface and
checking different combinations of:

-   categories,
-   difficulties,
-   question counts,
-   correct answers,
-   incorrect answers,
-   timer expiry,
-   replay,
-   settings changes,
-   and result generation.

### 9. GitHub Development and Deployment

The project was developed in **GitHub Codespaces**.

The general workflow was:

``` text
Edit code
   ↓
Test
   ↓
git add
   ↓
git commit
   ↓
git push
   ↓
GitHub repository
   ↓
GitHub Pages
   ↓
Live website
```

------------------------------------------------------------------------

## AI-Assisted Development

AI was used as a development assistant, not as a replacement for the
project's core implementation.

### Where AI Was Used

#### Question Generation

Claude Sonnet was used to help generate question ideas/content for the
60-question bank.

#### UI Color Exploration

AI assistance was used while selecting/refining the color combination.

The UI structure and design direction were created by me.

#### Debugging

AI was used for difficult bugs that could otherwise take a long time to
identify.

For example, when an issue was difficult to locate because of a small
typo or selector mistake, AI was used as a debugging aid.

### What I Implemented

The main application logic was written and assembled by me, including:

-   quiz flow,
-   filtering,
-   randomization,
-   answer validation,
-   timer,
-   scoring,
-   streak system,
-   result calculation,
-   category breakdown,
-   local storage,
-   UI interaction,
-   GitHub workflow,
-   and deployment.

I also manually tested the application and fixed issues found during
development.

------------------------------------------------------------------------

## Testing and Debugging

Manual testing revealed several real implementation problems during
development.

### 1. Start Button Was Not Working

The main script was referencing:

``` javascript
QUESTIONS
```

while the question database was declared as:

``` javascript
QUESTION
```

Because the names did not match, clicking Start Quiz caused an error.

The reference was corrected to match the actual question array.

I also added a `window.onerror` popup during mobile debugging so
JavaScript errors could be seen more easily.

### 2. Typos Broke Functionality

Several small spelling mistakes caused different parts of the
application to fail.

Examples included incorrect names such as:

``` text
contect
date-value
difficulfy
optiond
HTLM
```

These kinds of errors can be especially difficult to find because the
code may still look visually correct.

### 3. CSS Selector Bug

The incorrect-answer selector was initially written incorrectly.

The intended selector was:

``` css
.option-btn.wrong
```

A space would target a different DOM relationship.

The screen visibility logic was also corrected so that:

``` css
.screen {
  display: none;
}

.screen.active {
  display: block;
}
```

Only one application screen is visible at a time.

### 4. GitHub Pages 404

At one point the website returned a 404 because the project files were
inside an extra folder while GitHub Pages expected `index.html` at the
published root.

The files were moved to the correct location before redeployment.

### 5. Git Commit and Push Problems

During development I also encountered Git-related issues, including:

-   GPG signing failure
-   push rejection
-   Git LFS-related errors
-   temporary GitHub server-side errors

These were resolved through Git configuration, synchronization/rebase,
and retrying failed operations when the issue was server-side.

### 6. Question File Save Issue

There was also a situation where changes to the question data were not
saved correctly, requiring the question data to be entered again.

These issues became part of the learning process and helped me
understand how small naming, syntax, CSS, and Git errors can affect an
entire project.

------------------------------------------------------------------------

## How to Use

### 1. Open CodeQuiz

Open the live application in a browser.

### 2. Select a Category

Choose:

``` text
All
HTML
CSS
JavaScript
```

### 3. Select Difficulty

Choose:

``` text
All
Beginner
Advanced
```

### 4. Select Number of Questions

Choose:

``` text
5
10
15
```

### 5. Start the Quiz

Press:

``` text
Start Quiz
```

### 6. Answer Quickly

Each question has 20 seconds.

Select one of the four options.

### 7. Review Your Result

After completing the selected questions, the result screen shows your
performance.

### 8. Try Again

Use:

``` text
Play Again
```

to start another quiz with the same settings.

Use:

``` text
Change Setting
```

to choose a different category, difficulty, or question count.

------------------------------------------------------------------------

## Run Locally

Because CodeQuiz is a static browser application, no backend or package
installation is required.

### Clone the repository

``` bash
git clone https://github.com/lacky-369-prsad/Code-Quiz.git
```

### Enter the project

``` bash
cd Code-Quiz
```

### Open the project

Open:

``` text
index.html
```

in a modern web browser.

You can also use a local development server or VS Code Live Server if
preferred.

------------------------------------------------------------------------

## Deployment

The project is deployed using **GitHub Pages**.

The deployment structure is intentionally simple:

``` text
GitHub Repository
       ↓
GitHub Pages
       ↓
Static HTML/CSS/JS
       ↓
Browser
```

No server-side runtime is required.

------------------------------------------------------------------------

## Limitations

The current version is intentionally simple.

### Current limitations include:

-   No user accounts
-   No cloud database
-   Best performance is stored only in the current browser
-   No global leaderboard
-   No cross-device progress synchronization
-   Only HTML, CSS, and JavaScript questions are currently included
-   Question explanations are not currently displayed after each answer
-   The question bank is currently fixed inside `questions.js`

Because the application is client-side, clearing browser site data will
also remove the stored local best-performance records.

------------------------------------------------------------------------

## Future Improvements

Planned or possible improvements include:

### More Questions

Expand the question bank so users get more variety between attempts.

### More Programming Languages

Add additional languages and technologies, for example:

-   Python
-   C
-   C++
-   Java
-   SQL
-   and others

### Question Explanations

After an answer, show:

-   the correct answer,
-   why it is correct,
-   and a short explanation.

This would turn CodeQuiz from only a testing tool into a stronger
learning tool.

### Progress History

Allow users to see their previous attempts and track improvement over
time.

### Global Leaderboard

A future backend could allow users to compare scores across devices.

### User Accounts

Accounts could provide persistent progress and history.

### Larger Difficulty System

More levels could be introduced beyond Beginner and Advanced.

------------------------------------------------------------------------

## Learning Outcomes

Building CodeQuiz helped me practice several important web-development
concepts:

-   HTML page structure
-   CSS layout and styling
-   CSS selectors
-   JavaScript DOM manipulation
-   Event listeners
-   Arrays and objects
-   Array filtering
-   Array shuffling
-   Conditional logic
-   Functions
-   Timers with `setInterval`
-   `clearInterval`
-   Browser `localStorage`
-   Dynamic element creation
-   Data attributes
-   Git and GitHub
-   GitHub Codespaces
-   GitHub Pages deployment
-   Manual testing
-   Debugging browser JavaScript errors

More importantly, the project helped me understand that building a
working application involves much more than writing code once. Testing,
debugging, organizing data, and fixing small errors are all part of
development.

------------------------------------------------------------------------

## Credits

### Development

**Author:** lacky-369-prsad

### AI Assistance

Claude Sonnet was used as an assistance tool for:

-   question generation,
-   UI color exploration,
-   and selected debugging tasks.

The project's core quiz implementation, integration, testing, and
deployment were carried out by the author.

------------------------------------------------------------------------

## License

This repository currently does **not include a license file**.

Without an explicit open-source license, the default copyright rules
generally apply to the repository's code. If this project is intended to
be reused, modified, or redistributed by others, an explicit license
such as the MIT License can be added later.

------------------------------------------------------------------------

## Project Links

-   **Live Demo:** https://lacky-369-prsad.github.io/Code-Quiz/
-   **GitHub Repository:** https://github.com/lacky-369-prsad/Code-Quiz

------------------------------------------------------------------------

## Final Note

CodeQuiz started from a simple personal problem:

> **"I learned these coding concepts, but I keep forgetting them."**

Instead of only reading the concepts again, I built a small tool that
makes me actively recall them.

The goal of CodeQuiz is simple:

**Practice → Recall → Improve → Repeat.**
