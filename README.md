# budgetthat

A [budgeting web-app](http://budgetthat.s3-website-us-east-1.amazonaws.com) built with Ember.js and backed by a Rails API.

## Installation

* `$ git clone <repository-url>` this repository; change into new directory
* `$ npm install`
* `$ bower install`

## Running / Development

* `$ ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* You'll also need [the API](https://github.com/jeffreyjurgajtis/budgetthat-rails) running on localhost:3000

### Deploying

Specify what it takes to deploy your app.

* Create a `.env.production` and define AWS key/secret variables.
* Configure S3 bucket to match `config/deploy.js`
* `$ ember deploy production`
