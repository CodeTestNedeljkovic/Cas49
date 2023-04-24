import { Injectable } from '@angular/core';
import { Storage } from '../models/Storage.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveParams(page: number, perPage: number): void {
    localStorage.setItem('page', page.toString());
    localStorage.setItem('perPage', perPage.toString());
  }

  getParams(): Storage {
    const page = Number(localStorage.getItem('page'));
    const perPage = Number(localStorage.getItem('perPage'));
    return { page, perPage };
  }
}
