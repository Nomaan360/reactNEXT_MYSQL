import useSWR from "swr"; 
import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json());
const userIndividual=()=>{
    const router=useRouter()
    const id=router.query.id
    const {data,error}=useSWR(`https://dummyjson.com/users/${id}`,fetcher)
    console.log(data);
    
    if(!data) return <h5>Loading...</h5>
    if(error) return <h5>Something went wrong...</h5>
    return(
        <>
            {data.id}
            {data.firstName}
        </>
    )
}

export default userIndividual