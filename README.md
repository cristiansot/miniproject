# miniproject
My first Full Stack project


## Task

1. ### (DONE) Create a github repository titled 'miniproject' without the quotations, feel free to add a README.md, and clone this repository to wherever you desire.

2. Download the miniproject_part1 zip Download miniproject_part1 zip, and extract the contents, adding the following contents: server.js, requests, and package.json to your local miniproject.

3. Create a .gitignore file at the same location, and add 'node_modules' without the quotations to this file, this ensures that we aren't pushing our node_modules to the repository, and push the code up.

4. Congratulations! You've setup a git repository with all the desired files, from here on out, all changes in code you make will be kept in sync on remote. Feel free to either do your work in the main branch or have different branches for different tasks.  If anything at this point is broken, and you're unsure of how to fix it, please come to Lab or Office Hours. It is essential that the github repo is setup correctly at this stage of this extended assignment.

5. Open a terminal and type npm install to install all necessary package.

6. Open the server.js file, this is our starting point, and we've provided some starter code.

7. Carefully read all the comments next to the code, especially the one on data storage as well as the various TODOs that describe what each endpoint is doing in terms of what it receives as a request and the intended response.

8. Note: we added a requests folder, within which we have a test.rest file, that you can use as a starting point for testing your endpoints. Confirm that when the server is running (using the command npm run start), you're getting the expected response when you send this request.
9. Implement the endpoints. The order in which we strongly recommend completing the TODOs is: GET, GET:id, POST, PUT, DELETE:id. Since the GET endpoint is completed first, you can then test if resource creation and deletion is working adequately.
    - Hint: when modifying the currencies, please do not directly modify the data, but instead create a copy that has the desired changes (look into functions like concat, filter, etc.)
    - Hint: making changes and saving them when running the server in node requires a restart of the server to reflect those changes. Look into how we avoided this with nodemon. 

10. Add error handling for the GET:id and POST endpoints
    - In the GET:id case, we want to return a 404 status code with the response object { error: 'resource not found' } if the currency is not found in our data. 
    - In the POST case, if any required information needed to create the currency object is missing, please return a 400 status code with the response object { error: 'content missing' }

11. Add an unknown endpoint that can basically handle any other route. This unknown endpoint should return a 404 status code with the response object { error: 'unknown endpoint }

12. Incorporate morgan middleware, so we can see some information about the requests being sent. Here's a linkLinks to an external site. for more information.
    - Below is an example of what it might look like (this is an example from a different project but we want a similar message logged to the console). In this example, which we show as a reference a POST request is being sent to http://localhost:3001/api/notes and the following is logged:
    - POST /api/persons 200 61 - 4.5ms { "content": "My first note!" }
    - The information is as follows: Request Type, URL, Status code, Response content length, Response time, Request content being sent

13. Convert the working setup you have to now make use of Express Router, as seen in lecture (Hint: you will have a routes directory). Also, please abstract your middleware to a separate utils directory.