import { useState } from "react"
import { Accordion, Alert, Form,Card, Button } from "react-bootstrap"
import {Container, Row, Col} from "react-bootstrap"

const App = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [isSuccess, setIsSuccess] = useState(null)
    const login = () => {
        console.log(email, password)
        if(email === "admin@example.com" && password === "12345"){
            setIsSuccess(true)
        }else{
            setIsSuccess(false)
        }
    }
    return (
        <>
        <input type="text" placeholder="email" 
        onInput={(e)=>{setEmail(e.target.value)}}/>


    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control   defaultValue="email@example.com" 
          onInput={(e)=>{setEmail(e.target.value)}} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" 
          onInput={(e)=>{setPassword(e.target.value)}}/>
        </Col>
        {
            isSuccess && 
            <Alert variant="success">Login Successfull!</Alert>        
        }
        {
            !isSuccess && 
            <Alert variant="danger">Login Failed!</Alert>        
        }
        
        <Form.Control type="button" value="Submit" 
        onClick={(e)=>{login()}}/>
      </Form.Group>
    </Form>
  
        </>
    )
}

export default App