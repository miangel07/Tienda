import React from 'react'
import HoneOrganismo from '../organismos/HomeOrganismo'
import FooterMolecula from '../moleculas/FooterMolecula'
const Home=()=> {
  return (
    <div>
      <HoneOrganismo/>
      <div className='mt-8  '>
        <FooterMolecula/>
      </div>
    </div>
  )
}

export default Home