# Hackademy-nodejs-menu
Food Menu builded with nodejs/express and mongoDB, all the image are saved into cloudinary server


Deploy in Heroku:
https://sleepy-temple-98972.herokuapp.com/

To see the control form for product manage:
https://sleepy-temple-98972.herokuapp.com/upload


## Api endpoints

GET all Images: 
```sh
$ https://sleepy-temple-98972.herokuapp.com/api/images
```
GET a specific image: 
```sh
$ https://sleepy-temple-98972.herokuapp.com/api/images/:id
```
POST an image: 
```sh
$ https://sleepy-temple-98972.herokuapp.com/api/images/upload
```
DELETE an image: 
```sh
$ https://sleepy-temple-98972.herokuapp.com/api/images/delete/:id
```


## Running Locally

```sh
$ git clonehttps://github.com/AlanAlvarez21/Hackademy-nodejs-menu.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Then you must Set up you r api keys for mongoDB and cloudinary

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```


## Documentation


- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

