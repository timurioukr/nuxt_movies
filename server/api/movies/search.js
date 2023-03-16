export default defineEventHandler((event) => {
    const { query, page } = getQuery(event)
    const config = useRuntimeConfig()
    return $fetch(`${ config.apiBaseUrl }/search/movie?query=${ query }&api_key=${ config.apiKey }&page=${ page }`)
})