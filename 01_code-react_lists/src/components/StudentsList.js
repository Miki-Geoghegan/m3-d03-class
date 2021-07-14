import React from 'react'

const studentsList=['Morgane', 'Miki', 'Sebas', 'Raul', 'Lau', 'Victor', 'Danny'] 
const studentsListJSX=[<p>'Morgane'</p>, <p>'Miki'</p>,  <p>'Sebas'</p>, <p>'Raul'</p>, <p>'Lau'</p>, <p>'Victor'</p>, <p>'Danny'</p>]

function StudentsList() {
    return(
    <div className='List'>
        <h2>List of PizzaBytes students</h2>
        {/* <p>studentsList</p> this would print all elements of array in one long string
        to turn into an array we need the map function: */}
        <p>{studentsList.map(student => <p>{student}</p>)}</p>
        
        {/* We could also just use <p>studentsListJSX</p> if we have put all the p tags in the variable - this is if we want to create by hand but is longer */}
        {/* could also have in <ul></ul> with 'student' as <li></li> */}
    </div>
    )
}

/* in jsx we need methods like .map and .filter that return a NEW array, not forEach that does not return a new array and will give undefined or .push, as this returns a number */








export default StudentsList