import React, { Component } from 'react';

export default function Card({ cardProps }) {
  const colors = ['red', 'green', 'purple'];
  const shapes = ['oval', 'diamond', 'squiggle'];
  const shadings = ['solid', 'striped', 'empty'];

  const card = {
    number: cardProps[0] + 1,
    color: colors[cardProps[1]],
    shape: shapes[cardProps[2]],
    shading: shadings[cardProps[3]]
  }

  return (
    <div className="card">
      <p>{`${card.number} ${card.color} ${card.shape} ${card.shading}`}</p>
    </div>

  )
}
