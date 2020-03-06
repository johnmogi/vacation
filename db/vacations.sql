-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 06, 2020 at 04:13 PM
-- Server version: 10.3.20-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tourist`
--

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationName` varchar(50) NOT NULL,
  `vacationID` int(10) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `destination` varchar(80) NOT NULL,
  `picFileName` varchar(40) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` decimal(65,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationName`, `vacationID`, `description`, `destination`, `picFileName`, `startDate`, `endDate`, `price`) VALUES
('Zanzibar Delights', 1, 'Located in Stone Town within a short walk of Shangani Beach, Garden Lodge is within a few miles (5 km) of other popular sights such as Nakupenda Beach. This 18-room hotel has free breakfast along with conveniences like free in-room WiFi and a rooftop terrace. ', 'zanzibar', 'gardenlodge.jpg', '2020-04-15', '2020-04-29', '1600'),
('zanziland', 2, 'Located in Stone Town within a short walk of Shangani Beach, Garden Lodge is within a few miles (5 km) of other popular sights such as Nakupenda Beach. This 18-room hotel has free breakfast along with conveniences like free in-room WiFi and a rooftop terrace. ', 'zanzibar', 'gardenlodge.jpg', '2020-04-15', '2020-04-29', '1579'),
('madagaskar height', 4, 'bug gig me up', 'Madagaskar', 'mdgskr.jpg', '2020-03-18', '2020-03-25', '1900');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacationID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
