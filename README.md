# Check out [my GitHub Pages site (asa55.github.io)](https://asa55.github.io)!

This site was designed with (accessibility (a11y))[https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility] in mind. Tab navigation, color contrast, semantic HTML tags, and alternate descriptions are built in.

This site's desktop and mobile Lighthouse scores are stellar. If I register a service-worker, it will max out the best-practices score and simultaneously become a valid Progressive Web App (PWA). That's on my to-do list. (Checked on a local server - my dev environment was VSCode, live-server, sass --watch, and Firefox / Opera browsers on Ubuntu Linux)

Once this site is hosted on GitHub server (if you're reading this, it already is), I'll update this (webaim report)[https://wave.webaim.org/report#/asa55.github.io] and this (google mobile-friendly report)[https://search.google.com/test/mobile-friendly?id=O4Z96SDCnYz0aT-tVQdU2w] to see if there are any additional optimizations I should consider.

The site is designed as a simple Single Page App (SPA) using vanilla JS - I show and hide DOM elements that load when you first go to the site. This design choice means everything is sitting in memory - it puts initial load time at risk, but I made this choice conscientiously which is why the site is lightweight (even most of my images are SVG instead of compressed png - their memory cost is next to nothing). This makes page load and navigation lightning fast. A minimal amount of SCSS and JS was used intentionally as well - if I wanted to go any more complex than this I'd be reaching for React.JS and CSS-in-JS instead of vanilla JS and only a small step up from vanilla CSS.
All of that being said, the last point I want to keep in mind is that each page should have a unique URL. Lighthouse leaves this as a manual check. My SPA design doesn't do this by default, so I need to sit and think about the best way to make this happen.
