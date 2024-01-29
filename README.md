# Typescript Unit Testing

### ‣ Start by creating a project, name it Typescript-Unit-Testing, then init it with npm :

```sh
mkdir Typescript-Unit-Testing && cd Typescript-Unit-Testing
npm init
```


### ‣ Installing the Testing Tools
- The next step is adding TypeScript as a development dependency to the project :

```sh
npm i jest --save-dev
```

- install the `ts-jest` package to bridge the path between TypeScript and Jest, so to speak :

```sh
npm i ts-jest --save-dev
```

- Must install the type definitions for Jest :
   
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


### ‣ Can run tests directly through Jest :

```sh
npm i -g jest
jest
```
