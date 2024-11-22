import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Not able to fetch data')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setErr(null);
        })
        .catch(err => {
            setIsPending(false);
            console.log(err)
            setErr(err.message);
        })
    }, [url])
    return {
        isPending,
        data,
        err,
    };
}

export default useFetch;