import { useEffect, useState } from 'react';

export default function Dbform() {
    const [users, setUsers] = useState([]);
    return(
        <>
            <form>
                <input type="text" className="form-control" value={uname} id="month" onChange={(e) => setUsers(e.target.value)}/>
                <input type="text" className="form-control" value={uname} id="uname" onChange={handleUnameChange}/>
            </form>

        </>
    )

}
