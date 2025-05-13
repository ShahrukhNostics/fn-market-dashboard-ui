import * as yup from "yup";
export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("This field is required")
        .email("Enter a valid email"),
    password: yup
        .string()
        .required("This field is required")
        .min(6, "Password must be at least 6 characters"),
    rememberMe: yup
        .boolean()
        .oneOf([true], "This field is required")
        .required("This field is required"),
});