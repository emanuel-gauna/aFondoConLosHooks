export const MovieList = (props) =>{
    return(
        <>
        <tbody>
<tr>
    <td>{props.id}</td>
    <td>{props.Titulo}</td>
    <td>{props.Calificación}</td>
    <td>{props.Premios}</td>
    <td>{props.Duración}</td>
</tr>
</tbody>
        </>
    )
}
