# Angular4 simple authentication app

### Server side application
[authentication-sample: express server](https://github.com/ysscott2012/authentication-sample/tree/master/server)

### Client side application
[authentication-sample: angular 4 app](https://github.com/ysscott2012/authentication-sample/tree/master/src/app)

### Dependencies (package.json)

Please see below dependencies. If you are trying to create a new application by yourself, you can copy following dependencies in your package.json file. 
```Javascript
"dependencies": {
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.1.0",
    "zone.js": "^0.8.4",
    "body-parser": "^1.17.2",
    "bootstrap": "^3.3.7",
    "cors": "^2.8.4",
    "express": "^4.15.4",
    "jquery": "^3.2.1",
    "jsonwebtoken": "^7.4.2",
    "lodash": "^4.17.4"
}
```
### Usage

- Clone or download this repository. 
  - `git clone https://github.com/ysscott2012/authentication-sample.git`
  
- Install all dependencies.
  - `npm install`
  
- Start server side program.
  - `cd authentication-sample/server`
  - `node server.js`
  
- Complie client side application
  - `cd authentication-sample/src/app`
  - `ng serve`
  
- When both client and server programs are running, open a browser and enter a URL: `localhost:4200`

