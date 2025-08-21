<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Física general',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales de la física, incluyendo magnitudes físicas, movimiento, leyes de Newton, energía, termodinámica y electromagnetismo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una magnitud física fundamental en el Sistema Internacional de Unidades (SI)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Metro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Kilogramo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Litro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Newton.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'La magnitud que describe la cantidad de materia contenida en un cuerpo es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Energía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Peso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Masa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fuerza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'En un movimiento rectilíneo uniforme (MRU), la aceleración es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Constante y diferente de cero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Variable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Negativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la unidad de la intensidad de corriente eléctrica en el SI?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Voltio (V).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Amperio (A).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ohmio (Ω).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Coulomb (C).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'La tercera ley de Newton establece que:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todo objeto tiende a permanecer en reposo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La aceleración es proporcional a la fuerza neta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'A toda acción corresponde una reacción de igual magnitud y sentido contrario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La energía no se crea ni se destruye.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes ecuaciones representa la energía cinética?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'W = F*d.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'K = ½ m*v².',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'P = F/A.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'E = m*g*h.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'La caída libre de un objeto está influenciada principalmente por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El impulso inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La aceleración de la gravedad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El rozamiento con el aire.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La velocidad constante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cómo se define el proceso isotérmico en termodinámica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambio de volumen constante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambio de presión constante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambio con temperatura constante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sin transferencia de calor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'En el movimiento de proyectiles, la trayectoria que describe el objeto es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Parabólica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Circular.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Horizontal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'El electromagnetismo se origina principalmente por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Campos gravitatorios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ondas de sonido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Corrientes eléctricas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fuerzas centrípetas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'La velocidad es una magnitud escalar.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'La fuerza es una magnitud vectorial.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El trabajo se mide en Joules.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'En un proceso adiabático, el sistema intercambia calor con el entorno.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'La entropía es una magnitud conservativa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
