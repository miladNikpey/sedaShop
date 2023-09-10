// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Slider.scss"
import { Carousel } from 'antd';
import sliderpic from '../../assets/image/sliderpic.png'

const Slider = () => {
  return (
    <div>
        <div className='slider'>
        <Carousel autoplay dotPosition='bottom'>
    <div>
      <h3 className='sliderhandle'><img src={sliderpic}/></h3>
    </div>
    <div>
      <h3 className='sliderhandle'>2</h3>
    </div>
    <div>
      <h3 className='sliderhandle'>3</h3>
    </div>
    <div>
      <h3 className='sliderhandle'>4</h3>
    </div>
  </Carousel>
        </div>
    </div>
  )
}

export default Slider