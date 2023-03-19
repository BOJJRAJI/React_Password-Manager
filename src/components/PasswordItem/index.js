import './index.css'

const PasswordItem = props => {
  const {user, isPasswordShown, deleteUser} = props
  const {id, website, username, password} = user

  const onClickDeleteLogo = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <div className="initial-container">
        <p className="initial">{website[0].toUpperCase()}</p>
      </div>
      <div className="user-details-container">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {isPasswordShown ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-img"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onClickDeleteLogo}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default PasswordItem
