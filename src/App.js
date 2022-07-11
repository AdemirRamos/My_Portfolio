import './App.css'
import React, {useState} from 'react'
import {Title} from './Styles/main'
import {Bar} from './Styles/main'
import {Header} from './Styles/main'
import {Body} from './Styles/main'
import Image from './Images/red.png'

/*Transform: https://www.w3schools.com/cssref/css3_pr_transform.asp*/

export default function Portfolio() {

  const [add_class, set_class] = useState('')

  return(
    <>

      <Header>

        <Title>Ademir Ramos</Title>

        <Bar/>

        <a href="https://github.com/AdemirRamos" title="Click here to check my GitHub Profile!" target="_blank" rel="noreferrer">GitHub</a>

        <div>

          <a href="./Components/projects.js" title="Click here to see my projects.">Projects</a>
          <a href="https://github.com/AdemirRamos" title="Click here to see my repositories.">Repositories</a>
          <a href="https://github.com/AdemirRamos" title="Click here to know a little bit more about me.">About Me</a>

        </div>

      </Header>

      <Body>

        <p>

          Hello! My name is Ademir Ramos and this is a little portfolio I'm constructing
          to tell and show you a little bit more about myself. <br/>
          Here you can find my GitHub profile; my repositories; and more information about me and what I'm doing.

        </p>

        <img src={Image} alt="Logo from 'Songs For The Deaf' from Queens of the Stone Age." title="Click here! - Image: Songs For The Deaf - Queens of the Stone Age." onClick={() => set_class('image_animation')} className={add_class}/>

      </Body>

    </>
  )
}
