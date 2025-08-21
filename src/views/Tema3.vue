<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Dinámica
    
    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          p.mb-0 Este video presenta los fundamentos de la dinámica en física, explicando cómo los cuerpos se mueven y cómo las fuerzas influyen en su comportamiento. A través de ejemplos y referencias históricas, se introduce la primera ley de Newton o ley de inercia, que describe cómo un objeto mantiene su estado de reposo o movimiento rectilíneo uniforme a menos que una fuerza externa actúe sobre él. Además, se abordan conceptos clave como masa, fuerza y gravedad, esenciales para comprender la interacción entre los cuerpos y el origen de sus movimientos.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 El siguiente video explica los conceptos fundamentales de la física relacionados con las fuerzas que actúan sobre los cuerpos. Presenta la gravedad como la fuerza que atrae los objetos hacia la Tierra y muestra cómo el peso resulta de multiplicar la masa por la aceleración gravitacional. También describe la fuerza normal, la tensión, las fuerzas de roce estático y cinético, y la torsión, que provocan interacciones y movimientos en los cuerpos. Estos conceptos son la base para comprender cómo los objetos reaccionan ante distintas fuerzas en su entorno.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Segunda ley de Newton
    
    p.mb-5 La segunda ley de Newton establece que la aceleración de un objeto es consecuencia de la fuerza neta que actúa sobre él. Esta relación se expresa mediante la siguiente ecuación de fuerza:

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-8
            .row.bg-color-9.p-5.align-items-center
              .col-lg-3
                h4.mb-0.text-white F = m * a
              .col-lg-9
                p.text-white Donde:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>F</b> es la fuerza neta aplicada sobre el objeto (en newtons, N).
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>m</b> es la masa del objeto (en kilogramos, kg).
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>a</b> es la aceleración producida (en metros por segundo al cuadrado, m/s²).

        p.mb-5 Esta ley indica que, a mayor fuerza aplicada, mayor será la aceleración del objeto, siempre que su masa se mantenga constante. Por el contrario, si la masa es mayor, la aceleración producida por la misma fuerza será menor.

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 7.
              span Relación entre masa y aceleración según la segunda ley de Newton
            figure
              img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in", alt="Ilustración sobre la relación entre fuerza, masa y aceleración, con elefantes representando gran masa y pequeña aceleración, y balones de fútbol representando pequeña masa y gran aceleración.")
    
    p.mb-5 Esta figura presenta cómo la masa de un objeto influye en su aceleración según la segunda ley de Newton: los cuerpos con gran masa, como los elefantes, presentan una aceleración pequeña ante una misma fuerza, mientras que los objetos con menor masa, como los balones, logran una aceleración mayor con la misma fuerza aplicada.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Equilibrio dinámico
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.mb-5.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") En las personas, el equilibrio dinámico es la capacidad de mantenerse erguido y estable mientras se realizan movimientos o acciones, lo cual se logra ajustando el punto de gravedad. En otras palabras, un cuerpo permanece estable frente a las fuerzas que actúan sobre él cuando se generan procesos opuestos de igual magnitud, es decir, la suma de las componentes (x, y) de las fuerzas debe ser igual a cero. Se habla de equilibrio estático cuando las fuerzas que actúan sobre un cuerpo se encuentran balanceadas.

        separador
        
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.3 Tercera ley de Newton
        
        p.mb-5 La tercera ley de Newton, conocida como ley de acción y reacción, establece que si un objeto (A) ejerce una fuerza sobre otro objeto (B), este último aplica una fuerza de igual magnitud, pero en sentido contrario sobre el primero. Matemáticamente, se expresa así:

        .row.justify-content-center.mb-3
          .col-lg-4
            .bg-color-9.p-5.align-items-center
              h4.mb-0.text-white.text-center FAB = -FBA
        
        .row.justify-content-center.mb-5
          .col-lg-8
            div.bg-color-12.p-4
              p.mb-0.text-center Esto significa que la fuerza que A ejerce sobre B es igual y opuesta a la que B ejerce sobre A.

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 8.
              span Ejemplos de la tercera ley de Newton: acción y reacción
            figure
              img(src="@/assets/curso/tema3/4.svg", data-aos="zoom-in", alt="Ilustración del principio de acción y reacción de la tercera ley de Newton, con globos mostrando fuerzas opuestas y una persona sobre la Tierra representando fuerzas gravitatorias iguales y opuestas.")
    
    p.mb-5 La figura representa la tercera ley de Newton, presentando que toda acción genera una reacción de igual magnitud y en sentido opuesto. Se evidencia con un globo que se eleva al expulsar aire y con la fuerza gravitacional entre la Tierra y una persona, donde ambas ejercen fuerzas iguales y opuestas.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Inercia rotacional de los cuerpos sólidos
    
    p La inercia rotacional es un valor escalar que describe la propiedad de los cuerpos sólidos de girar alrededor de un eje y depende de cómo se distribuye la masa respecto a dicho eje. También representa la dificultad que tienen los objetos para cambiar su velocidad de rotación. Mientras más alejada esté la masa del eje de rotación, mayor será la inercia rotacional.

    p.mb-5 Esta magnitud se relaciona con la segunda ley de Newton porque el movimiento genera una fuerza denominada tangencial, que depende de la aceleración tangencial y de la masa del objeto. Las ecuaciones principales son:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.bg-color-9.p-5.align-items-center
          .col-lg-7
            h4.mb-0.text-white I = m r²
            h4.mb-0.text-white Fuerza tangencial (Ft): Ft = m aT = m R α

          .col-lg-5
            p.text-white Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-11
                p.mb-0.text-white <b>I</b> es la inercia rotacional.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-11
                p.mb-0.text-white <b>m</b> es la masa del cuerpo.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-11
                p.mb-0.text-white <b>r</b> o <b>R</b> es la distancia de la masa al eje de rotación.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-11
                p.mb-.text-white <b>aT</b> es la aceleración tangencial.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-11
                p.mb-0.text-white <b>α</b> es la aceleración angular.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        separador
        
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.5 Equilibrio rotacional
        
        .row.align-items-center.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/5.svg", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-12.px-4.py-5(data-aos="fade-left")
              p.mb-0 El equilibrio rotacional ocurre cuando un objeto no presenta tendencia a girar, ya que no existe una torsión neta que genere rotación. Este principio es similar a la primera ley de Newton: si no actúa una fuerza externa, el cuerpo permanece en equilibrio. En el caso rotacional, el objeto se mantiene sin cambios en su movimiento de giro porque las fuerzas que podrían producirlo están ausentes o balanceadas. Es importante señalar que un objeto en reposo no necesariamente está libre de fuerzas, sino que estas pueden estar equilibradas, anulando cualquier movimiento.

        separador
        
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.6 Ley de gravitación universal

        p.mb-5 La ley de gravitación universal de Newton establece que todos los cuerpos con masa se atraen entre sí con una fuerza proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia que los separa. Su expresión matemática es:

        .row.justify-content-center.mb-5
          .col-lg-10
            .row.bg-color-9.p-5.align-items-center
              .col-lg-4
                h4.mb-0.text-white F = G (m₁·m₂) / r²
              .col-lg-8
                p.text-white Donde:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>F</b> es la fuerza de atracción gravitacional entre los cuerpos.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>m₁</b> y <b>m₂</b> son las masas de los cuerpos que interactúan.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0.text-white <b>r</b> es la distancia entre los centros de masa de ambos cuerpos.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-.text-white <b>G</b> es la constante de gravitación universal.
    
        p Esta ley explica fenómenos como la caída de los objetos hacia la Tierra y la interacción gravitacional entre planetas y estrellas.

       

</template>

<script>
export default {
  name: 'Tema3',
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
