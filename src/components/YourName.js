function YourName({ setName }) {
    
    return (
        <div>
            <p>Enter your name:</p>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        </div>
    )

}

export default YourName;