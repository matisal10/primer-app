import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log("comportamientos antes de que el componente sea añadido al dom (renderice)")
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log("comportamientos antes de que el componente sea añadido al dom (renderice)")
    }, []);

    return (
        <div>
            <h1>DidMountHook</h1>
        </div>
    );
}


