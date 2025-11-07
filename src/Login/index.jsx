import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>Přihlášení</h1>
            <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <input placeholder="Heslo" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <Link to="/teacher_digital_agency" >Přihlásit se</Link>
        </div>
    )
}