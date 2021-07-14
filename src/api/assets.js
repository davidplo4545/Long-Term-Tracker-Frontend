import axios from 'axios'

const domain = "http://127.0.0.1:8000/api"

export const getAllAssets = (userToken, assetType, setAssets) =>{
    axios.get(domain + `/assets/?type=${assetType}`,{
        headers:{
            'Authorization': `Token ${userToken}`
        }
    })
    .then((res) =>{
        setAssets(res.data)
    })
}

export const getAsset = (userToken, assetId, setAsset, setRecords, setIsValid) =>{
    axios.get(domain + `/assets/${assetId}`,{
        headers:{
            'Authorization': `Token ${userToken}`
        }
    })
    .then((res) =>{
        setAsset(res.data)
        setRecords(res.data.records)
        console.log(res.data.records)
    })
    .catch((error) =>{
        setIsValid(false)
    })
}