-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-04-2021 a las 13:08:37
-- Versión del servidor: 8.0.22-0ubuntu0.20.04.3
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `swapptest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Branch`
--

CREATE TABLE `Branch` (
  `id` int NOT NULL,
  `branch_name` varchar(32) NOT NULL,
  `address` varchar(64) NOT NULL,
  `phone_number` int NOT NULL,
  `email` varchar(32) NOT NULL,
  `company_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Branch`
--

INSERT INTO `Branch` (`id`, `branch_name`, `address`, `phone_number`, `email`, `company_id`) VALUES
(1, 'Málaga', 'calle larios 200', 544433325, 'swappmalaga@swapp.com', 1),
(2, 'Sevilla', 'calle sevilla', 655544443, 'sevillabranch@hotmail.com', 1),
(3, 'Almería', 'calle Almería', 650212113, 'swappalmeria@swapp.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat`
--

CREATE TABLE `chat` (
  `id` int NOT NULL,
  `chat_type_id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat_type`
--

CREATE TABLE `chat_type` (
  `id` int NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat_user`
--

CREATE TABLE `chat_user` (
  `id` int NOT NULL,
  `worker_id` int NOT NULL,
  `chat_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Company`
--

CREATE TABLE `Company` (
  `id` int NOT NULL,
  `email` varchar(32) NOT NULL,
  `phone_number` int NOT NULL,
  `company_name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Company`
--

INSERT INTO `Company` (`id`, `email`, `phone_number`, `company_name`) VALUES
(1, 'Swapp@swapp.es', 655954535, 'Swapp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210302113118', '2021-03-02 12:32:32', 2633),
('DoctrineMigrations\\Version20210304121820', '2021-03-04 13:18:48', 294);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Job`
--

CREATE TABLE `Job` (
  `id` int NOT NULL,
  `job` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Job`
--

INSERT INTO `Job` (`id`, `job`) VALUES
(1, 'Bartender'),
(2, 'Waiter'),
(3, 'Chef'),
(4, 'Head chef'),
(5, 'Supervisor'),
(6, 'Asistant manager'),
(7, 'Deputy manager'),
(8, 'General manager'),
(9, 'Runner');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `message`
--

CREATE TABLE `message` (
  `id` int NOT NULL,
  `chat_id` int NOT NULL,
  `worker_id` int NOT NULL,
  `text` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Rating`
--

CREATE TABLE `Rating` (
  `id` int NOT NULL,
  `rate` int NOT NULL,
  `from_user` int DEFAULT NULL,
  `to_user` int DEFAULT NULL,
  `review` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Shift`
--

CREATE TABLE `Shift` (
  `id` int NOT NULL,
  `branch_id` int NOT NULL,
  `worker_id` int NOT NULL,
  `shift_type_id` int NOT NULL,
  `start_shift` datetime DEFAULT NULL,
  `end_shift` datetime DEFAULT NULL,
  `date` datetime NOT NULL,
  `swapping` tinyint(1) NOT NULL DEFAULT '0',
  `swappable` tinyint(1) NOT NULL DEFAULT '1',
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Shift`
--

INSERT INTO `Shift` (`id`, `branch_id`, `worker_id`, `shift_type_id`, `start_shift`, `end_shift`, `date`, `swapping`, `swappable`, `active`) VALUES
(230, 1, 2, 1, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(231, 1, 2, 2, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(232, 1, 2, 1, NULL, NULL, '2021-04-06 00:00:00', 0, 1, 0),
(233, 1, 2, 2, NULL, NULL, '2021-04-06 00:00:00', 0, 1, 0),
(234, 1, 2, 2, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(235, 1, 2, 1, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(236, 1, 2, 1, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(237, 1, 3, 2, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(238, 1, 3, 1, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(239, 1, 3, 2, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(240, 1, 3, 2, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(241, 1, 3, 1, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(242, 1, 3, 2, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(243, 1, 5, 1, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(244, 1, 5, 1, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(245, 1, 5, 1, NULL, NULL, '2021-04-08 00:00:00', 0, 1, 0),
(246, 1, 5, 2, NULL, NULL, '2021-04-08 00:00:00', 0, 1, 0),
(247, 1, 5, 2, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(248, 1, 5, 1, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(249, 1, 5, 1, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(250, 1, 14, 1, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(251, 1, 14, 2, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(252, 1, 14, 1, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(253, 1, 14, 2, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(254, 1, 14, 1, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(255, 1, 14, 1, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(256, 1, 14, 1, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(257, 1, 14, 2, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(258, 1, 3, 1, '2021-04-05 11:00:00', '2021-04-05 21:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(259, 1, 3, 1, '2021-04-06 09:00:00', '2021-04-06 15:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(260, 1, 3, 1, '2021-04-08 09:00:00', '2021-04-08 15:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(261, 1, 3, 1, '2021-04-09 09:00:00', '2021-04-09 15:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(262, 1, 3, 1, '2021-04-11 09:00:00', '2021-04-11 16:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(263, 1, 2, 1, '2021-04-07 11:00:00', '2021-04-07 15:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(264, 1, 2, 1, '2021-04-08 11:00:00', '2021-04-08 15:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(265, 1, 2, 1, '2021-04-10 11:00:00', '2021-04-10 15:00:00', '2021-04-10 00:00:00', 0, 1, 1),
(266, 1, 2, 2, '2021-04-07 16:00:00', '2021-04-07 22:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(267, 1, 2, 2, '2021-04-08 16:00:00', '2021-04-08 21:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(268, 1, 2, 2, '2021-04-09 16:00:00', '2021-04-09 21:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(269, 1, 2, 2, '2021-04-11 15:00:00', '2021-04-11 22:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(270, 1, 3, 2, '2021-04-06 17:00:00', '2021-04-06 21:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(271, 1, 3, 2, '2021-04-08 17:00:00', '2021-04-08 21:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(272, 1, 3, 2, '2021-04-09 17:00:00', '2021-04-09 21:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(273, 1, 5, 1, '2021-04-06 10:00:00', '2021-04-06 16:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(274, 1, 5, 1, '2021-04-10 10:00:00', '2021-04-10 11:00:00', '2021-04-10 00:00:00', 0, 1, 1),
(275, 1, 5, 2, '2021-04-05 17:00:00', '2021-04-05 21:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(276, 1, 5, 2, '2021-04-06 17:00:00', '2021-04-06 21:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(277, 1, 5, 2, '2021-04-07 17:00:00', '2021-04-07 21:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(278, 1, 5, 2, '2021-04-10 17:00:00', '2021-04-10 21:00:00', '2021-04-10 00:00:00', 0, 1, 1),
(279, 1, 5, 2, '2021-04-11 17:00:00', '2021-04-11 21:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(280, 1, 14, 1, '2021-04-06 10:00:00', '2021-04-06 16:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(281, 1, 14, 1, '2021-04-08 11:00:00', '2021-04-08 16:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(282, 1, 14, 2, '2021-04-06 17:00:00', '2021-04-06 21:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(283, 1, 14, 2, '2021-04-08 17:00:00', '2021-04-08 21:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(284, 1, 14, 2, '2021-04-09 17:00:00', '2021-04-09 21:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(285, 1, 14, 2, '2021-04-10 17:00:00', '2021-04-10 21:00:00', '2021-04-10 00:00:00', 0, 1, 1),
(286, 2, 9, 1, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(287, 2, 9, 2, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(288, 2, 9, 1, NULL, NULL, '2021-04-06 00:00:00', 0, 1, 0),
(289, 2, 9, 2, NULL, NULL, '2021-04-06 00:00:00', 0, 1, 0),
(290, 2, 9, 2, '2021-04-11 10:00:00', '2021-04-11 20:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(291, 2, 9, 1, '2021-04-07 10:00:00', '2021-04-07 13:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(292, 2, 9, 1, '2021-04-08 12:00:00', '2021-04-08 15:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(293, 2, 9, 1, '2021-04-09 12:00:00', '2021-04-09 15:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(294, 2, 9, 1, '2021-04-10 11:00:00', '2021-04-10 15:00:00', '2021-04-10 00:00:00', 0, 1, 1),
(295, 2, 9, 1, '2021-04-11 11:00:00', '2021-04-11 15:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(296, 2, 9, 2, '2021-04-07 17:00:00', '2021-04-07 20:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(297, 2, 9, 2, '2021-04-08 17:00:00', '2021-04-08 20:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(298, 2, 9, 2, '2021-04-09 17:00:00', '2021-04-09 21:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(299, 2, 9, 2, '2021-04-10 17:00:00', '2021-04-10 22:00:00', '2021-04-10 00:00:00', 0, 1, 1),
(300, 2, 10, 1, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(301, 2, 10, 2, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(302, 2, 10, 1, NULL, NULL, '2021-04-08 00:00:00', 0, 1, 0),
(303, 2, 10, 2, NULL, NULL, '2021-04-08 00:00:00', 0, 1, 0),
(304, 2, 10, 1, '2021-04-05 10:00:00', '2021-04-05 15:00:00', '2021-04-05 00:00:00', 1, 1, 1),
(305, 2, 10, 1, '2021-04-06 10:00:00', '2021-04-06 15:00:00', '2021-04-06 00:00:00', 1, 1, 1),
(306, 2, 10, 1, '2021-04-09 10:00:00', '2021-04-09 15:00:00', '2021-04-09 00:00:00', 1, 1, 1),
(307, 2, 10, 1, '2021-04-10 10:00:00', '2021-04-10 15:00:00', '2021-04-10 00:00:00', 1, 1, 1),
(308, 2, 10, 1, '2021-04-11 11:00:00', '2021-04-11 15:00:00', '2021-04-11 00:00:00', 1, 1, 1),
(309, 2, 10, 2, '2021-04-05 17:00:00', '2021-04-05 20:00:00', '2021-04-05 00:00:00', 1, 1, 1),
(310, 2, 10, 2, '2021-04-06 17:30:00', '2021-04-06 20:30:00', '2021-04-06 00:00:00', 1, 1, 1),
(311, 2, 10, 2, '2021-04-09 17:30:00', '2021-04-09 20:00:00', '2021-04-09 00:00:00', 1, 1, 1),
(312, 2, 10, 2, '2021-04-10 17:00:00', '2021-04-10 22:00:00', '2021-04-10 00:00:00', 1, 1, 1),
(313, 2, 10, 2, '2021-04-11 17:00:00', '2021-04-11 21:00:00', '2021-04-11 00:00:00', 1, 1, 1),
(314, 2, 11, 1, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(315, 2, 11, 2, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(316, 2, 11, 2, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(317, 2, 11, 1, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(318, 2, 11, 1, '2021-04-05 10:00:00', '2021-04-05 15:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(319, 2, 11, 1, '2021-04-06 10:00:00', '2021-04-06 15:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(320, 2, 11, 1, '2021-04-07 10:00:00', '2021-04-07 15:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(321, 2, 11, 1, '2021-04-08 10:00:00', '2021-04-08 15:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(322, 2, 11, 1, '2021-04-11 10:00:00', '2021-04-11 15:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(323, 2, 11, 2, '2021-04-05 17:00:00', '2021-04-05 20:15:00', '2021-04-05 00:00:00', 0, 1, 1),
(324, 2, 11, 2, '2021-04-06 17:00:00', '2021-04-06 20:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(325, 2, 11, 2, '2021-04-07 18:00:00', '2021-04-07 21:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(326, 2, 11, 2, '2021-04-08 18:00:00', '2021-04-08 21:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(327, 2, 11, 2, '2021-04-11 18:00:00', '2021-04-11 21:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(328, 2, 12, 1, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(329, 2, 12, 2, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(330, 2, 12, 1, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(331, 2, 12, 2, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(332, 2, 12, 1, '2021-04-05 11:00:00', '2021-04-05 15:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(333, 2, 12, 1, '2021-04-06 11:00:00', '2021-04-06 15:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(334, 2, 12, 1, '2021-04-07 11:00:00', '2021-04-07 15:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(335, 2, 12, 1, '2021-04-08 11:00:00', '2021-04-08 15:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(336, 2, 12, 1, '2021-04-09 11:00:00', '2021-04-09 15:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(337, 2, 12, 2, '2021-04-05 17:00:00', '2021-04-05 21:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(338, 2, 12, 2, '2021-04-06 17:00:00', '2021-04-06 21:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(339, 2, 12, 2, '2021-04-07 17:00:00', '2021-04-07 21:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(340, 2, 12, 2, '2021-04-08 17:30:00', '2021-04-08 21:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(341, 2, 12, 2, '2021-04-09 17:30:00', '2021-04-09 22:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(342, 2, 13, 1, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(343, 2, 13, 2, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(344, 2, 13, 1, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(345, 2, 13, 2, NULL, NULL, '2021-04-05 00:00:00', 0, 1, 0),
(346, 2, 13, 1, '2021-04-06 10:00:00', '2021-04-06 15:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(347, 2, 13, 1, '2021-04-07 11:00:00', '2021-04-07 15:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(348, 2, 13, 1, '2021-04-08 11:00:00', '2021-04-08 16:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(349, 2, 13, 1, '2021-04-09 11:00:00', '2021-04-09 15:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(350, 2, 13, 1, '2021-04-11 10:00:00', '2021-04-11 15:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(351, 2, 13, 2, '2021-04-06 17:00:00', '2021-04-06 21:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(352, 2, 13, 2, '2021-04-07 16:00:00', '2021-04-07 21:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(353, 2, 13, 2, '2021-04-08 17:00:00', '2021-04-08 20:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(354, 2, 13, 2, '2021-04-09 17:00:00', '2021-04-09 21:00:00', '2021-04-09 00:00:00', 0, 1, 1),
(355, 2, 13, 2, '2021-04-11 17:00:00', '2021-04-11 21:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(356, 3, 4, 1, '2021-04-05 10:00:00', '2021-04-05 15:00:00', '2021-04-05 00:00:00', 1, 1, 1),
(357, 3, 4, 2, '2021-04-05 17:00:00', '2021-04-05 21:00:00', '2021-04-05 00:00:00', 1, 1, 1),
(358, 3, 4, 1, '2021-04-06 10:00:00', '2021-04-06 15:00:00', '2021-04-06 00:00:00', 1, 1, 1),
(359, 3, 4, 2, '2021-04-06 17:00:00', '2021-04-06 21:00:00', '2021-04-06 00:00:00', 1, 1, 1),
(360, 3, 4, 1, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(361, 3, 4, 2, NULL, NULL, '2021-04-11 00:00:00', 0, 1, 0),
(362, 3, 4, 1, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(363, 3, 4, 2, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(364, 3, 4, 1, '2021-04-07 10:00:00', '2021-04-07 15:00:00', '2021-04-07 00:00:00', 1, 1, 1),
(365, 3, 4, 1, '2021-04-08 10:00:00', '2021-04-08 15:00:00', '2021-04-08 00:00:00', 1, 1, 1),
(366, 3, 4, 1, '2021-04-09 11:00:00', '2021-04-09 14:30:00', '2021-04-09 00:00:00', 1, 1, 1),
(367, 3, 4, 2, '2021-04-07 17:00:00', '2021-04-07 22:00:00', '2021-04-07 00:00:00', 1, 1, 1),
(368, 3, 4, 2, '2021-04-08 17:00:00', '2021-04-08 21:00:00', '2021-04-08 00:00:00', 1, 1, 1),
(369, 3, 4, 2, '2021-04-09 17:00:00', '2021-04-09 21:00:00', '2021-04-09 00:00:00', 1, 1, 1),
(370, 3, 6, 1, '2021-04-06 11:00:00', '2021-04-06 16:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(371, 3, 6, 2, '2021-04-06 17:00:00', '2021-04-06 21:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(372, 3, 6, 1, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(373, 3, 6, 2, NULL, NULL, '2021-04-10 00:00:00', 0, 1, 0),
(374, 3, 6, 2, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(375, 3, 6, 1, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(376, 3, 6, 1, '2021-04-05 10:00:00', '2021-04-05 15:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(377, 3, 6, 1, '2021-04-07 09:00:00', '2021-04-07 13:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(378, 3, 6, 1, '2021-04-08 10:00:00', '2021-04-08 15:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(379, 3, 6, 1, '2021-04-11 10:30:00', '2021-04-11 15:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(380, 3, 6, 2, '2021-04-05 17:00:00', '2021-04-05 22:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(381, 3, 6, 2, '2021-04-07 17:00:00', '2021-04-07 21:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(382, 3, 6, 2, '2021-04-08 17:00:00', '2021-04-08 20:00:00', '2021-04-08 00:00:00', 0, 1, 1),
(383, 3, 6, 2, '2021-04-11 17:00:00', '2021-04-11 20:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(384, 3, 7, 1, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(385, 3, 7, 2, NULL, NULL, '2021-04-09 00:00:00', 0, 1, 0),
(386, 3, 7, 2, NULL, NULL, '2021-04-08 00:00:00', 0, 1, 0),
(387, 3, 7, 1, NULL, NULL, '2021-04-08 00:00:00', 0, 1, 0),
(388, 3, 7, 1, '2021-04-05 10:00:00', '2021-04-05 15:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(389, 3, 7, 1, '2021-04-06 11:00:00', '2021-04-06 15:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(390, 3, 7, 1, '2021-04-07 11:00:00', '2021-04-07 16:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(391, 3, 7, 1, '2021-04-10 10:00:00', '2021-04-10 15:00:00', '2021-04-10 00:00:00', 0, 1, 1),
(392, 3, 7, 1, '2021-04-11 10:00:00', '2021-04-11 15:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(393, 3, 7, 2, '2021-04-05 17:00:00', '2021-04-05 21:00:00', '2021-04-05 00:00:00', 0, 1, 1),
(394, 3, 7, 2, '2021-04-06 17:00:00', '2021-04-06 21:00:00', '2021-04-06 00:00:00', 0, 1, 1),
(395, 3, 7, 2, '2021-04-07 17:30:00', '2021-04-07 20:00:00', '2021-04-07 00:00:00', 0, 1, 1),
(396, 3, 7, 2, '2021-04-10 17:00:00', '2021-04-10 20:00:00', '2021-04-10 00:00:00', 0, 1, 1),
(397, 3, 7, 2, '2021-04-11 17:00:00', '2021-04-11 21:00:00', '2021-04-11 00:00:00', 0, 1, 1),
(398, 3, 8, 1, NULL, NULL, '2021-04-08 00:00:00', 0, 1, 0),
(399, 3, 8, 2, NULL, NULL, '2021-04-08 00:00:00', 0, 1, 0),
(400, 3, 8, 2, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(401, 3, 8, 1, NULL, NULL, '2021-04-07 00:00:00', 0, 1, 0),
(402, 3, 8, 1, '2021-04-05 10:00:00', '2021-04-05 15:00:00', '2021-04-05 00:00:00', 1, 1, 1),
(403, 3, 8, 1, '2021-04-06 10:00:00', '2021-04-06 14:00:00', '2021-04-06 00:00:00', 1, 1, 1),
(404, 3, 8, 1, '2021-04-09 10:00:00', '2021-04-09 15:00:00', '2021-04-09 00:00:00', 1, 1, 1),
(405, 3, 8, 1, '2021-04-10 11:00:00', '2021-04-10 16:00:00', '2021-04-10 00:00:00', 1, 1, 1),
(406, 3, 8, 1, '2021-04-11 10:00:00', '2021-04-11 17:00:00', '2021-04-11 00:00:00', 1, 1, 1),
(407, 3, 8, 2, '2021-04-05 17:00:00', '2021-04-05 21:00:00', '2021-04-05 00:00:00', 1, 1, 1),
(408, 3, 8, 2, '2021-04-06 17:00:00', '2021-04-06 22:00:00', '2021-04-06 00:00:00', 1, 1, 1),
(409, 3, 8, 2, '2021-04-09 17:00:00', '2021-04-09 20:00:00', '2021-04-09 00:00:00', 1, 1, 1),
(410, 3, 8, 2, '2021-04-10 17:00:00', '2021-04-10 21:00:00', '2021-04-10 00:00:00', 1, 1, 1),
(411, 3, 8, 2, '2021-04-11 17:00:00', '2021-04-11 22:00:00', '2021-04-11 00:00:00', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shift_type`
--

CREATE TABLE `shift_type` (
  `id` int NOT NULL,
  `shift_type` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `shift_type`
--

INSERT INTO `shift_type` (`id`, `shift_type`) VALUES
(1, 'morning'),
(2, 'evening');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Workers`
--

CREATE TABLE `Workers` (
  `id` int NOT NULL,
  `worker_name` varchar(32) NOT NULL,
  `worker_surname` varchar(32) NOT NULL,
  `email` varchar(180) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone_number` int NOT NULL,
  `dni` varchar(16) NOT NULL,
  `branch_id` int DEFAULT NULL,
  `job_id` int DEFAULT NULL,
  `roles` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Workers`
--

INSERT INTO `Workers` (`id`, `worker_name`, `worker_surname`, `email`, `password`, `phone_number`, `dni`, `branch_id`, `job_id`, `roles`) VALUES
(2, 'antonio ', 'Machado', 'machado@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 555444333, '12903290Q', 1, 2, 'null'),
(3, 'DA BOSS', 'OF BOSSES', 'daboss@bossy.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 666666666, '10111001A', 1, 8, '[\"ROLE_ADMIN\", \"ROLE_MANAGER\"]'),
(4, 'antonio', 'mendiguren', 'amendiguren@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 666666655, '34231256P', 3, 2, 'null'),
(5, 'ana', 'villanueva', 'anitadinamita@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 665578765, '23455667A', 1, 2, 'null'),
(6, 'Raquel', 'sicsu', 'raquesicsu@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 654321345, '23322332P', 3, 8, '[\"ROLE_MANAGER\"]'),
(7, 'Belen', 'sicsu', 'belsicsu@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 678987654, '44556677Q', 3, 2, 'null'),
(8, 'juan', 'alarcon', 'jcon@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 666555444, '44223311O', 3, 2, 'null'),
(9, 'rocio', 'suarez', 'rosuarez@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 667788996, '41357864R', 2, 2, 'null'),
(10, 'Pedro', 'picapiedra', 'pedrero@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 612213234, '49897969L', 2, 2, 'null'),
(11, 'laura', 'padilla', 'lapadi@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 655577764, '43536373R', 2, 2, 'null'),
(12, 'andrea', 'vale rama', 'andrerama@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 657675749, '46763585Z', 2, 2, 'null'),
(13, 'alejandro', 'magno', 'alemagno@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 677883242, '42519765F', 2, 8, '[\"ROLE_MANAGER\"]'),
(14, 'eladio', 'montero', 'elamont@hotmail.com', '$argon2id$v=19$m=65536,t=4,p=1$CMpLe0ijZ+hbEYWP4NKATg$UZO3KkZN8schUm9Pgz17fpSvX0Xcfii1vYeYEu4nC9Y', 644789123, '46712113L', 1, 2, 'null');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Branch`
--
ALTER TABLE `Branch`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indices de la tabla `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_659DF2AA894240FA` (`chat_type_id`);

--
-- Indices de la tabla `chat_type`
--
ALTER TABLE `chat_type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `chat_user`
--
ALTER TABLE `chat_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2B0F4B086B20BA36` (`worker_id`),
  ADD KEY `IDX_2B0F4B081A9A7125` (`chat_id`);

--
-- Indices de la tabla `Company`
--
ALTER TABLE `Company`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indices de la tabla `Job`
--
ALTER TABLE `Job`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B6BD307F1A9A7125` (`chat_id`),
  ADD KEY `IDX_B6BD307F6B20BA36` (`worker_id`);

--
-- Indices de la tabla `Rating`
--
ALTER TABLE `Rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `from_user` (`from_user`),
  ADD KEY `to_user` (`to_user`);

--
-- Indices de la tabla `Shift`
--
ALTER TABLE `Shift`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_id` (`branch_id`),
  ADD KEY `shift_type_id` (`shift_type_id`),
  ADD KEY `worker_id` (`worker_id`);

--
-- Indices de la tabla `shift_type`
--
ALTER TABLE `shift_type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Workers`
--
ALTER TABLE `Workers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_7790445CE7927C74` (`email`),
  ADD KEY `branch_id` (`branch_id`),
  ADD KEY `role_id` (`job_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Branch`
--
ALTER TABLE `Branch`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chat_type`
--
ALTER TABLE `chat_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chat_user`
--
ALTER TABLE `chat_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Company`
--
ALTER TABLE `Company`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Job`
--
ALTER TABLE `Job`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `message`
--
ALTER TABLE `message`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Rating`
--
ALTER TABLE `Rating`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Shift`
--
ALTER TABLE `Shift`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=412;

--
-- AUTO_INCREMENT de la tabla `shift_type`
--
ALTER TABLE `shift_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `Workers`
--
ALTER TABLE `Workers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Branch`
--
ALTER TABLE `Branch`
  ADD CONSTRAINT `FK_BC2A1E29979B1AD6` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`);

--
-- Filtros para la tabla `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `FK_659DF2AA894240FA` FOREIGN KEY (`chat_type_id`) REFERENCES `chat_type` (`id`);

--
-- Filtros para la tabla `chat_user`
--
ALTER TABLE `chat_user`
  ADD CONSTRAINT `FK_2B0F4B081A9A7125` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`id`),
  ADD CONSTRAINT `FK_2B0F4B086B20BA36` FOREIGN KEY (`worker_id`) REFERENCES `Workers` (`id`);

--
-- Filtros para la tabla `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `FK_B6BD307F1A9A7125` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`id`),
  ADD CONSTRAINT `FK_B6BD307F6B20BA36` FOREIGN KEY (`worker_id`) REFERENCES `Workers` (`id`);

--
-- Filtros para la tabla `Rating`
--
ALTER TABLE `Rating`
  ADD CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`from_user`) REFERENCES `Workers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Rating_ibfk_2` FOREIGN KEY (`to_user`) REFERENCES `Workers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `Shift`
--
ALTER TABLE `Shift`
  ADD CONSTRAINT `FK_64CA14416B20BA36` FOREIGN KEY (`worker_id`) REFERENCES `Workers` (`id`),
  ADD CONSTRAINT `FK_64CA1441DCD6CC49` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`),
  ADD CONSTRAINT `Shift_ibfk_3` FOREIGN KEY (`shift_type_id`) REFERENCES `shift_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `Workers`
--
ALTER TABLE `Workers`
  ADD CONSTRAINT `FK_7790445CDCD6CC49` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`),
  ADD CONSTRAINT `Workers_ibfk_2` FOREIGN KEY (`job_id`) REFERENCES `Job` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
