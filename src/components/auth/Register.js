import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

export default class Register extends Component {
    state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    }

  componentDidMount() {
    
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

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
                <b>Regístrate</b> a continuación
              </h4>
              <p>
                ¿Ya tienes una cuenta? <Link to="/login" style={{ textDecoration: 'inherit' }}>Iniciar sesión</Link>
              </p>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Ingrese su nombre</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.name}
                  id="name"
                  type="text"
                  placeholder="Ingrese nombre completo"
                />
              </Form.Group>
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
              <Form.Group>
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password2}
                  id="password2"
                  type="password"
                  placeholder="Contraseña"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Regístrate
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}