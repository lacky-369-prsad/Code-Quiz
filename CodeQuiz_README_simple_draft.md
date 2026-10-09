[![Live
Demo](https://img.shields.io/badge/Live-Demo-6A5ACD?style=for-the-badge)](https://lacky-369-prsad.github.io/Code-Quiz/)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/lacky-369-prsad/Code-Quiz)

# CodeQuiz

CodeQuiz is a small quiz website I made for students and people who are learning coding. You can practise HTML, CSS and JavaScript questions and check how much you remember.
<img width="190" height="378" alt="1000052908" src="https://github.com/user-attachments/assets/b05ef5c3-73cc-4401-a19e-8ba9a0e134fc" />



**Live website:** https://lacky-369-prsad.github.io/Code-Quiz/  
**GitHub repository:** https://github.com/lacky-369-prsad/Code-Quiz

## Why I made it

While learning HTML, CSS and JavaScript, I noticed that I sometimes forgot things I had already learned. When I started writing code, I was not always sure which concept to use.

I wanted a simple way to revise instead of only reading the same notes again. That is why I started CodeQuiz. I also hope it can help other beginners who have the same problem.

## What is in it?

There are 60 questions right now:

- HTML: 20 questions (10 Beginner and 10 Advanced)
- CSS: 20 questions (10 Beginner and 10 Advanced)
- JavaScript: 20 questions (10 Beginner and 10 Advanced)

Each question has four options. You can choose a category, difficulty and the number of questions for a quiz.

Other features:
- 5, 10 or 15 questions in one quiz
- 20 seconds for each question
- Questions and answer options are shuffled
- Score and streak bonus for consecutive correct answers
- Result screen with accuracy and category-wise results
- Best performance saved in the browser using Local Storage

I shuffled the answer options because I did not want the correct answer to stay in the same position every time. The quiz should test what someone knows, not whether they remember an option's position.

## How to use it

1. Open the live website.
2. Choose a category: All, HTML, CSS or JavaScript.
3. Choose a difficulty and question count.
4. Press **Start Quiz**.
5. Answer the questions before the timer reaches zero.
6. Check your result at the end.

When the timer reaches zero, that question is counted as incorrect and the quiz continues.

## How it works

I used HTML for the page, CSS for the design, and JavaScript for the quiz logic.

- `index.html` contains the screens and controls.
- `style.css` controls the colours, layout and answer states.
- `questions.js` contains the question data.
- `script.js` handles the quiz, timer, answers, score, results and Local Storage.

The quiz has three main screens: start, quiz and result. When Start Quiz is pressed, the code filters questions using the selected settings, shuffles them and starts the quiz.

For a correct answer, the user gets points. Consecutive correct answers also increase the streak bonus. A wrong answer resets the streak. The result screen shows the score, accuracy, best streak and category results.

The best performance is saved in the browser for each category, difficulty and question-count setup. It is saved on that browser, not in an online account, so clearing the browser's site data can remove it.

## Problems I ran into

The Start Quiz button did not work at first. My script was using `QUESTIONS`, but the question list was named `QUESTION`. I fixed the name so both parts matched.

I also had spelling mistakes in some variable names and values. A few of these stopped questions from loading correctly. I had a CSS selector mistake too, so the wrong-answer style was not being applied as expected. I also had to fix the screen styles because more than one screen was appearing at once.

Getting the website online took some work as well. At first, GitHub Pages showed a 404 because the files were inside an extra folder. I moved the files to the right place and deployed the site again. While using GitHub, I also ran into commit and push errors and had to work through them.

These bugs took time, but fixing them helped me understand that small mistakes can stop a whole feature from working.
<img width="190" height="390" alt="1000052926" src="https://github.com/user-attachments/assets/d8981886-bbc4-446c-9297-9c424e999f98" />



## How I tested it

I tested the website by clicking through the different settings and quiz screens. I checked the question counts, categories, difficulty levels, correct and incorrect answers, timer, result screen and saved best performance. I also checked that the question data had four options and a valid answer index for each question.

## AI tools I used

The idea came from my own revision problem. I wrote and connected the main quiz logic myself.

I used Claude Sonnet 5.5 to help with question ideas, choosing a colour combination, checking some calculation details and finding a few bugs that were taking me a long time to locate. I checked the suggested fixes and tested the project after making changes.

I also got help arranging the English in this README because I am still learning English. The project details and development problems described here are from my own work.

## What I want to add later

I want to add more questions and more programming languages in the future. I may also add short explanations for answers so learners can understand why an answer is correct, not only see their score.

## License

I have not added a license file to this repository yet.
