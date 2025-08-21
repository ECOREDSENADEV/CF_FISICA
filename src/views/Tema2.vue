<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cinemática
    
    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          p.mb-0 La cinemática es la rama de la mecánica que describe el movimiento de los objetos sólidos sin considerar las causas (fuerzas) que lo originan. Su estudio se centra en las trayectorias y su variación en función del tiempo, analizando los cambios de velocidad y aceleración con respecto a la posición y al tiempo.
    
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Trayectoria de una partícula (P) en el plano (x, y, z).
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in", alt="Diagrama tridimensional con ejes x, y y z que representa la trayectoria curva de una partícula P y un vector de posición r desde el origen hasta la partícula.")
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Conceptos básicos
    
    p.mb-5 Un objeto está en movimiento cuando su posición cambia con respecto a otro en el transcurso del tiempo. Por ejemplo, si una persona pasa junto a un poste de energía, se evidencia un cambio de posición respecto al poste, que actúa como referencia fija. Un objeto está en reposo cuando no presenta variación de posición en el tiempo. Por ejemplo, una estatua instalada frente al poste permanece en reposo respecto a este.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/3.png', alt='')
                .col-xl
                  .p-4
                    p.mb-0(data-aos="fade-up") El sistema referenciado depende del punto de observación. Una persona que conduce un automóvil está en movimiento relativo respecto a un observador fijo, pero estará en reposo relativo respecto a quien se encuentre dentro del vehículo.
        
        p.mb-5 El <b>plano de coordenadas cartesianas</b> permite ubicar objetos en el espacio y representar gráficamente relaciones matemáticas de posición o movimiento.

        .row.justify-content-center.mb-5
          .col-lg-6
            .tarjeta--container.row.mb-5
              .col-md.tarjeta.color-primario.p-5
                .row.justify-content-center.mb-4
                  .col-6
                    figure
                      img(src='@/assets/curso/tema2/4.svg', alt='Texto descriptivo 1')
                p En dos <b>dimensiones (2D)</b> se consideran los ejes x y y → plano (x, y).

            
              .col-md.tarjeta.color-secundario.p-5
                .row.justify-content-center.mb-4
                  .col-6
                    figure
                      img(src='@/assets/curso/tema2/5.svg', alt='Texto descriptivo 2')
                p En <b>tres dimensiones (3D)</b> se añade el eje z → plano (x, y, z).

        p.mb-5 El <b>sentido del movimiento</b> depende del recorrido del objeto y puede ser <b>positivo (+)</b> o <b>negativo (-),</b> indicando avance o retroceso.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Conceptos fundamentales de la cinemática
          
        p.mb-5 Para comprender el estudio del movimiento, la cinemática utiliza magnitudes y elementos clave que permiten describirlo de manera precisa. A continuación, se presentan los principales conceptos, junto con su definición:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Partícula
              p Es una parte muy pequeña de algún objeto; para el caso de estudio de la física es un cuerpo material con pequeña dimensión de la materia .
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Materia
              p Es el componente principal de los cuerpos, objetos o partículas, puede tener cualquier forma y también sufre cambios de acuerdo con las propiedades físicas o químicas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Tiempo (t)
              p Es una magnitud escalar con la que se mide la duración de los eventos, este permite establecer la diferencia entre los sucesos del pasado y las predicciones del futuro.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Distancia
              p Es la longitud recorrida por un cuerpo de un punto a otro, por ejemplo del punto <b>A</b> al punto <b>B</b>, o ubicados en el plano cartesiano, del punto <b>(x0, y0)</b> al <b>(x1, y1).</b> Indica el desplazamiento de la partícula.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Velocidad (v⃗)
              p Es una magnitud vectorial la cual indica que tiene dirección y sentido, se calcula dividiendo la distancia por la unidad de tiempo empleado en hacer ese recorrido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Rapidez (v)
              p Es una magnitud escalar que es el módulo de la velocidad, relaciona la distancia que recorre una partícula y el tiempo que tarda en el recorrido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Aceleración (a)
              p Es una magnitud vectorial que relaciona la variación de la velocidad con el tiempo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Aceleración de la gravedad (g)
              p Es una magnitud vectorial que, obedece a la aceleración experimentada debido a la gravedad que ejerce la tierra en un cuerpo al dejarlo caer.
    
    p El mundo está en constante movimiento; los objetos cambian su posición con respecto al tiempo por diversas razones. Dentro de la cinemática, uno de los movimientos más simples es el Movimiento Uniforme (MU) o Movimiento Rectilíneo Uniforme (MRU). Este ocurre cuando un objeto se desplaza en línea recta a una velocidad constante, lo que implica que su aceleración es nula (a = 0).

    p.mb-5 En este tipo de movimiento:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/14.svg', alt='Texto que describa la imagen')
          p.text-center La <b>velocidad</b> se mantiene constante.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/15.svg', alt='Texto que describa la imagen')
          p.text-center La <b>dirección</b> no cambia durante el recorrido.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/16.svg', alt='Texto que describa la imagen')
          p.text-center La <b>distancia recorrida</b> puede calcularse multiplicando la velocidad por el tiempo.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Ecuaciones del MRU
      
    p.mb-5 Para representar el comportamiento del Movimiento Rectilíneo Uniforme, se utilizan las siguientes ecuaciones:
       
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-6
            .row.bg-color-9.text-white.p-5
              .col-md-6
                p.mb-0 x=x<sub>0</sub> +v*t
                p.mb-0 v=v<sub>0</sub>=cte
                p.mb-0 a=0
              .col-md-6
                p Donde:
                p.mb-0 x = posición final
                p.mb-0 x0 = posición inicial
                p.mb-0 v = velocidad constante
                p.mb-0 t = tiempo
                p.mb-0 a = aceleración nula


        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Descripción del desplazamiento de una partícula desde el punto 0 al punto A y luego del punto A al punto B.
            figure
              img(src="@/assets/curso/tema2/17.svg", data-aos="zoom-in", alt="Diagrama en el plano cartesiano xy que representa el desplazamiento de una partícula desde el origen hasta el punto A y posteriormente hasta el punto B, con vectores y distancias.")

        separador
        
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.3 Movimiento Uniformemente Acelerado (MUA)
        
        p El Movimiento Uniformemente Acelerado (MUA), también denominado Movimiento Rectilíneo Uniformemente Acelerado (MRUA) o Movimiento Rectilíneo Uniformemente Variado (MRUV), se diferencia del Movimiento Uniforme (MU) en que la partícula está sometida a una aceleración constante. En este tipo de movimiento:
    
    .row.justify-content-center
      .col-lg-8
        .bg-color-3.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-xl-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/18.svg', alt='')
            .col-xl
              .p-4
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 La velocidad de la partícula cambia de forma uniforme en el tiempo.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 La aceleración mantiene un valor constante (positiva si acelera, negativa si desacelera).
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 La trayectoria sigue siendo rectilínea.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Ecuaciones del MUA
          
        p.mb-5 Para describir matemáticamente el Movimiento Uniformemente Acelerado, se emplean las siguientes ecuaciones:
       
    
        .row.justify-content-center.mb-5
          .col-lg-6
            .row.bg-color-9.text-white.p-5
              .col-md-6
                p.mb-0 v= v<sub>0</sub> + a*t
                p.mb-0 x= x<sub>0</sub> + v<sub>0</sub> * t + 1/2a * t2
                p.mb-0 a=cte.
              .col-md-6
                p Donde:
                p.mb-0 v= velocidad final
                p.mb-0 v<sub>0</sub> = velocidad inicial
                p.mb-0 x = posición final
                p.mb-0 x<sub>0</sub> = posición inicial
                p.mb-0 a = aceleración constante
                p.mb-0 t = tiempo transcurrido


        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 3.
              span Movimiento de una partícula que desacelera hasta alcanzar velocidad cero (v=0).
            figure
              img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in", alt="Gráfica de velocidad contra tiempo que muestra una partícula con velocidad inicial v0 que disminuye linealmente hasta alcanzar velocidad cero. ")

        separador
        
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Caída libre
    
    p.mb-5 La caída libre es el movimiento de un cuerpo influenciado únicamente por la aceleración de la gravedad (g). Se caracteriza por el incremento de la velocidad con el tiempo, mientras el cuerpo desciende debido a la atracción gravitatoria de la Tierra.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Ecuaciones de la caída libre
      
    p.mb-5 Las ecuaciones que describen la caída libre son:

    .row.mb-5.align-items-center
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .row.bg-color-9.text-white.p-5
          .col-md-6
            p.mb-0 a = - g
            p.mb-0 h = h<sub>0</sub> - ½ gt²
            p.mb-0 v² = 2gh
          .col-md-6
            p Donde:
            p.mb-0 h = altura final
            p.mb-0 h<sub>0</sub> = altura inicial
            p.mb-0 v = velocidad final
            p.mb-0 g = aceleración de la gravedad
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Pasos para describir un movimiento
          
        p.mb-5 Para resolver problemas de caída libre, se recomienda seguir los siguientes pasos:

        .row.justify-content-center
          .col-lg-3.d-flex
            .tarjeta-avatar-b.mb-5.w-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/21.svg' alt='AvatarTop')
              .tarjeta.bg-color-3.h-100.d-flex.flex-column
                .p-4.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Establecer un sistema de referencia: origen y eje del movimiento.
          .col-lg-3.d-flex
            .tarjeta-avatar-b.mb-5.w-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop')
              .tarjeta.bg-color-3.h-100.d-flex.flex-column
                .p-4.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Determinar el valor y signo del movimiento.
          .col-lg-3.d-flex
            .tarjeta-avatar-b.mb-5.w-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/23.svg' alt='AvatarTop')
              .tarjeta.bg-color-3.h-100.d-flex.flex-column
                .p-4.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Definir el valor y signo de la velocidad inicial (v<sub>0</sub>).

        .row.justify-content-center
          .col-lg-3.d-flex
            .tarjeta-avatar-b.mb-5.w-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/24.svg' alt='AvatarTop')
              .tarjeta.bg-color-3.h-100.d-flex.flex-column
                .p-4.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Establecer la posición inicial del cuerpo (x<sub>0</sub>).
          .col-lg-3.d-flex
            .tarjeta-avatar-b.mb-5.w-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/25.svg' alt='AvatarTop')
              .tarjeta.bg-color-3.h-100.d-flex.flex-column
                .p-4.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Escribir las ecuaciones del movimiento.
          .col-lg-3.d-flex
            .tarjeta-avatar-b.mb-5.w-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/26.svg' alt='AvatarTop')
              .tarjeta.bg-color-3.h-100.d-flex.flex-column
                .p-4.d-flex.align-items-center.justify-content-center.text-center
                  p.mb-0 Usar los datos para despejar las incógnitas.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Ejemplo: cuerpo lanzado desde una altura
          
        p.mb-5 Si un cuerpo es lanzado desde una montaña de altura x0 con velocidad v0, se deben determinar:

        .row.mb-5.justify-content-center
          .col-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-10
                .p-4
                  p.text-center Las ecuaciones del movimiento.
          .col-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/28.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-10
                .p-4
                  p.text-center La altura máxima alcanzada.
          .col-6.col-lg-3.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-10
                .p-4
                  p.text-center El tiempo total para llegar al suelo.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Ecuaciones de referencia

        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Caída libre de un objeto desde una altura inicial

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/30.svg", data-aos="zoom-in", alt="Ilustración de un jugador dejando caer un balón desde un acantilado, con representación de la caída vertical de la pelota, el eje de posición x, la velocidad inicial v0 hacia abajo y la aceleración de la gravedad g. ")
      .col-lg-6
        p Para analizar el comportamiento del cuerpo durante la caída libre y calcular variables como la velocidad, posición y tiempo, se utilizan las siguientes ecuaciones de referencia:
        .bg-color-9.text-white.px-4.py-3.mb-3
          h4 a = -g
          h4 v = v₀ + a*t
          h4 x = x₀ + v₀ * t + 1/2 * a * t²
        p Cuando el cuerpo alcanza la <b>altura máxima</b>, su <b>velocidad es cero</b>:
        .bg-color-9.text-white.px-4.py-3.mb-3
          figure
            img(src="@/assets/curso/tema2/35.svg", data-aos="zoom-in", style="max-width: 200px")
        p Para calcular el tiempo de caída hasta el suelo, se plantea la ecuación de posición con x=0, obteniendo una ecuación cuadrática:
        .bg-color-9.text-white.px-4.py-3
          figure
            img(src="@/assets/curso/tema2/36.svg", data-aos="zoom-in", style="max-width: 200px")
    
    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Movimiento curvilíneo
    
    p.mb-5 El movimiento curvilíneo agrupa los movimientos parabólico, oscilatorio y circular, en los que las partículas siguen trayectorias curvas. En este tipo de movimientos:

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/31.svg', alt='')
                .col-xl
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 La trayectoria no es recta, sino que depende de radios de curvatura.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 Dichos radios están asociados a los ángulos de inclinación que definen el cambio de dirección del móvil.

        separador
        
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.6 Movimiento de proyectiles
        
        p.mb-5 El movimiento de proyectiles es un movimiento curvilíneo de tipo parabólico en el que la partícula combina:
     
        .row.justify-content-center
          .col-lg-8
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto.mb-3.mb-lg-0.order-2
                  figure
                    img(src='@/assets/curso/tema2/32.svg', alt='')
                .col-xl.order-1
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 Un movimiento horizontal (eje X) con velocidad constante.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 Un movimiento vertical (eje Y) afectado por la gravedad, que modifica la velocidad con el tiempo.
        
        p.mb-5 La distancia recorrida y la altura alcanzada dependen del ángulo de lanzamiento y de la velocidad inicial del proyectil.
    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Ecuaciones del movimiento de proyectiles
    
    p.mb-5 Para analizar el recorrido y la posición de un proyectil en cualquier instante, se emplean las siguientes ecuaciones de referencia:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Movimiento de proyectil
        figure
          img(src="@/assets/curso/tema2/33.svg", data-aos="zoom-in", alt="Diagrama de un tiro parabólico en el plano cartesiano xy que presenta  la trayectoria curva del proyectil, sus componentes de velocidad horizontal y vertical, la altura máxima h y el alcance l.")
      .col-lg-4.order-lg-1
        .bg-color-9.text-white.p-5.mb-3
          h4 Velocidad: 
          p vx = v<sub>0</sub>cos Ɵ<sub>0</sub> 
          p vy = v<sub>o</sub>senƟ<sub>0</sub> – gt
          h4 Alcance en x: 
          p L = x<sub>0</sub> + v<sub>0</sub>cos Ɵ<sub>0</sub> *t
          h4 Altura máxima: 
          p h = y<sub>o</sub> + (vo<sup>2</sup> sen<sup>2</sup>Ɵ<sub>0</sub> / 2g)
    
    separador
    
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.7 Movimiento circular uniforme
    
    p.mb-5 El movimiento circular uniforme (MCU) se caracteriza porque la partícula describe una trayectoria circular con velocidad angular constante, lo que significa que recorre arcos iguales en tiempos iguales. Aunque su rapidez es constante, la dirección de la velocidad cambia continuamente, generando una aceleración centrípeta dirigida hacia el centro del círculo.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Ecuaciones del movimiento circular uniforme
            .tabla-a.color-acento-contenido.pst-3
              table
                thead
                  tr.text-center
                    th.bg-color-6.text-white Concepto
                    th.bg-color-6.text-white Ecuación
                    th.bg-color-6.text-white Descripción
                tbody
                  tr.bg-color-white
                    td Velocidad angular
                    td ω = θ / t
                    td 
                      | ω = velocidad angular (rad/s) 
                      br
                      | θ = ángulo recorrido (rad) 
                      br
                      | t = tiempo (s)
                  tr.bg-color-7
                    td Velocidad tangencial
                    td v = ω * r
                    td 
                      | v = velocidad lineal (m/s) 
                      br
                      | r = radio de la trayectoria (m)
                  tr.bg-color-white
                    td Aceleración centrípeta
                    td aᶜ v² / r = ω² * r
                    td 
                      | v = velocidad lineal (m/s) 
                      br
                      | r = radio de la trayectoria (m) 
                      br
                      | La aceleración siempre apunta hacia el centro de la trayectoria

        p.mb-5 La figura representa cómo la velocidad angular y la velocidad lineal interactúan en un movimiento circular uniforme, presentando  la dirección y sentido del desplazamiento de la partícula.

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 6.
              span Movimiento circular uniforme
            figure
              img(src="@/assets/curso/tema2/34.svg", data-aos="zoom-in", alt="Diagrama tridimensional de movimiento circular que muestra un punto A girando en torno al eje z.")





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
