export function useRoutes(routes) {
    // todo 暂时使用window.location.pathname
    const pathname = window.location.pathname

    return routes.map((route) => {
        const match = pathname === route.path || pathname === '/' + route.path
        return match ? route.element : null
    })
}