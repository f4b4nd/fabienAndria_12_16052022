
import Navbar from "../components/navbar"
import HeroContainer from "../containers/hero"

export default function Dashboard () {
    return (
        <>
            <Navbar>

                <Navbar.Logo to="#" />
                
                <Navbar.Link to="#"> Accueil </Navbar.Link>

                <Navbar.Link to="#"> Profil </Navbar.Link>

                <Navbar.Link to="#"> Réglages </Navbar.Link>
        
                <Navbar.Link to="#"> Communauté </Navbar.Link>

            </Navbar>

            <HeroContainer />


        </>
    )
}