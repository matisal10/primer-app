import React, { useEffect, useState } from 'react';
import { getAllPageUsers, getAllUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState();
    const [totalUser, setTotalUser] = useState(12);
    const [pages, setPages] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);

    useEffect(() => {
        return () => {
            obtainUsers()
        };
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('all users: ', response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUser(response.total)
                setUsersPerPage(response.per_page)
            })
            .catch((error) =>
                alert(`erorr: ${error}`))
            .finally(() => {
                console.log('users: ')
                console.table(users)
            })
    }

    const obtainPageUser = (page) => {
        getAllPageUsers(page)
            .then((response) => {
                console.log('all page users: ', response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUser(response.total)
                setUsersPerPage(response.per_page)
            })
            .catch((error) =>
                alert(`erorr: ${error}`))
            .finally(() => {
                console.log('users: ')
                console.table(users)
            })
    }

    const getUserDetail = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('all page users: ', response.data)
                setSelectedUser(response.data)
            })
            .catch((error) =>
                alert(`erorr: ${error}`))
            .finally(() => {
                console.log('user: ')
                console.table(selectedUser)
            })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('TOKEN:', response.token)
                sessionStorage('token', response.token)
            })
            .catch((error) =>
                alert(`erorr: ${error}`))
            .finally(() => {
                console.log('login')
            })
    }

    return (
        <div>

            <button onClick={authUser}>Login</button>
            <h2>
                Users:
            </h2>
            {users.map((user, index) => (
                <p key={index} onClick={() => getUserDetail(user.id)}>
                    {user.first_name} {user.last_name}
                </p>
            )
            )
            }
            <p>Showing {usersPerPage} users of {totalUser} </p>
            <button onClick={() => obtainPageUser(1)}>1</button>
            <button onClick={() => obtainPageUser(2)}>2</button>

            <div>
                <h3>User details</h3>
                {selectedUser &&
                    (
                        <div>
                            <p>first name: {selectedUser.first_name}</p>
                            <p>last name: {selectedUser.last_name}</p>
                            <p>email: {selectedUser.email}</p>
                            <img alt='Avatar' src={selectedUser.avatar} style={{ height: '50px', width: '50px' }} />
                        </div>
                    )}
            </div>
        </div>
    );
}

export default FetchExample;
