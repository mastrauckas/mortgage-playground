import React from 'react';
import { Component } from 'react';

export default class AmortizationScheduleItem extends Component {

  static propTypes = {
    installmentNumber: React.PropTypes.number.isRequired,
    dueDate: React.PropTypes.string.isRequired,
    interestAmount: React.PropTypes.number.isRequired,
    principalAmount: React.PropTypes.number.isRequired,
    totalDue: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <tr>
        <td>{this.props.installmentNumber}</td>
        <td>{this.props.dueDate}</td>
        <td>{this.props.interestAmount.toFixed(2)}</td>
        <td>{this.props.principalAmount.toFixed(2)}</td>
        <td>{this.props.totalDue.toFixed(2)}</td>
      </tr>
    );
  }
}
