import axios from "axios"
import { useEffect, useState } from "react"
import moment from "moment"

const CheckOutPage = ({BASE_URL, cart, setCart ,currentUser, isPaid, setIsPaid}) => {

    const [packages, setPackages] = useState([])
    const [pictures, setPictures] = useState([])
    
    let sortedPackages = cart.packages.sort()
    let sortedPictures = cart.pictures.sort()
    let total = 0
  
    let data = []

    useEffect(() => {
      setIsPaid(false)
    }, [isPaid])

    useEffect( async () => {
        await axios.get(`${BASE_URL}/packages`)
        .then((res) => setPackages(res.data) )
        .catch((e) => console.log(e))

        await axios.get(`${BASE_URL}/collection/pictures`)
        .then((res) => setPictures(res.data))
        .catch((e) => console.log(e))
    }, [])

    const getPackageData = ( id ) => {
        let result = {}
        packages.forEach(element => {
          if (element._id === id) {
             result = element
             return
          }
        })
        return result
    }
    const getPictureData = ( id ) => {
        let result = {}
        pictures.forEach(element => {
          if (element._id === id) {
             result = element
             return
          }
        })
        return result
    }

    const getNameAndPrice = () => {
        for (let i = 0; i< sortedPackages.length; i++) {
          if (i == 0) {
            data.push({...getPackageData(sortedPackages[i]), count: 1})
          } else if (sortedPackages[i] === sortedPackages[i-1]) {
            data[data.length - 1].count++
          } else {
            data.push({...getPackageData(sortedPackages[i]), count: 1})
          }
        }
        for (let i = 0; i< sortedPictures.length; i++) {
            if (i == 0) {
              data.push({...getPictureData(sortedPictures[i]), count: 1})
            } else if (sortedPictures[i] === sortedPictures[i-1]) {
              data[data.length - 1].count++
            } else {
              data.push({...getPictureData(sortedPictures[i]), count: 1})
            }
        }
    }
    getNameAndPrice()
    

    const generateReciept = () => {
        return (
        <div>
          <h4>Package/Picture............Price.............Quantity </h4>
          {data.map((item) => {
            total += item.price * item.count
            return <h5>{item.name}...${item.price}...{item.count}</h5>
          })}
          <h3>Total:        ${total}</h3>
        </div>)
      }

    const pay = async () => {
        
        if (currentUser) {
            let receipt = {
                items : {data},
                total: total,
                user: currentUser._id,
                date: moment().format("DD-MM-YYYY hh:mm:ss").toString()
            }            
            await axios.put(`${BASE_URL}/users/${currentUser._id}`, receipt)
            .then((res) =>  {
                console.log(res, "RESPONSE");
                setIsPaid(!isPaid)
                setCart({packages: [], pictures: []})
                
            })
            .catch((e) => console.log(e))
        } else {
            let receipt = {
                items : {data},
                total: total,
                date: moment().format("DD-MM-YYYY hh:mm:ss").toString()
            }            
            await axios.post(`${BASE_URL}/receipts`, receipt)
            .then((res) =>  {
                console.log(res, "RESPONSE");
                setIsPaid(!isPaid)
                setCart({packages: [], pictures: []})
                
            })
            .catch((e) => console.log(e))
        }
    }

    return (
        <div className="Receipt">
            <h1>Receipt Summary</h1>
            { generateReciept()}
            {isPaid ? 
                <h3>Thank you for shopping with us!</h3> 
                : 
                <button onClick={pay}>Pay</button>
            }
        </div>
    )
}
export default CheckOutPage