import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate()

    return (
        <main id="main">

            <h1>Welcome to This Page</h1>
            <div id="buttons">
                <nav>
                    <button title ="Home" onClick={() => navigate('/Home')}><label>Home</label></button>
                    <button title="About" onClick={() => navigate('/About')}>About</button>
                    <button title="Admin Portal" onClick={() => navigate('/AdminPortal')}>Admin Portal</button>
                </nav>
            </div>
        </main>
    )

}