# csadproject

## client (frontend)

If doesn't work, try these steps.

1. remove node-modules and package-lock.json
2. ```npm install```
3. ```npm audit fix --force```
4. ```npm run start```
5.  put .env file and inside put ```SKIP_PREFLIGHT_CHECK=true```


## database (backend)
If doesn't work,
1. Remove node_modules and package-lock.json
2. ```npm install mysql express```
ALWAYS DO '''node index.js''' WHENEVER YOU MAKE CHANGES TO THE INDEX.JS
