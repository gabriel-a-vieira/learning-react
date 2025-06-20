function AnotherList({ items }) {
    return (
        <>
        
        <h3>List of good things:</h3>
            { items.length > 0 ? (
                items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>There's no items in the list!</p>
                )
            }
        </>
    )
    
}

export default AnotherList
