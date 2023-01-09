import React from 'react';

const AsyncExample = () => {


    async function generateNum() {
        return 1;
    }

    async function generatePromiseNum() {
        return Promise.resolve(2)
    }

    function obtainNum() {
        generateNum()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`algo salio mal: ${error}`))
    }
    function obtainPromiseNum() {
        generatePromiseNum().then((response) => alert(`Response: ${response}`))
    }

    async function saveSessionStorage(key, value) {
        await sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Mati')
            .then((response) => {
                let value = response
                alert(`saved name: ${value}`)
            })
            .catch((error) => alert(`algo salio mal: ${error}`))
            .finally(() => console.log("Succes: name saved an retreived"))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello'), 2000);
        })

        let message = await promise;

        await alert(`message recived: ${message} `)
    }

    const returnError = async () => {
        await Promise.reject(new Error("upss"))
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${response}`))
            .catch((error) => alert(`algo salio mal: ${error}`))
            .finally(() => alert("finally executed"))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidUrl')
            alert(`response : ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`error : ${error}`)
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('http://reqres.in/api/users'),
                fetch('http://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`error : ${error}`))
    }


    return (
        <div>
            <button onClick={obtainNum}>Obtener</button>
            <button onClick={obtainPromiseNum}>Obtener2</button>
            <button onClick={showStorage}>Saved and show </button>
            <button onClick={obtainMessage}> send message</button>
            <button onClick={consumeError} >Error</button>
            <button onClick={urlNotFound} > request not found</button>
            <button onClick={multiplePromise}>Multiple Promise</button>
        </div>
    );
}

export default AsyncExample;
