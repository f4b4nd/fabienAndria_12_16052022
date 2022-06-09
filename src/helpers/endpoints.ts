export type Route = 'main' | 'activity' | 'sessions' | 'performance'

/**
 * Associates every route with its endpoints
 * @param {{route: string, userID: string }}  
 */
export const getEndpoint = ({route, userID} : {route: Route, userID: string}) => {
    const endpoints =  {
        main : `user/${userID}`,
        activity : `user/${userID}/activity`,
        sessions : `user/${userID}/average-sessions`,
        performance : `user/${userID}/performance`
    }
    return { 
        'route' : route, 
        'endpoint' : endpoints[route]
    }
}

