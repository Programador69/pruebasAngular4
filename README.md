# Semana4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## Configurando el servicio

Empezamos creando el servicio con el comando

```
ng g s <nombre del servicio>
```

Despues lo configuramos con la api y el otro con el token

El servicio de la API realzia la llamada dentro de una funcion para poder devolver el valor obtenido
```
obtenerProductos ():Observable<any> {
    return this.http.get("https://fakestoreapi.com/products");
  }
```

El servicio del "Token" lo que hace es tanto registrar el valor en la cookie como tambien devolver el valor obtenido, cada una en una funcion diferente
```
insertarValor(valor:string) {
    this.cookies.set("usuario", valor);
  }

  obtenerValor() {
    return this.cookies.get("usuario");
  }
```

## Insertar el servicio de la API en el componente

Empezamos implementando OnInit en el componente de productos, el cual es en donde llamaremos al servicio de la API
```
export class ProductosComponent implements OnInit
```

Creamos una variable datos para que dentro de la funcion ngOnInit le pasemos el valor de la API ya que ahi dentro nos suscribiremos y obtendremos el resultado
```
ngOnInit(): void {
    this.productos.obtenerProductos().subscribe(data => {
      this.datos = data
    })
  }
```

Despues dentro del html creamos un ciclo for para mostrar los datos obtenidos de una manera mas visual
```
@for(producto of datos; track producto.id) {
            <ul>
                <li>{{producto.title}}</li>
                <li><img src={{producto.image}} alt="Producto del inventario"> </li>
                <li>Precio: {{producto.price}}</li>
                <li>{{producto.description}}</li>
                <li>{{producto.category}}</li>
            </ul>
            }
```

## Insertar el servicio del token en el componente

Dentro del app component creamos una variable que sera admin, la cual le iremos cambiando el valor de true a false desde un boton configurado en el HTML

Creamos una variable cookie inyectando el servicio del Token para poder acceder a las funciones dentro de este
```
private cookie = inject(TokenService)
```

Creamos una funcion para que se cambie el valor del Token y asi nos permita acceder o negar la peticion
```
botonClick () {
    this.admin = !this.admin
    this.cookie.insertarValor(this.admin.toString())
  }
```

Despues la añadimos al HTML
```
<button (click)="botonClick()">Tener permismos de admin, (estado actual: {{admin}})</button>
```

## Creacion de rutas
Dentro del app.routes.ts creamos un array de objetos en el cual le fuimos pasando el path, el componente y en el caso de la ruta productos, el guardia (en este caso canActivate, este sirve para saber si puede acceder o no a una pagina dependiendo de nuestras validaciones que incorporemos)
```
export const routes: Routes = [
    {path: "acerca-de", component: AcercaDeComponent},
    {path: "comunidad", component: ComunidadComponent},
    {path: "productos", component: ProductosComponent, canActivate: [validacionUsuarioGuard]}
];
```

Una vez teniendo eso importamos en el app component el RouterOutlet y el RouterLink.
RouterLink -> funcionara como el href de html pero este ayudara a que no se recargue toda la pagina al ir al enlace
RouterOutlet -> se incorpora como una etiqueta donde se mostrara el resultado de la nueva pagina

En el HTML se veria:
```
<a routerLink="/acerca-de">Acerca-de</a>
```
Y:
```
<router-outlet></router-outlet>
```

## Guardia

Creamos el guardia con el comando:
```
ng g g <nombre del guardia>
```

Rellenamos con la logica necesaria la funcion que usaremos para validar si el usuario puede acceder o no a dicha ruta.
En nuestro caso solo solicitamos la cookie y si el valor es true lo dejamos entrar, de lo contrario le mandamos un alert diciendo que no tiene los permisos necesarios
```
export const validacionUsuarioGuard: CanActivateFn = (route, state) => {
  const cookies = inject(TokenService)
  const usuario = cookies.obtenerValor();

  if (usuario == "true") {
    return true
  }

  alert("No cuentas con los permisos necesarios para acceder aqui");
  return false
};
```

Con esto ya estaria todo configurado correctamente
