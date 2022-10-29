import React from 'react'
import { Image } from 'react-bootstrap'
import MyImage from '../Images/dejii.webp'

const HomePage = () => {
  return (
    <>
       <div className='body'>
       <Image rounded
                id='profile__img'        
                alt='src' src={MyImage}/>
        <div className='Annette-Black'>
          <p id='twitter'>Annette Black</p>
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
        
       </div>
    </>        
    )
}

export default HomePage