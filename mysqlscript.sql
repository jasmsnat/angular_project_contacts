CREATE SCHEMA `personrepository` ;

CREATE TABLE `personrepository`.`personinfo` (
  `personinfoid` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `phone` INT(10) NULL,
  `address` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`personinfoid`),
  UNIQUE INDEX `personinfoid_UNIQUE` (`personinfoid` ASC),
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));

ALTER TABLE `personrepository`.`personinfo` 
CHANGE COLUMN `phone` `phone` VARCHAR(10) NULL DEFAULT NULL ;

ALTER TABLE `personrepository`.`personinfo` 
ADD COLUMN `gender` VARCHAR(6) NULL DEFAULT NULL AFTER `email`;

ALTER TABLE `personrepository`.`personinfo` 
DROP COLUMN `address`,
CHANGE COLUMN `gender` `gender` VARCHAR(6) NULL DEFAULT NULL AFTER `state`,
ADD COLUMN `state` VARCHAR(2) NULL DEFAULT NULL AFTER `phone`;
