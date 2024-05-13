import axios from 'axios';

const API_BASE_URL = 'http://localhost:5199/lxp';
// const API_BASE_URL = "http://localhost:5199/lxp";
// const LearnerId = '9dea763a-11da-4cb3-85f0-6597958609cc';
//  http://localhost:5199/lxp/learner/updateProfile/9dea763a-11da-4cb3-85f0-6597958609cc



///get api
export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/view/learnerProfile/${userId}`)
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

// for updating the profile 
// export const updateUserData = async (LearnerId, editInfo) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/learner/updateProfile/${LearnerId}`, editInfo);
//     console.log("api",response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating status: ', error);
//   }
// };


// export const updateUserData = async (LearnerId, editInfo) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/learner/updateProfile/${LearnerId}`, editInfo, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error updating status: ', error);
//   }
// };



// export const updateUserData = async (LearnerId, editInfo) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/learner/updateProfile/${LearnerId}`, editInfo, {
//       headers: {
//         'Content-Type': 'application/json' // Set the content type to application/json
//         // 'Content-Type': 'multipart/form-data'
//       }
//     });
//     console.log("api", response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating status: ', error);
//   }
// };



export const updateUserData = async (LearnerId, editInfo) => {
  try {
    // Create an instance of FormData
    const formData = new FormData();

    // Append the fields from editInfo to formData
    for (const key in editInfo) {
      formData.append(key, editInfo[key]);
    }

    // Make the HTTP request with formData and the appropriate headers
    const response = await axios.put(`${API_BASE_URL}/learner/updateProfile/${LearnerId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
      }
    });

    console.log("api", response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating status: ', error);
  }
};
