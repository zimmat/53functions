# 53functions
Functions to prepare coders to do Code Katas. Each coder will have to clone this repository and start to commit the implementation of the functions into it. A central CI instance will run their functions and give them a score for each function based on how many tests are passing. Coders will need to start working on that from very early on in the program.

> Fifty-three is the 16th prime number. It is also an Eisenstein prime, and a Sophie Germain prime. The sum of the first 53 primes is 5830, which is divisible by 53, a property shared by few other numbers.

# The functions

Create a function that:

 #|File name | Write a function that?
---|----------|-------------------------------------------------------------------------------------
1| hello.js | return "hello world"
2| hello_uppercase.js| takes a users name as parameter and greet a user as "Hello, USERNAME!"
3| hello_joe.js | takes a users name as parameter and greet a user as "Hello, USERNAME!" if their name is Joe or Bob otherwise only say "Hello!"
4| number_list.js |takes a number as a parameter (n) and return a list of number from 1 to n
5| sum_numbers.js| takes a number as a parameter (n) and the sum of numbers from 1 to n
6| length.js|takes a string parameter and return the length of the supplied parameter
7| upper.js |takes a string parameter and return the supplied parameter in upper case
8 |reverse.js|takes a string parameter and return the reversed string parameter
9 |hello_list.js| takes a number as parameter and return a list of "hello world" entries equal to the number supplied
10 |high_low.js| given a list of numbers returns the highest and lowest numbers in the list
11 | count_words.js|takes a sentence as a parameter and return the number of words in the sentence
12 | sum_word_len.js |takes a sentence as a parameter and return the sum of the length of words in the sentence
13 | longest_word.js | takes a sentence as a parameter and return the longest word in the sentence and the length of the word
14|shortest_word.js|takes a sentence as a parameter and return the shortest word in the sentence and the length of the word
15|word_length.js|takes a sentence as a parameter and returns both the average word length rounded up & down
16|avg.js|takes a sentence as a parameter and return the average word length rounded up
17|start.js|takes a sentence as a parameter and return the letter most words starts with
18|ends.js|takes a sentence as a parameter and return the letter most words ends with
19|occurs_most.js|takes a sentence as a parameter and return the letter that occurs the most
20|occurs_least.js|takes a sentence as a parameter and return the letter that occurs the least
21|uppercase_letters.js|that can find all the uppercase letters in a string
22|lowercase_letters.js|that can find all the lowercase letters in a string
	23||can draw a square shape using * it should be 4x4
24|square.js|can draw a square shape using the character supplied as a parameter it should be 4x4
25|square_param.js|can draw a square shape using the character supplied as a parameter, the dimensions should be supplied by a parameter
26|tri.js|can draw a triangle shape using *, it should be have a base of 4
27|tri_char.js|can draw a triangle shape using the character supplied as a parameter, it should be have a base of 4
28|square_param_base.js|can draw a square shape using the character supplied as a parameter, the base should be supplied as a parameter
29|diamond.js|can draw a diamond shape using * the center of the diamond should be 5
30|diamond_star.js|can draw a diamond shape using the character supplied as parameter base of the diamond should be 5
31|diamond_char_base.js|can draw a diamond shape using the character supplied as parameter base of the diamond should be supplied as parameter.
32|add.js|can add two numbers
33|divide|can divide two numbers
34|calc_all.js|can add, subtract, multiply or divide 2 numbers
35|calc_chain.js|has and add, subtract, multiply and divide method - methods should be chainable and it should be possible to do Calculator.add(1,2).multiply(9).value() should equal 27
36|paper_rock.js|allows one to play rock paper scissors * = rock, # = paper, x = scissors, it should be a constructor function that take in number of games that will be played. var game1 =  new RockPaperScissors(3) - it should have a playerOne and a playerTwo functions, a play and a score method.
37|factors2.js|find all the factors of 2 that is less than the number specified by the parameter
38|factors_2_or_7.js|find all the factors of 2 or 7 that is less than the number specified by the parameter
39|factors_2_and_7.js|find all the numbers that are factors of both 2 and 7 that is less than the number specified by the parameter
40|factorial.js|can calculate the factorial for a number supplied as a parameter
	
	* can calculate a fibonacci range less than the number supplied as a parameter
	* takes 2 parameters a list of words and the word to find in the list find the index of where the word is in the list and return it
	* takes 2 parameters a sentence and the word to find in the sentenace find the start and end index of where the word and returns it.
	* can simulate dice rolls for the number of times specified as a parameter - display all the dice rolls.
	* find the sum of all the capital letters ASCII codes 
	* return the sum of all the ascii codes for the letters that is being passed in as parameters.
	* returns all the letters in the alphabet which is even numbers and lower case
	* return the sum of the all the lower case letters ascii codes which is less than the parameters specified.
	* that can calculate currency conversions between ZAR, GBP and USD
	
	 * takes a list of values and a filter function that can filter the list of values - the filtered values should be returned by the function
	* that takes a function as a parameter which it executes when the (outer) function is called
	* that takes a function as a parameter and returns a function when executing the returned function it should pass all parameters to the initially passed in function
	* secret code example at http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html
	* treasure hunt at http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html
	* mayors race at http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html
	* The common field cricket chirps in direct proportion to the current tem­perature. Adding 40 to the number of times a cricket chirps in a minute, then dividing by 4, gives us the temperature (in Fahrenheit degrees). Write a program that accepts as input the number of cricket chirps in fifteen seconds, then outputs the current temperature to the nearest half degree. http://users.csc.calpoly.edu/~jdalbey/101/HomeworkProblems.html
	* Write a program that gauges inflation. It should accept two prices (in whole dollars as input and print their difference, as well as the percentage increase to two decimal places. Then accept as input the number of weeks between the two prices, and compute the yearly rate of inflation (as percentage increase). http://users.csc.calpoly.edu/~jdalbey/101/HomeworkProblems.html
	* Roman numerals: http://users.csc.calpoly.edu/~jdalbey/101/Labs/RomanNumerals.html
