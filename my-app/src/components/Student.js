import React from 'react'
import axios from 'axios'

export default function Student() {
    const callApi = () =>
    {
        axios.get('http://localhost:5000/student').then(function(res){
            setApiResponse(res.data);
        })
    }

    React.useEffect(() => {
        callApi();
    })

    const [apiResponse, setApiResponse] = React.useState();
    return (
        <div>
        <p className="App-intro">{apiResponse}</p>
        </div>
    )
}
