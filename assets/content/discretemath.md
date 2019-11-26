## Another topic I've been thinking about recently is related to counting probabilities

Years ago in a class called Analysis of Stochastic Processes, my instructor asked a toy problem on a quiz. His favorite Boston baseball team went to the world series, where the best team out of 7 games wins it all. I chewed on that for a few minutes thinking about it as a tree diagram, and trying to wrap my head around accounting for early termination by winning it all after only 4 games. After a meager attempt at drawing the tree on the back of the exam, I realized this method was too complex to draw out. One way to come to the right answer, and I suspect the way he was looking for, was to use a few observations in disjointed sets and the pigeonhole property to realize that there is only one way to win 4 games, (4 choose 3) ways to win 3 games out of 4 then win the 5th, (5 choose 3) ways to win 3 games out of 5 then win the 6th, and (6 choose 3) ways to make it to game 7 then win it all. Adding these all together gives you 35 possible winning outcomes, and by symmetry there are 35 more outcomes where the other team wins.

But it chewed me up for a long time that I couldn't get my head around the problem graphically. At least, not until I recently started looking into [the Catalan Numbers](https://en.wikipedia.org/wiki/Catalan_number#Third_proof). The classic tree diagram I tried to scribble on the back of the exam was just a very inelegant way of taking into account the monotonicity of the problem. If you check out [this figure from Wikipedia](https://en.wikipedia.org/wiki/Catalan_number#/media/File:Catalan_number_algorithm_table.png), imagine a 4x4 grid where traversing a unit to the right is a loss and a unit upward is a win. If you get to one edge of the grid, the series is over. But the image on Wikipedia shows that all of the paths start at the bottom left corner of the grid, and end at the top right, so what's up with that? After chewing on it just a little bit longer it turns out we don't have to worry about it, because by the time you make it to one edge of the grid, the path shown in the image is pigeonholed into traversing the remainder of the edge! So there is nothing else we need to do to compensate for our problem - it is already a perfect analogy. The visualization is beautiful, it would have fit on the back of the exam, and I quickly would have realized the answer for all possible outcomes is simply (2n choose n) - woot! simple yet elegant.

How does this relate to the Catalan numbers? Check out the link to Wikipedia above and it will become immediately obvious.

I realize this discussion probably makes little sense to anybody else reading this. It is not polished, it is out of context, it is a wall of text. But that's OK - I wanted to get the thought written down while it was on my mind and I'll clean it up later. If you're interested in seeing this thought presented in its final form, check back soon! And thanks for reading