# WordPress starter theme with Vue.js integrated.
This theme pretty much includes only a way to compile your assets with Vue code. 
It's meant for you to learn Vue inside WordPress, or to create your own theme.
It includes an example component. 
I'm using Webpack to compile the assets. I added webpack-dev-server and HMR to avoid page reload on asset change. 
I also added browserSync for auto reloading on PHP file change. 

There are packages you would probably want to use such as axios, vuex, etc. I would leave them to you to install. 

Clone the theme, run ```npm install``` and start playing. 

Make sure to modify the BrowserSync proxy link inside the webpack.config.js. 

## Note 
webpack-dev-server serves assets from memory, which means that on development mode we would have to include asset files from 
``` http://localhost:8080/[name].css ``` and ``` http://localhost:8080/[name].js ```. 
When you switch to production you remove these links and remove the comment tags from the asset links to the current directory. 
I added comments in the functions.php file to make it more clear. 

Keep in mind that you need to run ``` npm run dev ```, otherwise you would get 404 on the development asset links.

## Commands
1. ``` npm run build ``` Will compile and minify assets for produciton.
2. ``` npm run build:dev ``` Will compile assets. 
3. ``` npm run dev ``` Will compile and start webpck-dev-server and browserSync. 

## Vue devtools
Download it [here](https://github.com/vuejs/vue-devtools#vue-devtools)
