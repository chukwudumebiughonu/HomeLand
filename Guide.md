create app with npm create vite@latest client 

Install tailwind with vite : 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Change the tailwind.config.js file appropriately
Replace the index.css appropriately

Delete the app.css, vite.svg react.svg file delete everything in App.jsx

Create pages and route 22mins: Create the pages folder in the src

Install react router dom in the client side of the project: npm i react-router-dom

Creating the header component 28

install react icons with :npm i react-icons

Creating the server 45min

create the api for the backend

initialize the server with: npm init -y. in the route folder

create index.js in the api

install express in the route app with: npm iexpress

run file with: node api/index.js

add "type": "module", to the package.json

install nodemon with: npm i nodemon

delete this `"test": "echo \"Error: no test specified\" && exit 1"` from package.json 

add this `"dev": "nodemon api/index.js"` in the scripts aspect of the package.json

add this `""start": "nodemon api/index.js"` in the scripts aspect of the package.json

move the `.git` folder one folder back with the following : mv .git ../

connect to database 54 mins

The database to be used  is mongodb and it is to be connected to the application with mongoose. It helps for easy interaction with the database modules etc.

install mongoose  in the root folder: npm i mongoose

install dotenv with: npm i dotenv and use it in the api/index.js

create user model 1hr 5mins 
creating models  

Creating a test api route 1hr 12mins

Creating sign-up api route 1hr 22 mins

making use of an api test software 

Create a middleware and function to handle possible errors 1hr 40mins

Complete the sign up page UI 1hr 50mins

Complete the  sign up page functionality 1hr 55mins

Creating sign in API route 2hrs 15mins

Install jwt with: npm i jsonwebtoken

Complete the  sign in page functionality 2hrs 33mins

Adding redux toolkit 2hr 38mins:npm install @reduxjs/toolkit react-redux

create a redux store as store.js

Adding redux persit 2hrs 50mins: npm i redux-persist

Adding google OAuth functionality 3hrs 

Add google firebase 3hrs 4 mins

Install firebase with: npm i firebase

Update the header and make the profile page private 3hrs 27 mins

Complete the profile pauge UI 3hrs 36mins

complete image upload functionality 3hrs 43mins

create update user API route 4hrs 11mins

Install cookie-parser with: npm i cookie-parser

Complete the update user functionality 4hrs 28mins  

Add delete user functionality

Add signout user functionality

Add create listing API route 5hrs 2mins

Comlete create listin page ui 5hrs 16mins

Comlete upload listing images functionality 5hrs 41mis

Create get u ser listing API route

Complete show user listings functionality 6hr 44

Complete delete user listing  functionality 7hrs

Create update listing API route 7hrs 9mins 

Complete update listing functionality 7hrs 16mins

Add image slider to listing pages 7hrs 33mins

Install swiper with: npm i swiper

Complete listing page 7hrs 53mins

Add contact landlord functionlity to the listin page

Create search API route 8 hrs 27mins

Complete header search form functionality

Complete search page UI 8 hrs 53mins

Add onChange and onSubmit functionality to the search page 9hrs 9mins

Create the listing itme components and show listings 9hrs 33mins

Install line clamp with: 

Add show more listings functionality 10hrs 5mins