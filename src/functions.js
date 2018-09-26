export const makeURL = url => `http://localhost:8000/${url}`

// Router
export const getProducts = () => "/products/"
export const getProduct = (id, slug) => `/product/${id}/${slug}/`

export const getCategories = () => "/categories/"
export const getCategory = (id, slug) => `/category/${id}/${slug}/`