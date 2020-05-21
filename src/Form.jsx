import React from "react";

export default function( { name, email, password, onChange, terms, checkbox, submit ,disabled, errors } )
{
    return(
        <>
            <form onSubmit = { submit }>
                <label htmlFor = "name">
                    <input 
                        id = "name" 
                        name = "name" 
                        type = "text"
                        placeholder = "Enter Name"
                        value = { name }
                        onChange = { onChange }
                    />
                </label>

                <br/>

                <label htmlFor = "email">
                    <input 
                        id = "email" 
                        name = "email" 
                        type = "email"
                        placeholder = "Enter Email"
                        value = { email }
                        onChange = { onChange }
                    />
                </label>

                <br/>

                <label htmlFor = "password">
                    <input 
                        id = "password" 
                        name = "password" 
                        type = "password"
                        placeholder = "Enter Password"
                        value = { password }
                        onChange = { onChange }
                    />
                </label>

                <br/>

                <label htmlFor = "terms">
                    <input
                        id = "terms" 
                        type = "checkbox"
                        name = "terms"
                        checked = { terms }
                        onChange = { checkbox }
                    />
                </label>

                <br/>

                <button type="submit" disabled = { disabled }>Submit</button>
            </form>
        </>
    );
}