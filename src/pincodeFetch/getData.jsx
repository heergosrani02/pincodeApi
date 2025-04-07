import { useEffect, useState } from "react";

function GetData({pincode}){
    const [isData, setData] = useState("");
    const [postOffice, setPostOffice] = useState([]);

    useEffect(() => {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((response) => response.json())
        .then((data) => {if(data[0].Status === "Success"){
            setPostOffice(data[0].PostOffice);
            setData(data[0].Message);
        }
        else{
            setPostOffice([]);
            setData("No data found");
        }})
        .catch((error) => console.log(error))
    }, [pincode])

    return(
        <>
            <h3 style={{margin:"10px"}}>Pincode : {pincode}</h3>
            <h4 style={{margin:"10px"}}>Message : {isData} </h4>
            <form>
                <input type="text" id="filter" placeholder="Filter"/>
            </form>

            <ul className="display">
            {postOffice.map((fetchData, index) => (
                <li className="box" key={index}>
                     <p>Name : {fetchData.Name}</p>
                     <p>Branch Type : {fetchData.BranchType}</p>
                     <p>Delivery Status : {fetchData.DeliveryStatus}</p>
                     <p>District : {fetchData.District}</p>
                     <p>Division : {fetchData.Division}</p>
                </li>
            ))}
            </ul>

        </>
    )
}

export default GetData