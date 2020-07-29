
## About the challenge

This application is a small project to practice the knowledge learned in bootcamp of Rocketseat. In the exercice proposed we have witch create one application with Nodejs (Express) to manage a list of repositories that are storage in an array in memory. It's possible create, edit, list and remove and iterate "likes" of them. 

## Install

Requirements: It's necessary have the NodeJs and Yarn installed in the machine. 

Follow the steps to install and run the project: 

 1. Clone this repository
 2. open your terminal. Go into the folder of project 
 3. Run the command `yarn` to install all dependencies
 4. Run the `yarn dev` command

## Routes
 
##### List all repositories  
	GET http://localhost:3333/repositories  
##### Create a new repository
	POST http://localhost:3333/repositories  
Params example : 
`{
"title": "A simple Viemo floating player",
"url": "https://github.com/promixofficial/playmix",
"techs": ["javasctipt","react","nodeJs"]
}
`

##### Update a repository
	PUT http://localhost:3333/repositories/:id  
Params example : 
`{
"title": "A simple Viemo floating player",
"url": "https://github.com/promixofficial/playmix",
"techs": ["javasctipt","react","nodeJs"]
}
`

##### Delete a repository
	DELETE http://localhost:3333/repositories/:id  
	 
##### Increment likes in the repository
	POST http://localhost:3333/repositories/:id/like  

