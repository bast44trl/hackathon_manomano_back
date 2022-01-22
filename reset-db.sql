-- CREATE DATABASE wild_hackathon_mano_mano;
-- USE wild_hackathon_mano_mano;

DROP TABLE IF EXISTS lists_products;
DROP TABLE IF EXISTS users_products;
DROP TABLE IF EXISTS lists;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;

INSERT INTO `users` (`id_user`, `email`, `password`) VALUES 
(1, "Toto", "Toto");


-- -----------------------------------------------------
-- Table `products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  `price` float NOT NULL,
  `review` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_product`))
ENGINE = InnoDB;

INSERT INTO `products` (`id_product`, `title`, `picture`, `price`, `review`) VALUES 
(1, "PawHut Pet Travel Stroller Cat Dog Pushchair Trolley Puppy Jogger Carrier Three Wheels", "poussetteImg.jpg", 174, "photo review1"),
(2, "Ladder Shelf Industrial Pipe Wall Shelf Display Rack Plant Stand Bookcase", "etagereImg.jpg", 40, "photo review1"),
(3, "HP457DWE10 18v Combi Drill Li-ion with 2 Batteries", "perceuseImg.jpg", 250, "photo review1"),
(4, "Hudson Reed Delta – Radiateur Design Électrique Horizontal  – 63.5 x 84 x 4.6cm 800 Watts", "radiateurImg.jpg", 400, "photo review1"),
(5, "Aluminum Electric Chainsaw Garden Tools Double Brake Cover Case Blade Corded 40 cm", "tronconneuseImg.jpg", 600, "photo review1"),
(6, "Atlantic Bed Frame in White, size Small Double", "litDoubleImg.jpg", 84, "photo review1"),
(7, "Drawer Chest of Drawers Bedroom Storage Furniture", "drawerImg.jpg", 89, "photo review1"),
(8, "Floor Lamp Modern Standing 3-in-1 Shelf LED Lamp with Storage Black", "lampImg.jpg", 45, "photo review1"),
(9, "Woodford Wooden Bed Frame Grey & Pine - Single", "litSimpleImg.jpg", 79, "photo review1"),
(10, "Mobile TV Stand on Wheels Rolling", "tvImg.jpg", 55, "photo review1");


-- -----------------------------------------------------
-- Table `lists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lists` (
  `id_list` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_list`),
    FOREIGN KEY (`id_user`)
    REFERENCES `users` (`id_user`))
ENGINE = InnoDB;


INSERT INTO `lists` (`id_list`, `id_user`, `name`) VALUES 
(1, 1, "House"),
(2, 1, "Tools");


-- -----------------------------------------------------
-- Table `lists_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lists_products` (
  `id_list` INT NOT NULL,
  `id_product` INT NOT NULL,
    FOREIGN KEY (`id_list`)
    REFERENCES `lists` (`id_list`),
    FOREIGN KEY (`id_product`)
    REFERENCES `products` (`id_product`))
ENGINE = InnoDB;


INSERT INTO `lists_products` (`id_list`, `id_product`) VALUES 
(1, 2),
(1, 7),
(2, 3);

-- -----------------------------------------------------
-- Table `users_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_products` (
  `id_user` INT NOT NULL,
  `id_product` INT NOT NULL,
    FOREIGN KEY (`id_user`)
    REFERENCES `users` (`id_user`),
    FOREIGN KEY (`id_product`)
    REFERENCES `products` (`id_product`))
ENGINE = InnoDB;


INSERT INTO `users_products` (`id_user`, `id_product`) VALUES 
(1, 1),
(1, 3),
(1, 5);