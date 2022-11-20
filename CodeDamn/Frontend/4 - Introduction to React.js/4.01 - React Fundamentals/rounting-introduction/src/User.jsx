import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
	const { username } = useParams();
	const [userData, setUserData] = useState({});
	useEffect(() => {
		fetch('/User.json').then((data) => {
            return data.json() 
        }).then((data) => {
            setUserData(data[username])
            
        });
	}, [username]);
	return <div>
        <h1>I am a {username} component</h1>
        <p>Name: {userData.name}</p>
        <p>Age: {userData.age}</p>
    </div>;
}

export default User;
