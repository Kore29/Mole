import Item from './Item';

function Lista({ items }) {
    return (
        <ul>
        {items.map((item) => (
            <Item
            key={item.id}
            item={item}
            />
        ))}
        </ul>
    )
}

export default Lista;