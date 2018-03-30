CREATE TABLE "listings" (
	"id" serial primary key,
    "cost" integer,
	"sqft" integer,
    "type" varchar(80) not null,
	"city" varchar(120) not null
);

INSERT INTO "listings" ("cost", "sqft", "type", "city")
VALUES (123000, 1500, 'sale', 'Forest Lake'),
(90000, 1200, 'sale', 'Blaine'),
(127500, 1600, 'sale', 'Oakdale'),
(126100, 1350, 'sale', 'Rochester'),
(105300, 900, 'sale', 'Zimmerman'),
(135300, 1800, 'sale', 'Hopkins'),
(51000, 500, 'sale', 'Grand Rapids'),
(49500, 900, 'sale', 'Fergus Falls'),
(159600, 1900, 'sale', 'Lake City'),
(96300, 800, 'sale', 'Hibbing'),
(139400, 1700, 'sale', 'Savage'),
(248400, 2300, 'sale', 'Oakdale'),
(148200, 1300, 'sale', 'Minneapolis'),
(170100, 2100, 'sale', 'New Brighton'),
(63600, 1200, 'sale', 'Plymouth'),
(700, 400, 'rent', 'Victoria'),
(500, 900, 'rent', 'Waconia'),
(800, 1100, 'rent', 'Falcon Heights'),
(600, 850, 'rent', 'Lake City'),
(1200, 800, 'rent', 'Champlin'),
(1050, 1300, 'rent', 'Mound'),
(800, 1150, 'rent', 'Dayton'),
(750, 1300, 'rent', 'Anoka'),
(850, 1320, 'rent', 'Maplewood'),
(1100, 1200, 'rent', 'Savage'),
(950, 1200, 'rent', 'Robbinsdale'),
(700, 650, 'rent', 'Marshall');