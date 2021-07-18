import React, { useContext } from 'react'
import UserContext from '../context/user/UserContext'

const Profile = () => {

    const { selectedUsers } = useContext(UserContext)

    return (
        <>
            {
                selectedUsers ? (<div className='card card-body text-center'>
                    <img src={selectedUsers.avatar}
                        className='card-img-top rounded-circle m-auto img-fluid'
                        style={{ width: 180 }}
                    />
                    <h1>{`${selectedUsers.first_name} ${selectedUsers.last_name}`}</h1>
                    <h3>Email : {selectedUsers.email}</h3>
                </div>)
                    : (<h1>No User Selected</h1>)
            }
        </>
    )
}

export default Profile
