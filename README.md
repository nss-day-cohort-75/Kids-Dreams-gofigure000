# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
   ```html
   {child name} will be making memories with {celebrity name}, a {celebrity
   sport} star, by {child wish}
   ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   The code that initiates and guides the execution of the alert window when a child is clicked on in the browser sits in the Kids module, specifically rows 22 - 30. Firstly, in row 22 we utilize the addEventListener method which looks for a click. The click in this case is tied to a target which we have ultimately specified as "child". That target is tied to the html data-type, specified in row 11. Ultimately, once the click occurs, the function then checks to see if the dataset type is indeed equal to child (using strict operator). Upon receiving a boolean value of true, the code assigns the value of data set wish (references html line 13 on the same module) and finally returns a window alert (row 28) that has an interpolated statement specifying the childs name (tied to html in row 12) and the childs wish (tied to html in row 13). On a broader basis, we are importing data from the database using a getter (getChildren in row 1). That function is assigned to the variable children that iterates through the kids database and provides an ordered list in html format to be sent to the index.html tab for rendering onto the web browser.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > The for..of loop that iterates the kids array needs a way to match each kid to their respective celebrity. As the for..of loop iterates through each kid, it is able to insert that kid into the findCelebrityMatch function which has two parameters, the first of which allows to cycle through each individual kid to match celebrity ID to the kid's celebrity ID. Essentially the findCelebrityMatch function allows us to join two data array objects that share an id key (id in the celebrity data and celebrityID in the kid data). WIthout matching the referenced id for the celebrities, we would not be able to complete the pairing to showcase in the alert window.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > The window alert text utilizes interpolation. Furthermore, in order to properly display the specific sport, row 26 utilizes an if statement that confirms whether the dataset type clicked is a celebrity (tie to html data type in row 11). If true (utilizing a strict equality operator) the dataset.sport value (linked to html in row 13) is assigned to the variable celebSport (row 27). In this instance I could have also just referenced itemClicked.dataset.sport but chose to utilize a variable instead. Ultimately the data is linked to the variable celebrities which is utilizing the getter getCelebrities which links back to the database module.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Rows 1-3 import the relevant functions that help convert the data into html. Each of those functions returns the data its pulled in html format and in this instance we have specific list formats. Once those functions are imported, we utilize the document queryselector method to look for the container element which is assigned to the variable mainContainer. Next the applicationHTML variable helps set up the html framework within which we set the various headers (h1), articles, sections and subheaders (h2). In addition, underneath the h2 subheaders we interpolate the functions from the other modules (pairings, celebrities and kids) that contain the html formatted data ready for visualization on the web browser. Finally we utilize the innerHTML method on the mainContainer varialbe (which is set to utilize the querySelector method per row 5) and run the applicationHTML variable (which includes the framework for the web page) through.
