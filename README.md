# Check out [my GitHub Pages site (asa55.github.io)](https://asa55.github.io)!

## I'm particularly interested in 'full stack python' which is kind of a misnomer because you still need to have a good handle on JS in order to handle some of the frontend work. To exercise, I typically keep a python shell up next to a node shell and code the same idea in both. Here are a few of my notes:

|Topic| Python | both | JavaScript |
|-|-|-|-|
| comments | `#`<br>`"""  """` | | `//`<br>`/*  */` |
| declaration |`my_var = 5`| | `var myVar = 5`<br>`let myVar = 5` <br>`const myVar = 5` |
| operators|`//` |`+`<br>`-`<br>`*`<br>`**`<br>`/`<br>`%` | |
| assignment| |`=`<br>`+=`<br>`-=`<br>`*=`<br>`**=`<br>`/=`<br>`%=` | |
| deletion | `del(my_var)` | | `delete(myVar)` |
|increment<br>decrement | | |`++`<br>`--` |
|equivalence |`is` |`==`<br>`!=` |`===`<br>`!==` |
| equivalence rules | `[]==[]` returns `True` | | `[]==[]` returns `false` (because not referring to the same instance) |
| casting | `str()`<br>`int()`<br>`float()`<br>`bool()`| |`String()`<br>`Number()`<br>`Boolean()` |
| special types | without imports, `float('inf')`<br>`float(nan)` | | `NaN`<br>`undefined`<br>`null`<br>`Infinity` |
| type checking | `type()` | | `typeof()`<br>`isNaN()`<br>`isFinite()` |
| array data structure| `[]` is called a 'list' but is implemented as an array | [1,2,3] | `[]` is aptly referred to as an array |
| indexing | `[1,2][0][0]` returns `TypeError` | `[1,2][0]` returns `1` |`[1,2][0][0]` returns `undefined` |
| immutable arrays | `(1,2,3)` called a tuple | |  `(2,3)` is syntactically valid but not useful (returns last element only (`3`)) |
| inserting array element | `a=[]`<br>`a[0]=10` returns `SyntaxError`| | `var a = []`<br>`a[0]=10`<br>`a[100]=20`<br>returns length 101 array (`[10, <99 empty items>, 20]`) |
| removing array element | `arr=['h','i','!']`<br>`del arr[1]`<br> returns `['h','!']` | | `var arr=['h','i','!'];`<br>`delete arr[1]`<br>returns `['h','!']` |
| array length | `len([1,2,3])` | | `[1,2,3].length` |
| access last array element | `[1,2,3][-1]` | | `arr=[1,2,3];`<br>`arr[arr.length-1];` |
| slicing | `[1,2,3][:1]`<br>`[1,2,3][1:]` | | `[1,2,3].slice(null,2)`<br>`[1,2,3].slice(1)` |
| clear array | `arr.clear()` | | `arr.length = 0;` |
| array methods | `arr.append(5)`<br>`arr.extend([5,6])`<br>`.insert()`<br>`.remove()`<br>`.index()` | `.reverse()`<br>`.sort()`<br>`.pop()` | `arr.push(5)`<br>`arr.push(5,6)`<br>`.filter()  .map()  .reduce()`<br>`.every()  .some()`<br>`.keys()`<br>`.shift()  .unshift()` |
| in |`in` refers to values | `in` | `in` refers to indexes |
| range array | `x=list(range(10))`<br>or as a list comprehension<br>`x=[i for i in range(10)]`<br>or in Python3 with unpacking operator<br>`x=[*range(10)]` | | `x=[];`<br>`for (i=0;i<10;i++) {x[i]=i};` |
| string element indexing | | `'hello'[1]` returns `'e'` | |
|string overloaded ops |`*` |`+` | `'2'*'50'` returns type number `100`<br>so does `'2'*50` |
| string methods | `capitalize()`<br>`find()`<br>`upper()  lower()`<br>`isupper()  islower()`<br>`split()  count()` | | `.length` (no parens)<br>`.indexOf()  .lastIndexOf()`<br>`.slice(,)  .replace(,)`<br>`.toUpperCase()  .toLowerCase()`<br>`.concat(,)  .charAt()`<br>`.split()` |
| array-of-string concatenation | `['hello'] + [' world']` | | `['hello'].concat([' world'])` |
| string casting | `list('hi')` returns `['h','i']`<br>`tuple('hi')` returns `('h','i')`| | `var arr = new Array('4')` returns `['4']`<br>this next one is not sting casting, but `var arr = new Array(4)` returns length 4 array `[,,,,]` (note that JS ignores the last comment when there is no data between it and the bracket) |
| regular expressions | not built in, `import re`| | `var a = myStr.search(/mySearchStr/i)`|
| JSON-like syntax | `i,j='k',1`<br>`b={i:j}` returns hash table (dictionary) `{'k':1}`| | `i='k';j=1; b={i:j}` returns object `{i:'k',j:1}` |
| printing | `print()` | | `console.log()` |
| datetime | `import datetime as dt`<br>`d=dt.datetime.now().timestamp()`<br> gets seconds with millisecond precision since 1970 | | `var d = new Date()`<br>`d.getTime();`<br> gets milliseconds since 1970 |
| control flow keywords | `pass` | `continue`<br>`break` | |
| if | `if (conditions):`<br>`elif (conditions):`<br>`else:` | | `if(conditions) { }`<br>`else if (conditions) { }`<br>`else { };` |
| while | `while(conditions):` | | `while(conditions) { };` |
|do-while | not built in<br>`while True:`<br>....`#code`<br>....`if (condition):`<br>........`break` | | `do {]`<br>`while(conditions) { };` |
| for | `for i in range(5):`<br>`for items in list:` | | `for ( var i=0; i<5; i++) { };` |
| switch | not built in | | `switch(myCase) { case 1: break;`<br>....`default:  };` |
| try-catch | `try:`<br>`except:`<br>`finally:` | | `try {  throw "myErr";}`<br>`catch(err) { }`<br>`finally { };` |
| doctests | `def sum(a,b):`<br>....`""" >>> sum(2,2)`<br>....`4 """` | | not built in<br>`npm install doctest`|
| object properties (attributes and methods) | `class MyClass(object):`<br>....`def __init__(self):`<br>........`self.attrib=5`<br>....`def myMethod(self):`<br>........`pass`<br>`myInstance = MyClass()` | | there is a lot more to properly comparing OOP between JS and Python - I will update soon.<br>`myInst={myAttrib:5,myMethod:function(){},};` |
| promises | not built in | | `var promise1 = new Promise(function(resolve, reject) {`<br>....`setTimeout(function() {`<br>........`resolve('foo'); }, 300); });`<br>`promise1.then(function(value) {`<br>....`console.log(value); });`<br>`console.log(promise1);` |
| lambdas | `def addTen(myNum):`<br>....`return myNum + 10`<br>can be written as<br>`addTen = lambda myNum: myNum + 10` | | `function addTen(myNum) { return myNum + 10 };`<br>can be written as<br>`const addTen = (myNum) => myNum + 10;` |
| map example | `def double(x):`<br>....`return x*2`<br>`y=map(double,[1,2,3])`<br>can be written as<br>`y= list(map(lambda x: x*2, [1,2,3]))`<br>or as a list comprehension (not a map)<br>`y=[i*2 for i in [1,2,3]]` | | `const y=[1,2,3].map(x => x*2);` |

### I have some updates to make regarding OOP and examples. I'm thinking it will be helpful to show implementations of data structures singly/doubly linked lists, max/min heaps, binary search trees and AVL trees, a few types of graphs, and possibly to highlight some of the environment differences given that JS is typically running in Node or a browser. I don't know if I'll show implementations of hashes, stacks, or queues because these are both built in to Python and JS. I'll consider throwing a few algorithms in as well - likely the most common comparison model and non-comparison model sorts, shortest path problems with Dijkstras algorithm and some variants, dynamic programming, the knapsack problem, maybe others

#### That's all I've thought of so far but maybe when I get to that point more will come to mind. It's easy to look all of this up, but the primary objective of this table is to help keep these points straight in my own mind when I'm asked to code on a whiteboard. But I can't afford to focus on a single language just to mitigate risk of mix-ups at whiteboard coding, so memorizing this table is my solution


## Another topic I've been thinking about recently is related to counting probabilities

Years ago in a class called Analysis of Stochastic Processes, my instructor asked a toy problem on a quiz. His favorite Boston baseball team went to the world series, where the best team out of 7 games wins it all. I chewed on that for a few minutes thinking about it as a tree diagram, and trying to wrap my head around accounting for early termination by winning it all after only 4 games. After a meager attempt at drawing the tree on the back of the exam, I realized this method was too complex to draw out. One way to come to the right answer, and I suspect the way he was looking for, was to use a few observations in disjointed sets and the pigeonhole property to realize that there is only one way to win 4 games, (4 choose 3) ways to win 3 games out of 4 then win the 5th, (5 choose 3) ways to win 3 games out of 5 then win the 6th, and (6 choose 3) ways to make it to game 7 then win it all. Adding these all together gives you 35 possible winning outcomes, and by symmetry there are 35 more outcomes where the other team wins.

But it chewed me up for a long time that I couldn't get my head around the problem graphically. At least, not until I recently started looking into [the Catalan Numbers](https://en.wikipedia.org/wiki/Catalan_number#Third_proof). The classic tree diagram I tried to scribble on the back of the exam was just a very inelegant way of taking into account the monotonicity of the problem. If you check out [this figure from Wikipedia](https://en.wikipedia.org/wiki/Catalan_number#/media/File:Catalan_number_algorithm_table.png), imagine a 4x4 grid where traversing a unit to the right is a loss and a unit upward is a win. If you get to one edge of the grid, the series is over. But the image on Wikipedia shows that all of the paths start at the bottom left corner of the grid, and end at the top right, so what's up with that? After chewing on it just a little bit longer it turns out we don't have to worry about it, because by the time you make it to one edge of the grid, the path shown in the image is pigeonholed into traversing the remainder of the edge! So there is nothing else we need to do to compensate for our problem - it is already a perfect analogy. The visualization is beautiful, it would have fit on the back of the exam, and I quickly would have realized the answer for all possible outcomes is simply (2n choose n) - woot! simple yet elegant.

How does this relate to the Catalan numbers? Check out the link to Wikipedia above and it will become immediately obvious.

I realize this discussion probably makes little sense to anybody else reading this. It is not polished, it is out of context, it is a wall of text. But that's OK - I wanted to get the thought written down while it was on my mind and I'll clean it up later. If you're interested in seeing this thought presented in its final form, check back soon! And thanks for reading
