import React from "react"
import { Link } from "react-router-dom"
import CategoryDescription from "./CategoryDescription"

const CategoryList = ({ categories, search }) => {

    const categories_list = categories.map((k, i) => {

        const category = categories[i]

        if(category.name.toLowerCase().includes(search.toLowerCase())){
            return (
                <li key={category.id}>
                    <CategoryDescription
                        id={category.id}
                        name={category.name}
                        description={category.description}
                        image={category.image}
                        slug={category.slug}
                        details={category.details}
                    />
                </li>
            )
        }
    })

    return (
        <div uk-slider="true; autoplay: true; infinite: true; pause-on-hover: false; autoplay-interval: 2000">
            <div className="uk-position-relative uk-visible-toggle uk-light">
                <ul className="uk-grid uk-grid-match uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@m">
                    {categories_list}
                </ul>
                <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" uk-slidenav-previous="true" uk-slider-item="previous"></Link>
                <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" uk-slidenav-next="true" uk-slider-item="next"></Link>
            </div>
        </div>
    )
}

export default CategoryList
