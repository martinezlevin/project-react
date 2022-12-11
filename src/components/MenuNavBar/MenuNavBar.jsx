import "./MenuNavBar.scss"
export const MenuNavBar = () => {
    return (
        
        <ul className="MenuNavBar navbar-nav mt-1 mb-1 mb-lg-0 ms-lg-6 container align-items-start d-flex flex-row justify-content-start">
            <li className="nav-logo"><img className="logoNike" src="logo.png" alt="logo" /></li>
            <li className="nav-item ListaNavBar"><a className="nav-link active me-5 LinkNavBar" aria-current="page" href="#!">Home</a></li>
            <li className="nav-item ListaNavBar"><a className="nav-link active me-5 LinkNavBar" aria-current="page" href="#!">About</a></li>
            <li className="nav-item ListaNavBar"><a className="nav-link active me-5 LinkNavBar" aria-current="page" href="#!">Shop</a></li>
            <li className="nav-item ListaNavBar"><a className="nav-link active me-5 LinkNavBar" aria-current="page" href="#!">All Products</a></li>
            <li className="nav-item ListaNavBar"><a className="nav-link active me-5 LinkNavBar" aria-current="page" href="#!">Popular Items</a></li>
            <li className="nav-item ListaNavBar"><a className="nav-link active me-5 LinkNavBar" aria-current="page" href="#!">New Arrivals</a></li>
        </ul>
    )
};
