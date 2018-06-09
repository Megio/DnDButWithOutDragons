import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DropTarget } from 'react-dnd';

export const ItemTypes = {
  BERSAGLIO: 'bersaglio'
};



let knightPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

const squareTarget = {
  drop(props) {
    moveKnight(props.x, props.y);
  }
};

const cardSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Bersaglio extends Component {
  render() {
    const { connectDropTarget, isOver, canDrop } = this.props;
    return connectDropTarget(
      <div style={{ backgroundColor: 'yellow', height: '200px', width: '200px', position: 'absolute', right:'0' }}>
    </div> )
  }
}

Bersaglio.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.BERSAGLIO, squareTarget, collect)(Bersaglio);

