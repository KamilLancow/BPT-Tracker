-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2021 at 04:09 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bpt_tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `energylog`
--

CREATE TABLE `energylog` (
  `id` int(4) NOT NULL,
  `user_id` int(2) NOT NULL,
  `day` date NOT NULL,
  `hour` time NOT NULL,
  `energy_level` int(2) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `energylog`
--

INSERT INTO `energylog` (`id`, `user_id`, `day`, `hour`, `energy_level`) VALUES
(1, 1, '2021-03-19', '01:00:00', 0),
(2, 1, '2021-03-19', '02:00:00', 0),
(3, 1, '2021-03-19', '03:00:00', 0),
(4, 1, '2021-03-19', '04:00:00', 0),
(5, 1, '2021-03-19', '05:00:00', 0),
(6, 1, '2021-03-19', '06:00:00', 0),
(7, 1, '2021-03-19', '07:00:00', 5),
(8, 1, '2021-03-19', '08:00:00', 7),
(9, 1, '2021-03-19', '09:00:00', 8),
(10, 1, '2021-03-19', '10:00:00', 8),
(11, 1, '2021-03-19', '11:00:00', 8),
(12, 1, '2021-03-19', '12:00:00', 8),
(13, 1, '2021-03-19', '13:00:00', 8),
(14, 1, '2021-03-19', '14:00:00', 7),
(15, 1, '2021-03-19', '15:00:00', 7),
(16, 1, '2021-03-19', '16:00:00', 8),
(17, 1, '2021-03-19', '17:00:00', 8),
(18, 1, '2021-03-19', '18:00:00', 7),
(19, 1, '2021-03-19', '19:00:00', 8),
(20, 1, '2021-03-19', '20:00:00', 8),
(21, 1, '2021-03-19', '21:00:00', 7),
(22, 1, '2021-03-19', '22:00:00', 0),
(23, 1, '2021-03-19', '23:00:00', 0),
(24, 1, '2021-03-19', '24:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `timelog`
--

CREATE TABLE `timelog` (
  `id` int(4) NOT NULL,
  `user_id` int(2) NOT NULL,
  `day` date NOT NULL,
  `hour` time NOT NULL,
  `activity` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin,
  `is_productive` tinyint(1) DEFAULT '0',
  `procastination_time` int(3) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timelog`
--

INSERT INTO `timelog` (`id`, `user_id`, `day`, `hour`, `activity`, `is_productive`, `procastination_time`) VALUES
(1, 1, '2021-03-19', '01:00:00', 'wakeup', 0, 0),
(2, 1, '2021-03-19', '02:00:00', 'breakfast', 0, 0),
(3, 1, '2021-03-19', '03:00:00', '', 0, 30),
(4, 1, '2021-03-19', '04:00:00', 'fire + morning routine 10 min', 0, 0),
(5, 1, '2021-03-19', '05:00:00', 'morning routine', 1, 0),
(6, 1, '2021-03-19', '06:00:00', 'study uni', 1, 0),
(7, 1, '2021-03-19', '07:00:00', 'study uni', 1, 0),
(8, 1, '2021-03-19', '08:00:00', 'home stuff + chillsnack', 0, 0),
(9, 1, '2021-03-19', '09:00:00', '', 0, 60),
(10, 1, '2021-03-19', '10:00:00', 'study uni', 1, 0),
(11, 1, '2021-03-19', '11:00:00', 'study uni', 1, 0),
(12, 1, '2021-03-19', '12:00:00', 'study uni', 1, 0),
(13, 1, '2021-03-19', '13:00:00', 'working on angular project', 1, 0),
(14, 1, '2021-03-19', '14:00:00', 'working on project', 1, 0),
(15, 1, '2021-03-19', '15:00:00', 'working on angular project', 1, 0),
(16, 1, '2021-03-19', '16:00:00', 'working on angular project', 1, 0),
(17, 1, '2021-03-19', '17:00:00', 'chill', 0, 33),
(18, 1, '2021-03-19', '18:00:00', 'dinner & chill', 0, 0),
(19, 1, '2021-03-19', '19:00:00', 'working on angular project', 1, 15),
(20, 1, '2021-03-19', '20:00:00', 'working on angular project', 1, 0),
(21, 1, '2021-03-19', '21:00:00', 'reading book', 1, 0),
(22, 1, '2021-03-19', '22:00:00', '', 0, 0),
(23, 1, '2021-03-19', '23:00:00', '', 0, 0),
(24, 1, '2021-03-19', '24:00:00', '', 0, 0);




-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(2) NOT NULL,
  `name` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `surname` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`) VALUES
(1, 'Kamil', 'Łańcow', 'email@domain.xyz', 'password');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `energylog`
--
ALTER TABLE `energylog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `has_energy_log` (`user_id`);

--
-- Indexes for table `timelog`
--
ALTER TABLE `timelog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `has_time_log` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `energylog`
--
ALTER TABLE `energylog`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `timelog`
--
ALTER TABLE `timelog`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `energylog`
--
ALTER TABLE `energylog`
  ADD CONSTRAINT `has_energy_log` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `timelog`
--
ALTER TABLE `timelog`
  ADD CONSTRAINT `has_time_log` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
