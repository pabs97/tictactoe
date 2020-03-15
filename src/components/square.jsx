import React from 'react';

function Square(props) {

  const { index, value, onSet } = props;

  return (
    <button
      className="square"
      onClick={() => onSet(index, value)}
    > {value}</button >
  );
}

export default Square;