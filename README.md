# Moxiproject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

Run `npm install` for  dependencies.

## Postgres Server

Install Postgres 11 Server on local. And configure `pg_hba.conf` file to connect database without using password using `trust` method:
```
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# IPv4 local connections:
host    all             all             127.0.0.1/32            trust
```

## Nodejs Server

Run `node app.js` in the /api folder. This will start the NodeJs server on 3000 Port.

## Angular server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
