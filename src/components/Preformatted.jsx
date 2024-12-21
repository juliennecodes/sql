export const Preformatted = ({children}) => {
    return (
        <pre style={{whiteSpace: "pre-wrap"}}>
            {children}
        </pre>
    )
}