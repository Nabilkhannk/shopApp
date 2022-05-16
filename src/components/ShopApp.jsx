import React, {useContext,useState} from 'react'
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ShopContext } from './ShopR';

const ShopApp = () => {

    let {item} = useContext(ShopContext)

    const [filterD, setFilterD ] = useState("")

    let search = (item) =>{
        return item.filter((curVal) => curVal.name.toLowerCase().includes(filterD) || curVal.category.toLowerCase().includes(filterD) ||  curVal.location.toLowerCase().includes(filterD) ) ;
    }
    
    return (
        <>

        <section className='shopping_sec'>

            <div className='inp_div'>
            <h2>Shop List</h2>
            <input type="text" className='inp' placeholder='Search Shop...' onChange={(e)=> setFilterD(e.target.value)} />
            </div>
            <div className='card_div'>
                

                
           <div className="heading_div">
                <div>
                    <h3>Name</h3>
                </div>
                <div>
                    <h3>Category</h3>
                </div>    
                <div>
                    <h3>Location</h3>
                </div> 
                <div>
                    <h3>Timing</h3>
                </div>

                </div>
            <Scrollbars>


            {
                search(item).map((curVal) =>{
                    return <Items {...curVal} key={curVal.id}/>
                })
            }
                </Scrollbars>


            </div>


        </section>            
        </>
    )
}

export default ShopApp;
