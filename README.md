# APP MOVE YOUR CITY
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1c9b936555604ce69c1e6fa2075015cf)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Matth10/MyCity&amp;utm_campaign=Badge_Grade)

Move your City is an application that allows students to share their hobbies with others. The goal of this application is to recap all the events near from the user. Every student can create an event.

## Architecture

#### Client
![client](https://github.com/Matth10/MyCity/blob/client_refact/img/client_architecture.png)

This is the client architure using in this application. We use ReactJs as the framwork for the views, Redux for the state management, Redux-observable for the asynchronus state management and Apollo React to fetch data from the graphql api.

We are using redux because it makes easier to manage the state of the application. But it also provides a one way data-flow that makes easier the debuging and troubleshooting. Thanks to the redux-observable (https://redux-observable.js.org/) we can dipatch asyncronus action. We decide to use observable instead of promise because we can cancel a request if needed. However in our data-flow the action doesn't need to pass through the epic (from redux observable) if the action is not async.

#### Backend
![backend](https://github.com/Matth10/MyCity/blob/client_refact/img/backend.png)

This is an overview of the backend architecture. The prisma server provides the data access layer in the application. It makes easier to the server to talk with the data base. To discuss with prisma we are using the prisma client generated. 

For the database we aree using MongoDB to store all the events. And we use firebase for the authentification.


## Installation guide

**_Warning_** : You need to have node and npm installed.

First you need to clone this project

```
git clone <URL_Project>
```

Then you can install all the dependencies with the command :

```
npm install
```

To start the application you need to execute two commands :

```
npm start
```

**For the backend**
First start the prisma container with the command:

```
docker-compose up -d
```

After that you need to install prisma on your computer.
```
npm install -g prisma
```
Then go to the prisma folder and deploy and generate the client
```
prisma deploy


prisma generate
```
*To check if prisma is running you can have access to the graphql playground on your host, port 4466*

Then you can start the server api

```
node index.js
```

### Screenshots

#### Login

![login](https://github.com/Matth10/MyCity/blob/master/img/login.png)

#### Home

![home](https://github.com/Matth10/MyCity/blob/master/img/home.png)

#### Create Events

![create](https://github.com/Matth10/MyCity/blob/master/img/create.png)

## Green It and best practices

The goal of this application is apply some best practices to develop a green it application.

**1. Optimize access to static resources**

**2. Lighten multimedia content**

**3. Find a green web host**

**4. Virtualize and containererize**


