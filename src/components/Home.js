import React from 'react'
import Content1 from '../Layout/Content1'
import Content2 from '../Layout/Content2'
import Content3 from '../Layout/Content3'
import Content4 from '../Layout/Content4'
import Content5 from '../Layout/Content5'
import Content6 from '../Layout/Content6'
import Content7 from '../Layout/Content7'
import './Home.css'

const Home = () => {
  return (
    <section className='grid-container'>
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
    </section>
  )
}

export default Home