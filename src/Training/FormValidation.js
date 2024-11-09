import React, { useState } from 'react'
import * as yup from 'yup';
import {Formik, ErrorMessage} from 'formik'

function FormValidation() {
    const [details, setDetails] = useState({
        name:"",
        age:"",
        mail:""
        
    })

    const schema = yup.object().shape({
        name:yup.string().required("you cant leave empty"),
        age:yup.number().positive("age must be positive value").required("required"),
        mail:yup.string().email().required()
    })

    function handleChange(e){
        setDetails({...details,[e.target.name]:e.target.value})

    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(details)
    }
  return (
    <div>
        <Formik
        initialValues={details}
        enableReinitialize
        validationSchema={schema}
        handleSubmit={handleSubmit}
        >
            {({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name'  onChange={handleChange}/>
            <ErrorMessage className='text-danger' component="div" name="name"  />
            <input type='text' name='age' onChange={handleChange}/>
            <ErrorMessage component="div" name="age" />
            <input type='text' name='mail' onChange={handleChange} />
            <ErrorMessage component="div" name="mail" />
            <button type='submit'>submit</button>
        </form>
        )}
        </Formik>
      
    </div>
  )
}

export default FormValidation

//npm i yup
//npm i formik
