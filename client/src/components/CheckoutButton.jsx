import { Button } from "@chakra-ui/react"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CheckoutButton = () => {
    const cart = useContext(CartContext)

    const stripeIDs = {
        1: 'price_1NFolJEG0Ge7fcQZ5LodjkEF',
        2: 'price_1NFolqEG0Ge7fcQZHJuQbLUb',
        3: 'price_1NFqS6EG0Ge7fcQZQd5dV6zk',
        4: 'price_1NFqU4EG0Ge7fcQZQ8AQNJgT',
        5: 'price_1NFqY5EG0Ge7fcQZQd76Dh3f',
        6: 'price_1NFqYhEG0Ge7fcQZR7f4N7kW',
        7: 'price_1NFqfeEG0Ge7fcQZUe6icRuU',
        8: 'price_1NFqg6EG0Ge7fcQZMrzbeYo4',
        9: 'price_1NFqgrEG0Ge7fcQZm763kSoz',
        10: 'price_1NFqhfEG0Ge7fcQZtIrzeMfy',
        11: 'price_1NFqiUEG0Ge7fcQZI94nhFpT',
        12: 'price_1NFqiqEG0Ge7fcQZFKgaDDyY',
        13: 'price_1NFqjBEG0Ge7fcQZMszSaMIc',
        14: 'price_1NFqjhEG0Ge7fcQZdsW18pC5',
        15: 'price_1NFqk9EG0Ge7fcQZw48xwcjq',
        16: 'price_1NFqkPEG0Ge7fcQZQOGh3NAG',
        17: 'price_1NFqkmEG0Ge7fcQZiMjVbthw',
        18: 'price_1NFql3EG0Ge7fcQZdp1OE2Ao',
        19: 'price_1NFqlZEG0Ge7fcQZebw2QxZK',
        20: 'price_1NFqlvEG0Ge7fcQZ4KY83rnX',
        21: 'price_1NFqm8EG0Ge7fcQZyxFAxnXY',
        22: 'price_1NFqmOEG0Ge7fcQZ0uZEUyBi',
        23: 'price_1NFqmpEG0Ge7fcQZABA3vsS4',
        24: 'price_1NFqnCEG0Ge7fcQZ2r9wFE96',
        25: 'price_1NFqnTEG0Ge7fcQZthuqfWYt',
        26: 'price_1NFqoAEG0Ge7fcQZ1aHgWIe4',
        27: 'price_1NFqocEG0Ge7fcQZcrMd8Zs9',
        28: 'price_1NFqpHEG0Ge7fcQZHonfdm5Q',
        29: 'price_1NFqpcEG0Ge7fcQZm1o3Te13',
        30: 'price_1NFqqAEG0Ge7fcQZKow4YpZh',
        31: 'price_1NFqqVEG0Ge7fcQZ0r3dwFpz',
        32: 'price_1NFqqpEG0Ge7fcQZMjKLi89i',
        33: 'price_1NFqrAEG0Ge7fcQZuYnq2mtL',
        34: 'price_1NFqrrEG0Ge7fcQZ1vIxNrpP',
        35: 'price_1NFqs7EG0Ge7fcQZcJXEH3DM',
        36: 'price_1NFqsMEG0Ge7fcQZRYBCtVgj',
        37: 'price_1NFqspEG0Ge7fcQZfxbLkR7C',
        38: 'price_1NFqt8EG0Ge7fcQZYx8QktB2',
        39: 'price_1NFqtQEG0Ge7fcQZG06iRLCg',
        40: 'price_1NFqtdEG0Ge7fcQZWA2hNhXW',
        41: 'price_1NFqtrEG0Ge7fcQZZVTZDulQ',
        42: 'price_1NFqu4EG0Ge7fcQZczh7M8ft',
        43: 'price_1NFqucEG0Ge7fcQZuXnouUTj',
        44: 'price_1NFqurEG0Ge7fcQZdveMlThT',
        45: 'price_1NFqvEEG0Ge7fcQZICssBh1z',
        46: 'price_1NFqvXEG0Ge7fcQZkeVmS9fa',
        47: 'price_1NFqvmEG0Ge7fcQZi8bkfcqt',
        48: 'price_1NFqw2EG0Ge7fcQZN7ChHyhF'
      };

    const itemsForStripe = []

    cart.items.forEach(item => {
        itemsForStripe.push({
            id: stripeIDs[item.id],
            quantity: item.quantity
        })
    });

    console.log(itemsForStripe)

    const checkout = async () => {
        await fetch('http://localhost:3000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: itemsForStripe})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        })
    }

    return (
        <Button colorScheme='green' onClick={() => checkout()}>Checkout</Button>
    )
}

export default CheckoutButton


