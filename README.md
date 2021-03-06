<br />
<p align="center">

  <h3 align="center">Test-Driven Simple Vue.js & Express.js Project</h3>


</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a>    
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#try-it-out">Try It Out!</a></li>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project
This is a simple project that I created to get started with frontend development with Vue.js , backend development with Express.js and the concept and applications of unit testing. It is by no means intended to be a complete or standalone application.
It might hopefully be helpful for those who are also getting started on web app development with these frameworks. 

![main-page-screenshot](https://user-images.githubusercontent.com/52625118/108173430-2d191a00-710f-11eb-9b38-4e1341eed874.png)

Using Giphy's trending gifs API endpoint, it fetches the most trending 7 gifs on Giphy at the moment and displays them in an ordered fashion. When any of the gifs get clicked on, user is directed to the original Giphy page that the gif came from. 

At the top of the page, there is a form that prompts the user to set a username to customize which gifs they want to see. The link just below the form that dynamically updates as the user types, directs the user to another page with the gifs that they 
liked using the "Like this gif" button below each gif. On this personal page, user can click the "Unlike this gif" buttons if they change their mind about a gif and the page updates accordingly. Functionality and UI-wise, that's all. 

![personal-page-screenshot](https://user-images.githubusercontent.com/52625118/108173503-3efabd00-710f-11eb-996e-4ca5b5702ca7.png)
Using Jest as the testing framework, I aimed to learn about and then apply the best practices of testing and created unit tests for each component of the application with the highest code coverage possible.
The real deal of the project for me was getting familiar with Vue.js , Express.js , concepts like componentization and unit testing, RESTful API basics, CRUD operations, frontend-backend communication and the TDD I did  while developing every step of it. 
Enjoyed and learned a lot and working on this and hope you do too. Happy coding !



# Built With


* [Vue.js](https://vuejs.org/)
* [Express.js](https://expressjs.com/)
* [Jest](https://jestjs.io/)
* Deployment : [Kubernetes](https://kubernetes.io/) using [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)


# Try It Out!

For a limited time the site is available at http://34.68.72.210/ but it won't be there forever so be quick and don't miss out ! If the site is unavailable, you can always follow the instructions below.

You can quickly get your hands on the project and try it out for yourself. Once you have [Docker](https://www.docker.com/get-started), just clone this repository, `cd` into its main directory where the ```docker-compose.yml``` is located and you're one ```docker-compose up -d``` away from this beauty ! It should be available for you at http://localhost:8080/ .

If you'd like to try out the backend API and send requests yourself, it's also available for a limited time at http://35.202.208.75:5000/ . 



