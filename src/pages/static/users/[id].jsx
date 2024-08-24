const serverpage=(props)=>{

    console.log('data',props.data);
    return(
        <>
        {props.data.id}{props.data.firstName}
        {/* {props.data.data&&
        props.data.data.map((element) => (
          <li key={element.id}>{element.firstName}</li>
        ))} */}
        </>
    )
}
export async function getStaticPaths() {
    const data=await (await fetch(`https://dummyjson.com/users`)).json()
    const allusersid=data.users.map((user)=>user.id)
    // your code here
    return {
      paths:allusersid.map((userid)=>({params:{id:`${userid}`}})),
      fallback:false,
    }
}
export const getStaticProps=async(context)=>{
    const id =context.params.id
    const data=await (await fetch(`https://dummyjson.com/users/${id}`)).json()
    
    return {
        props:{
            data
        }
    }

}
export default serverpage

//Server Side Data Fetching   