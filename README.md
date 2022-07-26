# A Simple RESTful API

## Dir Structure

```txt
root
 |- controllers
    |- <controller>.js
 |- routers
    |- <router>.js
 |- router.js
 |- server.js
```

+ server.js: enter pointer
+ router.js: include the route setting from routers Dir
+ \<router>.js: router setting. name patten: "xxxRouter"
+ \<controller>.js: controller. name patten: "xxxController"

## Getting start

```cmd  
npm install
```

## Run server

```cmd
npm run start
or
npm run dev # for watch mode
```
