import React from 'react'
import { Provider } from "react-redux";
import store from "../store/UpdateUserProfileStore";
import UpdateUserProfile from '../components/LearnerComponent/UpdateUserProfile';

function UpdateUserProfileView
() {
  return (
    <div >
            <Provider store={store}>
                <UpdateUserProfile/>
                
            </Provider>
        </div>
  )
}

export default UpdateUserProfileView;