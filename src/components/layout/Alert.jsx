import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
function Alert(){
    const alertContext=useContext(AlertContext);
    const {alert}=alertContext;
    return (
        alert !==null && <div style={{margin:'25px',backgroundColor:"aliceblue",padding:"12px"}}><i className="fas fa-info-circle"></i>{alert.msg}</div>
    )
}
export default Alert;