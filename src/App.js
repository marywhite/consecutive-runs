import React, { Component } from 'react'
import { Layout, Card } from 'antd'
import Form from './Form'
import TagGroup from './TagGroup'
import Result from './Result'
import './App.css'
import buildConsecutive from './util/consecutive'
const { Header, Content, Footer } = Layout

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      matches: [],
      findConsecutive: buildConsecutive()
    }
    console.log(this)
  }

  handleSubmit = (arr) =>  {
    const { list, findConsecutive } = this.state
    const newList = [...list, ...arr]
    const matches = findConsecutive(newList)
    const newState = Object.assign({}, this.state, {list: newList, matches})
    this.setState(newState)
  }

  handleRemove = (index) => {
    const { list, findConsecutive } = this.state
    const newList = Array.from(list)
    newList.splice(index, 1)
    const newMatches = findConsecutive(newList)
    const newState = Object.assign({}, this.state, {
      list: newList,
      matches: newMatches
    })
    this.setState(newState)
  }

  handleClear = () => {
    const newState = Object.assign({}, this.state, {
      list: [],
      matches: []
    })
    this.setState(newState)
  }

  render = () => {
    const { handleSubmit, state, handleRemove, handleClear } = this
    const { list, matches } = state
    return (
      <Layout className="component-layout">
        <Header className="component-header">
          <h1>Find Consecutive Runs</h1>
        </Header>
        <Content>
          <Card>
            <h2>Enter numbers below:</h2>
            <p>
              {`Enter numbers separated by spaces: i.e. "1 2 3" or commas "1,2,3" to get started!`}
            </p>
            <Form
              handleSubmit={handleSubmit}
              />
          </Card>
            <Card>
              <h2>Entered Numbers: </h2>
              <TagGroup
                tags={list || []}
                matches={matches || []}
                removeTag={handleRemove}
                handleClear={handleClear}
              />
            </Card>
            <Card>
              <h2>Matching Indices:</h2>
              <Result
                value={matches || []}
              />
            </Card>
        </Content>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default App
