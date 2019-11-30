# Data Structures

## Data structures go hand-in-hand with algorithms, which are detailed on another page of this site. The focus here is on implementation and mental models for common data structures, and how some of them are related or can be substituted in different contexts

### Note to self: I think a valuable reference on this page will be to make tables including the theoretical structure and methods for each data structure

## Arrays

The Random Access Machine (RAM - which conveniently Random Access Memory implements) is a model of computation. Think of it as giant array of words (stored in a constant number of registers) that you can navigate by index. In constant time an algorithm used on an array can load and store a constant number of words, and do a constant number of computations.

## Visualize Arrays as "Random Access" and Linked Lists as "Sequential Access"
![wikipedia random access page](https://upload.wikimedia.org/wikipedia/commons/a/a7/Random_vs_sequential_access.svg)

## Linked Lists

The Pointer Machine allows for dynamically allocated objects, each with a constant number of "fields" (either a word or a pointer). A pointer is something that points to another object or to some special value null (referred to as null in JavaScript, None in Python). Modern languages tend to call pointers "references".

A doubly-linked list can be thought of as a sequence of tables, each storing a value, a pointer to the previous object, and a pointer to the next object. In Python you might call it a named tuple, or an object with three attributes. You can implement this model in a Random Access Machine, so a pointer becomes an index into a giant table, and you get the ability do do other things like adding constants to the pointers to point to new places - which is a lot more like pointers in C. But a doubly-linked list in its most general form doesn't allow for this because outside of the context of RAM we might not have this well-ordered property. So the model we're discussing here is actually weaker than linked lists implemented in RAM, but they offer a different way of thinking.

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
