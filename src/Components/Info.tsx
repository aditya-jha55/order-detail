import { CircularProgress } from '@mui/material';
import Images from '../Utils/images';
import clsx from 'clsx';

interface Props {
  infoText?: string;
  theme?: 'dark' | 'light' | 'error' | 'grey' | 'warning';
  icon?: React.ReactElement | string;
  loading?: boolean;
  className?: string;
}

export default function Info(props: Props) {
  const {
    infoText,
    theme = 'dark',
    loading,
    className,
  } = props;
  return (
    <div
      className={clsx(
        'reel_theme_info',
        {
          info_dark: theme === 'dark',
          info_error: theme === 'error',
          info_grey: theme === 'grey',
          info_light: theme === 'light',
          info_warning: theme === 'warning'
        },
        className
      )}
    >
      <div className="infoIcon">
        {loading ? (
          <CircularProgress size={30} />
        ) : (
          <img
            // src={
            //   theme === 'dark'
            //     ? icon
            //     : theme === 'error'
            //     ? Images.ERROR_IC
            //     : theme === 'warning'
            //     ? Images.INFO_CIRCLE_WARNING_IC
            //     : Images.INFO_ICON_LIGHT
            // }
            src={Images.INFO_ICON_LIGHT}
            alt={""}
          />
        )}
      </div>
      <div className={`infoText`}>
        <p>{infoText}</p>
      </div>
    </div>
  );
}
