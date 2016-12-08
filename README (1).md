# Server Practice

## Level 0 - Bare Node
* Make a server in bare node (meaning no express) that responds to all requests with 'hello world'
* Ensure you can start your server and receive a response 

## Level 1 - Bare Node
* Add a route called `/movies` that accepts both get and post requests and responds with 'POST: movies' or 'GET: movies'
* Add a route called `/directors` that accepts both get and post requests and responds with 'POST: directors' or 'GET: directors'
* Ensure you can start your server and recieve the appropriate responses 

## Level 2 - Express
* Refactor your server to respond in the exact same way, but with express
* Ensure you can start your server and recieve the appropriate responses 

## Level 3 - Express
* Refactor the `/movies` route to accept an object in the body of a POST request to that route and store it in an memory array
  - The object should look like this: 
  ```
  {
    title: 'Hackers',
    director: 'Ian Softley',
    year: 1996
  }
  ```
* Refactor the `/directors` route to accept an object in the body of a POST request to that route and store it in an memory array
  - The object should look like this: 
  ```
  {
    name: 'Ian Softley'
    hometown: 'London, England'
  }
  ```

## Level 4 - Express
* Refactor the `/directors` route to return a list of previously added directors in response to a GET request to that route
* Refactor the `/movies` route to return a list of previously added movies in response to a GET request to that route

## Level 5 - Express
* Refactor the `/directors` and `/movies` routes to accept a key word search parameter in a GET request, and only return directors or movies matching that specific search
* Refactor the `/movies` routes to accept a year parameter, and only return movies newer than that year

## Level 6 - Express
* Create a basic front end and connect it to your server - to do this, you'll need to get your server to serve static files

# Database Practice

Use either raw SQL or an ORM to complete these exercises!

## Level 0 
* Create a database to store your tables for this practice prompt
* Use the SQL command line to confirm the database exists
* Create a file that uses the `mysql` npm package to connect to your database

## Level 1
* Create a table (using an ORM or `.sql` file) to store movies that includes the fields title, director, and year
* Use the SQL command line to confirm the table was created

## Level 2
* Write a function that inserts a movie into your table
* Invoke your function to test it, and confirm with the SQL command line

## Level 3
* Write a function that retrieves all movies from your table
* Invoke your function to test it 

## Level 4
* Create a table (using an ORM or `.sql` file) to store directors that includes the fields name and hometown
* Write a function that inserts a director into your table
* Write a function that retrieves all directors from your table

## Level 5
* Refactor your movies table and functions to appropriately reference the directors table

# Connecting Server and Database
Now, connect your server to your database and refactor so that instead of storing directors and movies in an array, they're stored in a database!