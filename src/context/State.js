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
    const [location, setLocation]= useState()
    const [date, setDate]= useState()
    const [price, setPrice]= useState({ min: 0, max: Infinity })
    const [priceuser, setPriceUser] = useState()
    const [property, setProperty]= useState()

    const handleChangeLocation = (event) =>{
        const str = event.target.value 
        const str2 = str.charAt(0).toUpperCase() + str.slice(1)
        setLocation(str2)
    }
    const handleChangeDate = (event) =>{
        setDate(event.target.value);
    }
    const handleChangePrice = (event) =>{
        const min = Number(event.target.value.split('-')[0]);
        const max = Number(event.target.value.split('-')[1]);
        setPrice({ min, max });
        setPriceUser(event.target.value);
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