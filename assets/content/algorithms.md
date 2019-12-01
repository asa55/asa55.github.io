# Algorithms

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
