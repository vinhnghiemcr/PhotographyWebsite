import axios from "axios"
import { useEffect, useState } from "react"

const CheckOutPage = ({BASE_URL, cart, currentUser}) => {

    const [packages, setPackages] = useState([])
    const [pictures, setPictures] = useState([])

    useEffect( async () => {
        await axios.get(`${BASE_URL}/packages`)
        .then((res) => setPackages(res.data) )
        .catch((e) => console.log(e))

        await axios.get(`${BASE_URL}/collection/pictures`)
        .then((res) => setPictures(res.data))
        .catch((e) => console.log(e))
    }, [])

    

    return (
        <div>

        </div>
    )
}
export default CheckOutPage