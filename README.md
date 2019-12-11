# JavaScript Unit Testing using Jest

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![GitHub contributors](https://img.shields.io/github/contributors/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/contributors/) [![Open Source Love png1](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/) [![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/kennethreitz)

###**Tools**:<br />
- [Visual Studio Code](https://code.visualstudio.com/)<br />
- [Node JS](https://nodejs.org/en/)<br />
- [A guide to unit testing in JS](https://github.com/mawrkus/js-unit-testing-guide/)

###**devDependencies**:<br />
- **jest**

### Commands:

```npm init -y```

```npm i -D jest```

```npm test```

---

``` // functions.js > to check test x PASS ```

```javascript
const functions = {
  add: (num1, num2) => num1 + num2
};

module.exports = functions;

```
![](img/success.png)

``` // functions.js > to check test x FAIL ```

```javascript
const functions = {
  add: (num1, num2) => num1 + num2 + 1
};

module.exports = functions;

```

![](img/fail.png)