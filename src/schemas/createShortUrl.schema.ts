import { object, string } from "yup";


export default object({
    body: object({
        destination: string()
        .url("URL must be valid")
        .required("Destination is required")
    }),
    
});