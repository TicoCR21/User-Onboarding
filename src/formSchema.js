import * as yup from "yup";


const formSchema = yup.object().shape( 
    {
        name : yup.string().trim().min( 5, "5 or More Letters" ).required( "Name Required" ),
        email : yup.string().trim().email( "Invalid Email Format" ).required( "Email Required" ),
        password : yup.string().trim().required( "Enter Password" )
    } );

export default formSchema;