# Fitness Trail

## Link to App

## Describe the app:
This app is for users to keep a list of their favorite hiking trails. It's a place to have access to the trail difficulty, elevation, directions, and more. They are able to create a unique user id and connect with other users that share the love of hiking.

## How to use this app:
* Create a user name, email and password to save favorites.
* If you have a user name, log in to begin searching for trails.
* Search using a city, state, and parameters in miles to get results.
* Click on a result of your choice (trail) and click the add button to add to your list.
* Visit your profile page to see all of your favorited trails.
* Click on the map icon to pull up addition information such as a map, elevation and distance. (This page opens in a new tab).
* On your profile page you can edit your user name.
* User can log out once they are done using the application.

## User Stories:
I want to find hiking trails close to where I live.
I would like to keep a list of my favorite trails.
I would like to search for trails outside of where I live.
I would like to know more about trails I am interested in.

## Process:
Beginning: I started off by finding an API that I thought would work well with my app idea. Next, I drew out a quick sketch of the browser windows I wanted to how they all connected. This rough sketch allowed me to narrow down and focus not the key parts of this application and make sure the scope of it all was doable in a weeks time. I also created a wish list and my stretch goals so I can continue working through the week and to be able to come back to it for additions.

Middle: Using a functional auth-boilerplate I was able to start by adding my routes, calling in my API data and really work with what data I wanted to store on my user page. My application allows users to save the trails in their favorite’s list and it was important to not have too much data to overwhelm them. My focus was simplicity and userbility. I did not want to create an encyclopedia page of trails in a specific location but rather a quick overview. I threw in a small bit of visual aspect, CSS, so I could image further and put myself in the user’s place.

End: My final steps was to check all my routes and make sure that was the best for user experience. I had to cut down some pages I had because It was just too overwhelming for users. I also added the img icon and connected it to the REI website for more information about the trail such as different types of maps and the trails highlighted for user. (Their API did not give all of this information for me to use.)

## Technologies Used:
Sequel, Express, EJS, Postgres,

## Wireframe Sketches:




## Routes:




## Model User:
Associations : Has many trails/belongs to one user

## API Used:
https://www.hikingproject.com/data

## Challenges
Working with the available information from the API. Use the google maps api with the current API was also challenging.

## Next Steps:
Be able to have users friend other users and follow them. Incorporate the google map geolocator API with the current API. Improve on the layout of each page.



<!-- # Express Authentication

Express authentication template using Passport + flash messages + custom middleware

## Getting Started

#### Scaffold w/tests (see `master` branch)

* Run `npm install` to install dependencies
  * Use `npm run lint:js` to lint your JS
  * Use `npm run lint:css` to lint your CSS
  * Use `npm test` to run tests
* Setup the databases
  * Change the database names in `config/config.json` to reflect your project
  * Run `createdb project_name_development` to create the development database
  * Run `createdb project_name_test` to create the test database

#### Finished version (see `brian-finished` branch)

* Run `npm install` to install dependencies
  * Use `npm run lint:js` to lint your JS
  * Use `npm run lint:css` to lint your CSS
  * Use `npm test` to run tests
* Setup the databases
  * Run `createdb express_auth_development` to create the development database
  * Run `createdb express_auth_test` to create the test database
  * Run `sequelize db:migrate` to run migrations -->
