import { useMemo } from "react";
import { NavigationContext } from "./Context";

export default function Router({navigator, children, location}) {
    let navigationContext = useMemo(() => {
        return {navigator, location}
    }, [navigator, location])

    return (
        <NavigationContext.Provider value={navigationContext}>
            {children}
        </NavigationContext.Provider>
    )
}