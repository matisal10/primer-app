import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log("comportamiento cuando el componente recibe nuevos props o cambios en su estado")
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log("comportamiento cuando el componente recibe nuevos props o cambios en su estado")
    },);

    return (
        <div>
            <h1>DidUpdateHook</h1>
        </div>
    );
}


