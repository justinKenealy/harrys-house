TRUNCATE TABLE users;
TRUNCATE TABLE products;
TRUNCATE TABLE favourite_products;
TRUNCATE TABLE reviews;
TRUNCATE TABLE orders;
TRUNCATE TABLE order_items;

INSERT INTO users (username, email, password_hash) VALUES
    (),
    ();


INSERT INTO products (name, description, price) VALUES
    (),
    ();


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
