import React from 'react'
import CogAnimation from '../components/animation/cogAnimation'
import IconGrind from '../components/navigations/IconGrind'
import TopBarNav from '../components/navigations/TopBarNav'
import './Scss/pages.scss'


export default function Home() {
  return (
    <div className='wrapper_container'>
        
      <div className='cogAnimation'>
        <CogAnimation/>
      </div>
      <div className='homeContent'>
        <TopBarNav/>
        <div className='textBox'>
            <div className='text'>
            <p>My name is Magnus, I’m tester and hobby developer who always looking to learn something new. 
                  this site is one of my project and it will change and evolve to test out diffrent functions and 
                  UX solutions.
              </p>
              <p>Navigate via the buttons below to find out more about me.</p>
            </div>
        </div>
        <div className='gridBar'>
          <IconGrind/>
        </div>
      </div>
    </div>
  )
}
