
import { useState } from 'react';
import axios from ' axios'
import { useEffect } from 'react';

export const useRequestData = (initialState, url) =>{
     
     const [data,setData] = useState()

     const getData = async () =>{
            await axios.get(url, {
                Headers:{
                    auth: window.localStorage.getItem('token')
                }
            })
            .then((res)=>{
                setData(res.data)
            })
            .cath((error)=>{
                console.log(error.response.data.message);
            })
     }
     useEffect(()=>{
        getData()
     },[])
     return[data]
}