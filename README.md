## Table of Contents

Implmentation of Find Consecutive Runs challenge using [CreateReactApp](https://github.com/facebookincubator/create-react-app) and [Ant-Design](https://ant.design/)

User can input a list of integer values (either comma separated, or space delimited) and determine which indices in the list begin runs of three.

It is also possible to remove previously entered list items by clicking 'x' on an individual tag
## Example Usage

To run the app:

```sh
npm install
create-react-app my-app
cd consecutive-runs
npm start
```

Alternatively include:
- public/index.html
-

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
to change default step values and search for runs of different sizes. A future case might implement a ui which allows for
manual configuration of these properties.
