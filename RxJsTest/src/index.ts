
import { Observable} from 'rxjs/Observable';
import { Observer} from 'rxjs/Observer';

import './index.html';


function greeter(person:string):Observable<any> {
    let obs = Observable.create((function (observer:Observer<any>) {
        observer.next('Simon'); 
        observer.next('Jen'); 
        observer.next('Sergi'); 
        observer.complete(); // We are done 
    }));
    return obs;
}

let user = "Jane User";

greeter(user).subscribe(value => {
    document.body.innerHTML += ` ${value}`;
},() =>{},() => { document.body.innerHTML += '<br/>Completed!!!'});
