import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus();
        },
        clearInput: () => {
            inputRef.current.value = '';
        }
    }));
    return (
        <input type="text" ref={inputRef} />
    );
});

export default Child;