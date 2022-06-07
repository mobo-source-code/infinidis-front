import { useContext } from "react";
import AuthContext from "../hooks/useAuth";

const Dash = () => {

    const {toLogout} = useContext(AuthContext)    

    const handleLogout = async e => {
        e.preventDefault();
        await toLogout()
    }

    return (
        <h1 onClick={handleLogout} className="text-inter text-3xl font-bold text-links text-center">
            Logout 
        </h1>
    )
}

export default Dash;