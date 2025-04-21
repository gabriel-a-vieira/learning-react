import Item from './Item'

function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Cherry" ano_lancamento={1986}/>
                <Item marca="Porsche" ano_lancamento={1987}/>
                <Item marca={12} ano_lancamento={'1029'}/>
            </ul>
        </>
    )
}

export default List