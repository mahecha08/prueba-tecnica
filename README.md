# Prueba Técnica Frontend – Angular

Buen dia personal de LinkTec, el proyecto frontend desarrollado fue en Angular como parte de una prueba técnica

La aplicación consume una API pública y muestra información de forma clara y organizada, aplicando buenas prácticas básicas de desarrollo frontend.

---

## Tecnologías usadas

- Angular version 15 (elegida porque la he utilizado)
- TypeScript
- HTML5
- CSS3 / Bootstrap
- Angular Router
- Git y GitHub

---

## Descripción del proyecto

La aplicación consume la API pública de Rick and Morty:

sitio/documentacion: https://rickandmortyapi.com/
api: https://rickandmortyapi.com/api/character/

esta api la utlice debido a no trae tantos datos, es algo diferente y es publica

Funcionalidades principales:

- Listado de personajes en una tabla
- Visualización de información básica (id, nombre, estado)
- Navegación a un detalle del personaje
- Vista responsive y centrada
- Consumo de API mediante un servicio (`ApiService`)

---

## EJECUCCIUON DEL PROYECTO

- clonar repositorio : https://github.com/mahecha08/prueba-tecnica

- instalar dependencias: npm install

- ejecutar proyecto: npm start

---

## Estructura del proyecto

- `inicio`: componente que muestra el listado de personajes
- `personaje`: componente que muestra el detalle de un personaje
- `ApiService`: servicio encargado de consumir la API
- `app-routing`: manejo de rutas
- `app.component`: componente raíz

---

## 🧪 Testing

Se implementaron pruebas unitarias básicas:

- Pruebas de creación de componentes
- Prueba básica del servicio
- Cobertura mínima cercana al 30%

Para ejecutar los tests:

```bash
ng test --code-coverage



