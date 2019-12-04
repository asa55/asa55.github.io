# Check out [my GitHub Pages site (asa55.github.io)](https://asa55.github.io)!

## A note on the implementation for this site:
### The navbar on the left scrolls separately from the content window (where you're reading now) - depending on your screen size you might be able to find more content this way
### The content is stored in markdown (.md) files. This is rendered nicely in your browser thanks to zero-md

### Markdown supports inline html but script imports break MVC, not to mention Zero-MD attaches my markdown content as a shadow DOM, and there are good reasons you don't want to cross the shadow boundary but in my case it's not ideal. So to simplify things I split the MD files and insert interactive elements as top level DOM elements
