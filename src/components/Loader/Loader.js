import { Spinner } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Loader.css'

const Loader = () =>{
    return(
        <div className="spinnerContainer">
            <div>
                <Spinner className="spinner"/>
            </div>
        </div>
    )
}
export default Loader