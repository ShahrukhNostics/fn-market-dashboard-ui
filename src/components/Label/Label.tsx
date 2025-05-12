import { Label as BaseLabel } from '../../src/components/components/ui/label';
import { LabelProps as BaseLabelProps } from '../../src/components/components/ui/label';

const Label: React.FC<BaseLabelProps> = (props) => {
    return <BaseLabel {...props} />;
};

export default Label; 