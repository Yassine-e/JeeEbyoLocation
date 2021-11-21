-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Nov 21, 2021 at 12:20 PM
-- Server version: 8.0.18
-- PHP Version: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebyoo-location`
--

-- --------------------------------------------------------

--
-- Table structure for table `annonce`
--

DROP TABLE IF EXISTS `annonce`;
CREATE TABLE IF NOT EXISTS `annonce` (
  `id` bigint(20) NOT NULL,
  `adresse` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `chambre` int(11) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `etage` int(11) NOT NULL,
  `etat` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `num_tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `piece` int(11) NOT NULL,
  `prix` bigint(20) DEFAULT NULL,
  `region` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `salle_de_bain` int(11) NOT NULL,
  `surface` bigint(20) DEFAULT NULL,
  `titre` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `ville` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `proprietaire_id` bigint(20) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpryag2krqb8d8mx2wpi7rlmxl` (`proprietaire_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `annonce`
--

INSERT INTO `annonce` (`id`, `adresse`, `chambre`, `description`, `etage`, `etat`, `num_tel`, `piece`, `prix`, `region`, `salle_de_bain`, `surface`, `titre`, `type`, `ville`, `proprietaire_id`, `status`, `month`) VALUES
(92, 'Tetouan', 1, 'Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities', 1, 'new', '06666666', 1, 1000, 'Tangier-Tetouan', 1, 100, 'Appartement meublée', 'appart', 'TETOUAN', 11, 1, 11),
(93, 'hay salam, sale', 2, 'desc', 1, 'new', '07777777', 1, 10, 'rabat-sale-kenitra', 2, 200, 'maison light', 'appart', 'TETOUAN', 11, 1, 11),
(130, 'tetouane', 2, 'hadche rah descrp', 3, '2', '0651694169', 0, 2000, 'tanger', 2, 100, 'test dyoorer', '2', 'teotuan', 10, 1, 11),
(156, 'sale', 2, 'good one', 2, '2', '555', 0, 2000, 'rabat', 2, 200, 'Mason a kouer', '2', 'sale', 10, 1, 11),
(159, 'tetouan', 2, 'good house', 2, '2', '0651594169', 0, 3000, 'tanger', 2, 200, 'maison a louer', '2', 'tetouan', 11, 1, 11),
(167, 'aaa', 2, 'aaaa', 2, '2', '555', 0, 100, 'g', 2, 200, 'aaa', '2', 'tetoun', 11, 1, 11);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `numtel` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `description`, `email`, `name`, `numtel`) VALUES
(1, 'desc1', 'client1@gmail.com', 'client1', '066666666'),
(53, 'JOLI', 'CLIENT2@GMAIL.COM', 'CLIENT2', '06666666'),
(54, 'string', 'string', 'string', 'string'),
(55, 'string', 'client1@gmail.om', 'string', '066666666'),
(128, 'good ', 'yassineachari@gmail.com', 'achari', '065594169'),
(129, 'hahahaha', 'yassine.achari@etu.uae.ac.ma', 'acharia', '065154166'),
(165, 'good', 'yassineachari@gmail.com', 'yassine', '06515914169'),
(166, 'good', 'yassine.achari@etu.uae.ac.ma', 'achari', ' 0651594169');

-- --------------------------------------------------------

--
-- Table structure for table `client_annonce`
--

DROP TABLE IF EXISTS `client_annonce`;
CREATE TABLE IF NOT EXISTS `client_annonce` (
  `client_id` bigint(20) NOT NULL,
  `annonce_id` bigint(20) NOT NULL,
  KEY `FK2d7sunqhav7cgpo21ssecfxry` (`annonce_id`),
  KEY `FKqj75lbcj3pms521j0fy8s94hp` (`client_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `client_annonce`
--

INSERT INTO `client_annonce` (`client_id`, `annonce_id`) VALUES
(165, 159),
(166, 92);

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(169);

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
CREATE TABLE IF NOT EXISTS `photo` (
  `id` bigint(20) NOT NULL,
  `path_photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `annonce_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKixd1grrq4ty8srayu2aw1cfmw` (`annonce_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`id`, `path_photo`, `annonce_id`) VALUES
(74, '06112021152403villa-seignosse-architecture-et-paysage-img_30613658044e7261_4-0089-1-545cddc.jpg', 92),
(76, '06112021153604villa-seignosse-architecture-et-paysage-img_30613658044e7261_4-0089-1-545cddc.jpg', 92),
(77, '06112021153604maison-en-l-seloger-construire.jpg', 93),
(132, '17112021191852WhatsApp Image 2021-11-12 at 12.36.52.jpeg', 131),
(136, '17112021232950WhatsApp Image 2021-11-12 at 12.36.52.jpeg', 135),
(139, '17112021233540WhatsApp Image 2021-11-12 at 12.36.52.jpeg', 138),
(141, '18112021133535WhatsApp Image 2021-11-12 at 12.36.52.jpeg', 140),
(144, '18112021133638YassineImgCvPro.jpg', 143),
(146, '18112021133701ebyooLocation.png', 145),
(148, '18112021134124zakaCv (2).jpg', 147),
(154, '18112021152810011115d60807548cdecc173ae720f131.jpg', 153),
(157, '18112021153452011115d60807548cdecc173ae720f131.jpg', 156),
(160, '21112021120619wp2124316.jpg', 159),
(168, '21112021130417photo-1549517045-bc93de075e53.jfif', 167);

-- --------------------------------------------------------

--
-- Table structure for table `proprietaire`
--

DROP TABLE IF EXISTS `proprietaire`;
CREATE TABLE IF NOT EXISTS `proprietaire` (
  `id` bigint(20) NOT NULL,
  `adresse` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `num_tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `path_photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `roles` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `proprietaire`
--

INSERT INTO `proprietaire` (`id`, `adresse`, `email`, `first_name`, `last_name`, `num_tel`, `password`, `path_photo`, `roles`) VALUES
(10, 'hrbora', '1', '100', '55', '55', '$2a$10$CJvnMCbh78E5UzPWO1cZXOjF32TIYUB87RJwZzVGLI86oFwQB3xae', '10.png', 'PROPRIETAIRE'),
(11, 'tetouan', 'prop11@gmail.com', 'yassine', 'achari', '0651594169', '$2a$10$hRoe19usPwFt.8xCdWMpB.eYekTRSfWecUCHfTj5xpJTE.Nfql6/q', 'default.png', 'PROPRIETAIRE'),
(12, 'aa', 'mail', 'XX', 'aa', 'aa', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', '12.png', 'PROPRIETAIRE'),
(13, 'aa', 'aa', 'aa', 'nn', '01111111', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', '13.png', 'PROPRIETAIRE'),
(88, 'adresse', 'prop@gmail.com', 'prop', 'proop', '0666666', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', '88.png', 'ADMIN'),
(27, 'aabbv', 'aan', 'aa', 'nn', '01111111', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', '27.png', 'PROPRIETAIRE'),
(33, 'aabbv', 'aannk', 'aabbbbbbbbb', 'nn', '01111111', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', '33.png', 'PROPRIETAIRE'),
(49, 'aabbv', 'aannknoikkl', 'aabbbbbbbbb', 'nn', '01111111', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', 'default.png', 'PROPRIETAIRE'),
(36, 'aabbv', 'aannknoi', 'aabbbbbbbbb', 'nn', '01111111', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', 'default.png', 'PROPRIETAIRE'),
(37, 'aabbv', 'aannknoikjk', 'aabbbbbbbbb', 'nn', '01111111', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', 'default.png', 'PROPRIETAIRE'),
(51, 'aabbv', 'aannknoikop', 'aabbbbbbbbb', 'nn', '01111111', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', '51.png', 'PROPRIETAIRE'),
(53, 'aabbomm', 'aannikopiouom', 'aouss', 'nnm', '01111111o', '$2a$10$3n4cq56.zNRAL4eQwdrD0OVUHw0pbKlOx/JvVtUttFYANevFRAL4m', 'default.png', 'PROPRIETAIRE'),
(89, 'adresse', 'proppt@gmail.com', 'prop', 'proop', '0666666', '$2a$10$he1S6sNaT2EISpGW.av9e.h8xedoPjq2.d0fXQWG8HvBF.96ZxYMC', '89.png', 'PROPRIETAIRE');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
