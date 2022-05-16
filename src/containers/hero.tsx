import { useParams } from "react-router-dom"
import useMockContent from "../hooks/useMockContent"

export default function HeroContainer () {

    const { id } = useParams()
    const userData = useMockContent({route: 'users', id: id || ""})

    return (
        <main>
            Age: {userData.data?.userInfos.age} 
        </main>
    )
}