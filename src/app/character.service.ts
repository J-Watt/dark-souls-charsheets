import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

import { MessageService } from './message.service';
import { Character } from './character';
import { Airtable, Base } from 'ngx-airtable';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersUrl = 'api/characters'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private _charactersTable;

  constructor(
    private http: HttpClient,
    private _airtable: Airtable,
    private messageService: MessageService) {
      const base: Base = this._airtable.base('app5TlItQ1d8XZrrU');
      this._charactersTable = base.table({ tableName: 'Characters'});
    }

  airtableTest(): Observable<string> {
    return this._charactersTable.select().all()
    .pipe(
      map(char => Object.assign(new Character(), JSON.parse(char[0].fields.data))),
      catchError(this.handleError<string>())
    );
  }

  /** GET characters from the server */
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl)
    .pipe(
      tap(_ => this.log('fetched characters')),
      catchError(this.handleError<Character[]>('getCharacters', []))
    );
  }

  /** GET character by id. Will 404 if id not found */
  getCharacter(id: number): Observable<Character> {
    // const url = `${this.charactersUrl}/${id}`;
    // return this.http.get<Character>(url).pipe(
    //   map(char => Object.assign(new Character(), char)),
    //   tap(_ => this.log(`fetched character id=${id}`)),
    //   catchError(this.handleError<Character>(`getCharacter id=${id}`))
    // );
    return this._charactersTable.select().all()
    .pipe(
      map(char => Object.assign(new Character(), JSON.parse(char[0].fields.data))),
      catchError(this.handleError<Character>())
    );
  }

  /** PUT: update the character on the server */
  updateCharacter(character: Character): Observable<any> {
    return this.http.put(this.charactersUrl, character, this.httpOptions).pipe(
      tap(_ => this.log(`updated character id=${character.id}`)),
      catchError(this.handleError<any>('updateCharacter'))
    );
  }

  /** POST: add a new character to the server */
  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.charactersUrl, character, this.httpOptions).pipe(
      tap((newCharacter: Character) => this.log(`added character w/ id=${newCharacter.id}`)),
      catchError(this.handleError<Character>('addCharacter'))
    );
  }

  /** DELETE: delete the character from the server */
  deleteCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;

    return this.http.delete<Character>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted character id=${id}`)),
      catchError(this.handleError<Character>('deleteCharacter'))
    );
  }

  /* GET characters whose name contains search term */
  searchCharacters(term: string): Observable<Character[]> {
    if (!term.trim()) {
      // if not search term, return empty character array.
      return of([]);
    }
    return this.http.get<Character[]>(`${this.charactersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found ${x.length} characters matching "${term}"`) :
        this.log(`no characters matching "${term}"`)),
      catchError(this.handleError<Character[]>('searchCharacters', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`CharacterService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
