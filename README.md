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

#### 1. Optimize access to static resources

he first step is to externalize all CSS or Javascript in dedicated files. This will allow the web server and then the browser but also different proxies to cache these files and thus preserve the bandwidth networks.

Second, minify and compress those same files. This will also preserve the bandwidth during the first download or the expiration of caches.

Finally the last step is a recommendation as valid in the development of tools or utility libraries: modularize the various style sheets or declaration files of your JS functions. Thus, only the files needed for the current page or application will be loaded. A good framework will always have a core part and additional modules or plugins.

#### 2. Lighten multimedia content
* Encode your images / videos / sounds before they are broadcast in your CMS or your site, do not do it dynamically from your site.
* Publish different versions of the same content in order to offer a version perfectly adapted to your user's visualization or listening context (hardware, screen, network, bandwidth, environment). For example, you can use the HTML5 / CSS3 media queries to target the level of definition.
* Optimize also the content published by the users: either by quotas on the sizes of upload, or by tools of compression to the sending or at the time of the recording in database with the use of tools such as ImageMagic for images.

#### 3. Find a green web host

Today, there is unfortunately no label to standardize what a Green web host. We must therefore rely on the criteria presented by articles such as GreenIt.fr What criteria to identify a "green" host? or even browse the proposed lists such as that of Ekopedia .

#### 4. Virtualize and containererize

We will therefore be able to take advantage of virtualization or even better the containerization offered by the majority of public cloud providers to limit the energy footprint of our sites and adapt their consumption to the needs of requests processing. 
