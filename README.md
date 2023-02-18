DOCKER:
Dockerfile in the root of this project can be used to build a docker image. The angular app needs to be packaged inside a container running Node.js. We copy the source code of the app in the container, build the project and run it on Nginx web server. The container can be run on any available port. The docker image was built and tested on MacOS. It is working fine on Mac but I've not tested it on other platforms. 
Docker Image: https://hub.docker.com/r/hinddeep/mitacsangular 

Angular:
There is a central communication service, a digital clock, analog clock and setting component. all of these components are displayed inside the app.component. There's a button to turn on/off the clocks. You can also add time to the clocks. Input from settings component will be passed into the digital clock component. the digital clock component will relay to input to analog clock using shared service and observable. the observable serves as a channel through which inter component communication happens. The service is used to share the observable among all the components. 


# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
