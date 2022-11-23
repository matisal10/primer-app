import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log("comportamiento antes de que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <h1>willUnmount</h1>
            </div>
        );
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        console.log("comportamiento antes de que el componente desaparezca")
    }, []);

    return (
        <div>
            <h1>WillUnMountHook</h1>
        </div>
    );
}


