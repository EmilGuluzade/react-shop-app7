import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Summer from '../../../components/site/Sections/Summer/Summer'
import Cards from '../../../components/site/Sections/Cards/Cards'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>
           
           <Summer></Summer>
           <Cards></Cards>
    </>
    )
}

export default Home
        