# Epicodus Unit Three Final: Beep Boop!

#### Final Project for Epicodus Unit Three, 02/04/2018 start date.

#### By **Robert James "Jimmy" Gore**

## Description

The primary purpose of this site is to establish a basic portfolio-quality program and site under the guidelines established by Epicodus's end-of-unit project for Arrays and Looping, utilizing various tools and functionality introduced through Epicodus Intro to Programming Unit Three in addition to assets and skills learned from units one and two.  It acts as a comprehensive review of all elements and units taught during the first three units of Epicodus's tracks.

## Setup/Installation Requirements

* Install Git Bash for Git repository cloning of the project
* Install Atom for review and edit of Code
* To access repository for project and review code, first clone repository at the appropriate link, then use Git Bash and/or Atom to open the project folder.
* GitHub Pages link is RJGore92.github.io/arrays-and-looping_independent-project

## Known Bugs

No known bugs are present in this project.

## Assignment Specs

1. The program requires an input of a number of zero or greater.  Attempting to input a string into the input shows nothing, and trying to submit a number less than zero prevents the submit and informs the user of this.  (Inputs will not accept non-numbers, and numbers less than zero will not submit)
2. Once a number of zero or greater is submitted, the program will create a list (array) of numbers starting at zero and working up to the target number that was input. (An input of 5 returns a list of zero through 5 (0, 1, 2, 3, 4, 5) and so on if the number is greater.)
3. Next, the program will look at the array and begin changing the listed numbers based on the following criteria below.  Note that the order of such is written in lowest priority to highest.
    * Any numbers that do not meet the below criteria are left unchanged in the returned list.
    * Numbers that have a zero in them at any point replace the entire entry of that number with "Beep!"  The number zero is also accounted under this spec.  (Other numbers include 20, 40, and 50 for examples, and each will be replaced with "Beep!")
    * Numbers that have a one in them at any point override change behavior spec immediately above this one, instead replacing the entire number with "Boop!"  Sample numbers where this change occurs include 1, 10, 100, 13, and more.
    * Any instance where a number in the list greater than zero is divisible completely by three with no remainder overrides the previous two change criteria and change such numbers to return the phrase "I'm sorry, Dave.  I'm afraid I can't do that."  Example numbers that incur this change are 3, 9, 12, 18, 21, 30, and many more.
4. When the entire array is converted according to the specs above, the program prints the list in the output div assigned by the scripts.  See below for limited examples of input and output ranges.


####  Inputs and outputs (examples):

* User Input: 5, expected output: "'Beep!', 'Boop!', 2, 'I'm sorry, Dave, I'm afraid I can't do that.', 4, 5".
* User Input: 10, output expected includes the above plus the following: "'I'm sorry Dave, I'm afraid I can't do that', 7, 8, 'I'm sorry Dave, I'm afraid I can't do that', 'Boop!'"
* User Input: 20, output expected includes the above output ranges plus the following: "'Boop!', 'I'm sorry Dave, I'm afraid I can't do that', 'Boop!', 'Boop!', 'I'm sorry Dave, I'm afraid I can't do that', 'Boop!', 'Boop!', 'I'm sorry Dave, I'm afraid I can't do that', 'Boop!', 'Beep!'"

## Technologies Used

* Git Bash
* Atom
* HTML
* MD
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

Copyright (c) 2019 **Robert James "Jimmy" Gore**
