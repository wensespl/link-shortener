import axios from 'axios'
import { Formik } from 'formik'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { object, string } from 'yup'

function App() {
  const [link, setLink] = useState('')
  const api = process.env.REACT_APP_API as string

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
        onSubmit={async (values) => {
          const response = await axios.post(api, {
            long_url: values.long,
            short_url: values.short
          })

          if (response.status === 201) {
            console.log(response.data)
            setLink(api + response.data.short)
          }
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
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
      {<a href={link}>{link}</a>}
    </Container>
  )
}

export default App
