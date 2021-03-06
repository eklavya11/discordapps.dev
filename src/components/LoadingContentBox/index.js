import React, { Component } from 'react';
import Modesta from '../../data/Modesta';
import ContentBox from '../ContentBox';

class LoadingContentBox extends Component {
  render() {
    return (
      <ContentBox>
        <div className={Modesta.loader}>Loading...</div>
      </ContentBox>
    )
  }
}

export default LoadingContentBox;
