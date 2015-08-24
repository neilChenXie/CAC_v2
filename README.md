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


## Models

### Setup

1. config `models/dbconfig.js`
    ```bash
    #to find where is mysql.socket
    mysqladmin -u root -p variables | grep socket
    ```

2. run node.js database create script
    ```bash
    npm run-script createdb
    ```
