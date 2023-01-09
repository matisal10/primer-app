import { Observable } from "rxjs"

export const getNumbers = new Observable(subscribe => {
    subscribe.next(1);
    subscribe.next(2);
    subscribe.next(3);
    setTimeout(()=>{
        subscribe.next(4);
        subscribe.complete();
    },1000)
})