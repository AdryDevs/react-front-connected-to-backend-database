
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
}

export default new State();