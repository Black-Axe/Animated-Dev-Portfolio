/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { css } from '@emotion/react'
import logo from '../../assets/img/blackaxelogo.png'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required')
})

const emailURL = 'localhost:5000/api/email'
const recaptchaVerify = 'localhost:5000/api/recaptcha'
const emailLink = 'myemail@email.com'
const recaptchaSiteKey = 'getthisfromgooglepi'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`
const color = '#FFFF00'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [recaptchaVerified, setRecaptchaVerified] = useState(false)
  const [errorMsg, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const [loading, setLoading] = useState(false)
  const [personsName, setPersonsName] = useState('')
  const [disableFields, setDisabledFields] = useState(false)

  const recaptchaRef = useRef()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    setSubmitting(true)
    setDisabledFields(true)
    setLoading(true)
    // const token = await recaptchaRef.current.executeAsync();
    // let verifiedRecaptcha = await verifyRecaptcha(token);
    /*
        if(verifiedRecaptcha.verified){
            let resp = await submitData(data);
            if(resp.status === 200){
                setPersonsName(data.name);
                setSubmitted(true);
                setLoading(false);
                setSubmitting(false);
                setError(false);
            }
            else{
                setError(true);
            }
        }
        else{
            setError(true);
        }
        */
    // you can use the recaptcha token to send it to your backend server
    // use a microservice to handle this, we will include it in the repository
    console.log(data)

    setTimeout(() => {
      console.log('Hello')
    }, 3000)

    setLoading(false)
    setSubmitting(false)
    setError(false)
    setSubmitted(true)
  }

  const verifyRecaptcha = async (recaptchaToken) => {

    // const bodyData = { token: recaptchaToken }
    /*
            return await axios.post(url, bodyData).then(res => {
                return res.data;
            }).catch(err => {
                console.log(err);
                return {
                    success: false,
                    message: "Something went wrong"
                }
            })
            */
  }

  const submitData = async (data) => {
    // console.log(data);
    setLoading(true)
    const bodyData = {
      name: data.name,
      email: data.email,
      message: data.message,
      subject: data.subject ? data.subject : 'Contact form submission'
    }
    // return await axios.post(emailURL, bodyData);

    console.log(bodyData)
  }

  return (

    <div id="contact" className="fix">
      <div className="container ">
        <div className="row ">
          <div className="rn-contact-area ptb--120">
            <div className="contact-form--1">
              <div className="container">
                <div className="row row--35 align-items-start">
                  <div className="col-lg-6 order-2 order-lg-1 visibleOverParticles">
                    <div className="section-title text-left mb--50">
                      <h2 className="title"><span className="blueify">Contact</span></h2>
                      {// errors

                                    errorMsg ? <h4 className="text-danger">Something went wrong, please try again</h4>
                                      : ''
                                    }
                      <p className="description">
                        Need to get in touch?
                        {' '}
                        <br />
                        {' '}
                        Connect with me via email:
                        <a href={`mailto:${emailLink}`}>{emailLink}</a>
                        {' '}

                      </p>
                    </div>
                    {

                                submitted
                                  ? (
                                    <div className="alert alert-success" role="alert">
                                      Thank you
                                      {' '}
                                      {personsName}
                                      {' '}
                                      for your message. I will get back to you as soon as possible.
                                    </div>
                                  )
                                  : loading
                                    ? (
                                      <div className="paccy">
                                        <PacmanLoader css={override} size={30} color={color} loading={loading} />
                                      </div>
                                    )
                                    : (
                                      <div className="form-wrapper">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                          <label htmlFor="item01">
                                            <p className="form-error">{errors.name?.message}</p>
                                            <input
                                              {...register('name')}
                                              type="text"
                                              name="name"
                                              id="item01"
                                              placeholder="Your Name *"
                                              disabled={disableFields}
                                            />

                                          </label>

                                          <label htmlFor="item02">
                                            <p className="form-error">{errors.email?.message}</p>
                                            <input
                                              {...register('email')}
                                              type="text"
                                              name="email"
                                              id="item02"
                                              placeholder="Your email *"
                                              disabled={disableFields}
                                            />

                                          </label>

                                          <label htmlFor="item03">
                                            <input
                                              type="text"
                                              name="subject"
                                              id="item03"
                                              placeholder="Write a Subject"
                                              disabled={disableFields}
                                            />

                                          </label>
                                          <label htmlFor="item04">

                                            <p className="form-error">{errors.message?.message}</p>
                                            <textarea
                                              {...register('message')}
                                              type="text"
                                              id="item04"
                                              name="message"
                                              placeholder="Your Message"
                                              disabled={disableFields}
                                            />
                                          </label>
                                          <button disabled={disableFields} className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">{submitting ? 'submitting' : 'Submit'}</button>

                                          <br />
                                          <br />
                                          <ReCAPTCHA
                                            sitekey={recaptchaSiteKey}
                                            size="invisible"
                                            theme="dark"
                                            ref={recaptchaRef}
                                          />
                                        </form>
                                      </div>
                                    )

                            }

                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 visibleOverParticles">
                    <div className="thumbnail mb_md--30 mb_sm--30">
                      <img src={logo} alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
