import * as React from 'react';
import { cva } from 'class-variance-authority';

// Utility function to merge class names

// Default styles for the component
const defaultStyles = {
    container: 'flex flex-col items-start text-left',
    title: 'text-2xl font-normal',
    description: 'text-base font-normal'
};

const sectionHeaderVariants = cva(
    defaultStyles.container,
    {
        variants: {
            alignment: {
                left: 'items-start text-left',
                center: 'items-center text-center',
                right: 'items-end text-right',
            }
        },
        defaultVariants: {
            alignment: 'left'
        },
    }
);

const titleVariants = cva(
    '',
    {
        variants: {
            size: {
                default: 'text-2xl',
                sm: 'text-xl',
                lg: 'text-5xl',
            },
            weight: {
                default: 'font-normal',
                medium: 'font-medium',
                bold: 'font-bold',
            },
        },
        defaultVariants: {
            size: 'default',
            weight: 'default',
        },
    }
);

const descriptionVariants = cva(
    '',
    {
        variants: {
            size: {
                default: 'text-base',
                sm: 'text-sm',
                lg: 'text-lg',
            },
            weight: {
                default: 'font-normal',
                medium: 'font-medium',
                bold: 'font-bold',
            },
        },
        defaultVariants: {
            size: 'default',
            weight: 'default',
        },
    }
);

export interface SectionHeaderProps {
    title: string;
    description: string;
    containerClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    alignment?: 'left' | 'center' | 'right';
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
    (props, ref) => {
        const {
            title,
            description,
            containerClassName,
            titleClassName,
            descriptionClassName,
            alignment,
            ...restProps
        } = props;

        // Get base styles from variants or use default
        const containerStyles = containerClassName
            ? containerClassName
            : sectionHeaderVariants({ alignment });

        return (
            <div
                ref={ref}
                className={containerStyles}
                {...restProps}
            >
                <h2
                    className={titleClassName || defaultStyles.title}
                >
                    {title}
                </h2>
                <p
                    className={descriptionClassName || defaultStyles.description}
                >
                    {description}
                </p>
            </div>
        );
    }
);

SectionHeader.displayName = 'SectionHeader';

export { SectionHeader, sectionHeaderVariants, titleVariants, descriptionVariants };