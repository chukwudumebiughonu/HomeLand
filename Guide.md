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