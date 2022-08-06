import {
  // useVariantClasses,
  VariantClasses,
} from '../../hooks/use-variant-classes';
import { FC } from 'react';
import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
  children: string | ReactNode;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  iconClassName?: string;
}

const buttonVariant: VariantClasses<ButtonProps['type']> = (variant) => {
  switch (variant) {
    case 'secondary':
      return 'text-blue-700 border border-white-600 bg-blue-100 hover:bg-blue-200 disabled:bg-blue-50 disabled:text-blue-400';
    default:
      return 'text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:text-gray-50';
  }
};

const Button: FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = (
  props,
) => {
  const {
    type = 'primary',
    icon,
    iconPosition,
    iconClassName,
    className,
    children,
    ...btnProps
  } = props;

  const classes = buttonVariant(type); // useVariantClasses(buttonVariant, type);

  return (
    <button
      className={`inline-flex items-center rounded-md px-4 py-2 text-xs shadow-sm ${classes} ${className}`}
      {...btnProps}
    >
      {icon && iconPosition === 'start' ? (
        <span className={`mr-2 ${iconClassName}`}>{icon}</span>
      ) : (
        ''
      )}
      {children}
      {icon && iconPosition === 'end' ? (
        <span className={`mr-2 ${iconClassName}`}>{icon}</span>
      ) : (
        ''
      )}
    </button>
  );
};

export default Button;
