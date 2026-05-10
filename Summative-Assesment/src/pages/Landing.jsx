import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()

    return(
    <div>
        <h1>Welcome to This Site</h1>
        <button onClick={() => navigate ('/Home')}>Home</button>
        <button onClick={() => navigate ('/About')}>Home</button>
    </div>
)

}
