"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const para = useParams()
    if(para.adminid >= 18){
        return (
            <>
            <h1>You can vote</h1>
            </>
        )
    }
    else{
        return (
            <>
            <h1>You cannot vote</h1>
            </>
        )
    }

}

export default page