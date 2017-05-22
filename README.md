## Example Usage

To run the app:

```
npm install
npm start
```
or with yarn

```
yarn install
yarn start
```

Alternatively include:
- build/index.html
- build/static/css/main.23b26a81.css
- build/static/js/main.bd1da5f8.js
in an existing project.

Given the input:
```
1, 2, 3, 4, 9, 8, 7
```

Consecutive Runs will find all indices that begin a run of 3 consecutive numbers (ascending or descending)
```
0, 1, 4
```
## Configuration

In src/App.js, we define a property, searchConsecutiveNumbers: buildConsecutive(), which returns a function 
to find consecutive indices. It would be possible to pass in optional parameters here: 
```
const step = 2
const number = 4
findConsecutive: buildConsecutive(step, number)
```
to change default step values and search for runs of different sizes. A future case might implement a UI which allows for configuration of these properties.