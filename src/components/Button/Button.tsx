import React from 'react';
import { ButtonProps, Button as ShadcnButton} from '../../src/components/components/ui/button';
import { cn } from '../../src/components/components/lib/utils';

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, children, ...props }) => {
  return (
    <ShadcnButton variant={variant} className={cn(className)} {...props}>
      {children}
    </ShadcnButton>
  );
};

export default Button;
