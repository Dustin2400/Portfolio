import React,{ useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const[formState, setFormState] = useState({ Name: '', Email: '', Message: ''});
    const { Name, Email, Message } = formState;
    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e) {
        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } 
        } else {
            if (!e.target.value) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log()
    }

    return (
        <div className="content">
            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="Name">Name:</label>
                <input type="text" name="Name" defaultValue={Name} onBlur={handleChange} />
                <label htmlFor="Email">Email address:</label>
                <input type="email" name="Email" defaultValue={ Email } onBlur={handleChange} />
                <label htmlFor="Message">Message:</label>
                <textarea name="Message" rows="7" defaultValue={Message} onBlur={handleChange} />
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;