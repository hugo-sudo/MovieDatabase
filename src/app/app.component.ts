import { Component, AfterViewInit, ViewChild, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { Api1Service } from './api/api1.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesApp';

  public data:any = []
  public movieDirector:any = []
  public movieCast:any = []
  public movies:any = []
  public id:any = []
  public actors:any = []

  constructor(private api1: Api1Service) { }

  allInfo() {
    this.data = [];
    this.movies = [];
    this.movieDirector = [];
    this.movieCast = [];
    this.actors=[];
    this.searchResults();
    
  }
  searchResults() {
    let search = (document.getElementById("name") as HTMLInputElement).value;
      this.api1.searchResults(search).subscribe((res) => {

        if(res["results"][0].known_for_department == "Directing") {
          this.api1.getMovies((res["results"][0].id).toString()).subscribe((res) => {

            for (let index = 0; index < res["crew"].length; index++) {
              if(res["crew"][index].job == "Director") {
                this.movies.push(res["crew"][index]);
                this.data.push(res["crew"][index]);
              }
            }
            for (let index = 0; index <this.movies.length; index++) {
              this.api1.getMovieCast((this.movies[index].id).toString()).subscribe((res) => {
                if ((res["crew"].find((item: { job: string; }) => item.job === "Director")) === undefined) {
                  this.movieDirector.push({"name":"Not Found"});
                } else{
                  this.movieDirector.push(res["crew"].find((item: { job: string; }) => item.job == "Director"));
                }

              })
              
            };
  
           for (let movie = 0; movie < this.movies.length; movie++) {
             this.actors.push([]);
                this.api1.getMovieCast((this.movies[movie].id).toString()).subscribe((res) => {
                  for (let actor = 0; actor < 3; actor++) {
                    if((res["cast"][actor].name !== undefined)) {
                      this.actors[movie].push(res["cast"][actor].name);
                    }
                    
                  }

                }) 
 
            }

          })
        } else {
        this.api1.getMovies((res["results"][0].id).toString()).subscribe((res) => {
          this.movies = res["cast"];
          
          let i = this.movies[9].id;
          for (let index = 0; index <this.movies.length; index++) {
            this.api1.getMovieCast((this.movies[index].id).toString()).subscribe((res) => {
              this.data.push(this.movies[index]);
              if ((res["crew"].find((item: { job: string; }) => item.job === "Director")) === undefined) {
                this.movieDirector.push({"name":"Not Found"});
              } else{
                this.movieDirector.push(res["crew"].find((item: { job: string; }) => item.job == "Director"));
              }
            })
            
          };

         for (let movie = 0; movie < this.movies.length; movie++) {
           this.actors.push([]);
              this.api1.getMovieCast((this.movies[movie].id).toString()).subscribe((res) => {
                for (let actor = 0; actor < 3; actor++) {
                  if((res["cast"][actor].name !== undefined)) {
                    this.actors[movie].push(res["cast"][actor].name);
                  }
                  
                }
              }) 
              
          
            
          }
          
          
        })
        }
      });
  }

  
}
