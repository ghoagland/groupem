import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateBoard } from '../store';
import Card from './Card.jsx'

class Board extends Component {
  componentDidMount() {
    this.props.getNewBoard();
  }

  render() {
    const { board } = this.props;
    return (
      <div className="board">
        {board.map((elem, idx) =>(
          <Card key={idx} cardProps={elem} />
        ))}
      </div>
    )
  }
}


const mapState = ({ board }) => ({ board })
const mapDispatch = (dispatch) => ({
  getNewBoard() {
    dispatch(generateBoard())
  }
})

export default connect(mapState, mapDispatch)(Board)
