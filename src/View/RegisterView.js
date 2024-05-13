import Register from "../components/LearnerComponent/Register";
import { Provider } from "react-redux";
import store from "../../src/store/UpdateUserProfileStore";


function RegisterView() {
    //localStorage.setItem('id',1)
    return (
        <div className="App">
            <Provider store={store}>
                <Register />
                
            </Provider>
        </div>
    );
}

export default RegisterView;

