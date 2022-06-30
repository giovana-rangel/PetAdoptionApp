import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
 
  constructor() { }

  clear(){ 
    window.location.reload()
  }
}
