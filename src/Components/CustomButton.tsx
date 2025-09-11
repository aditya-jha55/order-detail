import React, { RefObject } from 'react';
import { Button, CircularProgress } from '@mui/material';


type CustomButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
  text: JSX.Element | string;
  showIcon?: boolean;
  iconPosition?: 'start' | 'end';
  icon?: any;
  width?: '100%' | 'auto' | string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  iconType?: 'image' | 'svg';
  dashedBorder?: boolean;
  pressed?: boolean;
  onMouseDown?: () => void;
  isMobileTextVisible?: boolean;
  id: string;
  loading?: boolean;
  className?: string;
  href?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info';
  ref?: RefObject<HTMLButtonElement>;
} 

const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  variant,
  text,
  showIcon,
  iconPosition,
  icon,
  width,
  onClick,
  type = 'button',
  disabled,
  iconType,
  dashedBorder,
  pressed,
  onMouseDown,
  isMobileTextVisible,
  id,
  loading,
  className,
  color = 'primary',
  href,
  ref,
  sx,
}) => {
  const windowWidth = window.innerWidth;
  return showIcon ? (
    iconPosition === 'start' ? (
      <Button
        onMouseDown={() => {
          if (onMouseDown) {
            onMouseDown();
          }
        }}
        size={size}
        color={color}
        type={type}
        disabled={disabled}
        onClick={onClick}
        id={id}
        ref={ref}
        tabIndex={0}
        // disabled={true}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            const target = event.target as HTMLElement;
            // Simulate a click on the focused element when Enter is pressed
            target.click();
          }
        }}
        className={
          variant === 'contained'
            ? `innerButtonContained ${
                isMobileTextVisible ? '' : 'isMobileTextVisible'
              }  ${className}`
            : `innerButtonOutlined ${dashedBorder ? 'dashedBorder' : ''} ${
                pressed ? 'pressed' : ''
              }
            ${isMobileTextVisible ? '' : 'isMobileTextVisible'}
            ${className}
            `
        }
        sx={{
          width: { width },
          ...sx,
        }}
        variant={variant}
        startIcon={
          iconType === 'svg' ? (
            icon
          ) : (
            <img src={icon} alt={""} role="presentation" />
          )
        }
        disableElevation
        disableFocusRipple
      >
        {isMobileTextVisible ? text : <> {windowWidth > 768 ? text : ''}</>}
      </Button>
    ) : (
      <Button
        onMouseDown={() => {
          if (onMouseDown) {
            onMouseDown();
          }
        }}
        color={color}
        id={id}
        type={type}
        onClick={onClick}
        disabled={disabled}
        tabIndex={0}
        className={
          variant === 'contained'
            ? `innerButtonContained ${
                isMobileTextVisible ? '' : 'isMobileTextVisible'
              }`
            : `innerButtonOutlined ${dashedBorder ? 'dashedBorder' : ''} ${
                pressed ? 'pressed' : ''
              }
            ${isMobileTextVisible ? '' : 'isMobileTextVisible'}  ${className} ${
                loading && 'loading_btn'
              }`
        }
        sx={{
          width: { width },
          ...sx
        }}
        variant={variant}
        endIcon={
          iconType === 'svg' ? (
            icon
          ) : (
            <img src={icon} alt={""} role="presentation" />
          )
        }
        disableElevation
        disableFocusRipple
        onKeyDown={event => {
          if (event.key === 'Enter') {
            const target = event.target as HTMLElement;
            // Simulate a click on the focused element when Enter is pressed
            target.click();
          }
        }}
        ref={ref}
      >
        {/* {windowWidth > 768 ? text : ''} */}
        {isMobileTextVisible ? text : <> {windowWidth > 768 ? text : ''}</>}
      </Button>
    )
  ) : (
    <Button
      color={color}
      id={id}
      onMouseDown={() => {
        if (onMouseDown) {
          onMouseDown();
        }
      }}
      href={href}
      tabIndex={0}
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      variant={variant}
      className={`customButton ${
        variant === 'contained' ? 'customBtnPrimary' : 'customBtnSecondary'
      } ${dashedBorder ? 'dashedBorder' : ''} ${
        pressed ? 'pressed' : ''
      }  ${className}  ${loading && 'loading_btn'}`}
      sx={{
        width: { width },
        ...sx
      }}
      disableElevation
      disableFocusRipple
      onKeyDown={event => {
        if (event.key === 'Enter') {
          const target = event.target as HTMLElement;
          // Simulate a click on the focused element when Enter is pressed
          target.click();
        }
      }}
      startIcon={
        loading ? (
          <CircularProgress size={18} sx={{ color: '#ffffff' }} />
        ) : null
      }
      ref={ref}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
