import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormHelperText, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import type { CustomKeys } from '../types';
interface Props {
  id: string;
  labelText?: string;
  placeHolderText?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  defaultValue?: string;
  disabled?: boolean;
  value?: any;
  onChange?: any;
  options: any;
  control?: null | any;
  isError?: boolean;
  requiredField?: boolean;
  customKeys?: CustomKeys;
  itemDisableLogic?: (item: any) => boolean;
}
export default function CustomSelect(props: Props) {
  const {
    id,
    labelText,
    placeHolderText,
    error,
    helperText,
    defaultValue,
    disabled,
    value,
    onChange,
    options,
    requiredField,
    customKeys,
    itemDisableLogic,
  } = props;

  const [currentValue, setcurrentValue] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setcurrentValue(event.target.value as string);
  };

  return (
    <FormControl
      fullWidth
      className="customSelect"
      error={error ? true : false}
    >
      <FormLabel className="formLabel">
        {labelText} {requiredField ? <sup>*</sup> : null}{' '}
      </FormLabel>
     
        <Select
          labelId={id}
          id="select"
          size="small"
          value={value ? value : currentValue}
          defaultValue={defaultValue}
          onChange={onChange ? onChange : handleChange}
          // placeholder={placeHolderText}
          IconComponent={KeyboardArrowDownIcon}
          displayEmpty
          disabled={disabled}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <div className="select_placeholder">{placeHolderText}</div>
              );
            }
            return selected;
          }}
        >
          <MenuItem value="" disabled>
            {placeHolderText}
          </MenuItem>
          {customKeys
            ? options.map((item: any) => {
                return (
                  <MenuItem
                    key={item[customKeys.value]}
                    value={item[customKeys.value]}
                  >
                    {item[customKeys.label]}
                  </MenuItem>
                );
              })
            : options.map((item: any) => {
                return (
                  <MenuItem
                    value={item}
                    disabled={
                      itemDisableLogic ? itemDisableLogic(item) : undefined
                    }
                  >
                    {item}
                  </MenuItem>
                );
              })}
        </Select>
      

      <FormHelperText className={error ? 'Mui-error' : ''}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}
