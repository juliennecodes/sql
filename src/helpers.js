export const copyContent = (content) => {
    navigator.clipboard.writeText(content)
}

export const createSqlExampleConfig = (title, query, ...notes) => {
    return {
        title,
        query,
        notes
    }
}