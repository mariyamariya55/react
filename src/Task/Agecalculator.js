import React, { useState, } from 'react'
import { CardBody,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Agecalculator() {
const[date,setDate]=useState('')
const[age,setAge]=useState('')

const calculateAge=()=>{
const today=new Date()
const birthDate=new Date(date)
let age=today.getFullYear()-birthDate.getFullYear()
let monthdifference=today.getMonth()-birthDate.getMonth()
if(monthdifference<0 ||(monthdifference===0 && today.getDate()<birthDate.getDate())){

    age--
  }
setAge(age)
}
return (
    <div><Row>
      <Col sm={4}></Col>
      <Col sm={4}>
        <Card>
          <CardBody>
      <h1 style={{color:'blue',marginRight:'10',paddingleft:'40%',paddingRight:'30%',textAlign:'center'}}>Age Calculator</h1>
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
      <button onClick={calculateAge}> calculateAge</button>
      {age !==null &&<h3 style={{marginRight:'10%',height:'10%',paddingLeft:'20%',marginTop:'5%'}}>Your age is:{age}</h3>}
      </CardBody>
      </Card>
      </Col>
      </Row>
    </div>
  )
}

export default Agecalculator
