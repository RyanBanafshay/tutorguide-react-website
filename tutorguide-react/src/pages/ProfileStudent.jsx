import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import StudentProfile from '../components/StudentProfile/StudentProfile'
import Footer from '../components/Footer/Footer'

const ProfileStudent = () => {
  return (
    <section>
        <Navbar/>
        <StudentProfile/>
        <Footer/>
    </section>
  )
}

export default ProfileStudent