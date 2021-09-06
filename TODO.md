► Login (AGREGAR ESTILOS)

    Primero encuentro un login al que se accede con las siguientes credenciales : ✔
        ● Email: challenge@alkemy.org
        ● Password: react

    si ambos campos están completos, hacer POST a la siguiente URL con los datos en el body: ✔ 
    http://challenge-react.alkemy.org/

    Si accedo a cualquier otra dirección sin estar logueado, debe redireccionarme a la pág de Login. ✔
    
    VALIDAR CAMPOS Y NOTIFICAR SI FALLÓ EL LOGIN ❌



► Search: (AGREGAR ESTILOS)

    Input para buscar ✔ 
    Mostrar listado de heroes: ✔ 
        - Imagen
        - Nombre
        - Powerstats
        - Acciones para agregar o eliminar del equipo
    
    Botón de acción en cada heroe para agregar al equipo.



► Home / Team (AGREGAR ESTILOS)

    Almacenar stats del equipo de manera global o en AppRouter para mostrar en el Home ❌
    Un equipo en una variable o estado global.

        Al intentar agregar un heroe al equipo, verificar que:
            - Máximo 6 miembros. 3 orientación buena y 3 mala.

        Almacenar estadisticas totales del equipo:
            - Total de powerstats
            - Peso y altura promedio del equipo

    ////// DO this 👇👇👇👇
    Podría sólo guardar un array con los id de heroes y fetchearlos en el home? / y luego usar ese mismo array para mostrar en el search aquellos héroes que ya estén en el equipo. 
    Guardarlos en el estado del router?

    Hice la funcion en Approuter, ahora ejecutarla desde HeroCard, dinamicamente (!!!)
