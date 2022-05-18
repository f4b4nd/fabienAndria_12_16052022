import SideNavbar from "../components/sidenavbar"
import MeditationLogo from "../assets/logos/meditation.png"
import SwimmingLogo from "../assets/logos/swimming.png"
import CyclingLogo from "../assets/logos/cycling.png"
import LiftingLogo from "../assets/logos/lifting.png"


export default function SideNavbarContainer () {
    return (

        <SideNavbar>

            <SideNavbar.GroupIcons>

                <SideNavbar.IconContainer to="#" src={MeditationLogo} alt="meditation"/>

                <SideNavbar.IconContainer to="#" src={SwimmingLogo} alt="swimming"/>

                <SideNavbar.IconContainer to="#" src={CyclingLogo} alt="cycling"/>

                <SideNavbar.IconContainer to="#" src={LiftingLogo} alt="lifting"/>

            </SideNavbar.GroupIcons>
            
            <SideNavbar.Text> Copyright, Sportsee 2020 </SideNavbar.Text>

        </SideNavbar>
    )
}