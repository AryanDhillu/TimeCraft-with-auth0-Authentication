# About the Project

This is a React-based full-stack project with a JSON server in the backend, ensuring your data is always accessible when needed. Users can log in to their accounts and allocate their weekly free time slots for social media use, recognizing its importance in staying active and connected. The site generates the optimal schedule based on the user's time inputs. Integration of Auth0 authentication adds robustness, security, and reliability, leveraging a trusted solution used by many organizations.

### To run project

Need to have installed git bash (if windows)

1. Navigate to the project directory and execute "npm install" to install all dependencies.

2. Prior to launching the application, initiate the JSON server.
   - Run "npm run server" in the terminal after changing the directory to the main branch.
   - You can monitor the server's activity by visiting "http://localhost:5000/slots" in your default browser.

3. Optionally, you can customize the port number by specifying it in the "package.json" file under the "scripts" section for the server.

4. Then you need to add your auth0 domain and clientID in the index.js file for authorization and you can also view account logs in the website.

5. To start the application, simply execute "npm start" in the terminal.
