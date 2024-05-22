import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Summer from '../../../components/site/Sections/Summer/Summer'
import Cards from '../../../components/site/Sections/Cards/Cards'
import Leader from '../../../components/site/Sections/Leader/Leader'
import Banner from '../../../components/site/Sections/Banner/Banner'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Cards></Cards>
           <Leader></Leader>
           <Summer></Summer>
          
    </>
    )
}

export default Home
        