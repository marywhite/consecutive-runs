import React, { Component } from 'react'
import { Layout } from 'antd'
import './App.css'
const { Header, Content, Footer } = Layout

class App extends Component {
  render() {
    return (
      <Layout className="component-layout">
        <Header className="component-header">
          <h1>Find Consecutive Runs</h1>
        </Header>
        <Content>
        </Content>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default App
