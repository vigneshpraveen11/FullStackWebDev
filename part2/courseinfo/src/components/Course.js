import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {

    const sumOfCourses = course.parts.reduce((sum, p) => sum + p.exercises, 0)

    return (
        <div>
            <Header title = "Web Development Curriculam" />
            <Header title={course.name} />
            <Content parts={course.parts} sum = {sumOfCourses}/>
        </div>
    )
}

export default Course;