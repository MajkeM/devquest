import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div>
            <h1>Vítejte</h1>
            <header>
                <nav>
                    <Link to="/login">Přihlášení</Link>
                    <Link to="/register">Registrace</Link>
                </nav>
                <section>
                    <h2>teacher_digital_agency — Kurzy</h2>
                </section>
            </header>

        </div>
    )
}