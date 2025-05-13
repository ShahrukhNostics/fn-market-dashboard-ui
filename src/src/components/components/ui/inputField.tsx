import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const inputVariants = cva(
  'block w-full rounded-md text-sm transition-all focus:outline-none',
  {
    variants: {
      variant: {
        default: 'bg-white text-black border border-gray-300 focus:border-blue-500',
        outline: 'bg-transparent text-black border border-gray-400 focus:border-blue-500',
        filled: 'bg-gray-200 text-black focus:bg-gray-300 focus:border-blue-500',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 py-1',
        lg: 'h-12 px-5 py-3',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  }
);

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof inputVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rightIconPosition?: string;
  placeholder?: string;
  className?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  name?: string;
  value?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: boolean;
  helperText?: string;
  errorText?: string;
  dataTestId?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlurCustom?: React.FocusEventHandler<HTMLInputElement>;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      rightIconPosition,
      placeholder,
      asChild = false,
      type = 'text',
      disabled = false,
      autoFocus = false,
      maxLength,
      minLength,
      name,
      value,
      onFocus,
      onBlur,
      error = false,
      helperText,
      errorText,
      dataTestId,
      onChange,
      onBlurCustom,
      ...restProps
    } = props;
    console.log('error', error)
    const Comp = asChild ? Slot : 'input';

    const leftPadding = leftIcon ? 'pl-12' : 'pl-4';
    const rightPadding = rightIcon ? 'pr-12' : 'pr-4';

    const disabledStyles = disabled
      ? 'bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed'
      : '';

    const errorStyles = error ? 'border-red-500 focus:border-red-500' : '';

    return (
      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute left-3 top-6 transform -translate-y-1/2 border-r border-gray-300 pr-3 flex items-center h-6">
            {leftIcon}
          </span>
        )}

        {rightIcon && (
          <span className={`absolute right-3 ${rightIconPosition ? rightIconPosition : "top-3"} transform -translate-y-1/2 border-l border-gray-300 pl-3 flex items-center h-6`}>
            {rightIcon}
          </span>
        )}

        <Comp
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          value={value}
          onFocus={onFocus}
          onBlur={onBlurCustom || onBlur} // Use custom onBlur if provided, otherwise use default
          onChange={onChange} // Custom onChange if provided
          data-testid={dataTestId}
          className={cn(
            inputVariants({ variant, size }),
            leftPadding,
            rightPadding,
            disabledStyles,
            errorStyles,
            className
          )}
          {...restProps} // Spread the remaining props like onChange, value, etc.
        />

        {helperText && !error && (
          <p className="text-sm text-gray-500 mt-1 text-left">{helperText}</p>
        )}
        {error && (
          <p className="text-sm text-red-500 mt-1 text-left">{errorText}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField, inputVariants };
