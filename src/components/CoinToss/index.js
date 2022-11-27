import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    heads: 'heads',
    total: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  getRandom = () => {
    const tossResult = Math.floor(Math.random() * 2)
    let gotHead
    if (tossResult === 0) {
      gotHead = 'heads'
    } else {
      gotHead = 'tails'
    }

    this.setState({
      heads: gotHead,
    })

    this.setState(prevTotal => ({total: prevTotal.total + 1}))

    if (gotHead === 'heads') {
      this.setState(prevHead => ({headsCount: prevHead.headsCount + 1}))
    } else {
      this.setState(prevTail => ({tailsCount: prevTail.tailsCount + 1}))
    }
  }

  render() {
    const {heads, total, headsCount, tailsCount} = this.state
    console.log(headsCount)
    console.log(tailsCount)

    const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    const displayImg = heads === 'heads' ? headUrl : tailUrl

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="coin-img" src={displayImg} alt="toss result" />
          <br />
          <button type="button" onClick={this.getRandom}>
            Toss Coin
          </button>
          <div className="score-container">
            <p>Total: {total}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
