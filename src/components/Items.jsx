import React,{useContext} from 'react'
import ShopApp from './ShopApp';
import { ShopContext } from './ShopR';

const Items = (props) => {

    const { removeItems} = useContext( ShopContext)


    return (
        <>
        
    

          <div className="card_items">
        
                <div className="name">
                    <h4>{props.name}</h4>
                </div>    

                <div className="category_div">
                    <h4>{props.category}</h4>
                </div> 

                <div className="location_div">
                    <h4>{props.location}</h4>
                </div>

                <div className="timing_div">
                    <h4>{props.timing}</h4>
                </div>

                <div className="delete_div">
                    <i className="fas fa-trash-alt" onClick={() => removeItems(props.id)}></i>
                </div>
                </div>
                <hr />   
        </>
    )
}

export default Items;
