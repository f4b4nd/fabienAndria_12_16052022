
import NavbarContainer from "../containers/navbar"
import HeroContainer from "../containers/hero"
import SideNavbarContainer from "../containers/sidebar"

export default function Dashboard () {
    return (
        <>
            <NavbarContainer />

            <main>

                <SideNavbarContainer />

                <HeroContainer />

            </main>

        </>
    )
}