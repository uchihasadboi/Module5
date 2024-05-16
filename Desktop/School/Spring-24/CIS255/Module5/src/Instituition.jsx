function Schools(props) {
    const schoolsStyle = {
        backgroundColor: "lightpink",
        padding: "10px",
        margin: "10px"
    }
    return(
        <div style = {schoolsStyle}>
            <h2>{props.name}</h2>
            <h3>{props.year}</h3>
            <p>{props.rating}</p>
        </div>
    )
}

export default Schools;