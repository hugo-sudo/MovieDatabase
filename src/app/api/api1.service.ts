import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  constructor(private http: HttpClient) { }

  searchResults(name:string): Observable<any>{

    var finalSearch = name.replace(" ","%20");
    return this.http.get("https://api.themoviedb.org/3/search/person?api_key=f4e8e6ab5e4e71b249463e92d01fd49c&language=en-US&query="+finalSearch+"&include_adult=true");

  }

  getMovies(id:string): Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/person/"+id+"/movie_credits?api_key=f4e8e6ab5e4e71b249463e92d01fd49c&language=en-US")
  }

  getMovieCast(id:string): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=f4e8e6ab5e4e71b249463e92d01fd49c&language=en-US");
  }

  

}
