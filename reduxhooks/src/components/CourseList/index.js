import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addCourseAction from '../../store/actions/courses';

export default function CourseList() {
    const qty = 2;
    
    const courses = useSelector( 
        state => state.data

    );
    const dispatch = useDispatch();

    function addCourse() {
        dispatch(addCourseAction('View JS'))
    }
    return (
        <>
            <ul>
                { courses.map( (course, index) => <li key={index}> {course}</li>) }
            </ul>
            <button type="button" onClick={addCourse}>
                add course
            </button>
      
        </>
    )
}
