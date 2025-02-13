import './Maintenance.css'
const Maintenance = () => {
  return (
    <div className='maintenance__container'>
      <div className='maintenance____img'>
        <img src='/maintenanceImg/logo_maintenance.webp' />
      </div>
      <div className='maintenance__message'>
        <h1>HOLA MUNDO</h1>
        <div>
          <p>We are currently performing scheduled maintenance.</p>
          <p>Please check back later.</p>
        </div>
      </div>
    </div>
  )
}

export default Maintenance