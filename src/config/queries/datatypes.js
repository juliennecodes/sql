import {createSqlExampleConfig} from "../../helpers";

const createTableWithVarietyDatatypesQuery = `CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number CHAR(10),
    hire_date DATE NOT NULL,
    birth_date DATE,
    start_time TIME,
    salary DECIMAL(10, 2),
    is_active TINYINT(1) DEFAULT 1,
    department_id INT,
    profile JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);`

export const varietyDatatypes = createSqlExampleConfig(
    'Create table with variety of datatypes',
    createTableWithVarietyDatatypesQuery
);

export const createProductsTableQuery = `CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    product_code CHAR(10) CHARACTER SET ascii COLLATE ascii_bin,
    description TEXT,
    short_description TINYTEXT,
    detailed_description MEDIUMTEXT,
    additional_info LONGTEXT,
    category ENUM('Electronics', 'Clothing', 'Books', 'Furniture', 'Cosmetics'),
    price DECIMAL(10, 2) UNSIGNED,
    discount FLOAT,
    weight DOUBLE,
    stock_quantity MEDIUMINT UNSIGNED,
    min_order_quantity TINYINT UNSIGNED,
    max_order_quantity SMALLINT UNSIGNED,
    total_sold BIGINT UNSIGNED,
    in_production TINYINT(1) UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    release_date DATE,
    last_order_date DATETIME,
    manufacture_year YEAR,
    product_image BLOB,
    thumbnail_image TINYBLOB,
    manual MEDIUMBLOB,
    video LONGBLOB,
    tags JSON
);
`;

export const seedDataForProductsTableQuery = `INSERT INTO products (
    product_name, product_code, description, short_description, detailed_description, additional_info, category, price, discount, weight, stock_quantity, min_order_quantity, max_order_quantity, total_sold, in_production, release_date, last_order_date, manufacture_year, product_image, thumbnail_image, manual, video, tags
) VALUES
      ('Smartphone', 'SP12345678', 'A high-end smartphone with a sleek design.', 'High-end smartphone', 'This smartphone features a 6.5-inch display, 128GB storage, and a powerful processor.', 'Includes charger, earphones, and user manual.', 'Electronics', 699.99, 10.0, 0.5, 1000, 1, 5, 500, 1, '2023-09-15', '2023-09-20 14:30:00', 2023, LOAD_FILE('/path/to/product_image.jpg'), LOAD_FILE('/path/to/thumbnail_image.jpg'), LOAD_FILE('/path/to/manual.pdf'), LOAD_FILE('/path/to/video.mp4'), JSON_ARRAY('smartphone', 'electronics', 'mobile')),
      ('Laptop', 'LP98765432', 'A powerful laptop for professionals.', 'Professional laptop', 'This laptop features a 15.6-inch display, 256GB SSD, and 16GB RAM.', 'Includes power adapter and user manual.', 'Electronics', 1299.99, 15.0, 2.5, 500, 1, 3, 300, 1, '2023-08-10', '2023-08-15 10:00:00', 2023, LOAD_FILE('/path/to/laptop_image.jpg'), LOAD_FILE('/path/to/laptop_thumbnail.jpg'), LOAD_FILE('/path/to/laptop_manual.pdf'), LOAD_FILE('/path/to/laptop_video.mp4'), JSON_ARRAY('laptop', 'electronics', 'computer')),
      ('T-shirt', 'TS11223344', 'A comfortable cotton T-shirt.', 'Cotton T-shirt', 'This T-shirt is made from 100% cotton and is available in various sizes.', 'Available in multiple colors.', 'Clothing', 19.99, 5.0, 0.2, 2000, 1, 10, 1500, 1, '2023-07-01', '2023-07-05 12:00:00', 2023, LOAD_FILE('/path/to/tshirt_image.jpg'), LOAD_FILE('/path/to/tshirt_thumbnail.jpg'), LOAD_FILE('/path/to/tshirt_manual.pdf'), LOAD_FILE('/path/to/tshirt_video.mp4'), JSON_ARRAY('tshirt', 'clothing', 'apparel')),
      ('Bookshelf', 'BS55667788', 'A sturdy wooden bookshelf.', 'Wooden bookshelf', 'This bookshelf is made from high-quality wood and has five shelves.', 'Easy to assemble.', 'Furniture', 149.99, 20.0, 15.0, 300, 1, 2, 100, 1, '2023-06-20', '2023-06-25 15:00:00', 2023, LOAD_FILE('/path/to/bookshelf_image.jpg'), LOAD_FILE('/path/to/bookshelf_thumbnail.jpg'), LOAD_FILE('/path/to/bookshelf_manual.pdf'), LOAD_FILE('/path/to/bookshelf_video.mp4'), JSON_ARRAY('bookshelf', 'furniture', 'wooden')),
      ('Headphones', 'HP99887766', 'Noise-cancelling over-ear headphones.', 'Noise-cancelling headphones', 'These headphones feature active noise cancellation and high-fidelity sound.', 'Includes carrying case and charging cable.', 'Electronics', 199.99, 10.0, 0.3, 800, 1, 5, 600, 1, '2023-05-15', '2023-05-20 11:00:00', 2023, LOAD_FILE('/path/to/headphones_image.jpg'), LOAD_FILE('/path/to/headphones_thumbnail.jpg'), LOAD_FILE('/path/to/headphones_manual.pdf'), LOAD_FILE('/path/to/headphones_video.mp4'), JSON_ARRAY('headphones', 'electronics', 'audio')),
      ('Coffee Maker', 'CM44556677', 'A programmable coffee maker with a 12-cup capacity.', 'Programmable coffee maker', 'This coffee maker features a programmable timer, 12-cup capacity, and auto shut-off.', 'Includes coffee pot and user manual.', 'Electronics', 79.99, 5.0, 2.0, 400, 1, 3, 250, 1, '2023-04-10', '2023-04-15 08:00:00', 2023, LOAD_FILE('/path/to/coffeemaker_image.jpg'), LOAD_FILE('/path/to/coffeemaker_thumbnail.jpg'), LOAD_FILE('/path/to/coffeemaker_manual.pdf'), LOAD_FILE('/path/to/coffeemaker_video.mp4'), JSON_ARRAY('coffeemaker', 'electronics', 'kitchen')),
      ('Running Shoes', 'RS22334455', 'Lightweight running shoes for men and women.', 'Lightweight running shoes', 'These running shoes are designed for comfort and performance, available in various sizes.', 'Available in multiple colors.', 'Clothing', 59.99, 10.0, 0.5, 1500, 1, 10, 1200, 1, '2023-03-01', '2023-03-05 09:00:00', 2023, LOAD_FILE('/path/to/runningshoes_image.jpg'), LOAD_FILE('/path/to/runningshoes_thumbnail.jpg'), LOAD_FILE('/path/to/runningshoes_manual.pdf'), LOAD_FILE('/path/to/runningshoes_video.mp4'), JSON_ARRAY('runningshoes', 'clothing', 'footwear')),
      ('Smartwatch', 'SW33445566', 'A smartwatch with fitness tracking features.', 'Fitness smartwatch', 'This smartwatch tracks your fitness activities, monitors your heart rate, and provides notifications.', 'Includes charging cable and user manual.', 'Electronics', 249.99, 15.0, 0.1, 700, 1, 5, 500, 1, '2023-02-15', '2023-02-20 10:00:00', 2023, LOAD_FILE('/path/to/smartwatch_image.jpg'), LOAD_FILE('/path/to/smartwatch_thumbnail.jpg'), LOAD_FILE('/path/to/smartwatch_manual.pdf'), LOAD_FILE('/path/to/smartwatch_video.mp4'), JSON_ARRAY('smartwatch', 'electronics', 'wearable')),
      ('Electric Kettle', 'EK66778899', 'A stainless steel electric kettle with a 1.7-liter capacity.', 'Stainless steel electric kettle', 'This electric kettle features a 1.7-liter capacity, auto shut-off, and boil-dry protection.', 'Includes user manual.', 'Electronics', 39.99, 5.0, 1.0, 600, 1, 5, 400, 1, '2023-01-10', '2023-01-15 07:00:00', 2023, LOAD_FILE('/path/to/electrickettle_image.jpg'), LOAD_FILE('/path/to/electrickettle_thumbnail.jpg'), LOAD_FILE('/path/to/electrickettle_manual.pdf'), LOAD_FILE('/path/to/electrickettle_video.mp4'), JSON_ARRAY('electrickettle', 'electronics', 'kitchen')),
      ('Bluetooth Speaker', 'BS77889900', 'A portable Bluetooth speaker with high-quality sound.', 'Portable Bluetooth speaker', 'This Bluetooth speaker features high-quality sound, long battery life, and a compact design.', 'Includes charging cable and user manual.', 'Electronics', 99.99, 10.0, 0.4, 900, 1, 5, 700, 1, '2022-12-01', '2022-12-05 13:00:00', 2022, LOAD_FILE('/path/to/bluetoothspeaker_image.jpg'), LOAD_FILE('/path/to/bluetoothspeaker_thumbnail.jpg'), LOAD_FILE('/path/to/bluetoothspeaker_manual.pdf'), LOAD_FILE('/path/to/bluetoothspeaker_video.mp4'), JSON_ARRAY('bluetoothspeaker', 'electronics', 'audio')),
      ('Gaming Console', 'GC11223344', 'A next-gen gaming console with 4K support.', 'Next-gen gaming console', 'This gaming console features 4K support, 1TB storage, and a powerful GPU.', 'Includes controller and HDMI cable.', 'Electronics', 499.99, 5.0, 3.5, 300, 1, 2, 200, 1, '2023-11-01', '2023-11-05 14:00:00', 2023, LOAD_FILE('/path/to/gamingconsole_image.jpg'), LOAD_FILE('/path/to/gamingconsole_thumbnail.jpg'), LOAD_FILE('/path/to/gamingconsole_manual.pdf'), LOAD_FILE('/path/to/gamingconsole_video.mp4'), JSON_ARRAY('gamingconsole', 'electronics', 'gaming')),
      ('Digital Camera', 'DC22334455', 'A high-resolution digital camera with 20MP sensor.', 'High-resolution digital camera', 'This digital camera features a 20MP sensor, 4K video recording, and Wi-Fi connectivity.', 'Includes lens, battery, and user manual.', 'Electronics', 899.99, 10.0, 1.2, 150, 1, 3, 100, 1, '2023-10-01', '2023-10-05 16:00:00', 2023, LOAD_FILE('/path/to/digitalcamera_image.jpg'), LOAD_FILE('/path/to/digitalcamera_thumbnail.jpg'), LOAD_FILE('/path/to/digitalcamera_manual.pdf'), LOAD_FILE('/path/to/digitalcamera_video.mp4'), JSON_ARRAY('digitalcamera', 'electronics', 'photography')),
      ('Electric Scooter', 'ES33445566', 'A foldable electric scooter with a top speed of 25 km/h.', 'Foldable electric scooter', 'This electric scooter features a top speed of 25 km/h, a range of 30 km, and a foldable design.', 'Includes charger and user manual.', 'Electronics', 299.99, 15.0, 12.0, 100, 1, 2, 50, 1, '2023-09-01', '2023-09-05 17:00:00', 2023, LOAD_FILE('/path/to/electricscooter_image.jpg'), LOAD_FILE('/path/to/electricscooter_thumbnail.jpg'), LOAD_FILE('/path/to/electricscooter_manual.pdf'), LOAD_FILE('/path/to/electricscooter_video.mp4'), JSON_ARRAY('electricscooter', 'electronics', 'transportation')),
      ('Smart TV', 'ST44556677', 'A 55-inch 4K Smart TV with HDR support.', '55-inch 4K Smart TV', 'This Smart TV features a 55-inch 4K display, HDR support, and built-in streaming apps.', 'Includes remote control and user manual.', 'Electronics', 799.99, 20.0, 18.0, 200, 1, 3, 150, 1, '2023-08-01', '2023-08-05 18:00:00', 2023, LOAD_FILE('/path/to/smarttv_image.jpg'), LOAD_FILE('/path/to/smarttv_thumbnail.jpg'), LOAD_FILE('/path/to/smarttv_manual.pdf'), LOAD_FILE('/path/to/smarttv_video.mp4'), JSON_ARRAY('smarttv', 'electronics', 'homeentertainment')),
      ('Fitness Tracker', 'FT55667788', 'A fitness tracker with heart rate monitoring.', 'Fitness tracker', 'This fitness tracker monitors your heart rate, tracks your steps, and provides sleep analysis.', 'Includes charging cable and user manual.', 'Electronics', 99.99, 5.0, 0.1, 500, 1, 5, 400, 1, '2023-07-01', '2023-07-05 19:00:00', 2023, LOAD_FILE('/path/to/fitnesstracker_image.jpg'), LOAD_FILE('/path/to/fitnesstracker_thumbnail.jpg'), LOAD_FILE('/path/to/fitnesstracker_manual.pdf'), LOAD_FILE('/path/to/fitnesstracker_video.mp4'), JSON_ARRAY('fitnesstracker', 'electronics', 'wearable')),
      ('Blender', 'BL66778899', 'A high-speed blender with multiple settings.', 'High-speed blender', 'This blender features multiple speed settings, a 1.5-liter capacity, and a durable design.', 'Includes blending jar and user manual.', 'Electronics', 49.99, 10.0, 3.0, 250, 1, 5, 200, 1, '2023-06-01', '2023-06-05 20:00:00', 2023, LOAD_FILE('/path/to/blender_image.jpg'), LOAD_FILE('/path/to/blender_thumbnail.jpg'), LOAD_FILE('/path/to/blender_manual.pdf'), LOAD_FILE('/path/to/blender_video.mp4'), JSON_ARRAY('blender', 'electronics', 'kitchen')),
      ('Wireless Earbuds', 'WE77889900', 'Wireless earbuds with noise cancellation.', 'Noise-cancelling wireless earbuds', 'These wireless earbuds feature active noise cancellation, long battery life, and a compact charging case.', 'Includes charging case and user manual.', 'Electronics', 149.99, 10.0, 0.05, 600, 1, 5, 500, 1, '2023-05-01', '2023-05-05 21:00:00', 2023, LOAD_FILE('/path/to/wirelessearbuds_image.jpg'), LOAD_FILE('/path/to/wirelessearbuds_thumbnail.jpg'), LOAD_FILE('/path/to/wirelessearbuds_manual.pdf'), LOAD_FILE('/path/to/wirelessearbuds_video.mp4'), JSON_ARRAY('wirelessearbuds', 'electronics', 'audio')),
      ('Air Purifier', 'AP88990011', 'An air purifier with HEPA filter and quiet operation.', 'HEPA air purifier', 'This air purifier features a HEPA filter, quiet operation, and multiple fan speeds.', 'Includes user manual.', 'Electronics', 199.99, 15.0, 4.0, 300, 1, 3, 250, 1, '2023-04-01', '2023-04-05 22:00:00', 2023, LOAD_FILE('/path/to/airpurifier_image.jpg'), LOAD_FILE('/path/to/airpurifier_thumbnail.jpg'), LOAD_FILE('/path/to/airpurifier_manual.pdf'), LOAD_FILE('/path/to/airpurifier_video.mp4'), JSON_ARRAY('airpurifier', 'electronics', 'homeappliance')),
      ('Electric Toothbrush', 'ET99001122', 'An electric toothbrush with multiple brushing modes.', 'Electric toothbrush', 'This electric toothbrush features multiple brushing modes, a timer, and a rechargeable battery.', 'Includes charging base and user manual.', 'Electronics', 79.99, 5.0, 0.3, 400, 1, 5, 350, 1, '2023-03-01', '2023-03-05 23:00:00', 2023, LOAD_FILE('/path/to/electrictoothbrush_image.jpg'), LOAD_FILE('/path/to/electrictoothbrush_thumbnail.jpg'), LOAD_FILE('/path/to/electrictoothbrush_manual.pdf'), LOAD_FILE('/path/to/electrictoothbrush_video.mp4'), JSON_ARRAY('electrictoothbrush', 'electronics', 'personalcare')),
      ('Smart Light Bulb', 'SL00112233', 'A smart light bulb with adjustable brightness and color.', 'Smart light bulb', 'This smart light bulb features adjustable brightness, color control, and Wi-Fi connectivity.', 'Includes user manual.', 'Electronics', 29.99, 5.0, 0.2, 1000, 1, 10, 800, 1, '2023-02-01', '2023-02-05 08:00:00', 2023, LOAD_FILE('/path/to/smartlightbulb_image.jpg'), LOAD_FILE('/path/to/smartlightbulb_thumbnail.jpg'), LOAD_FILE('/path/to/smartlightbulb_manual.pdf'), LOAD_FILE('/path/to/smartlightbulb_video.mp4'), JSON_ARRAY('smartlightbulb', 'electronics', 'homeautomation')),
      ('Lipstick', 'CS12345678', 'A long-lasting matte lipstick.', 'Matte lipstick', 'This lipstick provides a rich color with a matte finish and lasts all day.', 'Available in multiple shades.', 'Cosmetics', 19.99, 5.0, 0.05, 500, 1, 10, 300, 1, '2023-09-01', '2023-09-05 10:00:00', 2023, LOAD_FILE('/path/to/lipstick_image.jpg'), LOAD_FILE('/path/to/lipstick_thumbnail.jpg'), LOAD_FILE('/path/to/lipstick_manual.pdf'), LOAD_FILE('/path/to/lipstick_video.mp4'), JSON_ARRAY('lipstick', 'cosmetics', 'makeup')),
      ('Foundation', 'CS87654321', 'A lightweight liquid foundation.', 'Liquid foundation', 'This foundation provides full coverage with a natural finish and is suitable for all skin types.', 'Available in multiple shades.', 'Cosmetics', 29.99, 10.0, 0.1, 400, 1, 5, 200, 1, '2023-08-01', '2023-08-05 11:00:00', 2023, LOAD_FILE('/path/to/foundation_image.jpg'), LOAD_FILE('/path/to/foundation_thumbnail.jpg'), LOAD_FILE('/path/to/foundation_manual.pdf'), LOAD_FILE('/path/to/foundation_video.mp4'), JSON_ARRAY('foundation', 'cosmetics', 'makeup')),
      ('1984', 'BK87654321', 'A dystopian novel by George Orwell.', 'Dystopian novel', 'This novel is set in a totalitarian society ruled by Big Brother.', 'Published in 1949.', 'Books', 9.99, 0.0, 0.4, 800, 1, 5, 600, 1, '2023-06-01', '2023-06-05 13:00:00', 2023, LOAD_FILE('/path/to/1984_image.jpg'), LOAD_FILE('/path/to/1984_thumbnail.jpg'), LOAD_FILE('/path/to/1984_manual.pdf'), LOAD_FILE('/path/to/1984_video.mp4'), JSON_ARRAY('1984', 'books', 'dystopian')),
      ('To Kill a Mockingbird', 'BK11223344', 'A novel by Harper Lee.', 'Novel', 'This novel is a story of racial injustice and childhood innocence in the Deep South.', 'Published in 1960.', 'Books', 12.99, 0.0, 0.6, 900, 1, 5, 700, 1, '2023-05-01', '2023-05-05 14:00:00', 2023, LOAD_FILE('/path/to/mockingbird_image.jpg'), LOAD_FILE('/path/to/mockingbird_thumbnail.jpg'), LOAD_FILE('/path/to/mockingbird_manual.pdf'), LOAD_FILE('/path/to/mockingbird_video.mp4'), JSON_ARRAY('mockingbird', 'books', 'novel'));
`
export const varietyDatatypesWithProductsTable = createSqlExampleConfig(
    'Create table with variety of datatypes products table example',
    createProductsTableQuery,
);

export const seedDataForProductsTable = createSqlExampleConfig(
    'Seed data for products table',
    seedDataForProductsTableQuery
)

const createEventsTableQuery = `CREATE TABLE events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(100) NOT NULL,
    event_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    event_datetime DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    planned_year YEAR NOT NULL
);`;

export const varietyTimeDatatypes = createSqlExampleConfig(
    'Create table with variety date and time data types',
    createEventsTableQuery
);

const seedDataForEventsTableQuery = `INSERT INTO events (event_name, event_date, start_time, end_time, event_datetime, planned_year) VALUES
    ('Annual Conference', '2023-09-15', '09:00:00', '17:00:00', '2023-09-15 09:00:00', 2023),
    ('Tech Workshop', '2023-10-10', '10:00:00', '12:00:00', '2023-10-10 10:00:00', 2023),
    ('Monthly Meetup', '2023-11-05', '18:00:00', '20:00:00', '2023-11-05 18:00:00', 2023);
`;

export const seedDataForEventsTable = createSqlExampleConfig(
    'Seed data for events table',
    seedDataForEventsTableQuery
);