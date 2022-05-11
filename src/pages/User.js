import React,{useState, useEffect} from 'react';

const User = () => {
    const url= 'http://localhost:3000/api/users/'

    const [users, setUsers]= useState([]);

    const userFetch= async() => {
        const resp = await fetch(url)
        const respJson = await resp.json()
        setUsers(respJson.users)
         }
        useEffect(() => {
            userFetch()
            ;
        }, []);
       
     
    return (
        <div>
         {!users
                  ? "cargando"
                  : users.map((user, index) => {
                      return (
                        <React.Fragment key={user.id}>
                          <div>
                            <div key={index.id}>{user.first_name}</div>
                            <div key={index.id}>{user.last_name}</div>
                            <div key={index.id}>{user.email}</div>
                            <div key={index.id}>{user.address}</div>
                          </div>
                        </React.Fragment>
                      );
                    })}   
        </div>
    );
}

export default User;
