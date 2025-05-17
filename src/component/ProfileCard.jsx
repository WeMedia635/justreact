import React from 'react'

const ProfileCard = ({name,lastName,Designation}) => {
  return (
    <div>
        <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto mt-10">
            <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center text-gray-700">{name} {lastName}</h2>
            <p className="text-gray-600 text-center">{Designation}</p>
        </div>
    </div>
  )
}

export default ProfileCard