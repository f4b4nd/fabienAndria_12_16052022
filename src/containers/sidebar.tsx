import SideNavbar from "../components/sidenavbar"
import MeditationLogo from "../assets/icons/meditation.png"
import SwimmingLogo from "../assets/icons/swimming.png"
import CyclingLogo from "../assets/icons/cycling.png"
import LiftingLogo from "../assets/icons/lifting.png"


export default function SideNavbarContainer () {
    return (

        <SideNavbar>

            <SideNavbar.Column>

                <SideNavbar.ImageContainer to="#" src={MeditationLogo} alt="meditation"/>

                <SideNavbar.ImageContainer to="#" src={SwimmingLogo} alt="swimming"/>

                <SideNavbar.ImageContainer to="#" src={CyclingLogo} alt="cycling"/>

                <SideNavbar.ImageContainer to="#" src={LiftingLogo} alt="lifting"/>

            </SideNavbar.Column>
            
            <SideNavbar.Text> Copyright, Sportsee 2020 </SideNavbar.Text>

        </SideNavbar>
    )
}