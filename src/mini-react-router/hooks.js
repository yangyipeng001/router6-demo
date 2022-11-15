import { useContext } from "react"
import { NavigationContext, RouteContext } from "./Context"
import Outlet from "./Outlet"
import { normallizePathname } from "./utils"

export function useRoutes(routes) {
    const location = useLocation()
    // todo 暂时使用window.location.pathname
    const pathname = location.pathname

    return routes.map((route) => {
        // const match = pathname === route.path || pathname === '/' + route.path
        const match = pathname.startsWith(route.path)

        // todo children待实现
        // console.log('route', pathname, route)
        // return match ? route.element : null
        return (
            match && route.children.map((child) => {
                let m = normallizePathname(child.path) === pathname

                return (
                    m && (
                        <RouteContext.Provider
                            value={{outlet: child.element}}
                            children={
                                route.element !== undefined ? route.element : <Outlet />
                            }
                        />
                    )
                )
            })
        )
    })
}

export function useNavigate() {
    // 跳转
    const {navigator} = useContext(NavigationContext)

    return navigator.push
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
