import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormHelperText, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import { Controller } from 'react-hook-form';
import { CustomKeys } from '../types';
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
    name = '',
    error,
    helperText,
    defaultValue,
    disabled,
    value,
    onChange,
    options,
    control,
    isError,
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
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              field && (
                <Select
                  labelId={id}
                  size="small"
                  id="select"
                  placeholder={placeHolderText}
                  {...field}
                  disabled={disabled}
                  value={value ? value : field.value}
                  onChange={onChange ? onChange : field.onChange}
                  defaultValue={defaultValue ? defaultValue : undefined}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  renderValue={
                    customKeys
                      ? undefined
                      : (selected) => {
                          if (!selected) {
                            return (
                              <div className="select_placeholder">
                                {placeHolderText}
                              </div>
                            );
                          }
                          return selected;
                        }
                  }
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
                              itemDisableLogic
                                ? itemDisableLogic(item)
                                : undefined
                            }
                          >
                            {item}
                          </MenuItem>
                        );
                      })}
                </Select>
              )
            );
          }}
        />
      ) : (
        <Select
          labelId={id}
          id="select"
          size="small"
          value={value ? value : currentValue}
          defaultValue={defaultValue}
          onChange={onChange ? onChange : handleChange}
          placeholder={placeHolderText}
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
      )}

      <FormHelperText className={error ? 'Mui-error' : ''}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}
