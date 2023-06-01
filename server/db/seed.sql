TRUNCATE TABLE users;
TRUNCATE TABLE products;
TRUNCATE TABLE favourite_products;
TRUNCATE TABLE reviews;
TRUNCATE TABLE orders;
TRUNCATE TABLE order_items;

INSERT INTO users (username, email, password_hash) VALUES
    (),
    ();


INSERT INTO products (name, description, stock, price) VALUES
    ('product 1', 'product 1 desc', 10, 19.99),
    ('product 2', 'product 2 desc', 20, 29.99),
    ('product 3', 'product 3 desc', 30, 39.99),
    ('product 4', 'product 4 desc', 40, 49.99);


INSERT INTO favourite_products (user_id, product_id) VALUES
    (),
    ();


INSERT INTO reviews (user_id, product_id, rating, comment) VALUES
    (),
    ();


INSERT INTO orders (user_id) VALUES
    (),
    ();


INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
    (),
    ();
