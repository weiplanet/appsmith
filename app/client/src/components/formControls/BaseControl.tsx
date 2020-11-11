import { Component } from "react";
import { ControlType } from "constants/PropertyControlConstants";
import { InputType } from "widgets/InputWidget";
// eslint-disable-next-line @typescript-eslint/ban-types
abstract class BaseControl<P extends ControlProps, S = {}> extends Component<
  P,
  S
> {
  abstract getControlType(): ControlType;
}

export enum ComparisonOperations {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  GREATER = "GREATER",
  LESSER = "LESSER",
}

export interface ControlBuilder<T extends ControlProps> {
  buildPropertyControl(controlProps: T): JSX.Element;
}

export interface ControlProps extends ControlData, ControlFunctions {
  key?: string;
  extraData?: ControlData[];
  formName: string;
}

export interface ControlData {
  id: string;
  label: string;
  configProperty: string;
  controlType: ControlType;
  propertyValue?: any;
  isValid: boolean;
  validationMessage?: string;
  validationRegex?: string;
  dataType?: InputType;
  isRequired?: boolean;
  hidden?:
    | boolean
    | { path: string; comparison: ComparisonOperations; value: any };
}

export interface ControlFunctions {
  onPropertyChange?: (propertyName: string, propertyValue: string) => void;
}

export default BaseControl;
