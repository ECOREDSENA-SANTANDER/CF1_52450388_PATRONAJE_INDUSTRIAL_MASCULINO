<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Medidas del cuerpo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/Tema2/img01.png', alt='')
      .col-lg-7
        .row
          .col-lg-2
            img(src='@/assets/curso/Tema2/img02.png', alt='')
          .col-lg-10
            p El proceso de patronaje se fundamenta en las medidas del cuerpo, las cuales han sido estandarizadas y compiladas en tablas que definen las tallas. Estas tablas contienen las medidas anatómicas tomadas directamente del cuerpo humano, lo que permite identificar las proporciones de cada individuo y facilita la elaboración de patrones precisos.
        p Para aplicar correctamente estas tablas y asegurar la coherencia en el proceso, es indispensable establecer primero una metodología unificada para la toma de dichas medidas. Por esta razón, en el trazado de patrones es muy importante identificar los puntos anatómicos del cuerpo, ya que el dominio de estos permite consolidar un vocabulario técnico y un método consistente que garantiza la precisión en cada paso.

    .tarjeta.bg5.p-4.mb-3
      .row.justify-content-around.align-items-center.p-2
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Tema2/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-white  Manual de patronaje básico
              p.text-white Para ampliar la información sobre el cuadro de tallas masculinas, revisar el documento página 67 del PDF. 
            .col-sm-auto.col-lg-2
              a.boton.bg6.texto-blanco(:href="obtenerLink('/https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos%20compartidos/2025/LP-Santander/COMPLEMENTARIAS/Adaptaci%C3%B3n%20a%20partir%20de%20Tituladas/52450388.%20Patronaje%20industrial%20masculino/1.%20FinalxVirtualizar/Contenidos/CF01/Formatos%20DI/ANEXO/Manual%20de%20patronaje.pdf?csf=1&web=1&e=ziDNFq')" target="_blank")  
                span Descargar
                i.fas.fa-file-arrow-down
    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Puntos de referencia corporales anatómicos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para garantizar la exactitud y la coherencia en la toma de medidas, es fundamental identificar primero los puntos de referencia anatómicos del cuerpo, dominando así un vocabulario técnico unificado. Estos puntos funcionan como un mapa sobre el cuerpo que asegura que las medidas se tomen siempre en el mismo lugar, sin importar quién realice el proceso. La correcta localización de estos puntos es la base práctica que asegura la consistencia y la precisión profesional en cada medida tomada, lo que se traduce directamente en la calidad y el buen ajuste de la prenda final.
          
    p A continuación, se detallan los puntos de referencia clave, agrupados por su vista anatómica.

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-12
          TabsC
            .relleno.py-3.py-md-4(titulo="Puntos de referencia frontales").fondotabs
              .row.justify-content-center.p-4
                .col-lg-5
                  .row
                    .col-lg-12.bg7.p-3.mb-3
                      p.mb-0 La vista frontal es esencial para establecer las medidas de ancho del torso, el pecho y los largos de las prendas en la parte delantera del cuerpo.
                    .col-lg-12
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 4.
                        span  Puntos frontales masculinos
                      figure
                        img(src='@/assets/curso/Tema2/img04.png', alt='La imagen presenta varias piezas de cuero curtido al cromo en diferentes tonalidades, como marrón, amarillo y rojizo. Las piezas están dispuestas en capas, resaltando la textura y acabado del material.')
                    .py-2
                    figcaption SENA, (2019).
                
                .col-lg-5
                  ul.lista-ul--color
                    li.mb-1
                      i.fas.fa-chevron-right
                      | #[b Punto de acromio:] corresponde al punto óseo más externo y superior del hombro, que sirve como inicio para medir el largo de la manga y el ancho de la espalda.
                    li.mb-1
                      i.fas.fa-chevron-right
                      | #[b Punto de acromio:] corresponde al punto óseo más externo y superior del hombro, que sirve como inicio para medir el largo de la manga y el ancho de la espalda.
                    li.mb-1
                      i.fas.fa-chevron-right
                      | #[b Punto de acromio:] corresponde al punto óseo más externo y superior del hombro, que sirve como inicio para medir el largo de la manga y el ancho de la espalda.
                    li.mb-1
                      i.fas.fa-chevron-right
                      | #[b Punto de acromio:] corresponde al punto óseo más externo y superior del hombro, que sirve como inicio para medir el largo de la manga y el ancho de la espalda.
                    li.mb-1
                      i.fas.fa-chevron-right
                      | #[b Punto de acromio:] corresponde al punto óseo más externo y superior del hombro, que sirve como inicio para medir el largo de la manga y el ancho de la espalda.
                    li.mb-1
                      i.fas.fa-chevron-right
                      | #[b Punto de acromio:] corresponde al punto óseo más externo y superior del hombro, que sirve como inicio para medir el largo de la manga y el ancho de la espalda.


            .relleno.py-3.py-md-4(titulo="Curtido vegetal").fondotabs
              .row.justify-content-center.align-items-center.mb-5.p-4
                .col-md-10.col-lg-5.mb-md-0
                  br
                  h4 Curtido vegetal
                  p Proceso artesanal en el que se utilizan taninos naturales extraídos de plantas, como el quebracho o la mimosa, para estabilizar la piel. Este tipo de cuero posee una textura firme y rígida, ideal para productos que requieren mayor estructura y durabilidad, como suelas de calzado, vaquetas y artículos de talabartería.
                
                .col-md-8.col-lg-5
                  .py-2
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 2. 
                    span Curtidos al vegetal
                  figure
                    img(src='@/assets/curso/Tema2/img04.png', alt='La imagen presenta piezas de cuero curtido al vegetal en tonos beige y marrón claro. Las superficies lisas y los bordes irregulares destacan las características naturales del material, resaltando su acabado orgánico y su textura.')
















































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
