import { useEffect, useRef } from "react";

export const useObserver = (isActive, ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if (isActive) {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();

            var cb = function (entries, observer) {
                if (entries[0].isIntersecting && canLoad) {
                    callback()
                }
            };
            observer.current = new IntersectionObserver(cb);
            observer.current.observe(ref.current)
        }
    }, [isLoading])
}