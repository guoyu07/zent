import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import Point from './points';
import Dots from './dots';
import Marks from './marks';
import Container from './container';
import Track from './track';

export default class Range extends Component {
  clientWidth = null;

  getClientWidth = () => {
    if (this.clientWidth === null) {
      const $root = ReactDOM.findDOMNode(this);
      this.clientWidth = $root.clientWidth;
    }
    return this.clientWidth;
  };

  render() {
    const { dots, marks, value, ...restProps } = this.props;
    const warpClass = cx(`${restProps.prefix}-slider-main`, {
      [`${restProps.prefix}-slider-main-with-marks`]: marks
    });
    return (
      <div className={warpClass}>
        <Container
          getClientWidth={this.getClientWidth}
          dots={dots}
          {...restProps}
          value={value}
        >
          <Track {...restProps} value={value} />
        </Container>
        {dots && <Dots marks={marks} {...restProps} value={value} />}
        <Point
          dots={dots}
          marks={marks}
          getClientWidth={this.getClientWidth}
          {...restProps}
          value={value}
        />
        {marks && <Marks marks={marks} {...restProps} />}
      </div>
    );
  }
}
