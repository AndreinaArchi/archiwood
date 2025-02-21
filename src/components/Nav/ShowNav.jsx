import './ShowNav.css'

const ShowNav = ({ setShowMenu, showMenu }) => {
  return (
    <div
      className={`locales__container-menu ${showMenu ? 'active-menu' : ''}`}
      onClick={() => setShowMenu(!showMenu)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default ShowNav
