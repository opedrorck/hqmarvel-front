import "../assets/css/Login.css"

function Quadrinhos() {
    return (
        
        <div className="body">

            <header>
                <nav id="navbar">
                    <i className="logo-nav" id="nav-logo">Heróis</i>

                    <ul id="nav_list">
                        <li className="nav-item">
                            <a href="#home">Início</a>
                        </li>

                        <li className="nav-item">
                            <a href="#menu">Quadrinhos</a>
                        </li>

                        <li className="nav-item">
                            <a href="#info">Sobre Nós</a>
                        </li>
                    </ul>

                    <button className="btn-default">
                        Ver Novidades
                    </button>
                </nav>
            </header>

        </div>

    );
}


export default Quadrinhos;