// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Navbar.scss"
import person from "../../assets/image/person.png"
import sabad from "../../assets/image/sabad.png"

const Navbar = () => {
  return (
    <div>
        <div className="Navbar">
      <ul className="nav">
        <li>
        صفحه اصلی
        </li>
        <li>
          <a>برند ها</a>
        </li>
        <li>
          <a>ویژگی ها</a>
        </li>
        <li>
          <a>محصولات دیگر</a>
        </li>
        <li>
          <a>تماس با ما</a>
        </li>
      </ul>
      <div className='button'>
    <div className='button-1'>
    <button className='dokme'><img className='aksedokme' src={person}/> <p className='matndokme'>حساب کاربری</p></button>
    </div>
    <div className='button-2'>
    <button className='dokme2'><img className='aksedokme2' src={sabad}/><p className='matndokme2'>سبد خرید</p><p className='adaddokme'>0</p>
  </button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar