import React from 'react'
import chalkboard from '../images/chalkboard.jpg'
import students from'../images/students.jpg'
import triangle from'../images/triangles.jpg'

const Home = () => {
  return (
    <div>
        <div className='container'>
            <img className='section_img' src={triangle} alt="" />
            <p className='label'>3.2 The Triangle and its Properties </p>
        </div>
        <div className='side_by_container'>
            <div className='side_by'>Contact a tutor</div>
            <div className='side_by'>Find a study group</div>
            <div className='side_by'></div>
            <div className='side_by'></div>
        </div>
        <div className='container'><img className='section_img' src={chalkboard} alt="" />
        <p className='label'>Section Number and Label</p>
        </div>
        
        <div className='container'><img className='section_img' src={students} alt="" />
        <p clas className='label'>Section Number and Label</p>
        </div>
    </div>
  )
}

export default Home