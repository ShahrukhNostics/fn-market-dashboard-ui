import * as React from 'react';
import { cn } from '../lib/utils';

export interface CheckboxFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  error?: boolean;
  helperText?: string;
  unCheckedClassName?: string;
  errorText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  CheckedIcon?: React.ReactNode;
  dataTestId?: string;
  helperTextClassName?: string;
  errorTextClassName?: string;
  leftIconClassName?: string;
  rightIconClassName?: string;
  labelWrapperClassName?: string;
  containerClassName?: string;
  disabledClassName?: string;
  checkedClassName?: string;
  checkedColor?: 'green' | 'blue' | 'red' | 'yellow' | 'purple' | 'pink' | 'indigo';
  onCheckedChange?: (checked: boolean) => void;
  type?: 'checkbox';
}

export const CheckboxField = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (
    {
      label,
      className,
      labelClassName,
      inputClassName,
      error = false,
      helperText,
      unCheckedClassName,
      errorText,
      leftIcon,
      rightIcon,
      CheckedIcon,
      dataTestId,
      helperTextClassName,
      errorTextClassName,
      leftIconClassName,
      rightIconClassName,
      labelWrapperClassName,
      containerClassName,
      disabledClassName,
      checkedClassName,
      checkedColor = 'blue',
      disabled,
      checked,
      onCheckedChange,
      type = 'checkbox',
      ...props
    },
    ref
  ) => {
    const getCheckedColorClasses = () => {
      if (!checkedColor) return '';
      const colorMap = {
        green: 'checked:bg-green-500 checked:border-green-500 focus:ring-green-500',
        blue: 'checked:bg-blue-500 checked:border-blue-500 focus:ring-blue-500',
        red: 'checked:bg-red-500 checked:border-red-500 focus:ring-red-500',
        yellow: 'checked:bg-yellow-500 checked:border-yellow-500 focus:ring-yellow-500',
        purple: 'checked:bg-purple-500 checked:border-purple-500 focus:ring-purple-500',
        pink: 'checked:bg-pink-500 checked:border-pink-500 focus:ring-pink-500',
        indigo: 'checked:bg-indigo-500 checked:border-indigo-500 focus:ring-indigo-500',
      };
      return colorMap[checkedColor];
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(e.target.checked);
      props.onChange?.(e);
    };

    return (
      <div className={cn('flex flex-col gap-1', containerClassName, className)}>
        <div className={cn('flex items-center gap-2', labelWrapperClassName)}>
          <label className={cn('flex items-center gap-2 cursor-pointer', labelClassName)}>
            {leftIcon && (
              <span className={cn('mr-1', leftIconClassName)}>{leftIcon}</span>
            )}
            <div className="relative">
              <input
                ref={ref}
                type={type}
                data-testid={dataTestId}
                className={cn(
                  unCheckedClassName ? unCheckedClassName : 'peer h-4 w-4 rounded border border-gray-300 transition',
                  checkedColor ? getCheckedColorClasses() : '',
                  checkedClassName,
                  error && 'border-red-500 focus:ring-red-500',
                  disabled && 'opacity-50 cursor-not-allowed',
                  disabled && disabledClassName,
                  CheckedIcon && 'appearance-none',
                  inputClassName
                )}
                disabled={disabled}
                checked={checked}
                onChange={handleChange}
                {...props}
              />
              {CheckedIcon && checked && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className={cn(`transition-opacity transform -translate-y-[2px] ${checked ? 'opacity-100' : 'opacity-0'}`)}>
                    {CheckedIcon}
                  </div>
                </div>
              )}
            </div>
            {label && <span>{label}</span>}
            {rightIcon && (
              <span className={cn('ml-1', rightIconClassName)}>{rightIcon}</span>
            )}
          </label>
        </div>
        {helperText && !error && (
          <p className={cn('text-sm text-gray-500', helperTextClassName)}>
            {helperText}
          </p>
        )}
        {error && errorText && (
          <p className={cn('text-sm text-red-500', errorTextClassName)}>
            {errorText}
          </p>
        )}
      </div>
    );
  }
);

CheckboxField.displayName = 'CheckboxField';
