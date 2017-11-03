import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card.jsx'

export default function Board (props) {
  //hard-coded for now
  const board = [[1,2,0,1], [2,1,0,2], [0,0,0,0], [2,2,0,0], [0,2,1,2], [1,2,1,1]]
  return (
    <div className="board">
      {board.map((elem, idx) =>(
        <Card key={idx} cardProps={elem} />
      ))}
    </div>
  )
}


const mapState = ({ board }) => ({ board })
