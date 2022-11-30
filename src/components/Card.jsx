import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'

function Card({name, lastName, photo, location, uuid}) {

    const {favProfile, setFavProfile} = useContext(Context)
    const handleAddToFav = ({target}) => {
        if (target.id === 'favButton') {
            const datas = {
                name, lastName, photo, location, uuid
            }
            setFavProfile([...favProfile, datas])
            console.log(favProfile)
        }
    }


  return (

<div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={photo} alt={`photo ${name} ${lastName}`}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name} {lastName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{location}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <button id='favButton' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handleAddToFav(e)} >Add fav</button>
        </div>
    </div>
</div>

  )
}

export default Card