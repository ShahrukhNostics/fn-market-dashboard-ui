import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CheckBox from "../components/CheckBox/CheckBox";
import CheckMarkIcon from "../assets/svgs/checkMarkIcon";


interface FormData {
    checkbox: boolean;
}

const CheckBoxTest = () => {
    // unControlled state
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
        defaultValues: {
            checkbox: false
        }
    });
    const formCheckboxValue = watch("checkbox");
    // console.log('errors', errors)
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("Form submitted:", data);
    }


    // Controlled state
    const [checked, setChecked] = useState(false);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        console.log("Controlled state:", e.target.checked);
    }


    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Controlled Checkbox */}

                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Controlled Checkbox</h3>
                    <CheckBox
                        label="Controlled Checkbox"
                        checked={checked}
                        type="checkbox"
                        onChange={onChangeHandler}
                        helperText={"This is a controlled checkbox"}
                        errorText={"This field is required"}
                        error={!checked}
                        errorTextClassName="text-red-600 text-left font-medium"
                        CheckedIcon={<CheckMarkIcon />}
                        labelClassName="text-sm font-semibold"
                        // checkIconPosition={"transform -translate-y-[2px]"}
                        helperTextClassName="text-blue-600 text-xs text-left"
                        labelWrapperClassName="hover:bg-gray-50"
                        containerClassName="bg-white"
                        dataTestId="controlled-checkbox"
                    />
                </div>

                {/* Form Registered Checkbox */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Form Registered Checkbox</h3>
                    {/* <CheckBox
                        label="Form Registered Checkbox"
                        checked={formCheckboxValue}
                        // type="checkbox"
                        {...register("checkbox", { required: "This field is required" })}
                        // errorText={!formCheckboxValue ? "This field is required" : ""} //for real time error
                        // // error={!formCheckboxValue} // for real time error
                        error={!!errors.checkbox} // after submitting the form, the error will be shown
                        errorText={errors.checkbox?.message} // after submitting the form, the error message will be shown
                        errorTextClassName="text-red-600 text-left font-medium"
                        helperText={"This is a form registered checkbox"}
                        // CheckedIcon={<CheckMarkIcon />}
                        // labelClassName="text-sm font-semibold"
                        // // inputClassName="w-4 h-4"
                        helperTextClassName="text-blue-600 text-xs text-left"
                    // labelWrapperClassName="hover:bg-gray-50"
                    // containerClassName="bg-white"
                    // dataTestId="form-checkbox"
                    /> */}
                </div>


                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit Form
                </button>
            </form>

            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Current Values:</h3>
                <p>Controlled State: {checked.toString()}</p>
                <p>Form Value: {formCheckboxValue.toString()}</p>
            </div>
        </div>
    );
};

export default CheckBoxTest;
