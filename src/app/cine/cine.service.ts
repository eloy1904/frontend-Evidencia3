import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()

export class cineService {
    private Api_Cine = 'http://localhost:8080/apirest/cine'
    
    constructor(public http:HttpClient ){}

    public getCine():Observable<any>{
        return this.http.get(this.Api_Cine)
    }
}