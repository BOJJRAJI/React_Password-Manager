import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    WebsiteValue: '',
    UsernameValue: '',
    PasswordValue: '',
    searchValue: '',
    passwordsList: [],
    check: false,
  }

  getWebsiteValue = event => {
    this.setState({WebsiteValue: event.target.value})
  }

  getUsernameValue = event => {
    this.setState({UsernameValue: event.target.value})
  }

  getPasswordValue = event => {
    this.setState({PasswordValue: event.target.value})
  }

  getPasswordSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {WebsiteValue, UsernameValue, PasswordValue} = this.state

    const newUserObject = {
      id: v4(),
      website: WebsiteValue,
      username: UsernameValue,
      password: PasswordValue,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newUserObject],
      WebsiteValue: '',
      UsernameValue: '',
      PasswordValue: '',
    }))
  }

  onShowPassword = () => {
    this.setState(prevState => ({check: !prevState.check}))
  }

  renderNoPasswords = () => {
    console.log()
    return (
      <div className="nopassword-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-password"
        />
        <p className="no-password-text">No Passwords</p>
      </div>
    )
  }

  renderPasswordsLIst = passwordsList => {
    const {check} = this.state
    return passwordsList.map(eachUser => (
      <PasswordItem
        user={eachUser}
        key={eachUser.id}
        deleteUser={this.deleteUser}
        isPasswordShown={check}
      />
    ))
  }

  deleteUser = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachObj => eachObj.id !== id,
      ),
    }))
  }

  getFilteredPasswords = () => {
    const {passwordsList, searchValue} = this.state
    return passwordsList.filter(eachPass =>
      eachPass.website.toLowerCase().includes(searchValue.toLowerCase()),
    )
  }

  render() {
    const {
      WebsiteValue,
      UsernameValue,
      PasswordValue,
      searchValue,
      check,
    } = this.state
    const filteredPasswordList = this.getFilteredPasswords()
    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="top-card-container">
            <form className="form" onSubmit={this.addPassword}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="website-log-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-log"
                />
                <hr className="line" />
                <input
                  className="website-input"
                  type="text"
                  placeholder="Enter Website"
                  value={WebsiteValue}
                  onChange={this.getWebsiteValue}
                />
              </div>
              <div className="website-log-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-log"
                />
                <hr className="line" />
                <input
                  className="website-input"
                  type="text"
                  placeholder="Enter Username"
                  value={UsernameValue}
                  onChange={this.getUsernameValue}
                />
              </div>

              <div className="website-log-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-log"
                />
                <hr className="line" />
                <input
                  className="website-input"
                  type="password"
                  placeholder="Enter Password"
                  value={PasswordValue}
                  onChange={this.getPasswordValue}
                />
              </div>
              <div className="button-container">
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <img
              className="password-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
          <div className="bottom-card-container">
            <div className="count-search-container">
              <h1 className="password-heading">
                Your Passwords
                <p className="passwords-count">{filteredPasswordList.length}</p>
              </h1>
              <div className="search-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
                <input
                  className="website-input"
                  type="search"
                  value={searchValue}
                  onChange={this.getPasswordSearch}
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="radio-container">
              <input
                type="checkbox"
                id="showPassword"
                className="show-password-input"
                onChange={this.onShowPassword}
                checked={check}
              />
              <label htmlFor="showPassword" className="show-pass-label">
                Show passwords
              </label>
            </div>
            <ul className="unordered-list-items">
              {filteredPasswordList.length === 0
                ? this.renderNoPasswords()
                : this.renderPasswordsLIst(filteredPasswordList)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
