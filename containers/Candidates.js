import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {Padding} from '../core/styled'
import {getCandidateByMajor} from '../core/helper'
import CandidateList from '../components/CandidateList'

// Container component || sidebar tab and content
const Container = styled.div`
  display: flex;

  ${this} > div:nth-child(1) {
    width: 250px;
    margin-right: 30px;

    @media (max-width: 950px) {
      width: 100%;
      margin-bottom: 50px;
    }
  }

  ${this} > div:nth-child(2) {
    flex: 1;
  }

  @media (max-width: 950px) {
    display: block;
  }
`

const PageTab = styled.div`
  width: 100%;
  cursor: pointer;
  text-align: center;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: rgba(168, 247, 240, ${props => (props.active) ? '0.4' : '0.2'});

  &:active {
    background: rgba(168, 247, 240, 0.4);
  }
`

class Candidates extends Component {

  constructor() {
    super()
    this.state = {
      page: 1
    }
  }

  // Update page state when page change
  updatePage(page) {
    this.setState({ page })
  }

  // Check page is active (return boolean)
  isPageActive(page) {
    return page === this.state.page
  }

  render() {
    return (
      <div>
        <Padding widthonly>
          <Container>
            <div>
              <PageTab
                active={this.isPageActive(1)}
                onClick={() => this.updatePage(1)}>Web Content</PageTab>
              <PageTab
                active={this.isPageActive(2)}
                onClick={() => this.updatePage(2)}>Web Design</PageTab>
              <PageTab
                active={this.isPageActive(3)}
                onClick={() => this.updatePage(3)}>Web Marketing</PageTab>
              <PageTab
                active={this.isPageActive(4)}
                onClick={() => this.updatePage(4)}>Web Programming</PageTab>
            </div>
            <div>
              { this.isPageActive(1) &&
                <CandidateList
                  candidates={getCandidateByMajor(this.state.page, this.props.candidate)}
                  heading="Web Content"/>
              }
              { this.isPageActive(2) &&
                <CandidateList
                  candidates={getCandidateByMajor(this.state.page, this.props.candidate)}
                  heading="Web Design"/>
              }
              { this.isPageActive(3) &&
                <CandidateList
                  candidates={getCandidateByMajor(this.state.page, this.props.candidate)}
                  heading="Web Marketing"/>
              }
              { this.isPageActive(4) &&
                <CandidateList
                  candidates={getCandidateByMajor(this.state.page, this.props.candidate)}
                  heading="Web Programming"/>
              }
            </div>
          </Container>
        </Padding>
        <br/>
      </div>
    )
  }
}

// map candidates data from redux store to props
function mapStateToProps(state) {
  return {
    candidate: state
  }
}

export default connect(mapStateToProps, null)(Candidates)
