// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

// /** @description Common functions for angular services. */
// @Injectable({
//   providedIn: 'root'
// })
// export class CommonService {
//   private baseUrl = '';

//   constructor(
//     private http: HttpClient) {
//     const configEnv = environment.appUrl;
//     if (configEnv === '') {
//       this.baseUrl = window.location.protocol + '//' + window.location.host;
//     } else {
//       this.baseUrl = `${environment.appUrl}`;
//     }
//   }

//   // /**
//   //  * @description Combines the controller name to set the api url to user.
//   //  * @param string controller The name of the controller.
//   //  */
//   getApiUrl(controller: string): string {
//     return `${this.baseUrl}/api/${controller}`;
//   }

//   /** @description Adds the default request headers that is needed when making an api call. */
//   getApiRequestOptions(): object {
//     const token = '';
//     if (token != null) {
//       const accessToken = token;
//       if (accessToken) {
//         return {
//           headers: new HttpHeaders(
//             {
//               'Content-Type': 'application/json; charset=utf-8',
//               Authorization: 'Bearer ' + accessToken
//             }
//           )
//         };
//       }
//     } else {
//       return {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json; charset=utf-8'
//         })
//       };
//     }
//   }

//   getTokenRequest(): object {
//     const token = '';
//     if (token != null) {
//       const accessToken = token;
//       if (accessToken) {
//         return {
//           headers: new HttpHeaders(
//             {
//               'Content-Type': 'application/json; charset=utf-8',
//               Authorization: 'Bearer ' + accessToken
//             }
//           )
//         };
//       }
//     } else {
//       return {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json; charset=utf-8'
//         })
//       };
//     }
//   }

//   getToken<T>(item: T): Observable<number[]> {
//     const apiUrl = `${this.baseUrl}/login`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<number[]>(apiUrl, JSON.stringify(item), headers);
//   }

//   get<T>(id: any, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}/${id}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.get<T>(apiUrl, headers);
//   }

//   getAll<T>(apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.get<T>(apiUrl, headers);
//   }

//   addToReturnNumberArray<T>(item: T, apiUrl: string): Observable<number[]> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<number[]>(apiUrl, JSON.stringify(item), headers);
//   }

//   addToReturnString<T>(item: T, apiUrl: string): Observable<string> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<string>(apiUrl, JSON.stringify(item), headers);
//   }

//   addReturnsValidationResult<T>(item: T, apiUrl: string): Observable<ValidationResultModel> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<ValidationResultModel>(apiUrl, JSON.stringify(item), headers);
//   }

//   add<T, TK = number>(item: T, apiUrl: string): Observable<TK> {
//     return this.post(apiUrl, item);
//   }

//   post<T, TK = number>(apiUrl: string, item: T): Observable<TK> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<TK>(apiUrl, JSON.stringify(item), headers);
//   }

//   postWithNoData<T>(apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<T>(apiUrl, null, headers);
//   }

//   addFormData<T>(item: FormData, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<T>(apiUrl, JSON.stringify(item), headers);
//   }
 
//   addReturnsModel<T>(item: T, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<T>(apiUrl, JSON.stringify(item), headers);
//   }

//   addReturnsBoolean<T>(item: T, apiUrl: string): Observable<boolean> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<boolean>(apiUrl, JSON.stringify(item), headers);
//   }

//   addMultipleNoUpdate<T>(items: T[], apiUrl: string): Observable<number> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<number>(apiUrl, JSON.stringify(items), headers);
//   }

//   addMultiple<T>(items: T[], apiUrl: string): Observable<number> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.post<number>(apiUrl, JSON.stringify(items), headers);
//   }

//   //   postFile(items: any, apiUrl: string): Observable<number> {
//   //     apiUrl = `${this.baseUrl}/${apiUrl}`;
//   //     const headers = this.getApiRequestOptionsFiles();

//   //     return this.http.post<number>(apiUrl, items, headers);
//   // }

//   postFileText<T>(item: FormData, apiUrl: string): Observable<T[]> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptionsAuthTextResponseType();
//     return this.http.post<T[]>(apiUrl, item, headers);
//   }

//   postFile<T>(item: FormData, apiUrl: string): Observable<T[]> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptionsAuthOnly();
//     return this.http.post<T[]>(apiUrl, item, headers);
//   }

//   addMultipleReturnsArray<T>(body: any, apiUrl: string): Observable<T[]> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<T[]>(apiUrl, body, headers);
//   }

//   edit<T>(item: T, apiUrl: string): Observable<boolean> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.put<boolean>(apiUrl, JSON.stringify(item), headers);
//   }

//   editReturnsModel<T>(item: T, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.put<T>(apiUrl, JSON.stringify(item), headers);
//   }

//   AddInDocumentToken<T>(item: T, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.put<T>(apiUrl, JSON.stringify(item), headers);
//   }

//   editMultiple<T>(items: T[], apiUrl: string): Observable<boolean> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.put<boolean>(apiUrl, JSON.stringify(items), headers);
//   }

//   remove<T>(id: number, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}/${id}`;
//     const headers = this.getApiRequestOptions();

//     return this.http.delete<T>(apiUrl, headers);
//   }

//   postNonGeneric(url: string, data: any) {
//     const requestOptions = this.getApiRequestOptions();
//     return this.http.post(url, JSON.stringify(data), requestOptions);
//   }

//   postNoData(url: string) {
//     const requestOptions = this.getApiRequestOptions();
//     return this.http.post(url, null, requestOptions);
//   }

//   postDownloadPdf(url: string, downloadRequest: DownloadRequest) {
//     const headerList = new HttpHeaders({
//       'Content-Type': 'application/json; charset=utf-8',
//       Accept: 'application/pdf'
//     });
//     const tokens = this.authService.getCurrentTokens();
//     if (tokens != null) {
//       const accessToken = tokens.access_token;
//       if (accessToken) {
//         headerList.append('Authorization', `Bearer ${accessToken}`);
//       }
//     }

//     const httpOptions = {
//       headers: headerList,
//       resquestType: 'blob'
//     };

//     return this.http.post(url, downloadRequest, httpOptions);
//   }

//   getString(apiUrl: string): Observable<string> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptionsAuthTextResponseType();
//     return this.http.get<string>(apiUrl, headers);
//   }

// }