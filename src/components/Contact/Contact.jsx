import React, { useContext, useState } from 'react'
import useTranslate from './translate'
import useWidth from '../../hooks/useWidth'
import { ScrollContext } from '../../context/createContext'
import './Contact.css'
import banner from '/images/contact.png'

const Button = React.lazy(() => import('../Button/Button'))
const SocialChannel = React.lazy(() => import('../SocialChannel/SocialChannel'))
const Img = React.lazy(() => import('../Img/Img'))
const Phone = React.lazy(() => import('../SocialChannel/Phone'))
const Address = React.lazy(() => import('../SocialChannel/Address'))

const Contact = ({ bannerImg = true }) => {
  const width = useWidth()
  const {contactRef} = useContext(ScrollContext)
  const { setShowContact } = useContext(ScrollContext)
  const textContent = useTranslate()
  const [formData, setFormData] = useState({
    nameLastname: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSendEmail = () => {
    const { nameLastname, email, message, phone } = formData

    if (!nameLastname || !email || !message || !phone) {
      alert('Por favor, completa todos los campos antes de enviar el mensaje.')
      return
    }
    const emailAW = 'info@archiwood.biz'
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAW}&su=Contacto%20de%20${encodeURIComponent(
      nameLastname
    )}&body=${encodeURIComponent(
      `Name: ${nameLastname}\nEmail: ${email}\nPhone: ${phone}\n\n\nMessage: ${message}\n\n\n\n\n\n`
    )}`

    const mailtoLinkMobile = `mailto:${emailAW}?subject=Contacto%20de%20${encodeURIComponent(
      nameLastname
    )}&body=${encodeURIComponent(
      `Name: ${nameLastname}\nEmail: ${email}\nPhone: ${phone}\n\n\nMessage: ${message}\n\n\n\n\n\n`
    )}`

    console.log(width);
    if (width >= 546) {
      
      window.open(mailtoLink, '_blank')
    } else {
      window.location.href = mailtoLinkMobile
    }

    setFormData({
      nameLastname: '',
      email: '',
      message: '',
      phone: ''
    })
  }

  return (
    <div className='contact__container'>
      {bannerImg && (
        <div className='contact__content-banner'>
          <Img img={banner} w='100%' h='100%' />
        </div>
      )}
      <h2 ref={contactRef} style={{ marginTop: bannerImg ? '160px' : '50px' }}>
        {textContent.title}
      </h2>
      <div className='contact__content-info'>
        <div>
          <p>{textContent.description}</p>
          <Address>{textContent.actionAddres}</Address>
          <Phone />
          <div className='contact__content-social'>
            <h3>{textContent.actionSocialMedia}</h3>
            <SocialChannel />
          </div>
        </div>
        <div>
          <div className='contact__content-social'>
            <h3>{textContent.secondDescription}</h3>
            <h3>{textContent.secondDescription_}</h3>
          </div>
          <div className='contact__form'>
            <div>
              <p>{textContent.nameAndLastname}</p>
              <input
                type='text'
                name='nameLastname'
                value={formData.nameLastname}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <p>{textContent.email}</p>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <p>{textContent.phone}</p>
              <input
                type='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <textarea
              name='message'
              placeholder={textContent.message}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              action={handleSendEmail}
              value={textContent.btnAction}
              bgColor='var(--aw-bg-btn)'
              txtColor='var(--aw-text-btn)'
              p='10px 25px'
              br='20px'
              fs='14px'
            />
            {!bannerImg && (
              <Button
                action={() => setShowContact(false)}
                value={textContent.btnClose}
                bgColor='var(--aw-bg-btn)'
                txtColor='var(--aw-text-btn)'
                p='10px 25px'
                br='20px'
                fs='14px'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
