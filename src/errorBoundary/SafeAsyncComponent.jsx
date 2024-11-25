const handleAsyncError = (Component) => {
    return function WrapComponent(props) {
        try {
            return (
                <Component {...props}></Component>
            )
        } catch (err) {
            console.log(err);
            return (
                <h3>Error!!!!</h3>
            )
        }
    }
}