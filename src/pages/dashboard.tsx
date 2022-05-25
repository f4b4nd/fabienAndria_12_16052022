
import NavbarContainer from "../containers/navbar"
import SideNavbarContainer from "../containers/sidebar"
import ChartsContainer from "../containers/charts"


export default function Dashboard () {
    return (
        <>
            <NavbarContainer />

            <main>

                <SideNavbarContainer />

                <ChartsContainer />

            </main>

        </>
    )
}