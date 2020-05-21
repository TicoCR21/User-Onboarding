import * as yup from "yup";


const formSchema = yup.object().shape( 
    {
        name : yup.string().trim().min( 1, "Error" ).required( "Name Required" ),
        email : yup.string().trim().email( "Email Format" ).required( "Email Required" ),
        // password : yup,
        // terms : yup
    } );

export default formSchema;