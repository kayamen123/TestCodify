import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

  baseUrl = "https://dummyapi.io/data/v1/";

  header = "6279e7b09f585c4ff30d4803"


  constructor(
    private http: HttpClient
  ) { }

  getAllPost(pages:number)  : Observable<any>{
    const params = new HttpParams()
    .set('limit', "10")
    .set('page', pages.toString())

    //set header with key
    let header = new HttpHeaders();
    header = header.set("app-id",this.header );
  
    return this.http
    .get(this.baseUrl + "post", { observe: 'response', headers: header, params: params })
    //Use local file to reduce api usage
    // .get("assets/postList.sample", { observe: 'response', headers: header, params: params })
  }

getTagPostList(pages:number,category:string): Observable<any>{
  const params = new HttpParams()
  .set('limit', "10")
  .set('page', pages.toString())

  //set header with key
  let header = new HttpHeaders();
  header = header.set("app-id",this.header );

  return this.http
  .get(this.baseUrl +"tag/" + category + "/post", { observe: 'response', headers: header, params: params })
  //Use local file to reduce api usage
  // .get("assets/postList.sample", { observe: 'response', headers: header, params: params })
}

  getTagPost() :  Observable<any>{ 
    const params = new HttpParams()
    .set('limit', "10")

    //set header with key
    let header = new HttpHeaders();
    header = header.set("app-id",this.header );
  
    return this.http
    .get(this.baseUrl + "tag", { observe: 'response', headers: header, params: params })
  }


  getUserPost(id:string,pages:number) : Observable<any>{
    const params = new HttpParams()
    .set('limit', "10")
    .set('page', pages.toString())

    //set header with key
    let header = new HttpHeaders();
    header = header.set("app-id",this.header );
  
    return this.http
    .get(this.baseUrl + "user/" + id + "/post", { observe: 'response', headers: header, params: params })
    //Use local file to reduce api usage
    // .get("assets/postList.sample", { observe: 'response', headers: header, params: params })
  }

  getCommentsList(id:string)  : Observable<any>{
    let header = new HttpHeaders();
    header = header.set("app-id",this.header );
    const params = new HttpParams()
    .set('limit', "10")

    return this.http
    .get(this.baseUrl + "post/"  + id + "/comment", { observe: 'response', headers: header, params: params })
  }

  getUserList() : Observable<any>{
    let header = new HttpHeaders();
    header = header.set("app-id",this.header );
    const params = new HttpParams()
    .set('limit', "10")

    return this.http
    .get(this.baseUrl + "user", { observe: 'response', headers: header, params: params})
  }


  getUserDetail(id: string) : Observable<any> {
    let header = new HttpHeaders();
    header = header.set("app-id",this.header );

    
    return this.http
    .get(this.baseUrl + "user/" + id, { observe: 'response', headers: header})
  }
}
