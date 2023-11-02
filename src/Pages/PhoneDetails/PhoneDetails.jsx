import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsCard from "./PhoneDetailsCard";


const PhoneDetails = () => {

    const [phone, setPhone] = useState({})
    const {id} = useParams();
    const phones = useLoaderData()
    // console.log(id, phones)

    useEffect(()=>{
        const findPhone = phones.find(phone => phone.id === id)
        setPhone(findPhone)
    },[id, phones])
    // console.log(phone)
    return (
        <div>
          <div>
           <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
          </div>
        </div>
    );
};

export default PhoneDetails;