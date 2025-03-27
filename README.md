# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

What is the runtime complexity of the algorithm that you implemented?

1 I call a sorted which has a for loop that will run for the length of an array so the complexity of that is n


2 I call a permutation which has a for loop that will run for the length of an array so the complexity of that is n


3 inside of the for loop sorted I call sorted which has a for loop that will run for the length of an array so the complexity of that is n


4 add 1 to num which can be done in constant time


5 swap elements A&B which can be done in constant time


6 Recursively call permutation which has a for loop that will run for the length of an array from a starting position of b +1 so the complexity of that is !n and a constant time factor of adding num to num


7 inside of the for loop sorted I call sorted which has a for loop that will run for the length of an array so the complexity of that is n


8 5 swap elements A&B which can be done in constant time


So $n + n * n * n * n! = n + n^3 * n! ∈ Θ (n^3 * n!)$


What does a best-case input for your implementation look like?


The best case is an already sorted list, which would result in a runtime of n.


What does a worst-case input look like?


The worst case would be a list that forces the algorithm to do every possible permutation of the list, which would have a runtime of $n^3*n!$


How would this complexity change if you generated permutations randomly without memory instead of systematically trying them?


The best case would still be the same because you could get a sorted left after the first random sort. But the worst case would be Infinity because there is a possibility that you just never randomly git the sorted list.


For this assignment, I used the resources of https://www.w3schools.com/js/js_loop_for.asp,https://www.w3schools.com/js/js_loop_for.asp

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
