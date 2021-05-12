import { LoadingType } from './loading-type';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class LoadingService {

  loadingSubeject = new Subject<LoadingType>();

  getLoading(){
    return this.loadingSubeject
                .asObservable()
                .pipe(startWith(LoadingType.STOPPED));
  }

  start(){
    this.loadingSubeject.next(LoadingType.LOADING);
  }

  stop(){
    this.loadingSubeject.next(LoadingType.STOPPED);
  }
}
