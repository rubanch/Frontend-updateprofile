import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { connect } from 'react-redux';
import { setEditInfo, toggleEditable } from '../../actions/UpdateUserProfileActions';
import { fetchUserData, updateUserData } from '../../middleware/UpdateUserProfileApi';
import { ValidationUpdateUserProfile } from '../../utils/ValidationUpdateUserProfile';
import '../../Styles/UpdateUserProfile.css'




const UpdateData = () => {

    const [editInfo, setEditInfo] = useState({});
    const [isEditable, setIsEditable] = useState(false);
    const [userId] = useState("6cd8dc15-e20b-44d3-90e8-c4ac770a683f");
    const [LearnerId]=useState("9dea763a-11da-4cb3-85f0-6597958609cc")
    




    const calculateMaxDate = () => {
        const today = new Date();
        today.setFullYear(today.getFullYear() - 18);
        return today.toISOString().split('T')[0];
    };





    const fetchData = async () => {
        const data = await fetchUserData(userId);
        if (data) {
            setEditInfo(data);
        }
    };

   
    const updateStatus = async () => {
        const errors = ValidationUpdateUserProfile(editInfo);

        // Check for validation errors
        if (Object.keys(errors).length > 0) {
            // Check for a specific error related to the contact number
            if (errors.contactNumber) {
                alert(errors.contactNumber); // Alert the user about the invalid phone number
            } 
            else {
                alert("Please insert all the required fields.");
            }
            console.error('Validation errors', errors);
            return;
        }

        const data = await updateUserData(LearnerId, editInfo);  // the changes i made
        if (data) {
            setEditInfo(data);
            alert("The field has been successfully inserted");
            toggleEditable(false); // Assuming this is the correct method to set isEditable to false
            window.location.reload(); // Refresh the page to reflect the changes
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    };




    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditInfo({ ...editInfo, [name]: value });
    };




    const enableEditing = () => {
        setIsEditable(!isEditable);
    };





    const handleThumbnailChange = (event) => {
        event.preventDefault();
        if (event.target.files && event.target.files[0]) {

            setEditInfo({ ...editInfo, profilePicture: event.target.files[0] });
        }
    };









    useEffect(() => {
        fetchData();
    }, [userId]);

    if (!editInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid py-5  backgroundcontainer"  >
            <div className="card mx-auto cardcolor" style={{ maxWidth: '500px' }}  >
                <div className="card-body">
                    <h1 className="card-title text-center mb-4">User Information</h1>
                    <div className='mb-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar alt="User Avatar" src={editInfo.profilePicture} style={{ width: '100px', height: '100px' }} />
                    </div>

                    <input type="file" id="profile" name="profilePicture" onChange={handleThumbnailChange} accept="image/jpeg, image/png, image/gif, image/bmp, image/svg+xml" style={{ display: 'none' }} />
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => document.getElementById("profile").click()} className='btn btn-link' disabled={!isEditable}>Upload Profile image</button>
                    </div>


                    <>
                        <div className="mb-3">
                            <input type="text" name="firstName" className="form-control" placeholder="First Name" value={editInfo.firstName} onChange={handleInputChange} disabled={!isEditable} />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="lastName" className="form-control" placeholder="Last Name" value={editInfo.lastName} onChange={handleInputChange} disabled={!isEditable} />
                        </div>

                        <div className="mb-3">
                            <input
                                type="date"
                                name="dob"
                                className="form-control"
                                placeholder="Date of Birth"
                                value={editInfo.dob}
                                onChange={handleInputChange}
                                disabled={!isEditable}
                                max={calculateMaxDate()}
                                onKeyDown={(e) => e.preventDefault()}

                            />
                        </div>
                        <div className="mb-3">
                            <select
                                name="gender"
                                className="form-control"
                                value={editInfo.gender}
                                onChange={handleInputChange}
                                disabled={!isEditable}

                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>

                            </select>
                        </div>

                        <div className="mb-3">
                            <input type="number" name="contactNumber" className="form-control mobile" placeholder="Contact Number" value={editInfo.contactNumber} onChange={handleInputChange} disabled={!isEditable} />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="stream" className="form-control" placeholder="Stream" value={editInfo.stream} onChange={handleInputChange} disabled={!isEditable} required />
                        </div>



                        <div className="text-center">

                            {/* <button type="button" className="btn btn-primary" onClick={() => { if (isEditable) { updateStatus(); } } } disabled={!isEditable} onClick={enableEditing}> Update </button> */}
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    if (isEditable) {
                                        updateStatus();
                                    }
                                    enableEditing();
                                }}
                                disabled={!isEditable}
                            >
                                Update
                            </button>

                            <button type="button" className="btn btn-secondary ms-2" onClick={enableEditing}>Edit</button>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    editInfo: state.editInfo,
    isEditable: state.isEditable,
});





const mapDispatchToProps = (dispatch) => ({
    setEditInfo: (info) => dispatch(setEditInfo(info)),
    toggleEditable: (editable) => dispatch(toggleEditable(editable)),
    // Add other methods to dispatch actions
});


export default connect(mapStateToProps, mapDispatchToProps)(UpdateData);


