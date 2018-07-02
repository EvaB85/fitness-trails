# Fitness Trail

## Link to App

## Describe the app

## How to use this app:

## User Stories:
I want to find hiking trails close to where I live.
I would like to keep a list of my favorite trails which I’ve gone on and make a list of future trails.
I would like some insight to a trail by my house.

## Process:
Beginning: I started off by finding an API that I thought would work well with my app idea. Next, I drew out a quick sketch of the browser windows I wanted to how they all connected. This rough sketch allowed me to narrow down and focus not the key parts of this application and make sure the scope of it all was doable in a weeks time. I also created a wish list and my stretch goals so I can continue working through the week and to be able to come back to it for additions.

Middle: Using a functional auth-boilerplate I was able to start by adding my routes, calling in my API data and really work with what data I wanted to store on my user page. My application allows users to save the trails in their favorite’s list and it was important to not have too much data to overwhelm them. My focus was simplicity and userbility. I did not want to create an encyclopedia page of trails in a specific location but rather a quick overview. I threw in a small bit of visual aspect, CSS, so I could image further and put myself in the user’s place.

End: My final steps

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
