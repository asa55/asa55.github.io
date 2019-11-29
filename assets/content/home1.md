# Welcome to my Blog!

![me](https://raw.githubusercontent.com/asa55/asa55.github.io/master/assets/images/me.png)
### Alex Augenstein: Engineer, Scientist, Entrepreneur

## This site is in active development. In a sense this is for professional demonstration, but the content of this site is a compilation of my own personal reference notes I actually use and come back to. I hope you find this resource insightful as you browse around, and if you have any suggestions please feel free to [share your thoughts with me on GitHub](https://github.com/asa55/asa55.github.io/issues)

## A note on the implementation for this site:
### The navbar on the left scrolls separately from the content window (where you're reading now) - depending on your screen size you might be able to find more content this way
### The content is stored in markdown (.md) files. This is rendered nicely in your browser thanks to zero-md

### Markdown supports inline html but script imports break MVC, not to mention Zero-MD attaches my markdown content as a shadow DOM, and there are good reasons you don't want to cross the shadow boundary but in my case it's not ideal. So to simplify things I split the MD files and insert interactive elements as top level DOM elements

#### The soon-to-be-inverted-pendulum just a skeleton right now but soon I'll add some control-system smarts to it and drop it in the real-time control section of this site...
