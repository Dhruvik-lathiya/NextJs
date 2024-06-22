"use client"
import App from './components/app'
import sidebarLinks from '../../../constants/sidebarconstant'
// import React, { useEffect, useState } from 'react'

const page = () => {
    return(
        <>
        <App/>
        {/* {sidebarLinks.map((val,ind,arr)=>{
            <Link href={val.route}>{}</Link>
        })} */}
        </>
    )
}

export default page