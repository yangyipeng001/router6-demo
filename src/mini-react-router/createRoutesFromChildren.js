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

        routes.push(route)
    })

    return routes
};
