import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link to="/">
            <img src="./logo.png" alt="logo" />
        </Link>
    )
}

export default Logo
