import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CheckMarkIcon from '../../assets/svgs/checkMarkIcon';
import Button from '../Button/Button';
import CheckBox from '../CheckBox/CheckBox';
import InputField from '../InputField/InputField';
import Label from '../Label/Label';
import EyeIcon from '../../assets/svgs/eyeIcon';
import { loginSchema } from '../../schemas/loginSchema';

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  return (
    <form
      className="py-10 w-full"
      autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 items-start pb-8 w-full">
        <Label
          containerClassName="flex flex-col"
          labelClassName="text-base font-normal text-slate-gray"
          requiredClassName="text-red-600"
          htmlFor="email"
        >
          E-mail
        </Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              size={'lg'}
              id="email"
              type="email"
              autoComplete="email"
              className="border-1 w-full border-pale-steel focus:border-1 focus:border-teal-green"
              placeholder="Enter your email"
              error={!!errors.email}
              // helperText="Please enter your email"
              errorText={errors.email?.message}
              {...field}
            />
          )}
        />
      </div>
      <div className="flex flex-col gap-2 items-start pb-10 w-full">
        <Label
          containerClassName="flex flex-col"
          labelClassName="text-base font-normal text-slate-gray"
          requiredClassName="text-red-600"
          htmlFor="password"
        >
          Password
        </Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField
              size={'lg'}
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              className="border-1 w-full border-pale-steel focus:border-1 focus:border-teal-green"
              rightIcon={
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(prev => !prev)}
                  className="focus:outline-none"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <EyeIcon showpassword={showPassword} />
                </button>
              }
              rightIconPosition="top-6"
              placeholder="Enter your password"
              error={!!errors.password}
              // helperText="Please enter your password"
              errorText={errors.password?.message}
              {...field}
            />
          )}
        />
      </div>
      <div className="flex flex-row items-center justify-between w-full pb-10">
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <CheckBox
              label="Remember me"
              labelWrapperClassName="flex flex-row items-center gap-2"
              labelClassName="text-xs md:text-base font-normal text-neutral-gray"
              inputClassName="rounded-4 mb-bottom-neg-4 w-4 h-4 border-1 border-light-steel checked:bg-teal-green checked:border-teal-green focus:ring-teal-green focus:outline-none"
              CheckedIcon={<CheckMarkIcon className="text-white" />}
              checked={field.value}
              onChange={field.onChange}
              error={!!errors.rememberMe}
              errorText={errors.rememberMe?.message}
            />
          )}
        />

        <div className="relative">
          <a href="/" className="text-dark-teal text-xs md:text-base font-normal">
            Forgot Password?
          </a>
          <span className="absolute w-full border-dark-teal border-[0.5px] bottom-[5px] left-0" />
        </div>
      </div>
      <Button
        type="submit"
        className="bg-teal-green cursor-pointer hover:bg-greenish-cyan font-semibold text-xl w-full text-white py-8"
      >
        {'Sign in'}
      </Button>
    </form>
  );
};

export default LoginForm;
