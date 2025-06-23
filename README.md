# 🍻 Calculador de Alcohol en la Sangre (BAC Calculator)

Este proyecto es una pequeña aplicación de consola que estima el nivel de alcohol en la sangre (BAC, por sus siglas en inglés) a partir de datos proporcionados por el usuario: peso, sexo, cantidad de alcohol consumido y tiempo desde la última bebida.

## 🧠 ¿Qué es el BAC?

BAC (Blood Alcohol Content) es una medida que representa la cantidad de alcohol presente en el torrente sanguíneo de una persona. Usamos la fórmula de Widmark:


- **A**: gramos de alcohol consumido  
- **W**: peso en libras  
- **r**: constante de distribución (0.73 para hombres, 0.66 para mujeres)  
- **H**: horas desde la última bebida  


## ✅ ¿Cómo ejecutar?

1. Asegúrate de tener Node.js instalado.
2. Clona este repositorio.
3. Ejecuta el comando:

```bash
node src/cli/index.js
```


## 🧼 Conceptos Clean Code aplicados

| Concepto                                 | Archivo(s) donde se aplicó             | Descripción breve                                                                 |
|------------------------------------------|----------------------------------------|-----------------------------------------------------------------------------------|
| ✅ Usar nombres significativos            | `BacCalculator.js`, `validateInputs.js`, `index.js` | Variables, funciones y archivos con nombres que expresan claramente su propósito. |
| ✅ Funciones pequeñas                     | `BacCalculator.js`, `validateInputs.js` | Cada función realiza una sola tarea específica.                                   |
| ✅ Una función, un nivel de abstracción   | `BacCalculator.js`                     | No se mezclan distintos niveles de abstracción en la misma función.              |
| ✅ Evitar efectos secundarios             | `BacCalculator.js`                     | Las funciones no modifican estados globales ni producen efectos inesperados.     |
| ✅ Validaciones primero                   | `validateInputs.js`, `index.js`        | Se validan los datos antes de ejecutar cualquier lógica de negocio.              |
| ✅ Principio de responsabilidad única (SRP) | Todos los archivos                     | Cada módulo tiene una única razón para cambiar.                                  |
| ✅ Evitar estructuras mágicas             | `validateInputs.js`                    | Se evita el uso de valores literales sin contexto (por ejemplo: `"male"`/`"female"`). |
| ✅ Bajo acoplamiento y alta cohesión      | Todos los archivos                     | Los módulos están bien separados y son fáciles de mantener y testear.            |


