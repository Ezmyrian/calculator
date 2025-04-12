# calculator
For this final foundations project I will be using a combination of skills developed thus far to create an on-screen calculator using Javascript, HTML, and CSS.

This calculator will contain functions for all the basic math operators and will display the numbers as they are clicked. Once the = key is clicked it will return the result of the calculation. Unlike a normal calculator, the numbers and operators will be evaluated in the order input rather than by normal order of operations.

Reflections:

During creation several unintended bugs were introduced.  Initially when totaling values any additional number input would append the number to the total.  In order to fix this, I set the subDisplay to show an empty space.  This allowed the display to remain blank and my code to check if total was the last thing run, which allowed me to code if the display should be cleared before the new number was input.  This introduced another bug, in which only a single digit could be input after total was run as the new number would overwrite anything already in the display.  This was fixed by updating the check to then set subDisplay to an empty string with no space after the display was cleared.  

An unintended side effect of allowing decimal places was that the math functions could return large decimal places.  The solution was to call toFixed on the return from each math function.

When setting the event listener function calls I came across an issue where I needed to be able to pass arguments into the functions as they were called, but due to how event listeners cannot be passed parameters I had to do some research into how to make it work.  Googling the issue I was able to sift through the results and find that using an anonymous function call which then called the named function with the correct arguments would work perfectly.  Using function calls like this I was able to get all my function calls working as intended.