import useSWR from "swr"; 
import  Link  from "next/link";
const fetcher = (url) => fetch(url).then((res) => res.json());

const userPage=()=>{
    const {data,error}=useSWR('https://dummyjson.com/users',fetcher)
    console.log(data);
    
    if(!data) return <h5>Loading...</h5>
    if(error) return <h5>Something went wrong...</h5>

    return(
        <>
        {data.users&&
        data.users.map((element) => (
           <Link href={`users/${element.id}`}> <li key={element.id}>{element.firstName}</li></Link>
        ))}
        </>
    )
}

export default userPage