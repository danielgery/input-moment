import cx from 'classnames';
import React, { Component } from 'react';
import InputSlider from 'react-input-slider';

export default class extends Component {
  changeHours = pos => {
    const m = this.props.moment;
    m.hours(pos.x);
    this.props.onChange(m);
  };

  changeMinutes = pos => {
    const m = this.props.moment;
    m.minutes(pos.x);
    this.props.onChange(m);
  };

  changeSeconds = pos => {
    const m = this.props.moment;
    m.seconds(pos.x);
    this.props.onChange(m);
  };

  render() {
    const m = this.props.moment;

    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="showtime">
          <span className="time">{m.format('HH')}</span>
          <span className="separater">:</span>
          <span className="time">{m.format('mm')}</span>
          <span className="separater">:</span>
          <span className="time">{m.format('ss')}</span>
        </div>

        <div className="sliders">
          <div className="time-text">Hours:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={23}
            xstep={this.props.hourStep}
            x={m.hour()}
            onChange={this.changeHours}
          />
          <div className="time-text">Minutes:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={59}
            xstep={this.props.minStep}
            x={m.minute()}
            onChange={this.changeMinutes}
          />
        </div>
        <div className="time-text">Seconds:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={59}
            xstep={this.props.secStep}
            x={m.second()}
            onChange={this.changeSeconds}
          />
      </div>
    );
  }
}
