export const CardProducts = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.marca}</p>
        </div>
    )
}