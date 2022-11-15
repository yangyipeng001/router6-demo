import { createBrowserHistory } from "history";
import { useLayoutEffect, useRef, useState } from "react";
import Router from "./Router";

export default function BrowserRouter({children}) {
    // 组件卸载之前用
    let historyRef = useRef(createBrowserHistory())

    // 因为location实时变化
    const [state, setState] = useState({location: historyRef.current.location})

    useLayoutEffect(() => {
        // setState(location)
        historyRef.current.listen(setState)
    }, [historyRef.current])

    return (
        <Router
            children={children}
            navigator={historyRef.current}
            location={state.location}
        />
    )
};

