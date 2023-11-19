import React, { useEffect, useState } from 'react';
import CardProfile from './sub-component/CardProfile';
import Subscription from './sub-component/Subscription';
import axiosClient from '../../ultils/AxiosClient';
const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const currentUser = async () => {
        try {
            const response = await axiosClient.get('/auth', {
            });

            // Handle the successful login response

            // Do something with the data, such as storing tokens or user information
            const data = response;
            return data; // Return any relevant data from the response
        } catch (error) {
            // Handle login error
            throw error;
        }
    };
    useEffect(() => {
        // Test api
        currentUser()
            .then((response) => {
                setProfileData(response);
                console.log(response);
            })
            .catch((error) => {
                // Handle login error
                console.error('Login Error:', error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once on component mount

    return (
        <div>
            {profileData && (
                <CardProfile name={profileData.data.fullname} email={'***********'} />
            )}
            <Subscription />
        </div>
    );
};

export default Profile;