import { Navigate } from "react-router-dom";
import AccountDetails from "../components/AccountDetails";
import OrderList from "../components/OrderList";
import Wishlist from "../components/Wishlist";
import "./Account.css";

const AccountPage = ({ user }) => {
  return !user ? (
    <Navigate to="/login" />
  ) : (
    <div id="accountPage">
      <div id="leftSide">
        <AccountDetails user={user} />
        <OrderList user={user} />
      </div>
      <Wishlist user={user} />
    </div>
  );
};

export default AccountPage;
