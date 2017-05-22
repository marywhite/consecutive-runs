import React, { Component } from 'react'
import { Layout, Card } from 'antd'
import Form from './Form'
import './App.css'
const { Header, Content, Footer } = Layout

class App extends Component {
  handleSubmit(input) {
    console.log(input)
  }
  render() {
    const { handleSubmit } = this
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
              handleSubmit={this.handleSubmit}
              />
          </Card>
        </Content>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default App
