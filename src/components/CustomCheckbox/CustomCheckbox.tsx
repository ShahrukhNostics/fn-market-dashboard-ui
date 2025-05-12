import * as React from 'react';
import { cn } from '../lib/utils';

interface CustomCheckboxProps {
    label?: React.ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    CheckedIcon?: React.ReactNode;
    disabled?: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    label,
    checked = false,
    onChange,
    className,
    labelClassName,
    inputClassName,
    CheckedIcon,
    disabled = false,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked);
    };

    return (
        <div className={cn('flex flex-col gap-1', className)}>
            <div className="flex items-center gap-2">
                <label className={cn('flex items-center gap-2 cursor-pointer', labelClassName)}>
                    <div className="relative">
                        <input
                            type="checkbox"
                            className={cn(
                                'peer h-4 w-4 rounded border border-light-steel transition',
                                'checked:bg-[#007867] checked:border-[#007867]',
                                'focus:outline-none focus:ring-2 focus:ring-[#007867]',
                                'disabled:opacity-50 disabled:cursor-not-allowed',
                                inputClassName
                            )}
                            checked={checked}
                            onChange={handleChange}
                            disabled={disabled}
                        />
                        {CheckedIcon && checked && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className={cn('transition-opacity', checked ? 'opacity-100' : 'opacity-0')}>
                                    {CheckedIcon}
                                </div>
                            </div>
                        )}
                    </div>
                    {label && <span>{label}</span>}
                </label>
            </div>
        </div>
    );
};

export default CustomCheckbox; 