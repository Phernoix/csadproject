-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 119.74.42.128    Database: csad_proj
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `rating` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,'Erwin Klaseboer','eklaseboer@gmail.com','sasa','assaas',0),(2,'Erwin Klaseboer','eklaseboer@gmail.com','sasa','assaas',0),(3,'Erwin Klaseboer','eklaseboer@gmail.com','sasa','assaas',0),(4,'Erwin Klaseboer','eklaseboer@gmail.com','1','2',0),(5,'Erwin Klaseboer','eklaseboer@gmail.com','11','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',0),(6,'Danish','danish@gmail.com','SADADSDFS','SFSSFSFSFSFSFSFFSSFFSSFSFSFf',0),(7,'Danish','danish@gmail.com','SADADSDFS','SFSSFSFSFSFSFSFFSSFFSSFSFSFf',0),(8,'danish','danish@gmail.com','aSADSD','FSDFSFSFSSFFSFSFSFFSFS',0),(9,'Fazith Ismail','test@gmail.com','fdfd','dfdf',0),(10,'raja','Rajaselvam2003@gmail.com','nigga','nigga',0),(11,'Erwin Klaseboer','eklaseboer@gmail.com','asas','sdadssdasa',0),(12,'Erwin Klaseboer','eklaseboer@gmail.com','saassaas','sasasa',0),(13,'Erwin Klaseboer','eklaseboer@gmail.com','saassaas','sasasa',0),(14,'EASSA','eklaseboer@gmail.com','211221','443434',3),(15,'EASSA','eklaseboer@gmail.com','211221','443434',2.5),(16,'Fazith Ismail','test@gmail.com','dffd','dfdf',4.5),(17,'e','Eyyydood@gmail.com','qeq','eq',4.5),(18,'e','Eyyydood@gmail.com','qeq','eq',4.5),(19,'Fazith Ismail','test@gmail.com','ssss','ssss',3.5),(20,'Erwin Klaseboer','eklaseboer@gmail.com','232233','32233223',2.5),(21,'Erwin Klaseboer','eklaseboer@gmail.com','12','33233',5),(22,'Fazith Ismail','fazithismail@gmail.com','dddd','ddd',3.5);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-17 11:01:52
