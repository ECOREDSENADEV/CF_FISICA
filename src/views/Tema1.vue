<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Física
    
    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          p.mb-0 Comprender el concepto de la física no es complicado. Esta es una ciencia exacta que estudia y describe el comportamiento de los fenómenos naturales que ocurren en nuestro universo, considerando cuatro propiedades fundamentales: energía, materia, tiempo y espacio. Esto indica que todo en el universo cambia y nada permanece fijo.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5

        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Variables físicas y sistema de unidades
        
        p Una variable física es un dato numérico que puede cambiar en función de un fenómeno o condición física. Estas variables permiten describir, analizar y predecir comportamientos en la naturaleza. Los ejemplos de variables físicas son:

        .row.mb-5.justify-content-center
          .col-6.col-lg-2.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/2.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-2
                .p-4
                  h5.text-center Distancia
          .col-6.col-lg-2.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/3.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-2
                .p-4
                  h5.text-center Velocidad
          .col-6.col-lg-2.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/4.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-2
                .p-4
                  h5.text-center Aceleración
          .col-6.col-lg-2.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-2
                .p-4
                  h5.text-center Tiempo
        
        p.mb-5 El valor de una variable física se denomina magnitud, y siempre es medible. Los ejemplos de magnitudes físicas son:

        .row.justify-content-center
          .col-lg-6
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/tema1/6.png', alt='')
                .col-xl.mb-3.mb-lg-0
                  .p-4
                    .row
                      .col-md-6
                        ul.lista-ul--color
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Velocidad.
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Tamaño.
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Peso.
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Aceleración.
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Fuerza.
                      .col-md-6
                        ul.lista-ul--color
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Longitud.
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Área.
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Volumen.
                          li.mb-0.d-flex
                            i.fas.fa-circle-check.bg-color-5
                            p.mb-0 Energía.
        
        p Para cuantificar estas magnitudes, se utilizan sistemas de unidades, que son conjuntos de normas que permiten medir y expresar valores de manera estandarizada. El Sistema Internacional de Unidades (SI) es el más utilizado en el mundo, ya que permite que las mediciones sean uniformes y comparables en ciencia, ingeniería y vida cotidiana.

        p.mb-5 A continuación, se presentan las magnitudes físicas fundamentales del Sistema Internacional (SI), junto con sus unidades y símbolos oficiales:

        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Magnitudes físicas fundamentales del Sistema Internacional (SI)
            .tabla-a.color-acento-contenido.pst-3
              table
                thead
                  tr.text-center
                    th.bg-color-6.text-white Magnitud
                    th.bg-color-6.text-white Unidad en SI
                    th.bg-color-6.text-white Símbolo
                tbody
                  tr.bg-color-white
                    td Longitud
                    td metro
                    td m
                  tr.bg-color-7
                    td Masa
                    td kilogramo
                    td kg
                  tr.bg-color-white
                    td Tiempo
                    td segundo
                    td s
                  tr.bg-color-7
                    td Intensidad de corriente eléctrica
                    td amperio
                    td A
                  tr.bg-color-white
                    td Temperatura termodinámica
                    td kelvin
                    td K
                  tr.bg-color-7
                    td Cantidad de sustancia
                    td mol
                    td mol
                  tr.bg-color-white
                    td Intensidad luminosa
                    td candela
                    td cd

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Magnitudes físicas fundamentales del Sistema Internacional (SI)
    
    p.mb-5 A continuación, se describen las siete magnitudes físicas fundamentales, con su unidad, símbolo, definición y criterio de medición oficial según el Sistema Internacional (SI):

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Longitud (metro - m)
              p Determina la extensión de un objeto en el espacio o la distancia entre dos puntos. Permite describir dimensiones lineales como alto, ancho o profundidad. Ejemplos: altura de un edificio, distancia entre ciudades o tamaño de una habitación. 
              p <b>Definición SI</b>: el metro es la distancia que recorre la luz en el vacío durante 1/299 792 458 segundos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Masa (kilogramo - kg)
              p Cantidad de materia contenida en un cuerpo, relacionada con su inercia (resistencia a cambiar su estado de movimiento). Es independiente de la gravedad, a diferencia del peso. 
              p <b>Definición SI</b>: el kilogramo se define a partir de la constante de Planck (h), que relaciona la energía de un fotón con su frecuencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Tiempo (segundo - s)
              p Permite medir la duración de los fenómenos y establecer el orden de los eventos. Es esencial para describir cambios naturales como el movimiento planetario o la caída de un objeto. 
              p <b>Definición SI</b>: el segundo es la duración de 9 192 631 770 oscilaciones de la radiación emitida por un átomo de cesio-133.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Intensidad de corriente eléctrica (amperio - A)
              p Representa la cantidad de carga eléctrica que atraviesa un conductor por unidad de tiempo, es decir, el flujo de electrones en un circuito. Es clave para el funcionamiento de dispositivos eléctricos y electrónicos. 
              p <b>Definición SI</b>: un amperio corresponde al flujo de 1 coulomb por segundo, basado en la carga elemental del electrón (e).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Temperatura termodinámica (kelvin - K)
              p Indica el grado de energía térmica de un cuerpo o sistema, reflejando qué tan caliente o frío se encuentra. Está relacionada con la agitación de las partículas: mayor movimiento molecular implica mayor temperatura.  
              p <b>Definición SI</b>: el kelvin se define mediante la constante de <em>Boltzmann</em> (k), que vincula la energía térmica con la temperatura absoluta.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Cantidad de sustancia (mol - mol)
              p Expresa cuántas partículas elementales (átomos, moléculas, iones o electrones) contiene una muestra. Permite vincular la escala microscópica con la macroscópica, facilitando cálculos químicos y físicos.
              p <b>Definición SI</b>: un mol contiene exactamente 6,022 140 76 x 10²³ entidades elementales, valor conocido como constante de Avogadro.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Intensidad luminosa (candela - cd)
              p Mide la cantidad de luz emitida por una fuente en una dirección específica, considerando la sensibilidad del ojo humano. Se usa para evaluar la iluminación de lámparas, bombillas y dispositivos ópticos. 
              p <b>Definición SI</b>: una candela corresponde a la radiación de frecuencia 540 x 10¹² Hz, que pertenece a la luz verde visible.el metro es la distancia que recorre la luz en el vacío durante 1/299 792 458 segundos.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Magnitudes escalares y vectoriales
    
    p.mb-5 El siguiente video explica la diferencia entre magnitudes escalares y vectoriales, presentando cómo algunas magnitudes físicas se describen únicamente con un valor numérico y su unidad, mientras que otras requieren además indicar su dirección y sentido.

     figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Vectores y sus propiedades
    
    p.mb-5 Los vectores son herramientas gráficas que permiten representar magnitudes físicas con dirección y sentido. A continuación, se presentan situaciones que describen propiedades y operaciones fundamentales con vectores:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/14.svg")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Equivalencia de vectores
              p Cuatro vectores son iguales si tienen el mismo módulo (longitud), dirección y sentido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.svg")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Suma de vectores – regla del triángulo
              p El vector resultante <b>R</b> se obtiene al unir el extremo de <b>A</b> con el origen de <b>B</b>, formando un triángulo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.svg")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Suma de vectores - regla del paralelogramo
              p El vector resultante <b>R</b> se obtiene al colocar <b>A</b> y <b>B</b> en un mismo origen y completar un paralelogramo; su diagonal representa la resultante. 

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5

        separador
        
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.4 Operaciones con vectores
        
        p.mb-5 Las operaciones básicas con vectores permiten combinar o modificar magnitudes vectoriales siguiendo reglas definidas. A continuación, se describen las principales:

        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
              div(titulo="Igualdad de vectores")
                p.ms-5 Dos vectores <b>A</b> y <b>B</b> son iguales (<b>A = B</b>) si tienen la misma magnitud y dirección.
              div(titulo="Suma de vectores")
                p.ms-5 La suma de dos vectores se obtiene aplicando la regla del paralelogramo. Se construye un paralelogramo con los vectores <b>A</b> y <b>B</b> como lados adyacentes; la diagonal que parte del punto común corresponde al vector resultante <b>R</b>.
              div(titulo="Negativo de un vector")
                p.ms-5 El vector negativo tiene la misma magnitud pero dirección opuesta. La suma de un vector y su opuesto es cero: <b>A + (-A) = 0</b>.
              div(titulo="Resta de vectores")
                p.ms-5 La resta <b>A - B</b> equivale a sumar <b>A</b> con el negativo de <b>B: A - B = A + (-B)</b>.
              div(titulo="Multiplicación de un vector por un escalar")
                p.ms-5 Multiplicar o dividir un vector por un número real (escalar) genera otro vector con la misma dirección pero con módulo modificado. Ejemplo: si <b>A</b> es un vector, <b>4A</b> es un vector cuatro veces mayor en magnitud que <b>A</b>.
                       
    
    
    
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
