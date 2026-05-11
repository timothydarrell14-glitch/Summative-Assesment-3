import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate()

    return (
        <main id="main">

            <h1>Welcome to This Page</h1>
            <div id="buttons">
                <button onClick={() => navigate('/Home')}>Home</button>
                <button onClick={() => navigate('/About')}>About</button>
            </div>
        </main>
    )

}