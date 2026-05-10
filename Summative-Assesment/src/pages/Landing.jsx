import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate()

    return(
    <div>
        <h1>Welcome to This Site</h1>
        <button onClick={() => navigate ('/Home')}>Home</button>
        <button onClick={() => navigate ('/About')}>About</button>
    </div>
)

}