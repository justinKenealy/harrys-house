import { Navigate } from "react-router-dom"
import AccountDetails from "../components/AccountDetails"
import Wishlist from "../components/Wishlist"
import "./Account.css"

const AccountPage = ({ user }) => {
    return !user ? <Navigate to="/login" /> : 
    (
        <div id="accountPage">
        <AccountDetails user={user}/>
        <Wishlist user={user}/>
        </div>
    )
}

export default AccountPage