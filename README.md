# react-component-starter
Author: Juan Carlos Orozco

Read:
https://webpack.js.org/guides/migrating/

Branches:
css_modules - Component starter using css modules.

Branch css_modules

Uses webpack 2
Two alternatives:
1) http://stackoverflow.com/questions/41021614/webpack-2-css-modules-support

2) https://github.com/gajus/babel-plugin-react-css-modules

I used the 2nd option. Based on the demo:
https://github.com/gajus/babel-plugin-react-css-modules/tree/master/demo

I have this additional settings on my package.json and .babelrc. Are they needed?

    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",

{
  "presets" : ["es2015", "react"]
}