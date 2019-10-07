# Movie Master - A Saga!

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Home Page
[x] displays all of the movies in the movie database. When a movie poster is clicked, a user is brought to the /info view.

Info Page
[x] Shows all details including genres, for the selected movie.

The details page has the buttons:

[x]   Back to List button, which should bring the user to the Home Page
[x]   Edit button, which should bring the user to the Edit Page
[x]   Functionality does not require the movie details to load correctly after refresh of the browser.

Edit Page

[x]   Input field (for changing the movie title), for the selected movie.
[x]   Textarea (for changing the movie description)
[x]   Back button, brings the user to the Details Page
[x]   Save button, updates the title and description in the database and bring the user to the Details Page

General Tasks

 Invest some time in styling it up!
 Research grids for you movie posters on the Move List page
 Add route change animations
 Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
 Comment your code.
 Update this README to include a description of the project in your own words.
 
Stretch Goals
 Display the current values in the input (title) and textarea (description) on the Edit Page
 Display all genres on movie list page. Research array_agg to make this possible.
 Move sagas and reducers out of your index.js and into separate files (ideally in src/redux/reducers and src/redux/sagas folders).
 Allow the user to refresh the details or edit page. The url for the details page would be something like /details/1 for movie with id of 1. Research react router params.
 Allow the user to add a genre to a movie.
 Allow the user to remove a genre from a movie.
 Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
 Create an Admin page. Add a link from the Home page to the Admin page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (camera) and password (action), the page should display a form to add genres to the database, and a list of all of the genres with an x to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.

Additional README details can be found [here](https://github.com/PrimeAcademy/github-finalization-assignment).