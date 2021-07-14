import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    console.log(results)

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {  
                    limit: 50,
                    term: searchTerm,
                    location: "california"
                }
            })
            setResults(response.data.businesses)
            setErrorMessage("")
        } catch (err) {
            setErrorMessage("")
            setErrorMessage("Something went wrong.")
        }
    }

    //Call searchAPI when component is first rendered (BAD CODE!)
    // searchAPI("pasta")
    useEffect(() => {
        searchAPI("pasta")
    }, [])

    return [searchAPI, errorMessage, results]
}