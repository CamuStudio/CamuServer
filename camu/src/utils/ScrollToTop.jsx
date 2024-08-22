import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A component that makes sure that the page goes to top once entering the new page
 * @returns {null}
 * @constructor
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}