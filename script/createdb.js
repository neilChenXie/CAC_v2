var mysql = require("mysql");
var dbConfig = require("../models/dbconfig");

//console.log("worked");
connection = mysql.createConnection(dbConfig.connect);

/*create database*/
connection.query('\
CREATE DATABASE IF NOT EXISTS `' + dbConfig.database + '`\
 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;\
');

// create account table
connection.query('\
CREATE TABLE IF NOT EXISTS `' + dbConfig.database +'`.\
`account` (\
    `AID` INT NOT NULL AUTO_INCREMENT,\
    `UID` INT NOT NULL,\
    `Name` VARCHAR(60) NOT NULL,\
    `Password` VARCHAR(60),\
    PRIMARY KEY (`AID`));\
');

// creaete user table
connection.query('\
CREATE TABLE IF NOT EXISTS `' + dbConfig.database +'`.\
`user` (\
    `UID` INT NOT NULL AUTO_INCREMENT,\
    `Firstname` VARCHAR(60) NOT NULL, \
    `Lastname` VARCHAR(60) NOT NULL,\
    `Email` VARCHAR(60) NOT NULL,\
    `Password` VARCHAR(60) NOT NULL,\
    `Phone` VARCHAR(20) NOT NULL,\
    PRIMARY KEY (`UID`)\
);\
');

// create bill table
connection.query('\
CREATE TABLE IF NOT EXISTS `' + dbConfig.database +'`.\
`bill` (\
    `BID` INT NOT NULL AUTO_INCREMENT,\
    `AID` INT NOT NULL,\
    `UID` INT NOT NULL,\
    `Date` DATETIME NOT NULL,\
    `Cost` DECIMAL(20) NOT NULL,\
    `Description` VARCHAR(100) NULL,\
    `Avg` DECIMAL(20) NOT NULL,\
    PRIMARY KEY (`BID`)\
);\
');

// create account member list table
connection.query('\
CREATE TABLE IF NOT EXISTS `' + dbConfig.database +'`.\
`accmemlist` (\
    `AID` INT NOT NULL,\
    `UID` INT NOT NULL\
);\
');

// create bill member list table
connection.query('\
CREATE TABLE IF NOT EXISTS `' + dbConfig.database +'`.\
`billmemlist` (\
    `BID` INT NOT NULL,\
    `UID` INT NOT NULL\
);\
');

// end connection
connection.end()
