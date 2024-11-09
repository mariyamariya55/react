import React, { useState } from 'react'
import * as yup from 'yup'
import { ErrorMessage, Formik } from 'formik'

function Validation() {

    const [details, setDetails] = useState({
        name: '',
        age: '',
        phonenumber: '',
        gender: '',
        mail: ''
    })

    const skill = yup.object().shape({
        name: yup.string().required("you can't leave an empty"),
        age: yup.number().positive("age must ba a positive").required(),
        phonenumber: yup.number().positive().required(),
        gendre: yup.string().required(),
        mail: yup.string().required()
    })

    function handleChange(e) {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(details);

    }

    return (
        <div>
            <Formik
                initialValues={details}
                enableReinitialize
                validationSchema={skill}
                handleSubmit={handleSubmit}
            >
                {({ handleSubmit }) => (

                    <form onSubmit={handleSubmit}>
                        <input type='text' name='name' onChange={handleChange} />
                        <ErrorMessage component="div" name='name' />
                        <input type='text' name='age' onChange={handleChange} />
                        <ErrorMessage component="div" name='age' />

                        <input type='text' name='phonenumber' onChange={handleChange} />
                        <ErrorMessage component='div' name='phonenumber' />
                        <input type='text' name='gender' onChange={handleChange} />
                        <ErrorMessage component="div" name='gender' />



                        <input type='text' name='mail' onChange={handleChange} />
                        <ErrorMessage component='div' name='mail' />
                        <button type='Submit'>Submit</button>
                    </form>
                )}
            </Formik>
        </div>

    )
}

export default Validation
