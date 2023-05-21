import axios from 'axios';

// Call to localhost backend to get user data
// http://127.0.0.1:5000/user/profile?userID=6468ec339d23f8e8ae7ca59c

export const getUserData = async ( /** @type {string} */ userID ) => {
    try {
        const res = await axios.get("http://127.0.0.1:5000/user/profile",{
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
                params: {
                    userID: userID
                }
            });
        }
    catch (err) {
        console.log(err);
    }
}
