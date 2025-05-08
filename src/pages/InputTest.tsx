import { useState } from "react";
import InputField from "../components/InputField/InputField";
import { useForm, SubmitHandler } from "react-hook-form";


interface FormData {
  firstName: string;
}

const InputTest = () => {
{ /* controlled input by useState*/}
 const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("Blurred:", e.target.value);
  };


{ /* search icon*/}
  const SearchIcon = () => ( 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
      <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
    </svg>
  );

{/* uncontrolled input by react-hook-form*/}
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  { /* controlled input by useState*/}
   const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({value});
  };

  return (
  <>

  {/* uncontrolled input by react-hook-form*/}
    <form onSubmit={handleSubmit(onSubmit)}> 
      <InputField
        placeholder="Enter your text"
        leftIcon={<SearchIcon />}
        rightIcon={<SearchIcon />}
        variant="outline"
         disabled={false} 
        size="lg"
        type="text"
        error={!!errors.firstName}
        helperText="This is some helper text"
        errorText={errors.firstName?.message || 'This field is required'}
        {...register("firstName", {
          required: "This field is required",
          maxLength: {
            value: 20,
            message: "Max length is 20 characters"
          }
        })}
      />
      <button type="submit">Submit</button>
    </form>

{ /* controlled input by useState*/}
<form> 

 <InputField
  placeholder="Enter your text"
  leftIcon={<SearchIcon />}
  rightIcon={<SearchIcon />}
  variant="outline"
  size="lg"
  type="text"
  value={value}  
  disabled={false}
  error={false}
  helperText="This is some helper text"
  onChange={handleChange}
  onBlur={handleBlur}
  maxLength={100}
  name="myInput"
  dataTestId="input-field"
/>
 <button type="submit" onClick={onSubmitHandler}>Submit</button>
 </form>


    </>
  );
};

export default InputTest;
