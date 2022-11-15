import { useMemo } from "react";
import { NavigationContext } from "./Context";

export default function Router({navigator, children}) {
    let navigationContext = useMemo(() => {
        return {navigator}
    }, [navigator])

    return (
        <NavigationContext.Provider value={navigationContext}>
            {children}
        </NavigationContext.Provider>
    )
}