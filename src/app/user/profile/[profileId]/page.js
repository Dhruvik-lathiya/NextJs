'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const para = useParams()
  return (
    <>
    <h1>{para.profileId}</h1>
    <h1>{para.profileId}</h1>
    <h1>{para.profileId}</h1>
    <h1>{para.profileId}</h1>
    <h1>{para.profileId}</h1>
    <h1>{para.profileId}</h1>
    </>
  )
}

export default page