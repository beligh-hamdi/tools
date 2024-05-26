import {effect, inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {share} from "rxjs";
import {ConfigModel} from "../models/config.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  protected readonly http = inject(HttpClient);
  config: WritableSignal<ConfigModel> = signal({});


  constructor() {

    effect(() => {

      this.configData;
     // console.log(`current values: ${currentCount} ${derivedCounter}`);
    });


  }

  get configData() {
    return this.http.get('assets/config.json').pipe(share()).subscribe({
      next: (data) => {
        this.config.set(data);
      }
    });
  }
}
