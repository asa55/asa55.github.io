# Check out [my GitHub Pages site (asa55.github.io)](https://asa55.github.io)!

## A note on the implementation for this site:

### The content is stored in markdown (.md) files. This is rendered nicely in your browser thanks to zero-md

### Markdown supports inline html but script imports break MVC best practices, not to mention Zero-MD attaches my markdown content as a shadow DOM. Even though there are many good reasons you don't want to cross the shadow boundary, in my case it makes things just a touch more complex. So to simplify things I split the MD files by content and insert interactive elements as top level DOM elements
