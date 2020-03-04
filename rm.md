<!-- INSERT INTO `vacations` (`vacationID`, `description`, `destination`, `picFileName`, `startDate`, `endDate`, `price`) VALUES (NULL, 'Located in Stone Town within a short walk of Shangani Beach, Garden Lodge is within a few miles (5 km) of other popular sights such as Nakupenda Beach. This 18-room hotel has free breakfast along with conveniences like free in-room WiFi and a rooftop terrace. ', 'zanzibar', 'gardenlodge.jpg', '2020-04-15', '2020-04-29', '1579'); "description": "bug gig me up", "destination": "Madagaskar", "picFileName": "mdgskr.jpg", "startDate": "2020-03-18", "endDate": "2020-03-25", "price": "1900" -->

 // admin<br>
INSERT INTO `users` (userID, firstName, lastName, userName, password, isAdmin) VALUES (NULL, 'pill', 'blue', 'bobby5', '123456', '1');

connecting 2 FK tables:<br>
INSERT INTO `followers` (`userID`, `vacationID`) VALUES ('1', '1'); <!-- קשר יחיד רבים בתצוגה מרובת איברים בריאקט

עמוד ראשי קורא לילדים. כל ילד מכיל קריאה בפרופס לכל המידע

עמוד ילד קורא למידע של הילד עצמו -->

DELETE FROM `vacations` WHERE `vacations`.`vacationID` = 5
