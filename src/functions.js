import jQuery from "jquery"

export const makeURL = url => `http://localhost:8000/${url}`

// Router
export const getProducts = () => "/products/"
export const getProduct = (id, slug) => `/product/${id}/${slug}/`

export const getCategories = () => "/categories/"
export const getCategory = (id, slug) => `/category/${id}/${slug}/`

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

export const randomInt = max => Math.floor(Math.random() * Math.floor(max))
