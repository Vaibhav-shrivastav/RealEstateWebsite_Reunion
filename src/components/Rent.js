import React,{useContext} from 'react'
import {FaRegHeart} from 'react-icons/fa'
import {BiBed, BiBath} from 'react-icons/bi'
import {TbSofa} from 'react-icons/tb'
import Modal from './Modal'
import PropertyData from "../PropertyData/PropertyData";
import Context from '../context/Context'
import NotFound from './NotFound'


function Rent() {
    const a = useContext(Context)

    const filteredProperties = PropertyData.filter((product)=>{
        const filters = [
          ()=> !a.location || product.address.includes(a.location),
          ()=> !a.date || product.when <= a.date,
          ()=> !a.price || product.price,
          () => !a.price ||
          (product.price >= a.price.min && product.price <= a.price.max),
          () => !a.property || product.type === a.property,
        ];

        return filters.every((filter)=> filter())
    });
  return (
    <div className="container text-center ">
        <div className="row text-center">
        {filteredProperties.length !== 0 ?
        filteredProperties.slice(0,10).map((item)=>(
            <div className="col-3 shadow-sm pb-3 mb-5 mx-3 bg-white rounded">
                <img id='img' height='200px' src={item.image} alt="" /><br /><br />
                <img id='label' src="https://img.freepik.com/free-vector/violet-banner-design-white-background_1308-94115.jpg?w=996&t=st=1676840691~exp=1676841291~hmac=a81de16a683bd6b43fb0e82d93fd2ed0288201f6024ecb0992cc030d37b80639" alt="" />
                <div className='mx-2'>
                
                <p id='price'>${item.price} <span id='priceLabel'>/month</span></p>
                <FaRegHeart className={a.like==='liked'?'like mx-2 shadow rounded':'notliked mx-2'} onClick={a.like==='like'?a.handleClickAddLike:a.handleClickRemoveLike}/>
                </div><br /><br />
                <div className='details mx-2'>
                <h5><b>{item.name}</b></h5>
                <p>{item.address}</p>
                </div><br /><br /><br />
                <hr />
                <div className="text-center bed">
                <BiBed className='logodet'/> {item.beds} beds &nbsp;
                <BiBath className='logodet'/> {item.bathrooms} bathrooms &nbsp;
                <TbSofa className='logodet'/> {item.area} m<sup>2</sup>
                </div>
            </div>
        )): <NotFound/>}
        {a.modal && <Modal/>}
        </div>
    </div>
  )
}

export default Rent