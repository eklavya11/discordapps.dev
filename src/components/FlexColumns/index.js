import React, { Component } from 'react';
import styles from './index.module.scss';
import Modesta from '../../data/Modesta';

class FlexColumns extends Component {
  render() {
    if (this.props.columns) return (
      <div className={`${Modesta[`colXs${this.props.columns}`]} ${this.props.className ? this.props.className : ''}`}>
        {this.props.children}
      </div>
    )
    return (
      <div className={`\
        ${Modesta.flexGrid} \
        ${styles.flexGrid} \
        ${this.props.backwardsMobile ? styles.flexBackwards : ''} \
        ${this.props.padding ? styles.padding : ''} \
        ${this.props.className ? this.props.className : ''}`}>

        {this.props.children}
      </div>
    )
  }
}

export default FlexColumns;
