# Check out [my GitHub Pages site (asa55.github.io)](https://asa55.github.io)!

## I'm particularly interested in 'full stack python' which is kind of a misnomer because you still need to have a good handle on JS in order to handle some of the frontend work. But both languages are widely used and also a lot of fun, so I'm highly motivated to master both. Here are a few of my notes:



|Topic| Python | both | JavaScript |
|-|-|:-:|-:|
| comments | #<br>`''' '''` | | //<br>/\* \*/ |
| declaration |my_var = 5| | var myVar=5<br>let myVar=5 <br>const myVar=5 |
| casting | str()<br>int()<br>float()<br>bool()| |String()<br>Number()<br>Boolean() |
| operators|// |+<br>-<br>\*<br>\*\*<br>/<br>% | |
| assignment| |+=<br>-=<br>\*=<br>\*\*=<br>/=<br>%= | |
|increment<br>decrement | | |++<br>\-\- |
|equality |is |==<br>!= |===<br>!== |
|string overloaded ops |\* |+ | |
| in |(value in sequence) | in |(index in array) |
| array data structure| (called a list but<br>implemented<br>as array) | [1,2,3] | (called an array) |
| indexing | `[1,2][0][0]` returns TypeError | `[1,2][0]` returns 1 |`[1,2][0][0]` returns undefined |
| immutable arrays | (1,2,3) called a tuple | |  (2,3) is syntactically valid but not useful |
| deletion | del(a) | | delete(a) |
| JSON-like syntax | `i,j='k',1`<br>`b={i:j}` returns hash table (dictionary) `{'k':1}`| | `i='k';j=1; b={i:j}` creates object `{i:'k',j:1}` |
| inserting array element | `a=[]`<br>`a[0]=10` returns SyntaxError| | `var a = []`<br>`a[0]=10`<br>`a[100]=20`<br>returns length 101 array [10, undefined, ... , undefined, 20] |
| removing array element | `arr=['h','i','!']`<br>`del arr[1]`<br> returns `['h','!']` | | `var arr=['h','i','!'];`<br>`delete arr[1]`<br>returns `['h','!']` |
| array length | len([1,2,3]) | | [1,2,3].length |
| access last array element | `[1,2,3][-1]` | | `arr=[1,2,3];`<br>`arr[arr.length-1];` |
| slicing | `[1,2,3][:1]`<br>`[1,2,3][1:]` | | `[1,2,3].slice(null,2)`<br>`[1,2,3].slice(1)` |
| clear array | `arr.clear()` | | `arr.length = 0;` |
| array methods | `arr.append(5)`<br>`arr.extend([5,6])`<br>`.insert()`<br>`.remove()`<br>`.index()` | `.reverse()`<br>`.sort()`<br>`.pop()` | `arr.push(5)`<br>`arr.push(5,6)`<br>`.filter()  .map()  .reduce()`<br>`.every()  .some()`<br>`.keys()`<br>`.shift()  .unshift()` |
| printing | `print()` | | `console.log()` |
| array-of-string concatenation | `['hello'] + [' world']` | | `['hello'].concat([' world'])` |
| string casting | `list('hi')` returns `['h','i']`<br>`tuple('hi')` returns `('h','i')`| | `var arr = new Array('4')` returns `['4']`<br>this next one is not sting casting, but `var arr = new Array(4)` returns length 4 array `[,,,,]` |

### I have plenty more content to add, back at it again tomorrow...
