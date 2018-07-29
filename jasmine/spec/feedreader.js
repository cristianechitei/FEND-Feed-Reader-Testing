/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // loop through each feed in the allFeeds object 
        // ensure it has a URL defined and the URL is not empty.
        it('URL is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        //ensure that each feed in the allFeeds object has a name defined and name is not empty

        it('Name is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
                expect(typeof feed.name).toEqual('string');
            });
        });

    });


    // new test suite named "The menu"
    describe('The menu', function() {
        

        // test to ensure the menu element is hidden by default
        it('by default is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // test to ensure menu changes visibility when menu icon is clicked
        it('changes display when menu icon is clicked', function() {
            const menuIconVar = document.getElementsByClassName('menu-icon-link')[0];
            
            //test for when menu is displayed
            menuIconVar.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //test for when menu is hidden
            menuIconVar.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    //new test suite named "Initial Entries"
    describe('Initial Entries', function() {
        // test to ensure the loadFeed function is called and completes its work
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        //check that there's at least one entry in the feed.
        it('is called and contains at least one feed.', function() {
            const entryVar = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(entryVar).toBeGreaterThan(0);
        });
    });
    

    // new test suite named "New Feed Selection"
    describe('New Feed Selection', function() {
        let $feedOne;
        let $feedTwo;

        // test when a new feed is loaded        
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                done();
            });
        });

        it('should change content after feed is loaded', function(done) {
            loadFeed(1, function() {
                feedTwo = $('.feed').html();
                expect(feedTwo).not.toEqual(feedOne);
                done();
            });
        });
    });    
}());
