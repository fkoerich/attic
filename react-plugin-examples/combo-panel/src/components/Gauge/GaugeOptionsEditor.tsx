// Libraries
import React, { PureComponent } from 'react';

// Components
import { Switch, PanelOptionsGroup, PanelEditorProps } from '@grafana/ui';

// Types
import { FormField } from '@grafana/ui';
import { ComboOptions } from '../../types';

export class GaugeOptionsEditor extends PureComponent<
  PanelEditorProps<ComboOptions>
> {
  labelWidth = 8;

  onToggleThresholdLabels = () =>
    this.props.onChange({
      ...this.props.options,
      showThresholdLabels: !this.props.options.showThresholdLabels,
    });

  onToggleThresholdMarkers = () =>
    this.props.onChange({
      ...this.props.options,
      showThresholdMarkers: !this.props.options.showThresholdMarkers,
    });

  onMinValueChange = ({ target }) =>
    this.props.onChange({ ...this.props.options, minValue: target.value });

  onMaxValueChange = ({ target }) =>
    this.props.onChange({ ...this.props.options, maxValue: target.value });

  render() {
    const { options } = this.props;
    const {
      maxValue,
      minValue,
      showThresholdLabels,
      showThresholdMarkers,
    } = options;

    return (
      <PanelOptionsGroup title="Gauge options">
        <FormField
          label="Min value"
          labelWidth={this.labelWidth}
          onChange={this.onMinValueChange}
          value={minValue}
        />
        <FormField
          label="Max value"
          labelWidth={this.labelWidth}
          onChange={this.onMaxValueChange}
          value={maxValue}
        />
        <Switch
          label="Show labels"
          labelClass={`width-${this.labelWidth}`}
          checked={showThresholdLabels}
          onChange={this.onToggleThresholdLabels}
        />
        <Switch
          label="Show markers"
          labelClass={`width-${this.labelWidth}`}
          checked={showThresholdMarkers}
          onChange={this.onToggleThresholdMarkers}
        />
      </PanelOptionsGroup>
    );
  }
}
