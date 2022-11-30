import React, { useContext, useEffect } from 'react'
import { Context } from '../context/ContextProvider'
import { getData } from '../helpers/getData'
import { endPoint } from '../helpers/URL'
import Card from './Card'
import CardList from './CardList'

function Main() {

    const {datas, setDatas, favProfile} = useContext(Context)

    useEffect(() => {

        getData(setDatas, endPoint)
        // if (datas) {
        //     console.log(datas.name.first);
        // }
    }, [])

  return (
    <main>
        <div className='w-full mb-5'>

        {
            datas &&
            <Card
                name={datas.name.first}
                lastName={datas.name.last}
                photo={datas.picture.large}
                location={datas.location.country}
                uuid={datas.login.uuid}
            />
        }
        </div>

        {
            favProfile &&
                favProfile.map((e) => (
                    <CardList key={e.uuid} name={e.name} lastName={e.name} photo={e.photo} location={e.name} uuid={e.uuid} />
                ))

        }
    </main>
  )
}

export default Main