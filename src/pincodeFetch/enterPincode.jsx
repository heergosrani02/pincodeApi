import { useState } from "react"
import GetData from "./getData.jsx"

function EnterPincode(){
    const [pincode, setPincode] = useState("");
    const [com, setCom] = useState(false);

    return(
        <>
            {!com ? (<form>
                <label htmlFor="pincode" className="label">Enter Pincode</label> <br />
                <input type="text" id="pincode" value={pincode} placeholder="Pincode" onChange={(e) => setPincode(e.target.value)} /> <br />
                <button type="submit" onClick={(e) => {e.preventDefault(); setCom(true);}}>Lookup</button>
            </form>) : (<GetData pincode={pincode}/>)}
        </>
    )
}

export default EnterPincode