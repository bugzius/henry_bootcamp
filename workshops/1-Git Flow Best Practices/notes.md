# Metodologías Ágiles

Las metodologías ágiles están preparadas para cambios espotaneos entre las tareas.

# Continius Integration - Integración continua

Esto se basa en el uso de Herramientas para la integración de nuestro código de forma constante. Se suele usar Git y Github para su gestión.

# Git y Github Flow
Esta es una práctica que permite la integración óptima.

- Separacion de rama de master
- Trabajar de forma independiente en un Branch
- Cada cambio un commit con la descripción puntual.
- Socialización del código y decisión final.

## Pull request
Es una propuesta de cambios sobre una rama que como tal puede ser aceptada o no dentro del flujo de trabajo.

# Flujo de Trabajo
Rama principal y rama de desarrollo. De la rama de desarrollo se desprenden ramas para nuevas features.

# Buenas prácticas
Al menos en este caso de Flujo de trabajo es muy importante realizar el uso de convenciones a medida que se va avanzando en el proyecto.

# Invest

- I, Independiente; Es importante conocer qué tan aislado de nuestro código se va a desarrollar esta tarea.
- N, Negociable; Disponible a opciones de discusión.
- V, Valuable; Una funcionalidad que tenga valor
- E, Estimable; Que su tiempo se pueda estimar a por Ejemplo: (1 hora, 1 día, 1 mes).
- S, Small o Pequeño, que sea una tarea previamente dividida.
- T, Testeable; permita ser probada antes de ser aprobada su finalización.

# Evitar la ansiedad
Es importante mantener la calma al momento de desarrollar una tarea, no es necesario y bueno ir directamente a codear solo por terminar una funcionalidad rápidamente. Esto no puede ocurrir y debe siempre ser socializado lo que se quiere antes de iniciar a desarrollar.
>"Has una cosa y hasla bien".

# Cambios y ramas (commits y branches)
Es importante manejar una conveción para el manejo de estos y así llevar de forma más detallada y estructurada cómo se deben de describir los cambios y nombres de ramas según el tipo de procedimiento.

estructura: _type(route): description_

Tipos: refactor, test, feature, fix.

Ej:
- refactor(client/dashboard): data logic for product expirations
- fix(api/users controller): return 404 for route users
- test(client/tests): add missing tests for division by zero.
- feat(client/app routes): New Route page

# Jobs, Runner, server de CI

Tareas de continious integration que se van a realizar antes de dar por finalizada una tarea.

- Build
- Unit, e2e acceptance tests
- Coverage
- Static analysis
- Performance
- Lint

# Continuous delivery

Entrega continua en producción.

# Enviroments
Tipos de ambientes de desarrollo.
- Development: usado por el equipo de desarrollo y sobre el cual se a va trabajar.
- testing: El cual cuenta con el desarrollo de los test para el funcionamiento.
- Staging: Es un deploy el cual permite comprobar funcionamiento antes de ir a producción.
- Production: Es la versión del código que ya está publicada para uso de usuarios.

> 1:17 workshop