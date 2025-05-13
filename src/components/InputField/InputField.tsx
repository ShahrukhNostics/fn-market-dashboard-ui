import { InputField as BaseInputField } from '../../src/components/components/ui/inputField';
import { InputFieldProps as BaseInputFieldProps } from '../../src/components/components/ui/inputField';

const InputField: React.FC<BaseInputFieldProps> = (props) => {
  return (
    <BaseInputField {...props} />
  );
};

export default InputField;
