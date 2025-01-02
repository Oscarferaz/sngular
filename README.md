# Proyecto: Series Calculator

Este proyecto implementa una calculadora de una serie matemática definida por la fórmula:

primo(n + 3 ) \*  triangular(n - 1) / fibonacci(n - 2));

Además, incluye pruebas unitarias para validar su funcionamiento.

## Requisitos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (v18 o superior)
- npm (incluido con Node.js)
- Git

## Instrucciones para clonar el proyecto

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Oscarferaz/sngular.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd sngular
   ```

## Instalación de dependencias

Instala las dependencias necesarias ejecutando el siguiente comando:

```bash
npm install
```

## Levantar el servidor en modo desarrollo

1. Asegúrate de que todas las dependencias estén instaladas.
2. Ejecuta el siguiente comando para iniciar el servidor:

   ```bash
   npm run dev
   ```

3. El servidor estará disponible en `http://localhost:3000` (o en el puerto configurado).

## Correr las pruebas

Ejecuta las pruebas unitarias con el siguiente comando:

```bash
npm test
```