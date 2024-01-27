# miniproject
My first Full Stack project

# Mini-Project Part 1 Done

# Mini-Project Part 2 In progress

## Instructions

Please read the instructions below carefully, and do not hesitate to attend Lab or Office hours to ask questions if anything is unclear. 
Please create a new Git branch and call it "assignment 2" and do this assignment there.
1. Create a PostgreSQL db server on RenderLinks to an external site. and note the environment variables under the "Connections" tab.

2. Download pgAdmin 4Links to an external site.  and connect it with your Render PostgreSQL db using the environment variables from step 1. Important Note: since we are connecting from an external location, then we need to use the "External Database URL" to extract the hostname in order for using it in the pgAdmin connection. In "External Database URL" variable the db hostname is located after the "@" symbol and ends with "render.com". After you connect successfully, you should be able to view your database on the left navigation bar of pgAdmin. 

3. In your express server, create a .env file (if not already created) and add the Postgres db variables from step 1. You need to add and save the following variables: db hostname (as explained in step 2), db port, username, password, and db name. 

4. Install Sequelize Object-Relational Mapper and pg Postgres driver node modules. Create a config file and initialize a configuration for Sequelize with your Postgres db variables. Refer to the documentationLinks to an external site. to see how that is done in Sequelize.
5. Create two models in the "models" folder: one for the Currency resource available from the previous assignment, however, now it should contain the following attributes: { id, currencyCode, countryId, conversionRate }. Note that we replaced country with countryId from the original starter code.

6. The second model is for the Country resource which consists of: { id, name }. Refer to "Column Options" sections in the documentationLinks to an external site. to see how we can define primary keys and foreign keys in Sequelize. id is a primary key in both tables, and countryId is a foreign key in Currency table referring to id in Country table.

7. Add the Currency model to the Currency route that you created in the first assignment. Remove the currencies array and update your endpoints logic with Sequelize Currency model. Use the built-in functions provided by Sequelize.

8. Similarly, create a new route for the Country resource using the Country model. Create GET, POST, and DELETE endpoints using Sequelize functions to query the database. GET: retrieve all records, POST: add a new a record, DELETE: remove one record.

9. Use Sequelize functions to add an association (one-to-one) in Currency model (similar to the first line hereLinks to an external site.) where each currency should belong to one country. You should also pass the foreign key, that you have already defined, in this association. Associations in Sequelize equal to relations in SQL databases.

10. Test your connection by adding, retrieving and deleting currencies and countries using HTTP requests sent to the express server from Postman or REST Client. 

11. Create a new file (a route) inside the "routes" folder and create one GET endpoint for the route "/currency-countryName". The endpoint should retrieve the currency code from the currency model and the country name from the country model. You should make a query on the currency model and include the country model (similar to the second line hereLinks to an external site.).

12. Test your endpoint by sending a GET request to "/currency-countryName". The response should consist of pairs of { currencyCode, countryName }. You can modify the shape of your response in the endpoint logic. Additionally, You can use pgAdmin QueryTool to write an SQL  JOIN query to test your results as shown in the image below