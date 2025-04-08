import { useState } from "react"
import GetData from "./getData.jsx"

function EnterPincode(){
    const [pincode, setPincode] = useState("");
    const [component, setComponent] = useState(false);

    return(
        <>
            {!component ? (<form>
                <label htmlFor="pincode" className="label">Enter Pincode</label> <br />
                <input type="text" id="pincode" value={pincode} placeholder="Pincode" onChange={(e) => setPincode(e.target.value)} /> <br />
                <button type="submit" onClick={(e) => {e.preventDefault(); setComponent(true);}}>Lookup</button>
            </form>) : (<GetData pincode={pincode}/>)}
        </>
    )
}

export default EnterPincode