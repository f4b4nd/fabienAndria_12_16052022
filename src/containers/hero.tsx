import { useParams } from "react-router-dom"
import useMockContent from "../hooks/useMockContent"

import { getEndpoint } from "../helpers/endpoints"

export default function HeroContainer () {

    const { id } = useParams()
    const userID = id || ""

    const userData = useMockContent(getEndpoint({route: 'default', userID}))

    return (
        <main>
            Age: {userData.data?.userInfos?.age}
        </main>
    )
}