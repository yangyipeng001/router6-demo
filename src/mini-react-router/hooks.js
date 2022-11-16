import { useCallback, useContext, useMemo } from "react"
import { matchPath, matchRoutes } from "react-router-dom"
import { NavigationContext, RouteContext } from "./Context"
import Outlet from "./Outlet"
import { normallizePathname } from "./utils"

export function useRoutes(routes) {
    const location = useLocation()
    // todo 暂时使用window.location.pathname
    const pathname = location.pathname

    // ! router6的实现逻辑
    // 数组扁平化
    const matches = matchRoutes(routes, {pathname})
    console.log('matches', matches)
    return renderMatches(matches)

    // ! router5的实现逻辑
    // return routes.map((route) => {
    //     // const match = pathname === route.path || pathname === '/' + route.path
    //     const match = pathname.startsWith(route.path)

    //     // console.log('route', pathname, route)
    //     // return match ? route.element : null
    //     return (
    //         match && route.children.map((child) => {
    //             let m = normallizePathname(child.path) === pathname

    //             return (
    //                 m && (
    //                     <RouteContext.Provider
    //                         value={{outlet: child.element}}
    //                         children={
    //                             route.element !== undefined ? route.element : <Outlet />
    //                         }
    //                     />
    //                 )
    //             )
    //         })
    //     )
    // })
}

function renderMatches(matches) {
    if (matches === null) {
        return null
    }

    return matches.reduceRight((outlet, match) => {
        return (
            <RouteContext.Provider
                value={{outlet, matches}}
                children={match.route.element || outlet}
            />
        )
    }, null)
}

export function useNavigate() {
    // 跳转

    // * 第一版
    // const {navigator} = useContext(NavigationContext)
    // return navigator.push

    // * 第二版
    const {navigator} = useContext(NavigationContext)

    const navigate = useCallback((to, options = {}) => {
        // 支持类似于history.go
        if (typeof to === 'number') {
            navigator.go(to)
            return
        }

        (
            !!options.replace 
                ? navigator.replace
                : navigator.push
        )(to, options.state)
    }, [navigator])

    return navigate
};

export function useLocation() {
    const {location} = useContext(NavigationContext)

    return location
}

// children
export function useOutlet() {
    const {outlet} = useContext(RouteContext)

    return outlet
}

export function useParams() {
    const {matches} = useContext(RouteContext)
    const routeMatch = matches[matches.length - 1]
    
    return routeMatch ? routeMatch.params : {}
}


export function useMatch(pattern) {
    const {pathname} = useLocation()

    return useMemo(() => matchPath(pattern, pathname), [pathname, pattern])
}

export function useResolvedPath(to) {
    const {pathname} = useLocation()

    return useMemo(() => ({
        pathname: to,
        hash: '',
        search: '',
    }), [pathname])
}
