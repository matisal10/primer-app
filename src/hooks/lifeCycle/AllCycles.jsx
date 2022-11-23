import React,{useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("componente creado")
        const intervalId = setInterval(()=>{
            document.title =`${new Date()}`
            console.log("actualizacion del componente")
        },1000)
        return () => {
            console.log("componente va a desaparecer")
            document.title = "tiempo detenido"
            clearInterval(intervalId)
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
