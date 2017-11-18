import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 250px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #373E4D;
  border-bottom: 1px solid #373E4D;
`

const CardContainer = styled.div`
  width: 40000px;
  overflow-y: scroll;
  transition: 10s;
`

const Card = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 3px;
  position: relative;
  display: inline-block;
  background: ${props => (props.red) ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)'};

  &::after {
    content: '${props => (props.red) ? 'ไม่ผ่าน' : 'ผ่าน'}';
    display: block;
    margin-top: 100px;
    text-align: center;
    color: #ccc;
    font-size: 40px;
    font-family: supermarket;
  }
`

const Divider = styled.div`
  position: absolute;
  left: 50vw;
  z-index: 9999;
  margin-top: -10px;
  width: 5px;
  height: 270px;
  background: #A8F7F0;
`

export default class extends Component {
  constructor() {
    super()
    this.state = {
      left: '0px'
    }
  }
  componentDidMount() {
    if (window !== undefined) {
      const diff = (window.innerWidth / 2) - 850
      this.setState({
        left: diff
      })
    }
  }
  randomCard() {
    let cards = []
    for(let i = 1; i <= 140; i++) {
      let random = true
      if (Math.random() * 10 > 6) {
        random = false
      }
      cards.push(random)
    }
    return cards
  }
  reset() {
    if (window !== undefined) {
      const diff = (window.innerWidth / 2) - 850
      this.setState({
        left: diff
      })
    }
  }
  run() {
    const offset = -1 * Math.random() * 100
    const diff = (window.innerWidth / 2) - 850 - 30120 + offset
    this.setState({
      left: diff + 'px'
    })
    setTimeout(() => {
      if (window !== undefined) {
        // Card number 122
        // Modal here
      }
    }, 11 * 1000)
  }
  render() {
    return (
      <div>
        <Divider />
        <Container>
          <CardContainer style={{marginLeft: this.state.left}}>
            {this.randomCard().map((x, i) => {
              return <Card red={x} key={`card` + i}></Card>
            })}
          </CardContainer>
        </Container>
        <button onClick={() => this.run()}>Random</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    )
  }
}