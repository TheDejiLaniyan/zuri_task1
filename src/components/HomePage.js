import React from 'react'
import { Image } from 'react-bootstrap'
import MyImage from '../Images/dejii.webp'

const HomePage = () => {
  return (
    <>
        <Image rounded
                id='profile__img'        
                alt='src' src={MyImage}/>
        <div className='Annette-Black'>
          <p id='twitter'>Annette Black</p>
          <p hidden id='slack'>adedeji.laniyan</p>
        </div>

        {/* <a id='btn_zuri' href='https://training.zuri.team/'>
            Twitter Link
        </a> */}
    </>        
    )
}

export default HomePage