import React, { useState } from 'react'
import useTranslate from './translate'
import './Contact.css'

const Phone = React.lazy(() => import('../SocialChannel/Phone'))
const Address = React.lazy(() => import('../SocialChannel/Address'))

const Contact = () => {
  const textContent = useTranslate()
  const [formData, setFormData] = useState({
    nameLastname: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='container'>
      <h2>{textContent.title}</h2>
      <div>
        <p>{textContent.description}</p>
        <div>
          <Address>{textContent.actionAddres}</Address>
          <Phone />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='nameLastname'
          placeholder={textContent.nameAndLastname}
          value={formData.nameLastname}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder={textContent.email}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder={textContent.message}
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
        <button type='submit'>{textContent.btnAction}</button>
      </form>
    </div>
  )
}

export default Contact
