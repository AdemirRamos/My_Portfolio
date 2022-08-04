import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

import {Title} from '../Styles/main'
import {Bar} from '../Styles/main'
import {Header} from '../Styles/main'
//import {Routes} from '../Styles/projects'
import {Project} from '../Styles/projects'
import RoutesImage from '../Images/routes.png'
import HomePage from '../Images/home page.png'
import Gallery from '../Images/gallery.png'
import Electronic from '../Images/electronic urn.png'

export default function Projects() {

  const [icons, set_icons] = useState('')
  const [icons2, set_icons2] = useState('')
  const [icons3, set_icons3] = useState('')
  const [icons4, set_icons4] = useState('')

  function routes() {
    window.open('https://ademirramos.github.io/Routes/')
  }

  function home() {
    window.open('https://ademirramos.github.io/Home_Page/')
  }

  function gallery() {
    window.open('https://ademirramos.github.io/Gallery/')
  }

  function urn() {
    window.open('https://ademirramos.github.io/Electronic_Urn')
  }

  return(
    <>

      <Header>

        <Title>Ademir Ramos</Title>

        <Bar/>

        <Link to="/My_Portfolio/" title="Click here to return to the main page.">Main Page</Link>

        <div>

          <a href="https://github.com/AdemirRamos" title="Click here to check my GitHub Profile!" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/AdemirRamos" title="Click here to know a little bit more about me." target="_blank" rel="noreferrer">About Me</a>

        </div>

      </Header>

      <Project>

        <p></p>

        <div>

          In this project, I've used a lot of different technologies and languages.
          I've used: HTML5, CSS3, SCSS, Tailwind CSS, JS (POO), Node JS, TS and Jest.
          What does the this project do?
          It just allows the user to navegate through different pages, filled with different projects, all created by me.

        </div>

        <section onLoad={() => set_icons('animation-start')} className="extra-margin">

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

      </Project>

      <img src={RoutesImage} alt="It reads 'Routes'." className="project-image" onMouseOver={() => set_icons('icon_animation')} onMouseOut={() => set_icons('icon_pre-animation')} onClick={routes} title="Click here to open this project."/>

      <section className="parallax-section parallax"><span>Next Project: "Home Page"</span></section>

      <Project>

        <p></p>

        <div className="text-adjustment1">

          Another project completely done on my own.
          Here we have a home page with a changeable background.
          When you pass the pointer (of mouse) over the items in the left menu,
          the background-image will change and a message will appear in the center of display (both followed by transitions).

        </div>

        <section onLoad={() => set_icons2('animation-start')} className="extra-margin1">

          <span className={icons2}>Technologies used in this project:</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo." className={icons2}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo." className={icons2}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript logo." className={icons2}/>

        </section>

      </Project>

      <img src={HomePage} alt="It reads 'Main Page'." className="project-image2" onMouseOver={() => set_icons2('icon_animation')} onMouseOut={() => set_icons2('icon_pre-animation')} onClick={home} title="Click here to open this project."/>

      <section className="parallax-section2 parallax2"><span>Next Project: "Gallery"</span></section>

      <Project>

        <p></p>

        <div className="text-adjustment2">

          In this project, I've created one gallery with a modal window.
          On the left side of the page, there are tabs which will open once clicked;
          when opened, those tabs will show a sequence of images and,
          to pass the cursor over those thumbnails, will get them clearer;
          to click on them will spawn a modal window (at the center of screen) and,
          at the bottom of the page, there will be the "alt" of the clicked image, also,
          on the right side tab and while the cursor stay over an thumbnail (and not in "modal window mode"),
          the "alt" of the selected image will appear in the above tab.

        </div>

        <section onLoad={() => set_icons3('animation-start')} className="extra-margin2">

          <span className={icons3}>Technologies used in this project:</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo." className={icons3}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo." className={icons3}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript logo." className={icons3}/>

        </section>

      </Project>

      <img src={Gallery} alt="It reads 'Gallery'." className="project-image3" onMouseOver={() => set_icons3('icon_animation')} onMouseOut={() => set_icons3('icon_pre-animation')} onClick={gallery} title="Click here to open this project."/>

      <section className="parallax-section3 parallax3"><span>Next Project: "Electronic Urn"</span></section>

      <Project>

        <p></p>

        <div className="text-adjustment3">

          In this project, I've recreated one electronic urn.
          That's how people in Brazil (and other countries) vote. It's easy, simple and quick.

        </div>

        <section onLoad={() => set_icons4('animation-start')} className="extra-margin3">

          <span className={icons4}>Technologies used in this project:</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo." className={icons4}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 logo." className={icons4}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript logo." className={icons4}/>

        </section>

      </Project>

      <img src={Electronic} alt="It reads 'Electronic Urn'." className="project-image4" onMouseOver={() => set_icons4('icon_animation')} onMouseOut={() => set_icons4('icon_pre-animation')} onClick={urn} title="Click here to open this project."/>

      <section className="parallax-section4 parallax4"><span title="Click here to go to page 2.">Next: Page 2</span></section>

    </>
  )
}
