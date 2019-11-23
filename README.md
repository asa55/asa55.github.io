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
| type checking | `type()` | | `typeof()`<br>`isNaN()`<br>`isInteger()`<br>`isFinite()` |
| array data structure| `[]` is called a 'list' but is implemented as an array | [1,2,3] | `[]` is aptly referred to as an array |
| indexing | `[1,2][0][0]` returns `TypeError` | `[1,2][0]` returns `1` |`[1,2][0][0]` returns `undefined` |
| immutable arrays | `(1,2,3)` called a tuple | |  `(2,3)` is syntactically valid but not useful (returns last element only (`3`)) |
| inserting array element | `a=[]`<br>`a[0]=10` returns `SyntaxError`| | `var a = []`<br>`a[0]=10`<br>`a[100]=20`<br>returns length 101 array (`[10, undefined, ... , undefined, 20]`) |
| removing array element | `arr=['h','i','!']`<br>`del arr[1]`<br> returns `['h','!']` | | `var arr=['h','i','!'];`<br>`delete arr[1]`<br>returns `['h','!']` |
| array length | `len([1,2,3])` | | `[1,2,3].length` |
| access last array element | `[1,2,3][-1]` | | `arr=[1,2,3];`<br>`arr[arr.length-1];` |
| slicing | `[1,2,3][:1]`<br>`[1,2,3][1:]` | | `[1,2,3].slice(null,2)`<br>`[1,2,3].slice(1)` |
| clear array | `arr.clear()` | | `arr.length = 0;` |
| array methods | `arr.append(5)`<br>`arr.extend([5,6])`<br>`.insert()`<br>`.remove()`<br>`.index()` | `.reverse()`<br>`.sort()`<br>`.pop()` | `arr.push(5)`<br>`arr.push(5,6)`<br>`.filter()  .map()  .reduce()`<br>`.every()  .some()`<br>`.keys()`<br>`.shift()  .unshift()` |
| in |`in` refers to values | `in` | `in` refers to indexes |
| range array | `x=[i for i in range(10)]` | | `x=[];`<br>`for (i=0;i<10;i++) {x[i]=i};` |
| string element indexing | | `'hello'[1]` returns `'e'` | |
|string overloaded ops |`*` |`+` | |
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
| map example | `def double(x):`<br>....`return x*2`<br>`y=map(double,[1,2,3])`<br>can be written as<br>`y=map(lambda x: x*2, [1,2,3])` | | `const y=[1,2,3].map(x => x*2);` |

### I have some updates to make regarding OOP and examples. I'm thinking it will be helpful to show implementations of linked lists, max heaps, binary search trees, graphs, and possibly to highlight some of the environment differences given that JS is typically running in Node or a browser.

#### That's all I've thought of so far but maybe when I get to that point more will come to mind. It's easy to look all of this up, but the primary objective of this table is to help keep these points straight in my own mind when I'm asked to code on a whiteboard. But I can't afford to focus on a single language just to mitigate risk of mix-ups at whiteboard coding, so memorizing this table is my solution
