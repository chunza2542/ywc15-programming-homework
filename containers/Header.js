import React, {Component} from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'

import {
  Padding,
  FlatButton,
} from '../core/styled'

const Container = styled.div`
  display: flex;

  @media (max-width: 950px) {
    display: block;
  }
`

const Logo = styled.div`
  width: 250px;
  height: 100px;
  margin-right: 50px;
  background: url(/static/logo.png);
  background-size: 250px 100px;

  @media (max-width: 950px) {
    margin: auto auto;
    width: 300px;
    height: 150px;
    background-size: 300px 150px;
  }
`

const Heading = styled.div`
  flex: 1;
  font-family: supermarket;

  ${this} > h1 {
    margin: 0;
    color: #90F9F0;
    font-size: 45px;
    margin-top: 20px;
    margin-bottom: 10px;

    @media (max-width: 950px) {
      font-size: 40px;
    }
  }

  ${this} > span {
    color: white;
    font-size: 25px;
  }

  @media (max-width: 950px) {
    text-align: center;
  }
`

const ButtonContainer = styled.div`
  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px 0;
  }
`

const Header = props => (
  <Padding>
    <Container>
      <Logo />
      <Heading>
        <h1>SEMI_FINAL ROUND</h1>
        <span>ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</span>
      </Heading>
      <ButtonContainer>
        <FlatButton onClick={() => props.onClickFunc()}>
          {props.searchPage ? 'ดูรายชื่อทั้งหมด' : '< กลับไปหน้าแรก'}
        </FlatButton>
      </ButtonContainer>
    </Container>
  </Padding>
)

Header.propTypes = {
  // true = search page | false = candidates page
  searchPage: PropTypes.bool.isRequired,
  // just like on click function
  onClickFunc: PropTypes.func.isRequired,
}

export default Header
