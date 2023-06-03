TRUNCATE TABLE users;
TRUNCATE TABLE products;
TRUNCATE TABLE wishlist_products;
TRUNCATE TABLE reviews;
TRUNCATE TABLE orders;
TRUNCATE TABLE order_items;

INSERT INTO users (username, email, password_hash) VALUES
    ('justin', 'justin@gmail.com','$2b$10$W2e8IQLXxIbRiIFD1L5/aOqybUWdReZvmkvA7./bawDn5f./fuz6O'),
    ('justin1', 'justin1@gmail.com','$2b$10$EQUIYE13YQjfaELI9sG8i.gQ2vRUJ5rreZnKzrnXArzZk.6q1M7MO'),
    ('justin2', 'justin2@gmail.com', '$2b$10$i0RvonWiwynAQSFCsDNRduHw8cDjgVOzLCs3.P9tK7BNp9PElc7Vq');


INSERT INTO products (name, description, stock, price, category, img_url) VALUES
    ('product 1', 'product 1 desc', 10, 19.99, 1, 'http://placedog.net/500'),
    ('product 2', 'product 2 desc', 20, 29.99, 2, 'http://placedog.net/510'),
    ('product 3', 'product 3 desc', 30, 39.99, 3, 'http://placedog.net/520'),
    ('product 4', 'product 4 desc', 40, 49.99, 4, 'http://placedog.net/530'),
    ('product 5', 'product 5 desc', 40, 49.99, 5, 'http://placedog.net/540'),
    ('product 6', 'product 6 desc', 40, 49.99, 1, 'http://placedog.net/550'),
    ('product 7', 'product 7 desc', 40, 49.99, 2, 'http://placedog.net/560'),
    ('product 8', 'product 8 desc', 40, 49.99, 3, 'http://placedog.net/570'),
    ('product 9', 'product 9 desc', 40, 49.99, 4, 'http://placedog.net/580'),
    ('product 10', 'product 10 desc', 40, 49.99, 5, 'http://placedog.net/590');


INSERT INTO wishlist_products (user_id, product_id) VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3),
    (3, 3),
    (3, 4);


INSERT INTO reviews (user_id, product_id, rating, comment) VALUES
    (1, 1, 5, 'great product'),
    (1, 2, 4, 'good product'),
    (2, 3, 3, 'okay product'),
    (3, 4, 2, 'average product');


INSERT INTO orders (user_id) VALUES
    (1),
    (2),
    (3),
    (3);


INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
    (1, 1, 2, 19.99),
    (1, 2, 1, 29.99),
    (2, 2, 3, 29.99),
    (2, 3, 1, 39.99),
    (3, 3, 3, 39.99),
    (3, 4, 2, 49.99),
    (4, 1, 1, 19.99);
