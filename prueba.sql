-- MariaDB dump 10.19  Distrib 10.6.7-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	10.6.7-MariaDB-2ubuntu1.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Fighters`
--

DROP TABLE IF EXISTS `Fighters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Fighters` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Gender` char(1) NOT NULL,
  `FightingStyle` varchar(255) NOT NULL,
  `Ability` varchar(50) NOT NULL,
  `Created` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Active` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Fighters`
--

LOCK TABLES `Fighters` WRITE;
/*!40000 ALTER TABLE `Fighters` DISABLE KEYS */;
INSERT INTO `Fighters` VALUES (1,'Iori Yagami','M','Estílo Yagami De Las Artes Marciales Antiguas, Combinado Con El Instinto Puro','PiroKinesis, Rasguño','2022-11-16 01:41:42','2022-11-15 20:44:46','N');
/*!40000 ALTER TABLE `Fighters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Plants`
--

DROP TABLE IF EXISTS `Plants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Plants` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Ability` varchar(255) NOT NULL,
  `Price` int(10) NOT NULL,
  `Damage` varchar(50) NOT NULL,
  `Ranges` varchar(50) NOT NULL,
  `Attack_Direction` varchar(50) NOT NULL,
  `Recharge` varchar(50) NOT NULL,
  `Family` varchar(50) NOT NULL,
  `Created` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Active` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Plants`
--

LOCK TABLES `Plants` WRITE;
/*!40000 ALTER TABLE `Plants` DISABLE KEYS */;
INSERT INTO `Plants` VALUES (1,'AKKE','Autónoma Katapultadora Eyectomatica de Emisión esta buscando un acrónimo distinto de AKEE porque siendo sinceros Katapultadora es demasiado Artificial.','AKKE Lanza Proyectiles Que Rebotan de Zombi A Zombi.',175,'Normal','Largo','Hacia el Enfrente','Rápida','Arma-Menta','2022-11-10 03:23:17','2022-11-10 14:32:30','N'),(2,'Lechuga Iceberg','Lechuga Iceberg congela al zombi que la pise. No te quedes ensimismado mirando los lindos ojos de Iceberg. Puede que sea lo ultimo que hagas si eres un zombi.','Inmovilizar a un zombi durante un pequeño espacio de tiempo.',0,'Normal','Al Contacto','Hacia atras y al frente','Pausada','Sin Familia','2022-11-11 00:29:14','2022-11-10 21:00:40','N'),(3,'Bonk Choi','Bonk Choi rápidos puñetazoz a los enemigos cercanos que tiene delante y detrás. Este dentista tiene una oferta especial este mes: ¡te partirá dos dientes por el precio de un uno!','Ataca golpeando al zombi más cercano una casilla delante o detrás de él. Golpea una vez cada 0.25 segundos.',150,'Grande','Cerrado','Hacia el Enfrente y Atrás','NORMAL','Forza-Menta','2022-11-15 00:17:14','2022-11-14 18:20:37','N');
/*!40000 ALTER TABLE `Plants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pokemon`
--

DROP TABLE IF EXISTS `Pokemon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pokemon` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Type` varchar(30) NOT NULL,
  `Category` varchar(35) NOT NULL,
  `Weakness` varchar(30) NOT NULL,
  `Height` decimal(3,2) NOT NULL,
  `Weight` decimal(3,2) NOT NULL,
  `Created` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Active` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pokemon`
--

LOCK TABLES `Pokemon` WRITE;
/*!40000 ALTER TABLE `Pokemon` DISABLE KEYS */;
/*!40000 ALTER TABLE `Pokemon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Usuario` varchar(255) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Actualizado` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Activo` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'Misael','Villar Julian',21,'M','l19350325@tuxtepec.tecnm.mx','GH1124&VJ','2001-01-24','2022-11-10 00:04:08','2022-11-09 18:04:08','S'),(2,'jkdns','fdvd',34,'M','wewecc','wedew','2001-03-18','2022-11-11 00:45:35','2022-11-10 18:45:35','S');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `World`
--

DROP TABLE IF EXISTS `World`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `World` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Difficulty` int(2) NOT NULL,
  `Level` int(2) NOT NULL,
  `Created` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `World`
--

LOCK TABLES `World` WRITE;
/*!40000 ALTER TABLE `World` DISABLE KEYS */;
/*!40000 ALTER TABLE `World` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-17 18:17:47
