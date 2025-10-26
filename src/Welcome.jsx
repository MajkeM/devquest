import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div>
            <h1>Welcome</h1>    
            <header>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
                <section> 
                    <h2>devquest</h2>
                </section>
            </header>

            
        </div>
    )
}