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
    }, [])

    useEffect( async () => {
        await axios.get(`api/packages`)
        .then((res) => setPackages(res.data) )
        .catch((e) => console.log(e))

        await axios.get(`api/collection/pictures`)
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

    const createReceiptData = () => {
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
    createReceiptData()
    

    const generateReciept = () => {
        return (
        <div className="printed-receipt">
          <section className="items"><h4>Package/Picture</h4><h4>Price</h4> <h4>Quantity</h4></section>
          {data.map((item) => {
            total += item.price * item.count
            return <section className="items"><h5>{item.name}</h5><h5>${item.price}</h5><h5>{item.count}</h5></section>
          })}
          <section className="items"><h3>Total:</h3> <h3>${total}</h3></section>
        </div>)
      }

    const pay = async () => {
      setIsPaid(!isPaid)
        if (currentUser) {
            let receipt = {
                items : {data},
                total: total,
                user: currentUser._id,
                date: moment().format("DD-MM-YYYY hh:mm:ss").toString()
            }            
            await axios.put(`api/users/${currentUser._id}/receipts`, receipt)
            .then((res) =>  {
                console.log(res, "RESPONSE");
                setCart({packages: [], pictures: []})                
            })
            .catch((e) => console.log(e))
        } else {
            let receipt = {
                items : {data},
                total: total,
                date: moment().format("DD-MM-YYYY hh:mm:ss").toString()
            }            
            await axios.post(`api/receipts`, receipt)
            .then((res) =>  {
                setCart({packages: [], pictures: []})
                
            })
            .catch((e) => console.log(e))
        }
    }

    return (
        <div className="receipt">
            <h1>Receipt Summary</h1>
            { generateReciept()}
            {isPaid ? 
                <h3>Thank you, for shopping with us!</h3> 
                : 
                <button onClick={pay}>Pay</button>
            }
        </div>
    )
}
export default CheckOutPage