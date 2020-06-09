import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default class Login extends Component {

  state = {
    email: "",
    password: "",
    usuario:{}
  }

  componentDidMount() {
    
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = async e => {
    e.preventDefault()
    
    const res = await axios.get(`/services_fastcode/webapi/usuario_service/${this.state.email}/${this.state.password}`)
    this.setState({
      usuario: res.data
  })
  console.log(this.state.usuario)
  }

  render() {

    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Link to="/"
              style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <i className="material-icons left">keyboard_backspace</i>
                Volver a inicio
            </Link>
            <Col>
              <h4>
                <b>Inicie sesión</b> a continuación
              </h4>
              <p>
                ¿No tienes una cuenta? <Link to="/register" style={{ textDecoration: 'inherit' }}>Regístrate</Link>
              </p>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                  placeholder="Ingrese correo electrónico"
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  />
              </Form.Group>
              <Button variant="primary" type="submit">
                Iniciar sesión
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}