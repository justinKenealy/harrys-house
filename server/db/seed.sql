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
    ('Red Dog Food', 'Ensure your dog receives the nutrition they need with this Red Dog Food. It offers a balanced and delicious meal for your canine companion.', 18, 19.99, 1, 'http://localhost:3000/assets/products/1_red_dog_food.jpg'),
    ('Retractable Leash and Collar', 'Keep your furry friend stylish and safe with this Retractable Leash and Collar. The adjustable length and durable materials make it perfect for daily walks.', 10, 29.99, 1, 'http://localhost:3000/assets/products/2_retractable_leash_and_collar.jpg'),
    ('Blue Cat Food', 'Provide your beloved feline with nutritious and delicious meals using this Blue Cat Food. Formulated with high-quality ingredients for optimal health and vitality.', 10, 19.99, 2, 'http://localhost:3000/assets/products/3_blue_cat_food.jpg'),
    ('Premium Dog Treats', 'Reward your dog with these Premium Dog Treats. Made with high-quality ingredients, they are a tasty and nutritious snack for your canine companion.', 10, 14.99, 1, 'http://localhost:3000/assets/products/4_premium_dog_treats.jpg'),
    ('Premium Birdseed', 'Attract a variety of birds to your backyard with this Premium Birdseed. The blend of seeds provides essential nutrients and energy for feathered visitors.', 10, 24.99, 3, 'http://localhost:3000/assets/products/5_premium_birdseed.jpg'),
    ('Black Retractable Leash', 'Walk your dog in style with this Black Retractable Leash. The durable construction and ergonomic handle provide comfort and control during walks.', 15, 34.50, 1, 'http://localhost:3000/assets/products/6_black_retractable_leash.jpg'),
    ('Hamster Bed', 'Provide a cozy resting place for your hamster with this Hamster Bed. The soft material and cushioned design ensure a comfortable sleep for your pet.', 35, 19.99, 5, 'http://localhost:3000/assets/products/7_hamster_bed.jpg'),
    ('Bird Cage', 'Create a comfortable and spacious home for your feathered friend with this Bird Cage. The sturdy construction and convenient features ensure a happy bird.', 9, 49.99, 3, 'http://localhost:3000/assets/products/8_bird_cage.jpg'),
    ('Yellow Dog Leash', 'Walk your dog in style with this Yellow Dog Leash. The vibrant color and durable materials make it a reliable and fashionable accessory for every walk.', 15, 29.99, 1, 'http://localhost:3000/assets/products/9_yellow_dog_leash.jpg'),
    ('Fluffy Inc Cat Toy', 'Entertain your feline friend with this Fluffy Inc Cat Toy. Keep your cat active and engaged with this fun and durable toy.', 15, 9.99, 2, 'http://localhost:3000/assets/products/10_Fluffy_Inc_Cat_Toy.jpg'),
    ('Green Dog Leash', 'Take your furry friend for a walk in style with this Green Dog Leash. The sturdy design ensures a secure and comfortable grip.', 18, 29.99, 1, 'http://localhost:3000/assets/products/11_green_dog_leash.jpg'),
    ('Red Dog Leash', 'Walk your canine companion with confidence using this Red Dog Leash. The vibrant color and durable construction make it a reliable choice.', 12, 29.99, 1, 'http://localhost:3000/assets/products/12_red_dog_leash.jpg'),
    ('Premium Cat Leash', 'Give your beloved cat the freedom to explore safely with this Premium Cat Leash. It offers comfort and security during outdoor adventures.', 12, 39.99, 2, 'http://localhost:3000/assets/products/13_premium_cat_leash.jpg'),
    ('Comfy Dog Bed', 'Treat your dog to the ultimate relaxation with this Comfy Dog Bed. The plush cushioning provides a cozy spot for your furry companion.', 8, 79.99, 1, 'http://localhost:3000/assets/products/14_comfy_dog_bed.jpg'),
    ('Medium Dog Bed', 'Provide your dog with a comfortable resting place with this Medium Dog Bed. The spacious design ensures a cozy sleeping experience.', 11, 69.99, 1, 'http://localhost:3000/assets/products/15_medium_dog_bed.jpg'),
    ('Snuggle Dog Bed', 'Keep your dog warm and snug with this Snuggle Dog Bed. The soft and plush material offers a cozy retreat for your furry friend.', 18, 99.99, 1, 'http://localhost:3000/assets/products/16_snuggle_dog_bed.jpg'),
    ('Rustic Dog Kennel', 'Give your dog a stylish and cozy home with this Rustic Dog Kennel. The rustic design adds charm to any living space.', 12, 120.99, 1, 'http://localhost:3000/assets/products/17_rustic_dog_kennel.jpg'),
    ('Dog Carrier', 'Transport your dog comfortably and safely with this Dog Carrier. The durable construction and adjustable straps make it convenient for travel.', 16, 109.99, 1, 'http://localhost:3000/assets/products/18_dog_carrier.jpg'),
    ('Small Dog Crate', 'Provide your small dog with a secure space with this Small Dog Crate. The sturdy construction ensures safety and peace of mind.', 20, 69.99, 1, 'http://localhost:3000/assets/products/19_small_dog_crate.jpg'),
    ('Cat Crate', 'Create a cozy space for your cat with this Cat Crate. The secure and comfortable design provides a safe haven for your feline friend.', 18, 59.99, 2, 'http://localhost:3000/assets/products/20_cat_crate.jpg'),
    ('Cat Conditioner', 'Keep your cat`s fur soft and shiny with this Cat Conditioner. The nourishing formula helps maintain a healthy coat and reduces tangles.', 18, 19.99, 2, 'http://localhost:3000/assets/products/21_cat_conditioner.jpg'),
    ('Cat Tin Food', 'Satisfy your cat`s cravings with this Cat Tin Food. Made with high-quality ingredients, it provides a balanced diet for your feline companion.', 18, 7.99, 2, 'http://localhost:3000/assets/products/22_cat_tin_food.jpg'),
    ('Dog Vitamin Supplements', 'Support your dog`s overall health with these Dog Vitamin Supplements. Packed with essential nutrients, they promote vitality and well-being.', 18, 14.99, 1, 'http://localhost:3000/assets/products/23_dog_vitamin_supplements.jpg'),
    ('Aqua Dog Food', 'Keep your furry friend nourished with this Aqua Dog Food. This is a quality diet option for your best friend, satisfying all of their nutritional needs.', 14, 19.99, 1, 'http://localhost:3000/assets/products/24_aqua_dog_food.jpg'),
    ('Pink Cat Food', 'Give your cat a delightful meal with this Pink Cat Food. The delicious blend of flavors will tempt even the pickiest of feline eaters.', 14, 19.99, 2, 'http://localhost:3000/assets/products/25_pink_cat_food.jpg'),
    ('Cat Food Refill', 'Ensure your cat never goes hungry with this Cat Food Refill. It provides a convenient and cost-effective solution for keeping your cat well-fed.', 21, 14.99, 2, 'http://localhost:3000/assets/products/26_cat_food_refill.jpg'),
    ('Tall Cat Bed', 'Spoil your cat with this Tall Cat Bed. The elevated design offers a cozy perch for your feline friend to relax and observe their surroundings.', 25, 99.99, 2, 'http://localhost:3000/assets/products/27_tall_cat_bed.jpg'),
    ('Soft Cat Bed', 'Create a luxurious sleeping spot for your cat with this Soft Cat Bed. The plush material provides ultimate comfort for your furry companion.', 19, 89.99, 2, 'http://localhost:3000/assets/products/28_soft_cat_bed.jpg'),
    ('Cat Litter Tray', 'Make cleaning up after your cat a breeze with this Cat Litter Tray. The durable construction and convenient design ensure easy maintenance.', 16, 49.99, 2, 'http://localhost:3000/assets/products/29_cat_litter_tray.jpg'),
    ('Dog Starter Pack', 'Get your new furry friend off to a great start with this Dog Starter Pack. It includes essential items to help you care for your canine companion.', 12, 79.99, 1, 'http://localhost:3000/assets/products/30_dog_starter_pack.jpg'),
    ('Puppy Kit', 'Prepare for the arrival of your new puppy with this Puppy Kit. It includes essentials to ensure a smooth transition and happy beginnings.', 6, 69.99, 1, 'http://localhost:3000/assets/products/31_puppy_kit.jpg'),
    ('Cat Starter Pack', 'Give your new cat the perfect start with this Cat Starter Pack. It includes everything you need to welcome your feline friend into your home.', 10, 79.99, 2, 'http://localhost:3000/assets/products/32_cat_starter_pack.jpg'),
    ('Small Cat Toy', 'Keep your cat entertained for hours with this Small Cat Toy. The compact size and engaging design make it a favorite among playful felines.', 10, 4.99, 2, 'http://localhost:3000/assets/products/33_small_cat_toy.jpg'),
    ('Tall Cat Scratcher', 'Provide your cat with an outlet for scratching instincts with this Tall Cat Scratcher. The vertical design offers ample space for stretching and scratching.', 10, 89.99, 2, 'http://localhost:3000/assets/products/34_tall_cat_scratcher.jpg'),
    ('Short Cat Scratcher', 'Keep your cat`s claws healthy and sharp with this Short Cat Scratcher. The compact size fits perfectly in any room for convenient scratching.', 10, 89.99, 2, 'http://localhost:3000/assets/products/35_short_cat_scratcher.jpg'),
    ('Yellow Cat Food', 'Nourish your cat with this Yellow Cat Food. The specially formulated recipe provides a balanced diet and supports your cat`s overall well-being.', 10, 19.99, 2, 'http://localhost:3000/assets/products/36_yellow_cat_food.jpg'),
    ('Large Aquarium', 'Create an aquatic paradise with this Large Aquarium. The spacious design offers ample room for fish and provides a stunning centerpiece for any room.', 10, 199.99, 4, 'http://localhost:3000/assets/products/37_large_aquarium.jpg'),
    ('Small Aquarium', 'Bring the beauty of underwater life into your home with this Small Aquarium. The compact size is perfect for small spaces and beginners.', 10, 125.99, 4, 'http://localhost:3000/assets/products/38_small_aquarium.jpg'),
    ('Aquarium Conditioner', 'Maintain a healthy aquarium ecosystem with this Aquarium Conditioner. It removes harmful substances and promotes optimal water conditions for your fish.', 10, 9.99, 4, 'http://localhost:3000/assets/products/39_aquarium_conditioner.jpg'),
    ('Aquarium Props', 'Enhance the visual appeal of your aquarium with these Aquarium Props. The decorative items create a natural and vibrant environment for your fish.', 15, 39.99, 4, 'http://localhost:3000/assets/products/40_aquarium_props.jpg'),
    ('Small Fishbowl', 'Create a charming home for your pet fish with this Small Fishbowl. The compact size is perfect for small fish and adds a touch of elegance to any space.', 10, 29.99, 4, 'http://localhost:3000/assets/products/41_small_fishbowl.jpg'),
    ('Bird Cage', 'Provide a comfortable and spacious home for your feathered friend with this Bird Cage. The sturdy construction ensures a safe and secure environment.', 10, 49.99, 3, 'http://localhost:3000/assets/products/42_bird_cage.jpg'),
    ('Bird Feeder', 'Attract beautiful birds to your garden with this Bird Feeder. The durable design and convenient features make it a must-have for bird enthusiasts.', 21, 69.50, 3, 'http://localhost:3000/assets/products/43_bird_feeder.jpg'),
    ('Rabbit Food', 'Ensure your pet rabbit stays healthy and nourished with this Rabbit Food. The balanced formula provides essential nutrients for optimal rabbit well-being.', 10, 19.99, 5, 'http://localhost:3000/assets/products/44_rabbit_food.jpg'),
    ('Rabbit Seed Stick', 'Delight your pet rabbit with this Rabbit Seed Stick. The tasty blend of seeds and grains provides a flavorful and nutritious treat.', 10, 12.99, 5, 'http://localhost:3000/assets/products/45_rabbit_seed_stick.jpg'),
    ('Small Rabbit Cage', 'Provide a cozy and secure habitat for your pet rabbit with this Small Rabbit Cage. The compact size is perfect for indoor spaces.', 10, 29.99, 5, 'http://localhost:3000/assets/products/46_small_rabbit_cage.jpg'),
    ('Small Hamster Cage', 'Create a comfortable home for your furry friend with this Small Hamster Cage. The multi-level design offers plenty of space for exploration and play.', 10, 29.99, 5, 'http://localhost:3000/assets/products/47_small_hamster_cage.jpg'),
    ('Hamster Wheel', 'Keep your hamster active and entertained with this Hamster Wheel. The sturdy construction and smooth spinning motion provide endless fun for your pet.', 7, 15.99, 5, 'http://localhost:3000/assets/products/48_hamster_wheel.jpg');


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
