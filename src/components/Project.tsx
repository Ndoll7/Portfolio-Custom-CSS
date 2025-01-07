import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app/styles/project.css';

const data = [
    {
        id: 0,
        title: "Simple Calculator" ,
        desc: "Abasic HTML,CSS and TypeScript calculator for performing arithmetic operators",
        img: "/pic1.jpg",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 1,
        title: "Countdown Timer" ,
        desc: "A Next.js and TypeScript powered website to track time with an enter active countdown feature..",
        img: "/pic2.jpg",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 2,
        title: "Currency Converter" ,
        desc: "A simple html and typescript powered tool for converting currencies with real-time rates..",
        img: "/pic3.jpg",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 3,
        title: "Dynamic Resumer Builder" ,
        desc: "A typescript dynamic resumer builder with HTML and CSS,allowing user to generate dynamic resumer builder..",
        img: "/pic4.jpg",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 4,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based Interactive Resume Built with HTML and CSS, allowing user to showcase their skills dynamically..",
        img: "/pic5.jpg",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 0,
        title: "Weather Widget Project" ,
        desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data..",
        img: "/pic6.jpg",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
    },
]

const project = () => {
  return (
    <div id='project' className='project-container'>
      <Heading title="My Project"/>
      <div className='project-grid project-grid-xl project-grid-md-2 project-grid-lg-3 project-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default project
