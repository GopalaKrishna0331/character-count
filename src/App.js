import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {newList: [], text: ''}

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onKeyDownElement = event => {
    if (event.key === 'Enter') {
      this.onClickButtonElement()
    }
  }

  onClickButtonElement = event => {
    event.preventDefault()
    const {text} = this.state
    const newItem = {
      id: uuidv4(),
      name: text,
      count: text.length,
    }
    this.setState(prevState => ({
      newList: [...prevState.newList, newItem],
      text: '',
    }))
  }

  render() {
    const {newList, text} = this.state
    return (
      <div className="container">
        <div className="left-container">
          <div className="element">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          {newList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-user-image"
            />
          ) : (
            <ul className="unordered-list">
              {newList.map(each => (
                <li className="list-item" key={each.id}>
                  <p>
                    {each.name} : {each.count}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form className="right-container" onSubmit={this.onClickButtonElement}>
          <h1 className="main-heading">Character Counter</h1>
          <div>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-element"
              value={text}
              onChange={this.onChangeInput}
              onKeyDown={this.onKeyDownElement}
            />
            <button className="button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
