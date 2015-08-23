var mysql = require("mysql");
var dbConfig = require("../models/dbconfig");

//console.log("worked");
connection = mysql.createConnection(dbConfig.connect)

/*create database*/
connection.query('\
CREATE DATABASE IF NOT EXISTS `' + dbConfig.database + '`\
 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;\
');
