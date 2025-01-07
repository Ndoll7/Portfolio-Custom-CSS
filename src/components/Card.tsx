import React from 'react'
import Image from 'next/image';
import '../app/styles/card.css';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
 }

const Card: React.FC<propsType> = ({title, desc, img, tags}) => {
    const isClient = typeof window !== 'undefined'; // Check if we're on the client

  return (

    <div className={`card ${isClient && window.innerWidth >= 640 ? 'card-sm' : ''}`} data-aos="zoom-in-up">
        <div>
            <Image className={`card-image ${isClient && window.innerWidth >= 640 ? 'card-image-sm' : ''}`}
            src={img}
            width={200}
            height={250}
            alt={title}
            />
        </div>
        <div className='card-content'>
            <div className='card-title'>{title}</div>

            <div>{desc}</div>

        <div>
            {tags.map((el) => (
                <div className='card-tags' key={el}>
                    {el}
                    </div>))}
        </div>
    </div>
    </div>
  )
}

export default Card
