import * as yup from "yup"


export const authValedation = yup.object({
    email: yup.string().required("Email as Invaled").email("Invalid Format Email"),
    password: yup.string().required("Password as Riquired!")
})