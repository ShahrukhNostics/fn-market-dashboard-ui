import { CheckboxField as BaseCheckBox } from "../../src/components/components/ui/checkBox";
import { CheckboxFieldProps as BaseCheckboxFieldPropsProps } from '../../src/components/components/ui/checkBox';

const CheckBox: React.FC<BaseCheckboxFieldPropsProps> = (props) => {
  return (
    <div className="space-y-4">
      <BaseCheckBox {...props} />
    </div>
  );
};

export default CheckBox;
