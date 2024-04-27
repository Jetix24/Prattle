'use client';

import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled
}) => {
  return ( 
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(styles.button,
      disabled && styles.disabled,
      fullWidth && styles.fullWidth,
      secondary ? styles.textgray : styles.textwhite,
      danger && styles.danger,
      !secondary && !danger && styles.default
      )}
    >
      {children}
    </button>
   );
}
 
export default Button;