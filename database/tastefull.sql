-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-04-2019 a las 14:38:14
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tastefull`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `INGREDIENTS`
--

CREATE TABLE `INGREDIENTS` (
  `ID` int(11) NOT NULL,
  `INGREDIENT` int(11) NOT NULL,
  `RECIPE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RECIPE`
--

CREATE TABLE `RECIPE` (
  `ID` int(11) NOT NULL,
  `TITLE` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `HOURS` int(2) NOT NULL,
  `MINUTES` int(2) NOT NULL,
  `INTRODUCTION` varchar(1000) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `IMAGE` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `USER_ID` varchar(26) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `STEP`
--

CREATE TABLE `STEP` (
  `ID` int(11) NOT NULL,
  `TITLE` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `DESCRIPTION` varchar(1000) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `ID_RECIPE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `USERS`
--

CREATE TABLE `USERS` (
  `ID` varchar(26) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `NICKNAME` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `PASSWORD` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `EMAIL` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `INGREDIENTS`
--
ALTER TABLE `INGREDIENTS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `INGREDIENT_RECIPE` (`RECIPE_ID`);

--
-- Indices de la tabla `RECIPE`
--
ALTER TABLE `RECIPE`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USER_RECIPE` (`USER_ID`);

--
-- Indices de la tabla `STEP`
--
ALTER TABLE `STEP`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `RECIPE_STEP` (`ID_RECIPE`);

--
-- Indices de la tabla `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `INGREDIENTS`
--
ALTER TABLE `INGREDIENTS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `RECIPE`
--
ALTER TABLE `RECIPE`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `STEP`
--
ALTER TABLE `STEP`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `INGREDIENTS`
--
ALTER TABLE `INGREDIENTS`
  ADD CONSTRAINT `INGREDIENT_RECIPE` FOREIGN KEY (`RECIPE_ID`) REFERENCES `RECIPE` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `RECIPE`
--
ALTER TABLE `RECIPE`
  ADD CONSTRAINT `USER_RECIPE` FOREIGN KEY (`USER_ID`) REFERENCES `USERS` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `STEP`
--
ALTER TABLE `STEP`
  ADD CONSTRAINT `RECIPE_STEP` FOREIGN KEY (`ID_RECIPE`) REFERENCES `RECIPE` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
