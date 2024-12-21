import {createSqlExampleConfig} from "../../helpers";

const createOrdersTableQuery = `CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    order_date DATETIME,
    quantity INT,
    total_price DECIMAL(10, 2),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`;

const seedOrdersTableQuery = `INSERT INTO orders (product_id, order_date, quantity, total_price) 
VALUES
        (1, '2023-09-20 14:30:00', 2, 1399.98),
        (2, '2023-08-15 10:00:00', 1, 1299.99),
        (3, '2022-07-05 12:00:00', 5, 99.95),
        (4, '2023-06-25 15:00:00', 1, 149.99),
        (5, '2023-05-20 11:00:00', 3, 599.97),
        (1, '2023-09-21 14:30:00', 1, 699.99),
        (2, '2023-08-16 10:00:00', 2, 2599.98),
        (3, '2023-07-06 12:00:00', 10, 199.90),
        (4, '2023-06-26 15:00:00', 2, 299.98),
        (5, '2023-05-21 11:00:00', 1, 199.99),
        (21, '2023-05-21 11:00:00', 1, 19.99),
        (22, '2022-05-21 11:00:00', 1, 29.99),
        (23, '2023-05-21 11:00:00', 100, 999.00),
        (24, '2023-05-21 11:00:00', 1, 12.99);
`;

const fromQuery = `SELECT *
FROM
  orders o;`;

const joinQuery = `SELECT *
FROM
  orders o
JOIN products p 
    ON o.product_id = p.product_id;`;

const whereQuery = `SELECT *
FROM
    orders o
JOIN products p
    ON o.product_id = p.product_id
WHERE
    o.order_date >= '2023-01-01';
`;

const groupByQuery = `SELECT
    p.category,
    SUM(o.quantity) AS total_quantity_sold,
    SUM(o.total_price) AS total_revenue
FROM
    orders o
JOIN
    products p ON o.product_id = p.product_id
WHERE
    o.order_date >= '2023-01-01'
GROUP BY
    p.category;`;

const havingQuery = `SELECT
    p.category,
    SUM(o.quantity) AS total_quantity_sold,
    SUM(o.total_price) AS total_revenue
FROM
    orders o
JOIN
    products p ON o.product_id = p.product_id
WHERE
    o.order_date >= '2023-01-01'
GROUP BY
    p.category
HAVING
    total_revenue > 100;`;

const orderByQuery = `SELECT
    p.category,
    SUM(o.quantity) AS total_quantity_sold,
    SUM(o.total_price) AS total_revenue
FROM
    orders o
JOIN
    products p ON o.product_id = p.product_id
WHERE
    o.order_date >= '2023-01-01'
GROUP BY
    p.category
HAVING
    total_revenue > 100
ORDER BY
    total_revenue DESC;`;

const allQuery = `SELECT
    p.category,
    SUM(o.quantity) AS total_quantity_sold,
    SUM(o.total_price) AS total_revenue
FROM
    orders o
JOIN
    products p ON o.product_id = p.product_id
WHERE
    o.order_date >= '2023-01-01'
GROUP BY
    p.category
HAVING
    total_revenue > 100
ORDER BY
    total_revenue DESC
LIMIT 3;`;

export const createOrdersTable = createSqlExampleConfig(
    'Create orders table',
    createOrdersTableQuery
);

export const seedOrdersTable = createSqlExampleConfig(
    'Seed orders table',
    seedOrdersTableQuery
);

export const from = createSqlExampleConfig(
    'FROM',
    fromQuery
);

export const join = createSqlExampleConfig(
    'JOIN',
    joinQuery
);

export const where = createSqlExampleConfig(
    'WHERE',
    whereQuery
);

export const groupBy = createSqlExampleConfig(
    'GROUP BY',
    groupByQuery
);

export const having = createSqlExampleConfig(
    'HAVING',
    havingQuery
);

export const orderBy = createSqlExampleConfig(
    'ORDER BY',
    orderByQuery
);

export const limit = createSqlExampleConfig(
    'LIMIT',
    allQuery
)

export const allQueries = createSqlExampleConfig(
    'All queries',
    allQuery,
);

