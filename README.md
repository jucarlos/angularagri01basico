
## Aplicación básica de angular.

1. Hemos creado la aplicación con 

```ng new basicaapp ```

2. Ejecutar la aplicación en su carpeta.

```ng serve -o ```

3. volver a instalar dependencias ( lo hemos usado porque he borrado node_modules )
``` npm install ```

4. Módulos de angular

Componentes, Servicios, Pipes...

5. Componente principal

es App. ( html, ts )

6. Crear un componente.

```ng generate --help ```

``` ng g c colegios ```


7. Instalar Bootstrap para tener estilos mas chulos.

8. Primeras directivas de angular.
( Estructurales )
*ngFor, *ngIf.
( Atributos : ngClass, )
( Directivas de componentes)

9. Servicios.
para crear un servicio:
ng g s nombreservicio.
Singlenton. Se instancian una vez para toda la aplicación. Lo vemos.
Caso:
``` ng g s services/colegios --skip-tests ```