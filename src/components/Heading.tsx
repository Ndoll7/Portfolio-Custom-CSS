import React from 'react'
import '../app/styles/heading.css';
interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='heading-container' data-aos="zoom-in-up">
      <p className='heading-tittle'>{title}</p>
    </div>
  )
}

export default Heading
