# Typescript Unit Testing

### ‣ Start by creating a project, name it Typescript-Unit-Testing, then init it with npm :

```sh
mkdir Typescript-Unit-Testing && cd Typescript-Unit-Testing
npm init
```


### ‣ Installing the Testing Tools
- the next step is adding TypeScript as a development dependency to the project in the root of the project folder :

```sh
npm i jest --save-dev
```

- install the `ts-jest` package to bridge the path between TypeScript and Jest :

```sh
npm i ts-jest --save-dev
```

- must install the type definitions for Jest :
   
```sh
npm i @types/jest --save-dev
``` 

### ‣ Create an additional file called jest.config.js at the root of the project :

```sh
module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```
(_This file is necessary to perform the necessary transformation in order to turn TypeScript into regular JavaScript code_)


### ‣ To run tests using Jest directly, can use the following command :
```sh
npm i -g jest
jest
```
