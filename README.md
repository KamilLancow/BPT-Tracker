# BPTTracker

This is a Client-Server Application built using the MEAN Stack ([MySQL](), [Express](https://github.com/expressjs/express), [Angular](https://github.com/angular/angular), [Node.js](https://github.com/nodejs/node))

![App Architecture](https://github.com/KamilLancow/BPT-Tracker/blob/master/architecture.jpg?raw=true)

**Angular 11 Client** sends HTTP Requests and retrieves HTTP Responses using **HTTPClient**, and then consumes the data on the components. The **Router** is used for navigating between pages.

**Node.js Express Server** exports a **REST API** & interacts with **MySQL Database** using **MySQL Client** [mysql2](https://github.com/sidorares/node-mysql2).

## Development server

### Client

Run `$ ng serve` in your console. Then Navigate to `http://localhost:4200/`.

Or run `$ ng serve --open` to automatically open the browser to `http://localhost:4200/`.

The app will automatically reload if you change any of the source files.

### Server

Run `$ node index.js` in your console. Note that using this command you would need to restart the application manually to get any changes on the code live.

I raccomend installing [nodemon](https://github.com/remy/nodemon). It's a tool that automatically restarts the node application when file changes in the directory are detected.

Then run `$ nodemon index.js` in your console. Now the server listens to HTTP requests sent to `http://localhost:3000/`.

## NOTE: The project is under development.
