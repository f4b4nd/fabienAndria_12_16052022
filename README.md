# Project 12

## 1. Hosting :
This project is hosted with heroku.
The site is currently available at URL : [https://sportsee-fandria.herokuapp.com/](https://sportsee-fandria.herokuapp.com/)

---

## 2. How to run Backend: 

### 2.1 Prerequisites :
- Docker
- Docker-compose

## 2.2 Installation : 

I made a custom version of [Sportsee-api](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) with **Docker-compose** to simplify its utilization.

You can clone this custom repository with the following command :

`git clone https://github.com/f4b4nd/sportsee-api-docker-compose`


### 2.3 Launch backend
- Get into the folder : `cd ./sportsee-api-docker-compose/`
- Run the commmand : `docker-compose up`
- Backend is now available on `port 3001`

---

## 3. How to run Frontend

### 3.1 Prerequisites : 
- NodeJS (16.13.1)
- npm

### 3.2 Installation and launch

1. Clone this repository : 
- `git clone https://github.com/f4b4nd/fabienAndria_12_16052022.git`

2. Install dependencies
- `npm install`

3. Launch frontend on `port 3000`
- `npm run start` 

4. If you want to use an external api, then you need to set an environnement variable called `REACT_APP_API_URL`

Example : 
- create an `.env` file at the root of the project
- insert in this file the following: `REACT_APP_API_URL=http://localhost:3001/`
