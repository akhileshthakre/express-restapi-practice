import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Connection = () => {
    const [state,setState] = useState([])

    const onSubmitHandle =  async(e) => {
        e.preventDefault()
        try {
            const body = {state}
            await axios.post('http://localhost:3080/test',body).then((response) => {
                    setState(response.data)
            })
            console.log(body)
        } catch (error) {
            console.log(error.message)
        }
        

    }

    useEffect (() => {
        axios.get("http://localhost:3080").then((res) => {  
            setState(res.data.name)
        })
    },[])

    return (
        <div>
            <h1>World</h1>
            <input type = "text" value = {state} onChange= {(e) => setState(e.target.value)}/>
            {/* <input type = "text" value = {state.age} onChange= {(e) => setState(e.value.target)}/>
            <input type = "text" value = {state.sex} onChange= {(e) => setState(e.value.target)}/> */}
            <button onClick={onSubmitHandle}>Submit</button>
            <h1>{state}</h1>
        </div>
    )
}

export default Connection
