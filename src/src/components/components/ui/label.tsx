import * as React from 'react';
import { cva } from 'class-variance-authority';

// Utility function to merge class names
const cn = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
};

// Default styles for the component
const defaultStyles = {
    container: 'flex flex-col gap-1',
    label: 'text-sm font-medium text-gray-700',
    required: 'text-red-500 ml-1'
};

const labelVariants = cva(
    defaultStyles.container,
    {
        variants: {
            alignment: {
                left: 'items-start',
                center: 'items-center',
                right: 'items-end'
            }
        },
        defaultVariants: {
            alignment: 'left'
        }
    }
);

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    required?: boolean;
    containerClassName?: string;
    labelClassName?: string;
    requiredClassName?: string;
    alignment?: 'left' | 'center' | 'right';
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    (props, ref) => {
        const {
            children,
            required = false,
            containerClassName,
            labelClassName,
            requiredClassName,
            alignment,
            className,
            ...restProps
        } = props;

        // Get base styles from variants or use default
        const containerStyles = containerClassName
            ? containerClassName
            : labelVariants({ alignment });

        return (
            <div className={containerStyles}>
                <label
                    ref={ref}
                    className={cn(
                        labelClassName || defaultStyles.label,
                        className
                    )}
                    {...restProps}
                >
                    {children}
                    {required && (
                        <span className={requiredClassName || defaultStyles.required}>
                            *
                        </span>
                    )}
                </label>
            </div>
        );
    }
);

Label.displayName = 'Label';

export { Label, labelVariants }; 