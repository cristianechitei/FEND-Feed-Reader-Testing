# Feed Reader Testing

This project uses Jasmine to write test cases for a Feed Reader app.


## How it works

Open index.html in your browser. The test cases are written in the feedreader.js file and their results appears in the bottom left of the screen, once you run index.html in your browser.

The green color marks tests which have been passed and red color marks tests which failed.

Tests performed:
- check to see if the 'allFeeds' variable has been defined and is not empty.
- loops through each feed and determine if the URL is defined and not empty.
- loops through each feed and determine if feed has a name and not empty.
- check that the menu element is hidden by default.
- validate that the hamburger menu toggle functions properly.
- check that there is at least one entry in feed.
- check that new content is loaded by loadFeed().
