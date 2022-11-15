import { useContext } from "react"
import { NavigationContext } from "./Context"

export function useRoutes(routes) {
    // todo 暂时使用window.location.pathname
    const pathname = window.location.pathname

    return routes.map((route) => {
        // const match = pathname === route.path || pathname === '/' + route.path
        const match = pathname.startsWith(route.path)

        // todo children待实现
        console.log('route', pathname, route)
        return match ? route.element : null
    })
}

export function useNavigate() {
    // 跳转
    const {navigator} = useContext(NavigationContext)

    return navigator.push
};
