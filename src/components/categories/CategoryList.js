import React from "react"
import { Link } from "react-router-dom"
import CategoryDescription from "./CategoryDescription"
import { getCategories } from "../../functions"

const CategoryList = ({ categories, search, home }) => {

    let categories_list = categories.map((k, i) => {

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
                        nb_products={category.nb_products}
                    />
                </li>
            )
        }
    })

    if(home){
        categories_list = categories_list.slice(0, 12)
    }

    return (
        <div>
            <div uk-grid="true" className="uk-grid-match uk-child-width-1-3@s uk-child-width-1-4@m">
                {categories_list}
            </div>
            { categories_list.length===0 && <p className="uk-text-meta">Nous n'avons aucune catégorie à vous proposer actuellement</p>}
            { home && categories_list.length > 0 && (
                <p className="uk-text-center">
                    <Link to={getCategories()} className="uk-button uk-button-secondary">
                        Voir toutes les catégories
                    </Link>
                </p>
            )}
        </div>
    )
}

export default CategoryList
