# TOPi - Full Stack Developer Test

## Goal
- To develop a web application able to display a grid with the most starred repositories of a language in github. 
- The URL with the repos: https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1

## Required
- You need to develop both the front-end and the back-end. The language will be defined by the tester
- Each row of the grid must display at least: the user's photo, repository name, number of stars and the number of forks
- Readable code (variable names, structures)
- Paging or infinite scrolling
- Language selection via SearchBar or Dropdown menu
- At least one unit test
- Deploy to a server (AWS, Heroku, Azure, etc)

## Extra Points
- Persist the data locally (any database or serialized)
- Mobile friendly
- Use Lightning Design - http://lightningdesignsystem.com/
- A cool design

---

## Results:

## Front-end 

### Includes 

- Vue.js, Vue-cli
- Salesforce-UX/Design-System
- Axios
- GitHub API
- Jest unit test

### For front-end project setup

- First change directory to web folder

```
cd web
```

- Install node modules with yarn

```
yarn
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

- It wil build the public folder in root folder


### Lints and fixes files
```
yarn lint
```
### Test unit

```
yarn test:unit
```

## Backend

### Includes 

- Express

- Install node modules with yarn

```
yarn
```

- server file in root folder just for deploying to Heroku Platform

### Demo

[https://starsgithub.herokuapp.com/](https://starsgithub.herokuapp.com/)