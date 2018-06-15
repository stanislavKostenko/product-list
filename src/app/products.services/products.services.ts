import { Injectable} from '@angular/core';
import { Products } from '../shared/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs/index';
import { catchError, map } from 'rxjs/internal/operators';


@Injectable()
export class ProductsService{
  private apiUrl: string = '../../assets/products-list.json' ;
  private _products$: BehaviorSubject<Products[]>;
  private _interval;

  public products: Products[];
  public searchText: string = '';
  public categories;


  constructor(private http: HttpClient) {
    this._products$ = new BehaviorSubject([]);
    this._init();
  }

  get products$() {
    return this._products$.asObservable();
  }

  private _store: {
    products: Products[];
  } = {products: []};

  private _save(products: Products[]) {
    this._store.products = products;
    this._products$.next(Object.assign([],this._store).products)
  }

  private _init() {
    this.makeResponse().subscribe((products)=>{
      this._save(products);
    });
    this._interval = setInterval(()=>{
      this.makeResponse();
    }, 10000);

  }

  private makeResponse(): Observable<Products[]> {
    return this.http.get(this.apiUrl).pipe(map((data: any)=> {
        let products = data["products"];
        return products.map((product: any)=>{
          return product;
        });
      }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  toLocalStorage(el) {
    localStorage.setItem('value', el);
  }
}
