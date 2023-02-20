import Context from "./Context";
import { useState } from "react";
import PropertyData from "../PropertyData/PropertyData";

const State = (props) =>{
    // NAVBAR 
    const [active, setActive] = useState('rent')
    const handleClickRent = () =>{
        setActive('rent')
      }
      const handleClickBuy = () =>{
        setActive('buy')
      }
      const handleClickSell = () =>{
        setActive('sell')
      }
    //RENT
    const [data] = useState(PropertyData)
    const [like, setLike] = useState('like')
    const [modal, setModal] = useState(false)

    const handleClickAddLike = () =>{
        setLike('liked')
        setModal(true)
        setTimeout(() => {
            setModal(false)
        }, 3000);
        
    }
    const handleClickRemoveLike = ()=>{
        setLike('like')
        setModal(false)
    }
    //FILTERABLE LIST
    const [location, setLocation]= useState('New York, USA')
    const [date, setDate]= useState()
    const [price, setPrice]= useState('All prices')
    const [property, setProperty]= useState('Any')

    const handleChangeLocation = (event) =>{
        setLocation(event.target.value)
    }
    const handleChangeDate = (event) =>{
        setDate(event.target.value);
        console.log(date);
    }
    const handleChangePrice = (event) =>{
        setPrice(event.target.value);
        console.log(price);
    }
    const handleChangeProperty = (event) =>{
        setProperty(event.target.value)
    
    }
    return (
        <Context.Provider value = {
            {active, handleClickRent, handleClickBuy, handleClickSell, data, like, modal, handleClickAddLike, handleClickRemoveLike,
            location, date, price, property, handleChangeLocation, handleChangeDate, handleChangePrice, handleChangeProperty}
        }>
            {props.children}
        </Context.Provider>
    )
}

export default State