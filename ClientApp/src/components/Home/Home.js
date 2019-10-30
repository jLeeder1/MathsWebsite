import React, { Component } from 'react';
import BoxButton from '../BoxButton/BoxButton';
import './Home.css';


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1 className="HomeTitle">Home</h1>
        <BoxButton BoxInfo={{ text: 'Algebra' }} />
        <BoxButton BoxInfo={{ text: 'Algebra' }} />
        <BoxButton BoxInfo={{ text: 'Algebra' }} />
        <BoxButton BoxInfo={{ text: 'Algebra' }} />
        <BoxButton BoxInfo={{ text: 'Algebra' }} />
        <BoxButton BoxInfo={{ text: 'Algebra' }} />
        <BoxButton BoxInfo={{ text: 'Algebra' }} />
        <BoxButton BoxInfo={{ text: 'Algebra' }} />
      </div>
    );
  }
}
