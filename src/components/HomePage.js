import React from 'react'
import { Image } from 'react-bootstrap'
import ProfilePicture from '../Images/dejii.webp'
import BackButton from '../Images/Icon2.png'
import Slack from '../Images/slack.png'
import Github from '../Images/Icon.png'
import I4G from '../Images/I4G.png'
import Zuri from '../Images/Vector.png'

const HomePage = () => {
  return (
    <>
            <Image rounded
                id='profile__img'
                className='profile__img'        
                alt='src' src={ProfilePicture}/>

             <Image
             className='back-button'
             src={BackButton}
             /> 
        <div className='Annette-Black'>
          <p id='twitter' className='twitter'>Adedeji Laniyan</p>
          <p hidden id='slack'>adedeji.laniyan</p>
        </div>
        
        <a className='a-tag' href='https://twitter.com/TheDejiLaniyan'>
          <button id='btn_zuri' className='button' >
              Twitter Link
          </button>
        </a>
        <a className='a-tag' href='https://training.zuri.team/'>
          <button id='btn_zuri' className='button' >
              Zuri Team
          </button>
        </a>
        <a className='a-tag' href='http://books.zuri.team/'>
          <button id='books' className='button' >
              Zuri Books
          </button>
        </a>
        <a className='a-tag' href='https://books.zuri.team/python-for-beginners?ref_id=adedeji.laniyan'>
          <button id='book_python' className='button' >
              Python Books
          </button>
        </a>
        <a className='a-tag' href='https://background.zuri.team/'>
          <button id='pitch' className='button' >
          Background Check for Coders
          </button>
        </a>
        <a className='a-tag' href='https://books.zuri.team/design-rules/'>
          <button id='book_design' className='button' >
            Design Books
          </button>
        </a>

        <div className='connect-social'>
          <Image 
                className='social'
                src={Slack}/>
          <Image
                className='social'
                src={Github}/>
        </div>

        <footer className='footer'>
            <Image
                  src={Zuri}
                  className='zuri'/>
            <p>HNG Internship 9 Frontend Task</p>
            <Image
                  src={I4G}
                  className='I4G'/>
        </footer>
        
    </>        
    )
}

export default HomePage