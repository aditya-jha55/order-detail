import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent, type SelectProps } from '@mui/material/Select';
import { generateShortKey } from '../Utils/helperFns';
import CloseIcon from '@mui/icons-material/Close';
import type { CustomKeys } from '../types';

type Props = {
  id: string;
  labelText?: string;
  placeHolderText?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  defaultValue?: string | any;
  disabled?: boolean;
  value?: any;
  onChange?: (e: SelectChangeEvent) => void;
  options: any;
  control?: null | any;
  isError?: boolean;
  requiredField?: boolean | any;
  customKeys?: CustomKeys;
  itemDisableLogic?: (item: any) => boolean;
  customeKeyPlaceholder?: boolean;
  hintText?: string;
  setValue?: any;
  index?: any;
  isNone?: any;
  heading?: any;
  className?: string;
  menuClassName?: string
};

export default function CustomSelect(props: Props & Pick<SelectProps, 'renderValue'>) {
  const {
    id,
    labelText,
    placeHolderText = "",
    error,
    helperText,
    defaultValue,
    disabled,
    options,
    requiredField,
    customKeys,
    itemDisableLogic,
    customeKeyPlaceholder,
    hintText,
    isNone,
    heading,
    className,
    menuClassName
  } = props;



  return (
    <FormControl
      fullWidth
      className={`customSelect ${className && className}`}
      error={error ? true : false}
    >
      {labelText && (
        <FormLabel className="formLabel">
          {labelText} {requiredField ? <sup>*</sup> : null}{' '}
        </FormLabel>
      )}

      <Select
                    labelId={id}
                    size="small"
                    id="select"
                    // placeholder={placeHolderText}
                    
                    displayEmpty
                    disabled={disabled}
                    value={""}
                   
                    defaultValue={defaultValue ? defaultValue : placeHolderText}
                    IconComponent={KeyboardArrowDownIcon}
                 
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="end">
                          <div className="inputEndIcon">
                            <IconButton
                              color="primary"
                              className="p__10"
                              aria-label="directions"
                              onClick={() => {}}
                            >
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </div>
                        </InputAdornment>
                      ),
                    }}
                    MenuProps={{
          PaperProps: {
            className: menuClassName, // Class on Paper (menu wrapper)
            //  style: {
            //   width: anchorRef.current?.offsetWidth || 200, // match input width
            // }
          },
          MenuListProps: {
            className: 'my-select-menu-list' // Class on list of menu items (ul)
          }
        }}
                  >
                    {(customeKeyPlaceholder) ||
                      (isNone && (
                        <MenuItem value="">
                          {heading ? heading : 'None'}{' '}
                        </MenuItem>
                      ))}
                    {customKeys
                      ? options.map((item: any) => {
                          return (
                            <MenuItem
                              key={item[customKeys.value]}
                              value={item[customKeys.value]}
                              disabled={itemDisableLogic?.(item)}
                            >
                              {item[customKeys.label]}
                            </MenuItem>
                          );
                        })
                      : options.map((item: any) => {
                          return (
                            <MenuItem
                              value={item}
                              key={generateShortKey(4)}
                              disabled={itemDisableLogic?.(item)}
                            >
                              {item}
                            </MenuItem>
                          );
                        })}
                  </Select>

      <FormHelperText className={error ? 'Mui-error' : ''}>
        {helperText}
      </FormHelperText>
      <FormHelperText className="selectHintText">{hintText}</FormHelperText>
    </FormControl>
  );
}
