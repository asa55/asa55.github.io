# Programming Languages

<details>
<summary>
...
</summary>

## Every software enthusiast needs to be comfortable in at least one language. If I could stick to Python, I would. But the web demands JS, embedded demands (whatever language compiler you can get that targets your device) mostly C/C++, and cross-platform mobile app development using Unity engine needs C# while MultiOS Engine needs Java (or Kotlin). I love Matlab so very much, but it's not general purpose and it's extremely expensive for professional use

## Compounding all of the above concerns is the fact that you need to be comfortable enough in a single language that you can code on a whiteboard, most notoriously during a big coding interview but also for presentation purposes

## I'm particularly interested in 'full stack python' which is kind of a misnomer because you still need to have a good handle on JS in order to handle some of the frontend work. To exercise, I typically keep a Python shell up next to a NodeJS shell and code the same idea in both. Here are a few of my notes:

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

### I have examples of more advanced concepts in the data structures and algorithms section of this site - feel free to check them out for more language comparisons

</details>

# Math for Computer Science and More

<details>
<summary>
...
</summary>

## I haven't decided how far I'm going to take this outside of discrete math. There are tons of concepts worth exploring, so I'll have to iterate over this a few times at least as I consider how I want to constrain the scope of this page. A few notes from me to myself are below

* Complexity (Theta, O, Omega)
* Recursion (and logical induction)
* Set theory (including N0, N1, Z, Q, R, C, cardinality)
* Combinatorics, counting probabilities, possibly some notes on distributions
* Possibly some design of experiments (full/fractional factorial, latin hypercube)
* A few topics from information theory
* Logic, K-Maps
* Graph theory
* Optimization
* Possibly some stats and stochastic processes, markov chains
* Functions, functionals
* Linear algebra, ODEs
* Matrix / Tensor calculus
* Orthogonal functions, encoding/decoding, PDEs

## A topic I've been thinking about recently is related to counting probabilities

Years ago in a class called Analysis of Stochastic Processes, my instructor asked a toy problem on a quiz. His favorite Boston baseball team went to the world series, where the best team out of 7 games wins it all. I chewed on that for a few minutes thinking about it as a tree diagram, and trying to wrap my head around accounting for early termination by winning it all after only 4 games. After a meager attempt at drawing the tree on the back of the exam, I realized this method was too complex to draw out. One way to come to the right answer, and I suspect the way he was looking for, was to use a few observations in disjointed sets and the pigeonhole property to realize that there is only one way to win 4 games, (4 choose 3) ways to win 3 games out of 4 then win the 5th, (5 choose 3) ways to win 3 games out of 5 then win the 6th, and (6 choose 3) ways to make it to game 7 then win it all. Adding these all together gives you 35 possible winning outcomes, and by symmetry there are 35 more outcomes where the other team wins.

But it chewed me up for a long time that I couldn't get my head around the problem graphically. At least, not until I recently started looking into [the Catalan Numbers](https://en.wikipedia.org/wiki/Catalan_number#Third_proof). The classic tree diagram I tried to scribble on the back of the exam was just a very inelegant way of taking into account the monotonicity of the problem. If you check out [this figure from Wikipedia](https://en.wikipedia.org/wiki/Catalan_number#/media/File:Catalan_number_algorithm_table.png), imagine a 4x4 grid where traversing a unit to the right is a loss and a unit upward is a win. If you get to one edge of the grid, the series is over. But the image on Wikipedia shows that all of the paths start at the bottom left corner of the grid, and end at the top right, so what's up with that? After chewing on it just a little bit longer it turns out we don't have to worry about it, because by the time you make it to one edge of the grid, the path shown in the image is pigeonholed into traversing the remainder of the edge! So there is nothing else we need to do to compensate for our problem - it is already a perfect analogy. The visualization is beautiful, it would have fit on the back of the exam, and I quickly would have realized the answer for all possible outcomes is simply (2n choose n) - woot! simple yet elegant.

How does this relate to the Catalan numbers? Check out the link to Wikipedia above and it will become immediately obvious.

I realize this discussion probably makes little sense to anybody else reading this. It is not polished, it is out of context, it is a wall of text. But that's OK - I wanted to get the thought written down while it was on my mind and I'll clean it up later. If you're interested in seeing this thought presented in its final form, check back soon! And thanks for reading

## Recursion is a great topic here as it implements inductive logic... Maybe put an example up of the Towers of Hanoi

## I took out the section for classic problems, but I think I still need a place to answer some common coding interview questions. Rotate a matrix in place, detect unique chars, etc..

</details>

# Data Structures

<details>
<summary>
...
</summary>

## Data structures go hand-in-hand with algorithms, which are detailed on another page of this site. The focus here is on implementation and mental models for common data structures, and how some of them are related or can be substituted in different contexts

### Note to self: I think a valuable reference on this page will be to make tables including the theoretical structure and methods for each data structure

## Arrays

The Random Access Machine (RAM - which conveniently Random Access Memory implements) is a model of computation. Think of it as giant array of words (stored in a constant number of registers) that you can navigate by index. In constant time an algorithm used on an array can load and store a constant number of words, and do a constant number of computations.

## Visualize Arrays as "Random Access" and Linked Lists as "Sequential Access"
![wikipedia random access page](https://upload.wikimedia.org/wikipedia/commons/a/a7/Random_vs_sequential_access.svg)

## Linked Lists

The Pointer Machine allows for dynamically allocated objects, each with a constant number of "fields" (either a word or a pointer). A pointer is something that points to another object or to some special value null (referred to as null in JavaScript, None in Python). Modern languages tend to call pointers "references".

A doubly-linked list can be thought of as a sequence of tables, each storing a value, a pointer to the previous object, and a pointer to the next object. In Python you might call it a named tuple, or an object with three attributes. You can implement this model in a Random Access Machine, so a pointer becomes an index into a giant table, and you get the ability to do other things like adding constants to the pointers to point to new places - which is a lot more like pointers in C. But a doubly-linked list in its most general form doesn't allow for this because outside of the context of RAM we might not have this well-ordered property. So the model we're discussing here is actually weaker than linked lists implemented in RAM, but they offer a different way of thinking.

The Python model offers both a RAM perspective and a Pointer Machine perspective for implementing linked lists, and it even offers the basic operations (load,modify,insert), it also has other features built in (sort for instance). Python has a data type called a list, but it is actually implemented as an array. For reasonably sized lists, Python offers modification and accessing the "next list item" in constant time. Python also allows for appending new items to the list in amortized constant time using a technique called table doubling. Concatenating two lists can be done in O(1 + length of first list + length of second list). Finding if an element is in a list using keyword "in" takes linear time. Python implements lists with a counter built in, so finding the length of a list takes constant time. If you want to sort a list, this takes O(n log(n)) time. A hash table in Python is called a dictionary, and with high probability it takes constant time to access a value in a dictionary given a key. If x and y each contain more than 1 word, Python can sum these in O((|x| + |y|)^(lg(3))) time.

## Visualize a LIFO Stack as.. a Stack!

![wikipedia stack abstract data type](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

## Stacks

Stacks work on the principle of "last in, first out" (LIFO). In most languages, there are built-in operations that let you implement this efficiently using pre-existing data types. For instance, in Python there are built-in list methods called .append() and .pop() that will concatenate a new item to the end of the list, or pop the item off that same end of the list.

## Visualize a Queue like the Cafeteria Lunch-Line

![wikipedia FIFO](https://upload.wikimedia.org/wikipedia/commons/d/d3/Fifo_queue.png)

## Priority Queues

Priority Queues implements a set of elements, each associated with a key. You want to pick the max or min priority, you want to delete it from the queue, you want to insert something into the queue, you want to be able to change priorities in the queue. These are all interesting operations that should be able to run fast.

Priority Queues work on the principle of "first in, first out". Because Python implements lists as arrays, it would be inefficient to keep fiddling around with the front end of the list because it may require shifting or in some way modifying all of the other elements - but we can still implement Priority Queues as lists using tools optimized for this purpose (from collections import deque).

As a very important implementation detail, in many cases algorithms requiring Priority Queues benefit from being implemented as a max heap or a min heap.

## Visualize a (Max) Heap as a Binary Tree

![wikipedia heap](https://upload.wikimedia.org/wikipedia/commons/b/bf/Max-heap.png)

## Heaps

Heaps can be efficiently implemented as arrays.

Definition:
Heap as a tree: root is first element (i=1), parent(i)=floor(i/2), left(i) = 2\*i, right(i) = 2\*i+1. It is a nearly complete binary tree (meaning the height of the visualization of this tree is lg(n) - we exploit this by building algorithms that go level-by-level, and if we can do that we get logarithmic complexity algorithms)

Max-Heap Property:
The key of a node >= the keys of its children.

Find max is trivially performed on a Max-Heap. Extract max is not trivially performed because simply yanking the max element from a max heap the structure of a tree in a way that might not be representation invariant (a.k.a. rep invariant).

Heap operations:
* build_max_heap: produces a max heap from an unordered array. O(n).
* max_heapify: correct a single violation of the heap property in a subtree's root. O(lg(n)).
* heap_size: returns size of heap. (O(1) in Python).
* heap_sort ( O(n lg(n)) ):
   1. build_max_heap from unordered array
   2. find max element A[1]
   3. (key step - could do extract_max instead) swap elements A[n] with A[1]. Now max element is at the end of array.
   4. discard node node n from the heap simply by decrementing heap size
   5. new root after the swap may violate Max-Heap Property (MHP) but the children are max heaps, so we can run max_heapify to fix this, then go back to step 2 and repeat.

# Visualize an AVL Tree as a Balanced Binary Search Tree

![wikipedia binary search tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## Binary Search Trees

## AVL Trees

## Hashing with Chaining

## Hashing with Open Addressing

</details>

# Algorithms

<details>
<summary>
...
</summary>

## I am excited to get some algorithm demos up using both JS and Python. While I love Jupyter notebooks, I think I can do what I need to do using Brython! (It parses Python using JS so you can use Python as an in-browser scripting language!) It's slower than JS but I need to showcase Python, and I would rather incur minor in-browser overhead as opposed to redirecting users to another page just to demo some algorithms

## Comparison Model Sorting Algorithms

### Insertion Sort

<a title="Swfung8 [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Insertion-sort-example-300px.gif"><img width="256" alt="Insertion-sort-example-300px" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif"></a>

### Merge Sort

<a title="Swfung8 [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Merge-sort-example-300px.gif"><img width="256" alt="Merge-sort-example-300px" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif"></a>

## Non-Comparison Model Sorting Algorithms

### Counting Sort

`count = array of k+1 zeros`
`for x in input:`
....`count[key(x)] += 1`

`total = 0`
`for i in 0, 1, ... k:`
....`count[i], total = total, count[i] + total`

`output = array of the same length as input`
`for x in input:`
....`output[count[key(x)]] = x`
....`count[key(x)] += 1 `

`return output`

### Radix Sort

`function bucketSort(array, k) is`
....`buckets ← new array of k empty lists`
....`M ← the maximum key value in the array`
....`for i = 1 to length(array) do`
........`insert array[i] into buckets[floor(k * array[i] / M)]`
....`for i = 1 to k do`
........`nextSort(buckets[i])`
....`return the concatenation of buckets[1], ...., buckets[k]`

## Heapsort

<a title="RolandH [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0/)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Sorting_heapsort_anim.gif"><img width="256" alt="Sorting heapsort anim" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif"></a>

## Binary Search Tree Sort

## AVL Sort

## Table Doubling

## Karp-Rabin

`function RabinKarp(string s[1..n], string pattern[1..m])`
....`hpattern := hash(pattern[1..m]);`
....`for i from 1 to n-m+1`
........`hs := hash(s[i..i+m-1])`
........`if hs = hpattern`
............`if s[i..i+m-1] = pattern[1..m]`
................`return i`
....`return not found`

## Breadth First Search

<a title="Alexander Drichel [CC BY 3.0 (https://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Breadth-first-tree.svg"><img width="256" alt="Breadth-first-tree" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Breadth-first-tree.svg/256px-Breadth-first-tree.svg.png"></a>

## Depth First Search

<a title="Alexander Drichel [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Depth-first-tree.svg"><img width="256" alt="Depth-first-tree" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Depth-first-tree.svg/256px-Depth-first-tree.svg.png"></a>

## Dijkstra's Algorithm

<a title="Subh83 [CC BY 3.0 (https://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Dijkstras_progress_animation.gif"><img width="128" alt="Dijkstras progress animation" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Dijkstras_progress_animation.gif"></a>

## Bellman-Ford

## A* (A-star)

<a title="Subh83 [CC BY 3.0 (https://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Astar_progress_animation.gif"><img width="128" alt="Astar progress animation" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Astar_progress_animation.gif"></a>

## Dynamic Programming

</details>

# Operating Systems

<details>
<summary>
...
</summary>

## Complexity limits what we can build, but can be mitigated with modularity and abstraction. Operating systems enforce modularity on a single machine ([MIT 6.033, Spring 2018](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/index.htm))

In order to enforce modularity and build an effective OS:
1. Programs shouldn't be able to refer to (or corrupt) each others' memory
   * To enforce this, we virtualize memory
   * The Memory Management Unit (MMU) translates virtual addresses to physical addresses using *page tables*.
2. Programs should be able to communicate
   * To enforce this, we virtualize communication links
   * *Bounded buffers* allow programs to communicate, and are tricky to implement due to *concurrency* (time multiplexed processes). *Locks* allow us to implement *atomic actions*, but this is also tricky to do right thanks to *race conditions*, *deadlock*, and *performance issues*.
3. Programs should be able to share a CPU (without one program halting the progress of others)
   * To enforce this, we virtualize processors
   * *Threads* virtualize a processor to share it among programs. The kernel can suspend the current thread and resume another using *yield*. *Condition variables* provide a more efficient API for threads, where they *wait* for an event and are *notified* when it occurs. *Preemption* forces a thread to be interrupted so we don't have to rely on people correctly using yield, but it requires a special *interrupt* and hardware support to disable other interrupts.

The OS enforces modularity on a single machine via virtualization and abstraction.

The kernel manages page faults and other interrupts.

## Processes

### Semaphores

### Mutexes

## Resource Allocation

## Context Switching

## Scheduling

</details>

# Networking and the Internet

<details>
<summary>
...
</summary>

## [Check out MIT 6.033](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/index.htm) for all this and more on networks!

### Network Basics

A *system* is a set of interconnected components that has an expected behavior observed at the interface with its environment.

Complexity limits what we can build and causes a number of unforeseen issues, but these challenges can be mitigated with design principles such as modularity and abstraction.

One way to enforce modularity is to use the [*client/server model*](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview).

In a client/server model, the client's browser sends a GET request to get resources (HTML code, images, etc.) from a remote URL. The server sends a POST reply with the requested resources (if possible and allowable). This is done through the use of [stub clients and Remote Procedure Calls (RPCs)](https://en.wikipedia.org/wiki/Stub_(distributed_computing)) - where the *stub* is the piece of code that converts parameters passed between client and server during an RPC.

The challenges we face with RPCs stem from the fact that they act over a network, and you can't count on communications not to drop out at the worst possible time. We can have servers store state information to *replay* results, preventing multiple requests from a user from repeating completed actions (for example user clicks "buy" on an item multiple times because the "success" page isn't loading like they expect) but the servers could still fail.
We want things like:
* Scalability
* Fault-tolerance and reliability
* Security

What is a network?
* *End points* talk to other end points via *links*
* Links connect end points via *switches*
* *Nodes* are end points or switches
* Nodes are assigned unique names (or addresses - names imbued with location information) to nodes
* In *routing* each node learns a minimum-cost route to every other reachable node
* *Transport* is the process associated with sharing the network efficiently and fairly

### Naming in Systems and Domain Name Systems (DNS)

*Naming* is what allows modules (e.g. a client and a server) to communicate. It is pervasive across systems.
*DNS* maps hostnames to IP addresses, and is a good example of *hierarchy*.
* *Names* are the set of all possible names (e.g. hostnames github.io)
* *Values* are the set of all possible values (e.g. IP addresses 176.9.22.128)
* *Look-up algorithms* *resolve* a hostname to an IP address so that your machine knows where to send data.
   * There are only 13 root server IP addresses on the entirety of the internet today (to the best of my knowledge)
   * If you want to find asa55.github.io:
      * Your browser sends a recursive call to root, root table returns the IP address for the "io" table (which it knows because there are a finite number of extensions, like .com, .edu, etc.)
      * "io" table returns the IP address for the "github" table (which it knows because GitHub "registered" to own the domain name when it bought it)
      * "github" table returns the IP address for "asa55" page (which it knows because GitHub lets me use this domain name)

## Routing

The goal of a routing protocol is to allow each switch to know, for every destination in the network, a minimum-cost route to the destination.

The following two methods are conceptually simple but don't scale well to the size of the internet:
* *Link-state routing* works by disseminating full topology information to all nodes. It is robust against failures, but the overhead of flooding (i.e. sending advertisements (i.e. a list of neighboring nodes and the link costs to those nodes) to every other node) limits its ability to scale.
* *Distance-vector routing* works by disseminating information about the cost of the routes. This has less overhead, but its poor failure handling limits its scale.

For scalable routing, we look to:
* *Path-vector routing*: advertisements include the path
* *Hierarchy of routing*: route between Autonomous Systems (AS) then within AS
* *Topological addressing*: assign addresses to contiguous blocks to make advertisements smaller
* *Border Gateway Protocol (BGP)* provides a means for AS to do *policy routing*. It works on the internet today, though scale is becoming a concern even for this as the internet continues to grow

What we want:
* We want to *route* (and address) scalably while dealing with issues of policy and economy. We can do this through *BGP*.

* We want to transport data scalably while dealing with various application demands. We can do this through *TCP*.
   * TCP provides reliable transport along with congestion control.
   * TCP has been a massive success, but senders don't react to congestion until queues are already full. There are better ways to handle this via *in-network resource management*
      * To handle these issues, we use *queue management* techniques such as:
         * *Droptail*, which drops packets when queue is full
         * *RED (drops) / ECN (marks)*, which drops packets before the queue is full
      * *Traffic differentiation* schemes require a scheduling discipline (a.k.a. *load balancers*)
         * We can also used *delay-based scheduling* if we want to give latency guarantees to certain types of traffic
            * *Priority queueing*, which puts latency-sensitive traffic first
         * We can also use *bandwidth-based scheduling* to allocate a specific amount of network bandwidth to some traffic
            * *Round-robin* (or weighted round-robin or deficit round-robin)

## Firewalls

## Search

## More

In theory, client-server model is less scalable than a Content Delivery Network (CDN) model, is less scalable than a Peer-to-Peer (P2P) network model. CDNs don't scale the same way that P2P networks do but provide features that P2P networks can't. P2P networks are infinitely scalable in theory, but incentivizing peers to cooperate well is a challenge.

</details>

# Distributed Systems

<details>
<summary>
...
</summary>

## [Check out MIT 6.033](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/index.htm) for all this content and more!

Systems have faults. We have to take this into account and build reliable, *fault-tolerant systems*. 

We design fault-tolerant systems by:
1. Identifying all possible faults
2. Detecting and containing the faults
3. Handling the faults

On reliability:
* Reliability always comes at a cost (dollars, time, simplicity)
   * We can quantify reliability with many metrics, one of which is Mean Time Between Failures (MTBF)
* Our main tool for improving reliability is *redundancy*
   * One form of redundancy is *replication*
      * *Redundant Array of Inexpensive Disks (RAID)* replicates data across disks in a smart way
      * There are multiple RAID system to deal with disk failures
         * RAID 1 (mirroring) can recover from a single disk failure but requires 2N disks
         * RAID 4 (dedicated parity disk) can recover from a single disk failure, only requires N+1 disks, but all writes hit the parity disk
         * RAID 5 (spread out the parity) can recover from a single disk failure, only requires N+1 disks, and the writes are spread across multiple disks

We need to be able to build reliable systems from unreliable components.
* This is difficult because reasoning about failures is difficult
* Abstractions can help us reason about failures. These include:
   * *Atomicity:* an action is atomic if it happens completely or not at all
      * It is tricky to design actions to be atomic, but if we can, it will substantially simplify reasoning about faults
      * Even though they perform poorly, we can move towards atomicity with *shadow copies*
      * (Write-ahead) logs provide atomicity with better performance than shadow copies
         * *Cell storage* is used with the log for better read-performance, while *caches* and *truncation* can be used to improve write-performance and recovery-performance
   * *Isolation:* if we guarantee isolation, then two actions will appear to run serially even if they were executed concurrently
      * It is a bad idea to actually run processes serially using a global lock
         * We can't just put *locks* around everything - using them is critical but must be applied systematically
      * There are many ways in which multiple transactions can appear to have run in sequence. These are called different notions of *serializability*
         * *Conflicts* arise if two operations operate on the same object and at least one of them is a write
         * A schedule is *conflict serializable* if the order of all its conflicts is the same as the order of the conflicts in some sequential schedule
            * We can use this to construct a conflict graph, noting that a schedule is conflict serializable if and only if it has an acyclic conflict graph
            * We don't want to generate all possible schedules and check their conflict graphs. This is too hard. Instead we can just use:
               * *Two-phase Locking (2PL)*
                  1. Each shared variable has a lock
                  2. Before any operation on a variable, the transaction must acquire the corresponding lock
                  3. After the transaction releases a lock, it may not acquire any other locks
               * The course notes prove that 2PL produces a conflict-serializable schedule, but notes that it can result in deadlock, which can be resolved by taking advantage of atomicity
   * *Transactions:* provide atomicity and isolation
      * *Two-phase commits* allow us to achieve multi-site (a.k.a. distributed) atomicity.
         * Failures in a two-phase commit are either aborted or recover into the prepared state, depending on where the failure occurs. Both are safe
         * Our remaining issues deal with availability and replication: we will replicate data across sites to improve availability but must deal with keeping multiple copies of data *consistent*
            * *Replicated State Machines (RSMs)* provide *single-copy consistency* (i.e. operations complete as if there is a single copy of the data, though internally there are replicas)
               * RSMs use a *primary-backup* mechanism for replication. The *view server* ensures that only one replica acts as the primary. It can also recruit new backups after servers fail
                  * To handle view-server failures, we need a mechanism to provide *distributed consensus*

</details>

# Computer Security

<details>
<summary>
...
</summary>

## [Check out MIT 6.033](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/index.htm) for all this and more!

## Security Basics

To build more secure systems:
1. *Policy:* be clear about goals
2. *Threat Model:* be clear about assumptions

Think about a client trying to access a server:
* A *principal* is what identifies the client on a server
   * *Authentication* verifies that the principal is who they claim to be
   * *Authorization* verifies that the principal has access to perform their request
* *Complete mediation* is where every request for a resource goes through a *guard*
   * The guard model can suffer from *adversarial attacks* like SQL injection
   * Even though things can still go wrong, systems that use this model avoid common pitfalls
   * A guard typically provides authentication and authorization
      * Problems with guards:
         * An adversary with access to the server can get passwords
            * If we try to mitigate this with hashes, hashes are still fast to compute so an adversary could quickly create a *rainbow table*
               * If we try to mitigate this with a slow hash, adversaries could still create rainbow tables for the most common passwords
                  * If we mitigate this by adding *salt*, an adversary would need a separate rainbow table for every possible salt
* We want to avoid transmitting the same password over and over. Once the client has been authenticated, the server will send it a *session cookie*, which it can use to keep authenticating itself for a period of time
   * Problems with cookies:
      * Adversaries could easily create their own cookies
         * If we try to mitigate by including a hash inside the cookie, adversaries could still easily create their own cookies
            * If we try to mitigate by including a server key in the cookie, adversaries could still easily create their own cookies
               * We need to hash against the server key and the username and the expiration and keep that in the cookie. That way, the adversary can't directly access the server key (unlike username and expiration, which are included separately in the cookie outside of the hash result)
* We want to prevent against phishing attacks, where adversaries trick users into revealing their passwords
   * We need to avoid sending passwords to the server entirely, but still allow valid servers to authenticate users
   * Using a *challenge-response protocol*, a password is never sent directly (but a hash of the password and a random number is, making the password non-recoverable)
* *Bootstrapping*, or the process of initially setting or resetting a password is tricky
* There may be better alternatives to passwords, but there are always trade-offs. Modifications that add security may also increase complexity and decrease usability.
* *Secure channels:*
   * *Confidentiality (or secrecy)* is what you have when an adversary can't learn the contents of your message
   * *Integrity* is what you have when an adversary can't tamper with message contents (but if they do, the client and/or server will detect it)
   * Given a key and a message, an encryption function will generate *ciphertext*
      * Given the ciphertext, it is (virtually) impossible to obtain the message without knowing the key
      * Encrypting with *symmetric keys* provides secrecy, and using a Message Authentication Code (MAC) provides integrity
         * *Diffie-Hellman key exchange* lets us exchange the symmetric key securely
   * To verify identities, we use *public-key cryptography* and cryptographic *signatures*. We often distribute public keys with *certificate authorities*, though this method is not perfect

When an attacker's goal is to prevent legitimate access to an internet resource, they might use:
* *Distributed Denial of Service attacks* to congest the service enough to make it unavailable
   * *Botnets* are large collections of compromised machines controlled by an attacker. These make DDoS attacks much easier and very practical to mount
      * *Cross-site scripting (XSS)*: if this script is executed on a victim's machine, the attacker will get the victim's cookie - this plays into setting up a botnet
      * *Network Intrusion Detection Systems (NIDS)* attempt to detect network attacks so that users can then prevent them (detection being the first step towards prevention)
         * There are challenges with this, not to mention some DDoS attacks mimic legitimate traffic, not to mention DDoS traffic doesn't even come from attacker-owned machines
            * DDoS attacks are particularly difficult to prevent because they are difficult to detect
            * DDoS can also mount attacks by controlling routers, and are particularly devastating when parts of the *network infrastructure* are attacked (e.g. DDoSing the DNS root zone, making fake BGP announcements)

MIT 6.033 also illustrates case studies in aspects of *anonymity* by [illustrating digital currency or BitCoin here](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/week-13/MIT6_033S18lec24.pdf) and [onion routing or Tor here](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/week-14/MIT6_033S18lec25.pdf)

### TODO: Either make a dedicated server page or include a server config here, possibly just a LAMP stack

</details>

# Parallel Processing

<details>
<summary>
...
</summary>

This is the only section on this site that is a direct summation of my notes from a recent coding bootcamp, offered as an 8-hour onsite workshop featuring some Nvidia's own expert staff!

## Python CUDA and Numba

Check out NVIDIA's [Deep Learning Institute!](https://www.nvidia.com/en-us/deep-learning-ai/education/)

## Elementwise Operations

    Use Numba to compile Python functions for the CPU.
    Understand how Numba compiles Python functions.
    GPU accelerate NumPy ufuncs.
    GPU accelerate hand-written vectorized functions.
    Optimize data transfers between the CPU host and GPU device.


## 1-D Operations

* Write custom CUDA kernels in Python and launch them with an execution configuration.
* Utilize grid stride loops for working in parallel over large data sets and leveraging memory coalescing.
* Use atomic operations to avoid race conditions when working in parallel.

## 2-D Operations

</details>

# Web and Mobile Application Development

<details>
<summary>
...
</summary>

# Frontend

## Vanilla HTML / CSS / JS

## Frameworks

# Architecture

* React
* Chromium
* GraphQL
* Web Components

## UI / UX

* Material Design

## Firewalls

## Load Balancers

## Domain Name System

Think CNAME

## Content Delivery Networks

## Static Files

## Webservers

## Fileservers

## Databases

* IndexedDB

When it comes to the basics of databases, Beck Williams says it all in [his post on Medium](https://medium.com/@rwilliams_bv/intro-to-databases-for-people-who-dont-know-a-whole-lot-about-them-a64ae9af712)

When it comes to relational or nonrelational databases, they're just places where you can store things. Even then, you typically don't keep heavy data sitting around in a database because [there are other sensible options](https://dba.stackexchange.com/questions/2445/should-binary-files-be-stored-in-the-database) such as including references in the database to data-intensive files that live in a separate fileserver.

The questions people really want to know when they ask you about your knowledge of databases will come down to a few aspects:
1. Do you know SQL? There are many advanced queries you can run to get the things you're looking for in relational databases.
2. SQL doesn't necessarily carry over to your nonrelational database queries, so at minimum know how to work with data in your preferred NRDB
3. The key issues surrounding databases might just be related to performance and security. Every database you stand-up has configurations that you should know how to navigate. This is highly implementation-dependent and you'd be doing yourself a favor if you know how to recommend tying your database into other services (via frontend and backend API's you define - you're probably going to be the one writing the middleware tie-ins to your database, so it's on you to know how to make it happen!)

### I am interested in demonstrating a few nontrivial queries to RDB's and NRDB's, but mainly this page is for the considerations needed for tying DB's into a practical system that scales. I'm still thinking through how I want to demo this - possibly just on my server config demo and I'll link to that from here...

## Security

* Layering security and network layering

# Serverless Computing

To visualize what this is all about, see [this classic tutorial from AWS](https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)

![serverless example](https://d1.awsstatic.com/Test%20Images/Kate%20Test%20Images/Serverless_Web_App_LP_assets-16.7cbed9781201a79b9efa761807c4312e68b23485.png)

[Dan on Medium reminds us](https://medium.com/better-programming/the-myths-and-misconceptions-about-serverless-7b271b8f0dda)
![It's not serverless, batman](https://miro.medium.com/max/638/0*MOlSHvVHtFsX7wtn)

## What Makes Serverless Great

* No server management with automated high availability
   * This aspect is abstracted away from developers. Why pull dev resources away from innovation to perform IT related work when you can have improved security and uptime for less?
* Flexible scaling and pay for value
   * The serverless model is pay-as-you-go. Serverless providers charge for units of consumption rather than units of individual servers

## The Serverless Manifesto

* Functions are the unit of deploying and scaling
* No machines, VMs, or containers visible in the programming model
* Permanent storage lives elsewhere
* Scales per request. Users cannot over- or under-provision capacity
* Never pay for idle (no cold servers/containers or their costs)
* Implicitly fault tolerant because functions can run anywhere
* BYOC - Bring your own code
* Metrics and logging are a universal right

</details>

# Cloud Computing

<details>
<summary>
...
</summary>

## Every AWS Cloud Service in 5 Minutes or Less

|Topic| Name | Full Name | What it does | What it costs |
|-|-|-|-|-|
|Compute|EC2|Elastic Cloud Compute|||
|Compute|Lightsail||||
|Compute|ECR|Elastic Container Registry|||
|Compute|ECS|Elastic Container Service|||
|Compute|EKS|Elastic Kubernetes Service|||
|Compute|Lambda||||
|Compute|Batch||||
|Compute|EB|Elastic Beanstalk|||
|Compute|Serverless Application Repository||||
|Storage|S3|Simple Storage Service|||
|Storage|EFS|Elastic File System|||
|Storage|FSx||||
|Storage|S3 Glacier||||
|Storage|Storage Gateway||||
|Storage|AWS Backup||||
|Database|RDS|Relational Database Service|||
|Database|DynamoDB||||
|Database|EC|ElastiCache|||
|Database|Neptune||||
|Database|Redshift||||
|Database|QLDB|Quantum Ledger Database|||
|Database|DocumentDB||||
|Migration & Transfer|Migration Hub||||
|Migration & Transfer|Application Discovery Service||||
|Migration & Transfer|Database Migration Service||||
|Migration & Transfer|Server Migration Service||||
|Migration & Transfer|AWS Transfer for SFTP||||
|Migration & Transfer|Snowball||||
|Migration & Transfer|DataSync||||
|Networking & Content Delivery|VPC|Virtual Private Cloud|||
|Networking & Content Delivery|CloudFront||||
|Networking & Content Delivery|Route 53||||
|Networking & Content Delivery|API Gateway||||
|Networking & Content Delivery|Direct Connect||||
|Networking & Content Delivery|App Mesh||||
|Networking & Content Delivery|Cloud Map||||
|Networking & Content Delivery|Global Accelerator||||
|Dev Tools|CodeStar||||
|Dev Tools|CodeCommit||||
|Dev Tools|CodeBuild||||
|Dev Tools|CodeDeploy||||
|Dev Tools|CodePipeline||||
|Dev Tools|Cloud9||||
|Dev Tools|X-Ray||||
|Robotics|RoboMaker||||
|Customer Engagement|AWS IQ||||
|Customer Engagement|Support||||
|Customer Engagement|Managed Services||||
|Blockchain|Managed Blockchain||||
|Satellite|Ground Station||||
|Management & Governance|Organizations||||
|Management & Governance|CloudWatch||||
|Management & Governance|Auto Scaling||||
|Management & Governance|CloudFormation||||
|Management & Governance|CloudTrail||||
|Management & Governance|Config||||
|Management & Governance|OpsWorks||||
|Management & Governance|Service Catalog||||
|Management & Governance|Systems Manager||||
|Management & Governance|Trusted Advisor||||
|Management & Governance|Control Tower||||
|Management & Governance|License Manager||||
|Management & Governance|Well-Architected Tool||||
|Management & Governance|Personal Health Dashboard||||
|Management & Governance|Chatbot||||
|Management & Governance|Launch Wizard||||
|Media Services|Elastic Transcoder||||
|Media Services|Kinesis Video Streams||||
|Media Services|MediaConnect||||
|Media Services|MediaConvert||||
|Media Services|MediaLive||||
|Media Services|MediaPackage||||
|Media Services|MediaStore||||
|Media Services|MediaTailor||||
|Media Services|Elemental Appliances & Software||||
|Machine Learning|SageMaker||||
|Machine Learning|Comprehend||||
|Machine Learning|Forecast||||
|Machine Learning|Lex||||
|Machine Learning|Machine Learning||||
|Machine Learning|Personalize||||
|Machine Learning|Polly||||
|Machine Learning|Rekognition||||
|Machine Learning|Textract||||
|Machine Learning|Transcribe||||
|Machine Learning|Translate||||
|Machine Learning|DeepLens||||
|Machine Learning|DeepRacer||||
|Analytics|Athena||||
|Analytics|EMR|Elastic Map Reduce|||
|Analytics|CloudSearch||||
|Analytics|Elasticsearch Service||||
|Analytics|Kinesis||||
|Analytics|QuickSight||||
|Analytics|Data Pipeline||||
|Analytics|Data Exchange||||
|Analytics|Glue||||
|Analytics|Lake Formation||||
|Analytics|MSK|Managed Streaming for Apache Kafka|||
|Security, Identity & Compliance|IAM|Identity and Access Management|||
|Security, Identity & Compliance|Resource Access Manager||||
|Security, Identity & Compliance|Cognito||||
|Security, Identity & Compliance|Secrets Manager||||
|Security, Identity & Compliance|GuardDuty||||
|Security, Identity & Compliance|Inspector||||
|Security, Identity & Compliance|Macie||||
|Security, Identity & Compliance|Single Sign-On||||
|Security, Identity & Compliance|Certificate Manager||||
|Security, Identity & Compliance|Key Management Service||||
|Security, Identity & Compliance|CloudHSM||||
|Security, Identity & Compliance|Directory Service||||
|Security, Identity & Compliance|WAF & Shield||||
|Security, Identity & Compliance|Artifact||||
|Security, Identity & Compliance|Security Hub||||
|Mobile|Amplify||||
|Mobile|Mobile Hu||||
|Mobile|AppSync||||
|Mobile|Device Farm||||
|AR & VR|Sumerian||||
|Application Integration|Step Functions||||
|Application Integration|EventBridge||||
|Application Integration|MQ|Message Queue|||
|Application Integration|SNS|Simple Notification Service|||
|Application Integration|SQS|Simple Queue Service|||
|Application Integration|SWF|Simple Workflow Service|||
|AWS Cost Management|Cost Explorer||||
|AWS Cost Management|Budgets||||
|AWS Cost Management|Marketplace Subscriptions||||
|Customer Engagement|Connect||||
|Customer Engagement|Pinpoint||||
|Customer Engagement|Simple Email Service||||
|Business Applications|Alexa for Business||||
|Business Applications|Chime||||
|Business Applications|WorkMail||||
|End User Computing|WorkSpaces||||
|End User Computing|AppStream 2.0||||
|End User Computing|WorkDocs||||
|End User Computing|WorkLink||||
|Internet of Things|IoT Core||||
|Internet of Things|FreeRTOS||||
|Internet of Things|IoT 1-Click||||
|Internet of Things|IoT Analytics||||
|Internet of Things|IoT Device Defender||||
|Internet of Things|IoT Device Management||||
|Internet of Things|IoT Events||||
|Internet of Things|IoT Greengrass||||
|Internet of Things|IoT SiteWise||||
|Internet of Things|IoT Things Graph||||
|Game Development|GameLift||||

</details>

# Signal Processing and Computer Vision

<details>
<summary>
...
</summary>

* FIR
* IIR
* Low pass, high pass, band, notch, various common filter designs
* Equivalence of transfer functions and timeseries models
* Fourier and Laplace transforms, wavelets
* Coding and compression
* Optimal receivers
* DACs
* Feature extraction
* Estimation and detection
* Statistical signal processing
* Image denoising
* Image histogram
* Inpainting
* Tone mapping
* Retinex
* Gamma correction
* Anisotropic diffusion
* Homography
* Image compression standards
* Color mapping
* Active contour
* Blob detection
* Canny edge detection
* Harris corner detector
* RANSAC
* SIFT
* BoPoE
* AAM
* Object recognition
* Gesture recognition
* Kadir-Brady
* Eigenfaces
* OpenGL

</details>

# Robotics and Control Systems

<details>
<summary>
...
</summary>

Control systems are awesome, cross-disciplinary tools that take your systems from "where they are" to "where they ought to be". There is so much buried in that statement, but for now I'll assume the reader has a conceptual understanding of the role of feedback in system design

## I need to get OpenAI Gym in browser, but if I can't get that to work I'll opt for MatterJS

## Modeling Dynamic Systems and System Identification

## Classical Control

The systems appropriately captured by this subset of control theory are few. Classical control lives in a single-input-single-output (SISO) linear world (not time varying, but possibly with some time delay).

All of the above caveats aside this is the branch of control theory most people are comfortable with, and almost across the board in industry I only see people using the "try it and see if it's good enough" approach, and if it's not "bandage it until it is".

To be fair, it is extremely intuitive. Even if you haven't heard of a control system before, if you've ever solved a problem where "your output is here but you want it to be there", you've almost certainly implemented a proportional controller without realizing it in the past.

I'm going to skip the theory on this one, because there is a lot but the only things you really need to know are the following:

* In a classical control system, we get one measurement variable, one actuation variable, one output variable to work with
   * The systems in classical control are modeled by Linear-Time-Invariant Ordinary Differential Equations (LTI ODEs)
   * A system characterized by LTI ODEs can be represented in the frequency domain using transfer functions (in the form of Fourier or Laplace transforms)
   * The output of a system with respect to its input can be decomposed into a transient and steady-state response
   * Fourier transforms capture steady-state response while Fourier transforms capture transient plus steady-state responses
   * You can infer the system transfer function from its magnitude / phase Bode plots (which you can typically derive through testing but it's rarely in the datasheets for your equipment)
   * Even if the system has a "high order", the terms with the slowest time-constants dominate the system response - so reducing the order of the model and still getting great performance is possible
   * If you have the open-loop transfer function for your system, you can easily design a controller that will give you the closed-loop response characteristics you want
* The truth of the matter is that people don't use classical control because it's right, they use it because they understand it and many times it "just works"
   * Don't expect your system to be LTI, it's almost definitely not
   * More insidiously - don't expect your system constraints to be taken into account by a linear control design (these considerations are baked into safety logic you build around a linear controller in case things go out of whack - but this systems engineering consideration is not in any way related to classical control)
   * The optimal controller for a system could be of arbitrary order
      * The slowest time constants dominate
      * Let's reduce this to "the slowest time constant dominates"
      * Let's reduce this to "throw a PID controller on it and see what happens"
         * note that PID controllers have well-defined order (order 2), so we're implicitly saying that we hope this is high enough order to capture the performance we're looking for
         * The number of parameters we can tune (3) are few enough that we can usually tune-by-hand and eye-up the response until we think it's good enough
         * We don't need to have a system model in order to tune a PID controller (even though we could still get one to analyze how well we did with our manual tuning efforts - otherwise we'd never know how well we did). This is why PID control is considered a "model-free" method, even though it's more like a "we didn't take the time to model our assumptions" method
   * A Proportional Integral Derivative (PID) controller can be constructed from phase lead, phase lag, lag-lead, and lead-lag compensators by cascading them together. The inverse is also true, though you won't find many applications with PID controllers cascaded in this way (people use cascaded PID for other reasons)
* The main takeaway should be that if you have a SISO system that is inherently stable, go ahead and try PID. 
   * If your system is not inherently stable and you can't just experiment on the system live without breaking something, then:
      * If you can write up some safety logic that will prevent you from breaking things beyond certain thresholds (e.g. if your thermal system starts overheating, trip the supply voltage and/or take some other fault-protective actions), then write up the fault protection logic and try PID in the safe range
      * There are also some modifications to PID control that help account for practical challenges (derivative kick, integral windup, gain scheduling, bumped or bumpless transfer, gain limiting, and a ton more - none of these are textbook classical control solutions though and certainly not LTI compliant)
* If you can't "just try" PID or if you did and the performance wasn't good enough, you'll probably need to turn to other control system methods
   * How easy is it to model? 
      * Easy --> optimal or nonlinear control
      * Easy but with uncertainties --> robust or adaptive control
      * Difficult --> underactuated control
   * I didn't comment on the fact that classical control lives in an analog world, but the control system implementations are all digital. If you're in an industrial setting and using industrial control equipment (like a PLC or PAC), it probably has PID functionality built-in. If not and you need to implement your own from scratch (like on an embedded processor), you'll probably need to take a look at digital control to make sure you know the impact of how you decide to implement derivatives/integrals/a whole host of fun new numerics and sampling challenges

## Digital Control

I don't have a place for signal processing on this site yet... But for now here is a good place to discuss canonical sampling concerns, ADC/DAC, frequency domain and more

## Robust Control

Robust control is an extension of linear control theory. Even though technically linear multivariable control systems could be considered a separate topic, I'm wrapping it up into robust control just to give the complete look at all things linear beyond classical control.

The discussion on robust control will start with regular MIMO control, pole placement, and then dive into Q-parameterization, quantifying uncertainty, and mu-synthesis.

## Adaptive Control

What do you do when you don't have a model? Adaptive control isn't it, but the good news is that if you have a model where the parameters are linearly separable, then we can use adaptive control to estimate the parameters online, which is pretty cool and extremely useful (even as an alternative method for system identification).

Also, a little less strictly, you can pick among certain reasonable models in standard-form and adapt to the parameters of that model. This is basically just a minor workaround to the situation where you don't have an existing form for a model for your system, but you still want the benefits of adaptive control (namely that performance can be optimized in real-time online while the system is live).

## Optimal Control

* Discrete time optimal control
* Continuous time optimal control
* LQ
* LQR
* Finite horizon
* Infinite horizon
* Pontryagin's Principle, Hamilton-Jacobi-Bellman Equation
* Calculus of Variations, cost, Lagrangian, constraints
* The Riccati Equation and the Algebraic Riccati Equation
* Model Predictive Control (MPC) (Receding Horizon Control)

## Nonlinear Control

* [Models for common nonlinearities](https://abrarhashmi.files.wordpress.com/2017/03/hassan-k-khalil-nonlinear-systems-prentice-hall-2002.pdf) (static friction, Coulomb friction, linear viscous friction, Stribeck effect, relay, saturation, quantization, dead zone)
* Lyapunov stability
* limit cycles
* bifurcation
* chaos
* multiple equilibria
* finite escape time
* gain scheduling
* feedback linearization
* sliding mode control
* integral backstepping
* passivity based control
* Lyapunov redesign
* sliding mode control

## Underactuated Control

I didn't know Russ Tedrake recorded [this class](http://underactuated.mit.edu/underactuated.html) again earlier this year!! I met someone who took this class with him not too long ago, and I've watched the recordings and read the course notes from a few years ago. I'm due for a refresh and can't wait to see how his team has evolved their nonlinear systems software package, Drake. So much to say here, but the learning-based controls are our path to the future for certain

### Trajectory Optimization

</details>

# Machine Learning and Artificial Intelligence Algorithms

<details>
<summary>
...
</summary>

## Clarification on Terminology

1. Artificial intelligence contains machine learning as a subdiscipline

2. Career titles:
   * Data Analytics: provides insights intended to improve products or business outcomes
   * Data Engineering: responsible for defining and maintaining data pipelines, usually maintaining ownership over relevant database / data warehouse / data lake systems
   * Data Science: models the data and extracts meaning from it (definitely the most glorified, rightly so in bleeding-edge R&D groups but not so much for the vast majority of engineering teams applying off-the-shelf ML algorithms)

## Types of ML

1. Supervised learning (used for classification and regression) is less data-hungry than
2. Unsupervised learning (used for clustering) is less data hungry than
3. Reinforcement learning (used for learning through interactions)

Arguably there are other topics that get bundled in with ML but this captures the lion's share of the market.

## Common Algorithms

![sklearn algos](https://scikit-learn.org/stable/_static/ml_map.png)

Linear regression and polynomial models
Gradient descent
Bias-variance tradeoff, generalization error, irreducable error, bias & variance plots, cubic splines
Training and test sets (training error should be similar to test error)
Mean Square Error decomposition
Multiple regression, regularization, lasso regression, ridge regression
Sparsity, complexity, interpretability
Logistic regression, cost functions, likelihood functions, accuracy, precision, recall
1 vs all, all vs all, validation, k-fold cross validation, multiclass classification, kNN, feature engineering, curse of dimensionality, PCA, LDA, swap sampling
prep data (vast majority of time), choose model, train, deploy, monitor
7 deadly sins of big data
decision trees, boosting, bagging, bootstrapping, (extremely) random forests, ensemble modeling
Discriminitive vs generative modeling
Naive Bayes, t-SNE, autoencoders, variational autoencoders
SVMs, maximal margin classifiers, support vector classifiers, hinge loss, kernel trick, support vector regression
Neural nets, activation functions, LeNet-5, nn playground, backprop, preventing overfitting
Augmentation, regularization, dropout, batch, annealing, momentum, weight initialization, ADAM, RMSProp, Adagrad
Fully connected networks, CNNs, max pooling, AlexNet, Vgg-16, Inception, ResNet, DenseNets
GANs, style transfer, deep dream, RNNs
k-means, Gaussian mixture models, EM clustering, hierarchical clustering, density estimation
NLP, spam filtering, POS tagging, NEE, NER, sentiment analysis, word sense disambiguation, question answering, paraphrasing, summarization, co-reference resolution, tf-idf, topic modeling, latent Dirichlet allocation

</details>
