
import { makeAutoObservable } from "mobx";

class State {
  constructor() {
    makeAutoObservable(this);
  }

  movie = null;

  setMovie(movie) {
    this.movie= movie;
  }
  resetMovie() {
    this.movie = null;
  }

  serie = null;

  setSerie(serie) {
    this.serie= serie;
  }
  resetSerie() {
    this.serie = null;
  }
}

export default new State();