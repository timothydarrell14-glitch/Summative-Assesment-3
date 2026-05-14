import { Link } from "react-router-dom"


export const Home = () => {
    return (
        <>
            <header>
                <div>
                    <h2>Brand Name</h2>
                </div>
                <div>
                    <Link to="/">Landing</Link>
                    <Link to="/about">About</Link>
                    <Link to="/adminPortal">AdminPortal</Link>
                </div>
            </header>
            <main>
                <div>
                    <img src="#"></img>
                    <h1>Product Cards</h1>
                </div>
            </main>
        </>
    )
}
