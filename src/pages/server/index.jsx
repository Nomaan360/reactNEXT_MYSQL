import style from '../../app/Home.module.css'
const serverpage=(props)=>{

    console.log('data',props);
    console.log('style',style);
    return(
        <>
        {props.ds.users&&
        props.ds.users.map((element) => (
          <li className={style.li} key={element.id}>{element.firstName}</li>
        ))}
        </>
    )
}

export const getServerSideProps=async()=>{
    const ds=await (await fetch(`https://dummyjson.com/users`)).json()
    
    return {
        props:{
            ds
        }
    }

}
export default serverpage

//Server Side Data Fetching   