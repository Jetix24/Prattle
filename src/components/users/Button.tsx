'use client';

import clsx from 'clsx';

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
      className={clsx(`
        flex
        justify-center
        items-center
        rounded-md
        px-3
        py-2
        mx-1
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
      `,
      disabled && "opacity-50 cursor-default",
      fullWidth && "w-full",
      secondary ? 'text-gray-900 bg-gray-200 hover:bg-gray-400 focus-visible:outline-gray-400' : 'text-white bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600',
      danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600', // Aquí se aplica directamente la clase si danger es true
      !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
   );
}
 
export default Button;