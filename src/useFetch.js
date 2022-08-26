import {useEffect, useState} from "react";

const useFetch = (url)=>{

    const [data, setData] = useState(null)
    const [pending,setPending] = useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        const abortCont = new AbortController
        fetch(url,{signal:abortCont.signal})
            .then(res =>{
                if(!res.ok){
                    setPending(false)
                    throw Error('could not fetch data...')
                }
                return   res.json()
            })
            .then(data =>{

                setPending(false)
                setData(data)
            })
            .catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('aborted')
                }else {
                    setError(err.message)
                    setPending(false)
                }

            })
           return ()=>{
          abortCont.abort()}
    },[url])
    return {data,pending,error}
}
export default useFetch