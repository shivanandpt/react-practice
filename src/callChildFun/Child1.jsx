const Child1 = ({ onFocus, onClear}) => {
    return (<>
        <button onClick={onFocus}>Focus</button>
        <button onClick={onClear}>Clear input</button>
    </>);
}

export default Child1;