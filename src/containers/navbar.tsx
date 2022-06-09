import Navbar from "../components/navbar"

export default function NavbarContainer () {
    return (
        <Navbar>

            <Navbar.Logo to="#" />
            
            <Navbar.Group>

                <Navbar.Link to="#"> Accueil </Navbar.Link>

                <Navbar.Link to="#"> Profil </Navbar.Link>

                <Navbar.Link to="#"> Réglages </Navbar.Link>

                <Navbar.Link to="#"> Communauté </Navbar.Link>

            </Navbar.Group>

        </Navbar>
    )
}