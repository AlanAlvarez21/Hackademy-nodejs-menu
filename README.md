# Hackademy-nodejs-menu
Food Menu builded with nodejs/express and using mongoDB in db Atlas cluster, all the image are saved into cloudinary server


Deploy in Heroku:
https://sleepy-temple-98972.herokuapp.com/

To see the control form for product manage:
https://sleepy-temple-98972.herokuapp.com/upload


## API Endpoints

GET all Images: 
```sh
 https://sleepy-temple-98972.herokuapp.com/api/images
```
GET a specific image: 
```sh
 https://sleepy-temple-98972.herokuapp.com/api/images/:id
```
POST an image: 
```sh
 https://sleepy-temple-98972.herokuapp.com/api/images/upload
```
DELETE an image: 
```sh
 https://sleepy-temple-98972.herokuapp.com/api/images/delete/:id
```

The Image Object Json:
```sh

{
    "images": [
        {
            "created_at": "2021-03-20T03:31:44.132Z",
            "_id": "60556f67351a22456c48794b",
            "title": "Burger 2",
            "description": "Burger type No.2",
            "category": "hamburguer",
            "price": "15.99",
            "filename": "0a27d312-c403-4fc2-8ac1-410918dafa0f.png",
            "path": "/img/uploads/0a27d312-c403-4fc2-8ac1-410918dafa0f.png",
            "originalname": "kisspng-hamburger-cheeseburger-french-fries-big-n-tasty-m-frit-hamburger-5b4e0f5ddd1ab3.3580029215318423979057 (2).png",
            "mimetype": "image/png",
            "size": 394618,
            "imageURL": "http://res.cloudinary.com/dssrbmpy2/image/upload/v1616211817/nqzvinb89dhd8c6binza.png",
            "public_id": "nqzvinb89dhd8c6binza",
            "__v": 0
        }]
}
```

## Running Locally

```sh
$ git clone https://github.com/AlanAlvarez21/Hackademy-nodejs-menu.git # or clone your own fork
$ cd Hackademy-nodejs-menu
$ npm install
$ npm start
```

Then you must Set up your api keys for mongoDB and cloudinary

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
```
