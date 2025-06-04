import { useState } from 'react';

function Conditional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function cleanEmail(e) {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Register your e-mail:</h2>
            <form>
                <input type="email" placeholder="Enter your e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={sendEmail}>Send e-mail</button>
                {userEmail && (
                    <div>
                        <p>user email: {userEmail}</p>
                        <button onClick={cleanEmail}>Clean e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Conditional;