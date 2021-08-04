import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {Offering} from '../_models/offerings';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfferingsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private offeringsUrl = 'api/offerings';
  constructor(
    private http: HttpClient,
    private msgService: MessageService
  ) { }
  getOfferings(): Observable<Offering[]>{
    return this.http.get<Offering[]>(this.offeringsUrl).
      pipe(
        tap(_ => this.log('fetched offerings')),
        catchError(this.handleError<Offering[]>('getOfferings', []))
    );
  }
  getOffering(id: number): Observable<Offering> {
    const url = `${this.offeringsUrl}/${id}`;
    return this.http.get<Offering>(url).pipe(
      tap(_ => this.log(`fetched offering id=${id}`)),
      catchError(this.handleError<Offering>(`getOffering id=${id}`))
    );
  }
  updateOffering(hero: Offering): Observable<any> {
    return this.http.put(this.offeringsUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated offering id=${hero.id}`)),
      catchError(this.handleError<any>('updateOffering'))
    );
  }
  /** POST: add a new hero to the server */
  addOffering(offering: Offering): Observable<Offering> {
    return this.http.post<Offering>(this.offeringsUrl, offering, this.httpOptions).pipe(
      tap((newOffering: Offering) => this.log(`added offering w/ id=${newOffering.id}`)),
      catchError(this.handleError<Offering>('addOffering'))
    );
  }

  deleteOffering(id: number): Observable<Offering> {
    const url = `${this.offeringsUrl}/${id}`;

    return this.http.delete<Offering>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted offering id=${id}`)),
      catchError(this.handleError<Offering>('deleteOffering'))
    );
  }
  searchOfferings(term: string): Observable<Offering[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Offering[]>(`${this.offeringsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found offerings matching "${term}"`) :
        this.log(`no offerings matching "${term}"`)),
      catchError(this.handleError<Offering[]>('searchOfferings', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void{
    this.msgService.add(`OfferingsService: ${message}`);
  }

}
