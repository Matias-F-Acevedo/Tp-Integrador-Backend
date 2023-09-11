import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, Outlet} from "react-router-dom";

const ProtectedRouter = ({redirectPath})=> {

    const {user} = useContext(UserContext);
    if(!user) return <Navigate to={redirectPath} replace/>
    return <Outlet/>
}

export default ProtectedRouter;