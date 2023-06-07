import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthProvider";
import LoginPage from "./pages/Login";
import Store from "./pages/Store";
import NavBar from "./components/Navbar";
import LandingPage from "./pages/Landing";
import AccountPage from "./pages/Account";
import CartPage from "./components/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import "./App.css";
import { useProducts } from "./contexts/ProductsContext";

function App() {
  const { user } = useAuth();
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { products } = useProducts();
  
  const getProductData = (id) => {
    return products.find((product) => product.id === id);
  };
  
//   if (user){
//   useEffect(() => {
//     const getWishlistProducts = async () => {
//       console.log(user)
//       const res = await fetch("/api/wishlist_products/" + 1);
//       const wishlistProductsIDs = await res.json();
//       console.log(wishlistProductsIDs)
//       let detailedWishlistItems = [];
//       for (let item in wishlistProductsIDs) {
//         detailedWishlistItems.push({
//           ...getProductData(wishlistProductsIDs[item].product_id),
//         });
//       }
//       setWishlistProducts(detailedWishlistItems);
//     };
//     getWishlistProducts();
//   }, []);
// }

  return (
    <div id="content">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<LoginPage user={user} />} />
        <Route path="/account" element={<AccountPage user={user} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </div>
  );
}

export default App;
