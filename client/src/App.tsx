import { Formik } from 'formik'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { object, string } from 'yup'

import './App.css'

function App() {
  const initialValues = {
    long: '',
    short: ''
  }

  const validationSchema = object().shape({
    long: string().url().required('Required'),
    short: string().min(1).required('Required')
  })

  return (
    <Container className="mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //TODO: Send data to server
          console.log(values)
        }}
      >
        {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="long">
              <Form.Label>Long link</Form.Label>
              <Form.Control
                type="text"
                name="long"
                value={values.long}
                onChange={handleChange}
                isValid={touched.long && !errors.long}
                isInvalid={!!errors.long}
                placeholder="Enter long link"
              />
              <Form.Text className="text-muted">
                Link to be shortener.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors.long}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="short">
              <Form.Label>Short link</Form.Label>
              <Form.Control
                type="text"
                name="short"
                value={values.short}
                onChange={handleChange}
                isValid={touched.short && !errors.short}
                isInvalid={!!errors.short}
                placeholder="Enter short link"
              />
              <Form.Control.Feedback type="invalid">
                {errors.short}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Start
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default App
