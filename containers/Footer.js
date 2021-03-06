import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: #ccc;
  margin: 20px 0;
  text-align: center;

  ${this} > div {
    padding: 0 20px;
    line-height: 30px;
  }

  ${this} > div > a {
    color: #ccc;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid #ccc;

    &:hover {
      color: white;
      border-bottom: 2px solid white;
    }
  }

  @media (max-width: 950px) {
    margin: 0;
  }
`

export default () => (
  <Container>
    <div>
      Develop & Design by <a href="https://facebook.com/chun42" target="_blank">Chun Rapeepat</a>,
      View source on <a href="https://github.com/chunza2542/ywc15-programming-homework" target="_blank">Github</a>
      <br/><br/>
    </div>
  </Container>
)
