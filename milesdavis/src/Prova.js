import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

export const ItemTypes = {
  PROVA: 'prova'
};

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Prova extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{ backgroundColor: 'tomato', height: '20px', width: '20px' }}>
      </div>
    )
  }
}

Prova.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.PROVA, knightSource, collect)(Prova);
