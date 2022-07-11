import React, {useState} from 'react'
import './App.css'
import {Title} from './Styles/main'
import {Bar} from './Styles/main'
import {Header} from './Styles/main'
import {Routes} from './Styles/projects'

export default function Portfolio() {

  const [icons, set_icons] = useState('')

  return(
    <>

      <Header>

        <Title>Ademir Ramos</Title>

        <Bar/>

        <a href="https://github.com/AdemirRamos" title="Click here to return to the main page." target="_blank">Main Page</a>

        <div>

          <a href="https://github.com/AdemirRamos" title="Click here to check my GitHub Profile!" target="_blank">GitHub</a>
          <a href="https://github.com/AdemirRamos" title="Click here to see my repositories.">Repositories</a>
          <a href="https://github.com/AdemirRamos" title="Click here to know a little bit more about me.">About Me</a>

        </div>

      </Header>

      <Routes>

        <p>Routes</p>

        <div onMouseOver={() => set_icons('icon_animation')} onMouseOut={() => set_icons('icon_pre-animation')}>

          In this project, I've used a lot of different technologies and languages.
          I've used: HTML5, CSS3, SCSS, Tailwind CSS, JS (POO), Node JS, TS and Jest.
          What does the this project do?
          It just allows the user to navegate through different pages, filled with different projects, all created by me.

        </div>

        <section>

          <span className={icons}>Technologies used in this project:</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo." className={icons}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo." className={icons}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS logo." className={icons}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript logo." className={icons}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Typescript logo." className={icons}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node JS logo." className={icons}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS logo" className={icons}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest logo." className={icons}/>

        </section>

      </Routes>

    </>
  )
}
