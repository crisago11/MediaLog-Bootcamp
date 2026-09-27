type EmptyStateProps ={
    title: string
    description: string
}

function EmptyState(props: EmptyStateProps){
    return(
        <div className="empty-state">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default EmptyState