import { Button } from "@chakra-ui/react"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CheckoutButton = () => {
    const cart = useContext(CartContext)

    const stripeIDs = {
        1: 'price_1NFolJEG0Ge7fcQZ5LodjkEF',
        2: 'price_1NFolqEG0Ge7fcQZHJuQbLUb',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: '',
        16: '',
        17: '',
        18: '',
        19: '',
        20: '',
        21: '',
        22: '',
        23: '',
        24: '',
        25: '',
        26: '',
        27: '',
        28: '',
        29: '',
        30: '',
        31: '',
        32: '',
        33: '',
        34: '',
        35: '',
        36: '',
        37: '',
        38: '',
        39: '',
        40: '',
        41: '',
        42: '',
        43: '',
        44: '',
        45: '',
        46: '',
        47: '',
        48: '',
        49: '',
        50: '',
        51: '',
        52: '',
        53: '',
        54: '',
        55: '',
        56: '',
        57: '',
        58: '',
        59: '',
        60: ''
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


