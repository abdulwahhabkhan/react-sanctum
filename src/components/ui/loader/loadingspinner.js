import React, {useEffect, useRef, useState} from "react";

const LoadingSpinner = (props)=>{
    const timeout = useRef()
    const [ready, setReady] = useState(false)
    const [delay] = useState(props.delay || 0)

    useEffect(()=>{
        if (delay && delay > 0) {
            timeout.current = window.setTimeout(() => {
                setReady(true);
            }, delay);
        } else {
            setReady(true);
        }
    }, [ready, delay, setReady])

    if(!ready)
        return (
            <></>
        )

    return (
        <>
            <div className="full-screen-loader">
                <div className="cssload-container">
                    <div className="cssload-whirlpool" />
                </div>
            </div>
        </>
    )
}

export default LoadingSpinner