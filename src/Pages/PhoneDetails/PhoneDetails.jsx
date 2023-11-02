import { useLoaderData, useParams } from "react-router-dom";


const PhoneDetails = () => {
    const {id} = useParams();
    const phones = useLoaderData()
    console.log(id, phones)
    return (
        <div>
          <div>
            {
                phones?.
            }
          </div>
        </div>
    );
};

export default PhoneDetails;