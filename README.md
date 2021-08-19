# Drawdown Adapted Solution Site
### Created by Sarah Manning for Enacting Climate https://enactingclimate.org/

Web version of the Drawdown Adaptation for 5th Grade project

App created with Vue.js

Styling done with Tailwind CSS processed with Gulp and PostCSS

### Document Setup

The main solution app layout is established in "dest/solutions.html". The page is divided into semantic containers that are filled with content from "dest/js/solutions.js". Vue directives written inline on the HTML elements link to corresponding arrays of content in the js file. As the user clicks through the app, an index variable counts which solution the user is viewing to fill in the appropriate content from each array. For example, there is an array corresponding to the header section that holds the 20 headers for each of the 20 solutions. When the user is viewing the fifth solution, the header will be filled with the fifth element of the header array, etc. 
### NPM Commands

Gulp browser autosync -- gulp watch

Gulp PostCSS processing -- gulp css

### Resources Used
Tailwind Documentation + Screencasts https://tailwindcss.com/docs

https://tailwindcss.com/course/setting-up-tailwind-and-postcss/

https://www.npmjs.com/package/gulp-postcss

https://webdesign.tutsplus.com/tutorials/postcss-quickstart-guide-gulp-setup--cms-24543