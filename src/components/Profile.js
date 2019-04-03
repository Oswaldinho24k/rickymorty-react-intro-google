import React from 'react'

const Profile = ({ name = 'perro', image }) => (
    <div>
        {name}'Profile
        <img src={image} />
    </div>
)

export default Profile