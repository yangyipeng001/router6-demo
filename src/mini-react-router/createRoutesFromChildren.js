import React from "react"

// ! 类比 dom --> vdom
export default function createRoutesFromChildren(children) {
    const routes = []

    // 遍历
    React.Children.forEach(children, child => {
        const route = {
            element: child.props.element,
            path: child.props.path
        }

        // 如果有子路由
        if (child.props.children) {
            // route array
            route.children = createRoutesFromChildren(child.props.children)
        }

        routes.push(route)
    })

    return routes
};
