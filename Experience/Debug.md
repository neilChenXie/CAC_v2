##MySQL

```js
// '\' missing will make error notes in wrong position, ';' is critical
connection.query('\
CREATE TABLE IF NOT EXISTS `' + dbConfig.database +'`.\
`account` (\
    `AID` INT NOT NULL AUTO_INCREMENT,\
    `UID` INT NOT NULL,\
    `Name` VARCHAR(60) NOT NULL,\
    `Password` VARCHAR(60),\
    PRIMARY KEY (`AID`));\
');
```
