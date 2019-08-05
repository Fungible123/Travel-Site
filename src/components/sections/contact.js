import React from "react"
import styled from "styled-components"
import { Formik, Field } from "formik"
import validationSchema from "@common/Validation"

const Form = styled.form`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.color.colorful.teal};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 0px 10px;
  }
`

const FormContainers = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 825px;
  margin: 0 auto;
  margin-top: 10px;
`

const HeaderContainer = styled.div`
  max-width: 825px;
  margin: 0 auto;
  border-bottom: 1px solid #ffffff;
  text-align: center;
  padding: 40px 0 10px 0;
`

const ButtonContainers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;

  input {
    width: 50%;
    height: 30px;
    margin: 5px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #ffffff;
    color: ${props => props.theme.color.light};
    font-family: ${props => props.theme.font.secondary};
    cursor: pointer;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 40px;
  max-width: 825px;
  margin: 10px auto 50px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    margin-bottom: 96px;
    grid-gap: 0px;
  }
`

const Label = styled.label`
  font-family: ${props => props.theme.font.secondary};
  font-size: ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.light};
`

const Fields = styled(Field)`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #ffffff;
  height: 40px;

  ${props =>
    props.message &&
    `
          height: 200px;
    `}
`

const Error = styled.p`
  color: red;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/?no-cache=1", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...values,
          }),
        })
          .then(() => {
            alert("Success!")
            setSubmitting(false)
          })
          .catch(error => {
            alert("Error: Please try again!")
            setSubmitting(false)
          })
      }}
      render={({
        touched,
        errors,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (
        <Form
          id="contact"
          name="contact"
          onSubmit={handleSubmit}
          onReset={handleReset}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <HeaderContainer>
            <h2>Contact us now so we could reserve your preferred room.</h2>
          </HeaderContainer>
          <Grid>
            <div>
              <FormContainers>
                <Label htmlFor="name">Name *</Label>
                <Fields type="text" name="name" />
                {touched.name && errors.name && <Error>{errors.name}</Error>}
              </FormContainers>
              <FormContainers>
                <Label htmlFor="email">Email Address *</Label>
                <Fields type="text" name="email" />
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </FormContainers>
              <ButtonContainers>
                <input type="reset" value="Clear" />
                <input
                  name="submit"
                  type="submit"
                  disabled={isSubmitting}
                  value="Send"
                />
              </ButtonContainers>
            </div>
            <div>
              <FormContainers>
                <Label htmlFor="message">Message *</Label>
                <Fields message name="message" component="textarea" rows="6" />
                {touched.message && errors.message && (
                  <Error>{errors.message}</Error>
                )}
              </FormContainers>
            </div>
          </Grid>
        </Form>
      )}
    />
  )
}

export default Contact
