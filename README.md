Navigator.ba - Readme

For an application like navigator, the first smoke test that came to my mind was actually navigating through the site. Knowing the basics of Selenium, JavaScript and DOM manipulation, I’ve managed to do an initial test of the site loading in a simple, but important way.

The whole point of Navigator is to navigate users through the landing page, categories and objects to quickly find what the place you need, add a new place or provide feedback.
 
Suites tested: 
- Navigation bar
- Map
- Categories
- Objects
- Translating

------------------------------------------------------------------------------------------------------------------

Installation: 
- npm / node
- selenium-webdriver
- chai

1. Download Node.js Installer. In a web browser, navigate to https://nodejs.org/en/download/
2. Install Node.js and NPM using NodeJS setup wizard
3. Verify installation: node -v ; npm -v
4. To install Selenium Webdriver, run npm install selenium-webdriver.
5. Find and install browser drivers on https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/
4. Chai assertation library package is available through npm. Just run "npm install chai"

------------------------------------------------------------------------------------------------------------------

Smoke test / code part
- Loading of the site and its content
- Try using the search option, clicking and expecting results to contain the word typed
- Zoom in and out of the integrated map
- Enter the category section
- Enter one of the objects and test if it shows on the map
- Test whether the place address matches the address shown on map
- Enter adding a feedback page
- Enter creating a place page
- Test translating options back and forth and check the placeholder language
	
Smoke test - positive | pass

------------------------------------------------------------------------------------------------------------------
Functionality tests

Create new place

The second test was creating a new place. I have added multiple split time working hours that made no logical sense. Three categories added two with subcategories, one without. Fail was expected, and when the form was submitted, the page stayed the same and it brought the message “Unexpected error”. However, when I tried searching the content, it appeared that records have been saved. This was a negative test that failed.
After entering Pekara Runda by expecting a positive outcome, a form failed and another time it brought “Unexpected error”. However, the record was still saved in a database. This is a tricky one - It was a positive case that passed and failed at the same time. An error message was shown, but the records were saved.


Postal code and map location

The next test was trying to check whether the postal code of the submitted record and the object location on the map need to stay connected. Muzički Centar Frank Zappa is a straightforward example of a negative test that has also failed. Holding 88000 postal code that is for Mostar, and showing a location outside of the 88000 area, even though initially brought together, they didn’t stay together. 


Rating

Two tests of rating - the rating itself and the rating average. Muzički Centar Frank Zappa was rated 5/5 and that appeared on the screen as the only rating and 5 average. The rating of Cafe de Paris had 5 ratings and was a little less than 2.5 stars in average visually. After inspecting the element, the rating was 2.2 average and had 5 entries and the visual aspect matched.



Description input box / textarea

A useful option for the textarea is that you can resize it to match your content size. Extending the box from Feedback page had no issues. It was a positive test pass. But when extending was tried from Create a place page, when expanding was expected, shrinking occurred which meant the box was in invert mode. Positive test fail.

Adding feedback

Both positive and negative feedback was submitted, but both of them failed with “Unexpected error” message. Positive tests fail.

Claim a place

Two sets of forms were submitted. The first had an invalid number and the test was expected to fail. Expectations were met, the validation marked the number input box red and unexpected error message flashed. Negative test pass. Another form was with the valid number this time, but the unexpected error was flashed again but no red box. Positive test fail.

------------------------------------------------------------------------------------------------------------------
Bug report

- Android Version: 11 - After initially accessing the android app, a message was flashed indicating that this app was built for an older version of Android and may not work properly. Try checking for updates, or contact the developer. Positive smoke test fail.
- Android app when translated from English to Bosnian, categories were translated, but objects remained in English. Positive smoke test fail.
- Map failed to load in the android app
- Safari mobile version had no section for providing feedback, it had only to create a place. 
- UI issue with displaying followers “cloud” and the tweet button being cut in the end.
- Google+ is no longer available for consumer (personal) and brand accounts
- No back button option or links on nav in categories or objects. 
- Split service no return option
