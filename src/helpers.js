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

export const getSetupConfig = (title, ...configs) => {
    const query = configs.map(config => config.query)
        .reduce((acc, query) => `${acc}\n${query}` );

    return createSqlExampleConfig(title, query);
}