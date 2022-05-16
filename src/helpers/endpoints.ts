export type Route = 'default' | 'activity' | 'sessions' | 'performance'

export const getEndpoint = ({route, userID} : {route: Route, userID: string}) => {
    const endpoints =  {
        default : `user/${userID}`,
        activity : `user/${userID}/activity`,
        sessions : `user/${userID}/average-sessions`,
        performance : `user/${userID}/performance`
    }
    return { 
        'route' : route, 
        'endpoint' :  endpoints[route]
    }
}

export const getUserIDFromEndpoint = (endpoint : string) => {
    const match = endpoint.match(/\d+/g)
    return match ? match[0] : ""
}