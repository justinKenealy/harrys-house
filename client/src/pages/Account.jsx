import { Navigate } from "react-router-dom"
import Wishlist from "../components/Wishlist"

const AccountPage = ({ user }) => {
    return !user ? <Navigate to="/login" /> : 
    (
        <>
        <div>Account page</div>
        <Wishlist user={user}/>
        </>
    )
}

export default AccountPage