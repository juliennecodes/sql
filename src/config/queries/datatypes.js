import {createSqlExampleConfig} from "../../helpers";

const createTableWithVarietyDatatypesQuery = `CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,  -- Integer with auto-increment
    first_name VARCHAR(50) NOT NULL,             -- Variable-length string
    last_name VARCHAR(50) NOT NULL,              -- Variable-length string
    email VARCHAR(100) UNIQUE NOT NULL,          -- Unique email address
    phone_number CHAR(10),                       -- Fixed-length string for phone number
    hire_date DATE NOT NULL,                     -- Date
    birth_date DATE,                             -- Date
    start_time TIME,                             -- Time
    salary DECIMAL(10, 2),                       -- Decimal for salary with 2 decimal places
    is_active TINYINT(1) DEFAULT 1,              -- TinyInt for boolean values
    department_id INT,                           -- Integer for department ID
    profile JSON,                                -- JSON data type for storing profile information
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp for record creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- Timestamp for record update
    FOREIGN KEY (department_id) REFERENCES departments(department_id)  -- Foreign key constraint
);`

export const varietyDatatypes = createSqlExampleConfig(
    'Create table with variety of datatypes',
    createTableWithVarietyDatatypesQuery
);