import React from 'react'
import App from '../src/App'

function index() {
  return <App pageName="Home" />
}

index.getInitialProps = async ({ req }) => {
  const isServer = !!req
  return { isServer }
}

export default index
