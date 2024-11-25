import { useRef } from "react";
import Child from "./Child";
import Child1 from "./Child1";

const Parent = () => {
    const childRef = useRef(null);

    const handleFocus = () => {
        childRef.current.focusInput()
    };

    const handleClear = () => {
        childRef.current.clearInput();
    }

    return (<>
        <Child ref={childRef}></Child>
        <Child1 onFocus={handleFocus} onClear={handleClear}></Child1>
    </>);
}

export default Parent;