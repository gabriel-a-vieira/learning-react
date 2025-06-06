function Greeting({ name }) {
    
    function generateGreeting(anyName) {
        return `Hello, ${anyName}, how are you?`;
    }
    
    return (
        <>
            {name && <p>{generateGreeting(name)}</p>}
        </>
    )

}

export default Greeting;