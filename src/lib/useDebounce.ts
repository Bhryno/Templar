import { useEffect, useState } from "react";

/*
* Caches ${value} every ${delay} and sends to database.
*/
export function useDebounce(value: string, delay: number) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debounceValue
}