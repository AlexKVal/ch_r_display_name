### This is a trash project for bug checking

    $ npm install eslint babel-eslint eslint-plugin-react
    $ eslint code.js code2.js

    code2.jsx
      3:40  error  Component definition is missing display name  react/display-name

    ✖ 1 problem (1 error, 0 warnings)

There is no `App component definition is missing display name [react/display-name]` warning for:

```javascript
class App {
  constructor() {
  }
}

```
