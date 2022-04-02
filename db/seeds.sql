INSERT INTO department (name)
VALUES
('Sales'),
('IT'), 
('Customer Service'),
('Safety'),
('Programming');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales agent', 35000, 1),
('Sales Manager', 50000, 1),
('IT member', 70000, 2),
('IT Manager', 90000, 2),
("Customer Service Agent", 39000, 3), 
('Customer Sevice Manager', 50000, 3), 
('Safety Worker', 80000, 4),
('Safety Manager', 100000, 4),
('Programmer', 80000, 5), 
('Programming Manager', 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, Manager_id)
VALUES
('Adam', 'Appleson', 2, Null),
('Birtha', 'Baker', 1, 1),
('Caleb', 'Cake', 1, 1),
('Daniel', 'Drake', 1, 1),
('Elliot', 'Emmerson', 4, Null),
('Frankie', 'Friend', 3, 5),
('George', 'Gordon', 3, 5),
('Harry', 'Henderson', 3, 5),
('Ignus', 'Idol', 6, Null), 
('Jimmy', 'Johnson', 5, 9),
('Kimmy', 'Kyte', 5, 9),
('Larry', 'Lemons', 5, 9),
('Mary', 'May', 8, Null); 