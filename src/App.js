import React, {useState} from 'react'
import {Title} from './Styles/main'
import {Bar} from './Styles/main'
import {Header} from './Styles/main'
import {Body} from './Styles/main'
import Image from './Images/red.png'

export default function Portfolio() {

  const [number, set_number] = useState(0)

  return(
    <>

      <Header>

        <Title>Ademir Ramos</Title>

        <Bar/>

        <a href="https://github.com/AdemirRamos" title="Click here to check my GitHub Profile!" target="_blank" rel="noreferrer">

          GitHub

        </a>

        <div>

          <a href="https://github.com/AdemirRamos" title="Click here to see my projects.">Projects</a>
          <a href="https://github.com/AdemirRamos" title="Click here to see my repositories.">Repositories</a>
          <a href="https://github.com/AdemirRamos" title="Click here to know a little bit more about me.">About Me</a>

        </div>

      </Header>

      <Body>

        <p onClick={() => set_number(number + 10)}>

          {number} <br/>

          Hello! My name is Ademir Ramos and this is a little portfolio I'm constructing
          to tell and show you a little bit more about myself. <br/>
          Here you can find my GitHub profile; my repositories; and more information about me and what I'm doing.

        </p>

        <img src={Image} alt="Logo from 'Songs For The Deaf' from Queens of the Stone Age."/>

      </Body>

    </>
  )
}
