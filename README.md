# CAC_v2

## Description
This is a total new version **ChenACcount** based on:

* multiple front-end, e.g. IOS, Web, Android,

* Node.js server

* MySQL database.

**Collaborateur:** Jianan Xing, Yanwen Ni, Bowen Chen, Chen Xie.

## Environment

###Apache & MySQL & phpMyAdmin

* OSX

    > [reference](http://coolestguidesontheplanet.com/get-apache-mysql-php-phpmyadmin-working-osx-10-10-yosemite/)

###Node.js & npm

```bash
#check node.js and npm version
node -v
npm -v

#fix npm permission problem
sudo chown -R `whoami` /usr/local

#install npm-cli
npm install npm -g
```

## Controller

### Login & Signup & Security

1. login
	
	>check cookie, if exist go to dashboard, else login and save to cookie

2. register

	> after register, jump to login

3. logout

	> clear cookie and jump to login

4. dashboard
	
	> check cookie, if valid go to dashboard, else go to login

\*Extral: cross sit security

## Models

### Setup

0. install project package.json

    ```bash
    npm install
    ```

1. config `models/dbconfig.js`
    ```bash
    #to find where is mysql.socket
    mysqladmin -u root -p variables | grep socket
    ```

2. run node.js database create script
    ```bash
    npm run-script createdb
    ```

## Problem Log
