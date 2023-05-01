import React, { Component } from 'react'
import loading from './loading.gif.gif'

export default class Spiinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
