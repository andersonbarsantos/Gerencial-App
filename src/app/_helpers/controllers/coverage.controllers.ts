import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs";


import { ApiResponse } from 'src/app/@shared/models/api.response.model';
import { Coverage } from 'src/app/pages/coverages/shared/coverage.model';

@Injectable()
export class CoverageControllers {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/Coverage/';


  getCoverage(){
    // return this.http.get<ApiResponse>(this.baseUrl);

    const coverage: Coverage[] = [
      { id: 1
      , username: 'barreto.develop@gmail.com'
      , password: '123456'
      , firstName: 'Anderson '
      , lastName: 'Barreto'
      , cargo :'Administrador' },
      { id: 2
        , username: 'barreto.develop@gmail.com'
        , password: '123456'
        , firstName: 'Matheus '
        , lastName: 'Barreto'
        , cargo :'Analista' }
        ,  { id: 3
          , username: 'barreto.develop@gmail.com'
          , password: '123456'
          , firstName: 'Enzo '
          , lastName: 'Barreto'
          , cargo :'Analista' }
          ,  { id: 4
            , username: 'barreto.develop@gmail.com'
            , password: '123456'
            , firstName: 'Valmira '
            , lastName: 'Barreto'
            , cargo :'Analista' }
            ,  { id: 5
              , username: 'barreto.develop@gmail.com'
              , password: '123456'
              , firstName: 'Leticia  '
              , lastName: 'Barreto'
              , cargo :'Analista' }
              ,  { id: 6
                , username: 'barreto.develop@gmail.com'
                , password: '123456'
                , firstName: 'Leco lamdao '
                , lastName: 'Barreto'
                , cargo :'Analista' }
                ,  { id: 7
                  , username: 'barreto.develop@gmail.com'
                  , password: '123456'
                  , firstName: 'Patricia '
                  , lastName: 'Barreto'
                  , cargo :'Analista' }

  ];

  return coverage ; 

  }

  getCoverages() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getCoverageById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createCoverage(coverage: Coverage): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, coverage);
  }

  updateCoverage(coverage: Coverage): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + coverage.id, coverage);
  }

  deleteCoverage(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
