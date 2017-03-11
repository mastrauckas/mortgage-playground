import React from 'react';
import { Component } from 'react';
import AmortizationScheduleItem from './amortizationScheduleItem';
import AmortizationScheduleStore from '../../stores/amortizationScheduleStore';

export default class AmortizationSchedule extends Component {
  constructor() {
    super();
    this.state = {
      amortizationSchedule: [],
    };
  }

  componentWillMount() {
    AmortizationScheduleStore.on('change', this.amortizationScheduleChanged.bind(this));
  }

  amortizationScheduleChanged() {
    this.setState({
      amortizationSchedule: AmortizationScheduleStore.getAmortizationScheduleData()
    });
  }

  render() {
    const AmortizationScheduleItemComponent = this.state.amortizationSchedule.map(installment => {
      return <AmortizationScheduleItem key={installment.installmentNumber} {...installment} />;
    });

    return (
      <div className='col l9'>
        <table className='striped bordered centered'>
          <caption><h4>Amortization Schedule</h4></caption>
          <thead>
            <tr>
              <th>Installment</th>
              <th>Payment Date</th>
              <th>Payment</th>
              <th>Interest Amount</th>
              <th>Principal Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {AmortizationScheduleItemComponent}
          </tbody>
        </table>
      </div>
    );
  }
}
