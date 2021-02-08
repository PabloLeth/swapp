-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 08-02-2021 a las 13:11:46
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
-- Base de datos: `swapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Branch`
--

CREATE TABLE `Branch` (
  `branch_id` int NOT NULL,
  `branch_name` varchar(32) NOT NULL,
  `address` varchar(64) NOT NULL,
  `phone_number` int NOT NULL,
  `email` varchar(32) NOT NULL,
  `company_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Company`
--

CREATE TABLE `Company` (
  `company_id` int NOT NULL,
  `email` varchar(32) NOT NULL,
  `phone_number` int NOT NULL,
  `company_name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Company`
--

INSERT INTO `Company` (`company_id`, `email`, `phone_number`, `company_name`) VALUES
(1, 'Swapp@swapp.es', 655954535, 'Swapp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Day`
--

CREATE TABLE `Day` (
  `day_id` int NOT NULL,
  `day_name` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Day`
--

INSERT INTO `Day` (`day_id`, `day_name`) VALUES
(1, 'Monday'),
(2, 'Tuesday'),
(3, 'Wednesday'),
(4, 'Thursday'),
(5, 'Friday'),
(6, 'Saturday'),
(7, 'Sunday');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Login`
--

CREATE TABLE `Login` (
  `login_id` int NOT NULL,
  `worker_dni` varchar(16) NOT NULL,
  `password` varchar(32) NOT NULL DEFAULT 'example',
  `worker_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Role`
--

CREATE TABLE `Role` (
  `role_id` int NOT NULL,
  `role_name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Role`
--

INSERT INTO `Role` (`role_id`, `role_name`) VALUES
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
-- Estructura de tabla para la tabla `Shift`
--

CREATE TABLE `Shift` (
  `shift_id` int NOT NULL,
  `week_id` int NOT NULL,
  `day_id` int NOT NULL,
  `branch_id` int NOT NULL,
  `worker_id` int NOT NULL,
  `shift_type_id` int NOT NULL,
  `start_shift` int NOT NULL,
  `end_shift` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shift_type`
--

CREATE TABLE `shift_type` (
  `shift_type_id` int NOT NULL,
  `shift_type` varchar(16) NOT NULL,
  `swappable` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `shift_type`
--

INSERT INTO `shift_type` (`shift_type_id`, `shift_type`, `swappable`) VALUES
(1, 'morning', 1),
(2, 'evening', 1),
(3, 'OFF', 1),
(4, 'ON HOLD', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Week`
--

CREATE TABLE `Week` (
  `week_id` int NOT NULL,
  `week_name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Workers`
--

CREATE TABLE `Workers` (
  `worker_id` int NOT NULL,
  `worker_name` varchar(32) NOT NULL,
  `worker_surname` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `phone_number` int NOT NULL,
  `dni` varchar(16) NOT NULL,
  `branch_id` int NOT NULL,
  `role_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Branch`
--
ALTER TABLE `Branch`
  ADD PRIMARY KEY (`branch_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indices de la tabla `Company`
--
ALTER TABLE `Company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indices de la tabla `Day`
--
ALTER TABLE `Day`
  ADD PRIMARY KEY (`day_id`);

--
-- Indices de la tabla `Login`
--
ALTER TABLE `Login`
  ADD PRIMARY KEY (`login_id`),
  ADD KEY `worker_id` (`worker_id`);

--
-- Indices de la tabla `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indices de la tabla `Shift`
--
ALTER TABLE `Shift`
  ADD PRIMARY KEY (`shift_id`),
  ADD KEY `branch_id` (`branch_id`),
  ADD KEY `day_id` (`day_id`),
  ADD KEY `shift_type_id` (`shift_type_id`),
  ADD KEY `week_id` (`week_id`),
  ADD KEY `worker_id` (`worker_id`);

--
-- Indices de la tabla `shift_type`
--
ALTER TABLE `shift_type`
  ADD PRIMARY KEY (`shift_type_id`);

--
-- Indices de la tabla `Week`
--
ALTER TABLE `Week`
  ADD PRIMARY KEY (`week_id`);

--
-- Indices de la tabla `Workers`
--
ALTER TABLE `Workers`
  ADD PRIMARY KEY (`worker_id`),
  ADD KEY `branch_id` (`branch_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Branch`
--
ALTER TABLE `Branch`
  MODIFY `branch_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Company`
--
ALTER TABLE `Company`
  MODIFY `company_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Day`
--
ALTER TABLE `Day`
  MODIFY `day_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `Login`
--
ALTER TABLE `Login`
  MODIFY `login_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Role`
--
ALTER TABLE `Role`
  MODIFY `role_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `Shift`
--
ALTER TABLE `Shift`
  MODIFY `shift_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `shift_type`
--
ALTER TABLE `shift_type`
  MODIFY `shift_type_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `Week`
--
ALTER TABLE `Week`
  MODIFY `week_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Workers`
--
ALTER TABLE `Workers`
  MODIFY `worker_id` int NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Branch`
--
ALTER TABLE `Branch`
  ADD CONSTRAINT `Branch_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `Company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Login`
--
ALTER TABLE `Login`
  ADD CONSTRAINT `Login_ibfk_1` FOREIGN KEY (`worker_id`) REFERENCES `Workers` (`worker_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Shift`
--
ALTER TABLE `Shift`
  ADD CONSTRAINT `Shift_ibfk_1` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`branch_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Shift_ibfk_2` FOREIGN KEY (`day_id`) REFERENCES `Day` (`day_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Shift_ibfk_3` FOREIGN KEY (`shift_type_id`) REFERENCES `shift_type` (`shift_type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Shift_ibfk_4` FOREIGN KEY (`week_id`) REFERENCES `Week` (`week_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Shift_ibfk_5` FOREIGN KEY (`worker_id`) REFERENCES `Workers` (`worker_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Workers`
--
ALTER TABLE `Workers`
  ADD CONSTRAINT `Workers_ibfk_1` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`branch_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Workers_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `Role` (`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
