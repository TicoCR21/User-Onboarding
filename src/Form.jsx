import React from "react";

export default function( { name, email, password, onChange, terms, checkbox, submit ,disabled, errors } )
{
    return(
        <>
            <form onSubmit = { submit }>
                <label htmlFor = "name">
                    Name
                    <input 
                        id = "name" 
                        name = "name" 
                        type = "text"
                        placeholder = "Enter Name"
                        value = { name }
                        onChange = { onChange }
                    />
                    <h1>{ errors.name }</h1>
                </label>

                <br/>

                <label htmlFor = "email">
                    Email
                    <input 
                        id = "email" 
                        name = "email" 
                        type = "email"
                        placeholder = "Enter Email"
                        value = { email }
                        onChange = { onChange }
                    />
                    <h1>{ errors.email }</h1>
                </label>

                <br/>

                <label htmlFor = "password">
                    Password
                    <input 
                        id = "password" 
                        name = "password" 
                        type = "password"
                        placeholder = "Enter Password"
                        value = { password }
                        onChange = { onChange }
                    />
                    <h1>{ errors.password }</h1>
                </label>

                <br/>

                <label htmlFor = "terms">
                    Terms
                    <input
                        id = "terms" 
                        type = "checkbox"
                        name = "terms"
                        checked = { terms }
                        onChange = { checkbox }
                        style = { { fontSize : '200px' } }
                    />
                </label>

                <br/>
                <br/>

                <button type="submit" disabled = { disabled }>Submit</button>
            </form>
        </>
    );
}