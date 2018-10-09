import jQuery from "jquery"

export const makeURL = url => `http://localhost:8000/${url}`

// Router
export const getProducts = () => "/products/"
export const getProduct = (id, slug) => `/product/${id}/${slug}/`

export const getCategories = () => "/categories/"
export const getCategory = (id, slug) => `/category/${id}/${slug}/`

export const getCollections = () => '/collections'
export const getCollection = (id, slug) => `/collection/${id}/${slug}/`
// Server router
export const serverSimilarProducts = id => `category/similar/products/${id}/`

export const serverCollections = () => `collections/`
export const serverCollection = (id, slug) => `collection/${id}/${slug}/`


export const getCookie = name => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const buttons = ['btn-dark', 'btn-info', 'btn-primary', 'btn-danger', 'btn-warning', 'btn-success']
export const randomInt = max => Math.floor(Math.random() * Math.floor(max))
export const randomButton = () => 'btn ' + buttons[randomInt(buttons.length)]
