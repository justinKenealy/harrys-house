import { Navigate } from "react-router-dom"

const AccountPage = ({ user }) => {
    return !user ? <Navigate to="/login" /> : 
    (
        <div>Account page</div>
    )
}

export default AccountPage