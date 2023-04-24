import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0}

  random = () => {
    const randomNum = () => Math.ceil(Math.random() * 100)
    this.setState(oldState => ({
      randomNumber: oldState.randomNumber + randomNum(),
    }))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>Count {randomNumber}</h1>
          {parseInt(randomNumber) % 2 === 0 ? (
            <p className="paragraph">Count is Even</p>
          ) : (
            <p className="paragraph">Count is Odd</p>
          )}
          <button className="button" type="button" onClick={this.random}>
            Increment
          </button>
          <p className="paragraph1">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
