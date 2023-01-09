import { async } from "rxjs"

export const getAllUsers = async () => {

    let response = await fetch('https://reqres.in/api/users')
    console.log("response: ", response)
    console.log("Status: ", response.status)
    console.log("OK: ", response.ok)
    return response.json()
}

export const getAllPageUsers = async (page) => {

    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    console.log("response: ", response)
    console.log("Status: ", response.status)
    console.log("OK: ", response.ok)
    return response.json()
}

export const getUserDetails = async (id) => {

    let response = await fetch(`https://reqres.in/api/users/${id}`)
    console.log("response: ", response)
    console.log("Status: ", response.status)
    console.log("OK: ", response.ok)
    return response.json()
}

export const login = async (email, password) => {
    let body = {
        email: email,
        password: password
    }

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        // mode: 'no-cors',
        // cache: 'no-cache',
        // headers: {
        //     'Content-type': 'application/json'
        // },
        // credentials: 'omit',
        body: body
    })
    console.log("response: ", response)
    console.log("Status: ", response.status)
    console.log("OK: ", response.ok)

    return response.json()
}