import React from 'react'
import Layout from '../Components/Layout'
import { Route, Routes } from 'react-router-dom'
import { authRoute } from './data'

const Routers = () => {
    return (
        <Layout>
            <Routes>
                {
                    authRoute.map(element => (
                        <Route {...element} />
                    ))
                }
            </Routes>
        </Layout>
    )
}

export default Routers
