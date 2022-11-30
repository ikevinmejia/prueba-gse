import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider';

function CardList({name, lastName, photo, location, uuid}) {

  const {favProfile, setFavProfile} = useContext(Context)

  const handleDeleteProfile = ({target}) => {
    const profileFound = favProfile.find(e => e.uuid === target.id)
    const index = favProfile.indexOf(profileFound)
    const newArray = favProfile.splice(index,1)
    console.log(newArray);
    setFavProfile([...favProfile, newArray])
  }

  return (

<div className="w-full max-w-sm mx-auto mb-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={photo} alt={`photo ${name} ${lastName}`}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name} {lastName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{location}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <button id={uuid} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300" onClick={(e) => handleDeleteProfile(e)}>Delete</button>

        </div>
    </div>
</div>

  )
}

export default CardList