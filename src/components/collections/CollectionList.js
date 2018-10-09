import React from "react"
import {Link} from "react-router-dom"
import {getCollections} from "../../functions"
import CollectionDescription from "./CollectionDescription"

const CollectionList = props => {
    const { collections, search, home, limit, bread } = props

    let collections_list = collections.map((k, i) => {

    const collection = collections[i]
    
    if(collection.name.toLowerCase().includes(search.toLowerCase())){
        return (
            <li key={collection.id}>
                <CollectionDescription
                    id={collection.id}
                    name={collection.name}
                    description={collection.description}
                    image={collection.image}
                    slug={collection.slug}
                    details={collection.details}
                />
            </li>
        )
    }
    })
    
        if(home){
            collections_list = collections_list.slice(0, limit)
        }
    
        return (
            <div className="mt-4 mb-4">
                {bread && (
                    <ul className="uk-breadcrumb">
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to={getCollections()}>Collections</Link>
                        </li>
                    </ul>
                )}
                <div uk-grid="true" className="uk-grid-match uk-child-width-1-3@s uk-child-width-1-4@m">
                    {collections_list}
                </div>
                { collections_list.length===0 && <p className="uk-text-meta">Nous n'avons aucune collection à vous proposer actuellement</p>}
            
                { home && collections_list.length > 0 && (
                    <p className="uk-text-center">
                        <Link to={getCollections()} className="uk-button uk-button-secondary">
                            Voir toutes les collections
                        </Link>
                    </p>
                )}
            </div>
        )
}

export default CollectionList