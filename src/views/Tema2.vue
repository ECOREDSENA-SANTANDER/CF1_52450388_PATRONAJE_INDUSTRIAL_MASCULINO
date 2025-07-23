<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Medidas del cuerpo

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-md-8
        img(src='@/assets/curso/Tema2/img01.png', alt='')
      .col-lg-7
        .row
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/Tema2/img02.png', alt='')
          .col-lg-10
            p El proceso de patronaje se fundamenta en las medidas del cuerpo, las cuales han sido estandarizadas y compiladas en tablas que definen las tallas. Estas tablas contienen las medidas anatómicas tomadas directamente del cuerpo humano, lo que permite identificar las proporciones de cada individuo y facilita la elaboración de patrones precisos.
        p Para aplicar correctamente estas tablas y asegurar la coherencia en el proceso, es indispensable establecer primero una metodología unificada para la toma de dichas medidas. Por esta razón, en el trazado de patrones es muy importante identificar los puntos anatómicos del cuerpo, ya que el dominio de estos permite consolidar un vocabulario técnico y un método consistente que garantiza la precisión en cada paso.

    .tarjeta.bg5.p-4.mb-3(data-aos="zoom-in-left")
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
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1 Puntos de referencia corporales anatómicos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para garantizar la exactitud y la coherencia en la toma de medidas, es fundamental identificar primero los puntos de referencia anatómicos del cuerpo, dominando así un vocabulario técnico unificado. Estos puntos funcionan como un mapa sobre el cuerpo que asegura que las medidas se tomen siempre en el mismo lugar, sin importar quién realice el proceso. La correcta localización de estos puntos es la base práctica que asegura la consistencia y la precisión profesional en cada medida tomada, lo que se traduce directamente en la calidad y el buen ajuste de la prenda final.
          
    p A continuación, se detallan los puntos de referencia clave, agrupados por su vista anatómica.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-12.col-12
          TabsC
            .relleno.py-3.py-md-4(titulo="Puntos de referencia frontales").fondotabs
              .row.justify-content-center.p-4
                .col-lg-5.mb-3
                  .row.justify-content-center
                    .col-lg-12.bg7.p-3.mb-3
                      p.mb-0 La vista frontal es esencial para establecer las medidas de ancho del torso, el pecho y los largos de las prendas en la parte delantera del cuerpo.
                    .col-lg-12.col-md-9
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 4.
                        span  Puntos frontales masculinos
                      figure
                        img(src='@/assets/curso/Tema2/img04.png', alt='Ilustración que detalla los puntos de referencia anatómicos para la vista frontal del cuerpo humano. La imagen señala ubicaciones clave para la toma de medidas, como el punto de acromio, los pliegues axilares, biceps, zana perineal, centro de puño y centro frente zona umbilical. ')
                    .py-2
                    figcaption SENA, (2019).
                
                .col-lg-5
                  ul.lista-ul--color
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Punto de acromio:] corresponde al punto óseo más externo y superior del hombro, que sirve como inicio para medir el largo de la manga y el ancho de la espalda.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Centro del puño o manubrio esternal:] se localiza en la parte central y superior del hueso del esternón, funcionando como referencia para el talle delantero.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Pliegues axilares delanteros:] son las líneas que se forman donde el brazo se une con el torso en la parte delantera; son cruciales para determinar el ancho de pecho.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Bíceps:] se ubica en la parte más prominente del músculo del brazo, necesario para calcular el ancho de la manga.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Cintura centro frente:]  localizado en la zona umbilical, es una referencia horizontal para tomar el contorno de cintura.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Zona perineal:] punto de referencia en la entrepierna, fundamental para determinar la medida del tiro del pantalón.

            .relleno.py-3.py-md-4(titulo="Puntos de referencia anatómicos laterales").fondotabs
              .row.justify-content-center.p-4
                .col-lg-5.mb-3
                  .row.justify-content-center
                    .col-lg-12.bg7.p-3.mb-3
                      p.mb-0 Desde la vista de perfil o lateral, se determinan medidas de profundidad y largos verticales que son cruciales para un ajuste tridimensional de la prenda.
                    .col-lg-12.col-md-9
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 5. 
                        span  Puntos anatómicos laterales masculinos
                      figure
                        img(src='@/assets/curso/Tema2/img05.png', alt='Ilustración que detalla los puntos de referencia anatómicos en la vista de perfil del cuerpo. La imagen señala ubicaciones clave para la toma de medidas, como la fosa axilar, apófisis estiloide del radio y la terminación de la reja costal. ')
                    .py-2
                    figcaption SENA, (2019).
                
                .col-lg-5
                  ul.lista-ul--color
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Fosa axilar:] es el punto hueco central ubicado directamente debajo del brazo.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Terminación de la reja costal:] corresponde al final de las costillas, un punto importante para definir la altura del talle y la cintura.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Apófisis estiloide del radio:] es el hueso prominente que sobresale en la muñeca, del lado del dedo pulgar. Sirve como punto final para medir el largo de la manga.
                  
            .relleno.py-3.py-md-4(titulo="Puntos de referencia anatómicos posteriores").fondotabs
              .row.justify-content-center.p-4
                .col-lg-5.mb-3
                  .row.justify-content-center
                    .col-lg-12.bg7.p-3.mb-3
                      p.mb-0 La vista posterior es fundamental para las medidas de la espalda, una de las zonas más complejas para el ajuste de prendas masculinas.
                    .col-lg-12.col-md-9
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 6. 
                        span  Puntos anatómicos posteriores masculinos
                      figure
                        img(src='@/assets/curso/Tema2/img06.png', alt='Ilustración que detalla los puntos de referencia anatómicos en la vista posterior del cuerpo. La imagen señala ubicaciones clave para la toma de medidas, como la fosa supraclavicular, pliegue posterior, apófisis estiloide, séptima vértebra cervical, promontorio e inicio y las crestas ilíacas.')
                    .py-2
                    figcaption SENA, (2019).
                
                .col-lg-5
                  ul.lista-ul--color
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Fosa supraclavicular (ángulo cuello - hombro):] se ubica en el punto exacto donde la base del cuello se encuentra con el inicio del hombro.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Séptima vértebra cervical:] es la vértebra más prominente que se puede palpar en la base del cuello; es el punto de partida para medir el talle de espalda.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Pliegue posterior post- axilar:] es la línea que se forma donde el brazo se une con la espalda, utilizada para medir el ancho de espalda.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Promontorio de inicio de las vértebras lumbares:] es una referencia en la parte baja de la espalda para determinar la línea del talle posterior.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Cresta ilíaca:]  corresponde al borde superior del hueso de la cadera, palpable en los costados.
                    li.mb-1
                      i.fas.fa-circle-chevron-right
                      | #[b Apófisis estiloide de cúbito:] es el hueso prominente de la muñeca del lado del dedo meñique, otra referencia para el largo de manga.

    separador(data-aos="zoom-in-left")
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Toma de medidas

    .row.justify-content-center.align-items-center.mb-3.fondo01t2.p-4
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/Tema2/img07.png', alt='')
      .col-lg-7.col-11
        p La toma de medidas antropométricas es un procedimiento técnico de alta precisión, fundamental en el patronaje masculino. Este proceso se apoya directamente en los puntos de referencia anatómicos definidos anteriormente, los cuales sirven como un mapa corporal para garantizar la consistencia y la exactitud. Seguir las normativas de este procedimiento es esencial para demarcar correctamente las dimensiones del cuerpo y obtener así datos fiables para la posterior construcción de los patrones.
        p La calidad del patrón depende directamente de la rigurosidad con la que se realice esta etapa, ya que un error de pocos milímetros puede traducirse en una diferencia significativa en la prenda final, afectando su ajuste y comodidad. Por lo tanto, no solo se trata de registrar números, sino de aplicar una técnica correcta, asegurando que la persona mantenga una postura natural y que la cinta métrica se ajuste al cuerpo sin oprimirlo. A continuación, se describen los pasos para la obtención de las medidas masculinas más relevantes.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema3/img05.svg")
          h3.bg2.py-2.w-card-text Medidas generales

    p Para la correcta realización de los patrones se deben tomar varias medidas de las dimensiones de la parte superior del cuerpo de la persona, sin importar su orden.
    p.mb-3 A continuación, se presentan los pasos que se deben seguir para la toma de las medidas para los patrones:

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          h3.bg8.py-2.w-card-text2 Medidas para la parte superior del cuerpo

    p.mb-3 A continuación, se describen las medidas fundamentales correspondientes a la parte superior del cuerpo masculino. Estos datos son esenciales para el trazado de patrones de prendas como camisas, chaquetas y camisetas, ya que definen el ajuste en el torso, los hombros y los brazos.

    .row.justify-content-center.align-items-center.mb-5.fondoslyder.p-4(data-aos="fade-down")
      .col-lg-12
        SlyderA(tipo="b").fondoblanco.p-4
          .row.justify-content-center.p-4
            .col-lg-5.col-md-6
              h4 Contorno de cuello
              p Se obtiene pasando la cinta métrica alrededor de la parte más ancha del cuello, dejando una ligera holgura. 
            .col-lg-4.col-md-6.col-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 7. 
                span  Ejemplo contorno cuello
              figure
                img(src='@/assets/curso/Tema2/figura7.svg', alt='Ilustra la toma de medida para el contorno de cuello. La imagen presenta una figura humana con una banda resaltada alrededor de la base del cuello, indicando la posición correcta para pasar la cinta métrica.')
         
             
          .row.justify-content-center.p-4
            .col-lg-5.col-md-6
              h4 Ancho de pecho
              p Con los brazos de la persona hacia abajo, se pasa la cinta métrica de forma horizontal por el pliegue de sisa a sisa.
            .col-lg-4.col-md-6.col-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 8. 
                span  Ejemplo ancho de pecho
              figure
                img(src='@/assets/curso/Tema2/figura8.svg', alt='Ilustra la toma de medida para el ancho de pecho. La imagen presenta una figura humana con una banda horizontal resaltada que cruza el pecho, desde el pliegue de una sisa hasta la otra, para indicar la posición correcta de la cinta métrica.')
          
        
          
          
          .row.justify-content-center.p-4
            .col-lg-5.col-md-6
              h4 Largo de manga
              p Se mide desde el punto acromial hasta la muñeca, con el brazo semidoblado para considerar el recorrido del codo.
            .col-lg-4.col-md-6.col-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 9. 
                span  Ejemplo largo de manga
              figure
                img(src='@/assets/curso/Tema2/figura9.svg', alt='Ilustra el método para medir el largo de manga. Sobre una figura con el brazo semidoblado, una línea resaltada muestra el recorrido de la medida desde el punto acromial del hombro hasta la muñeca.')
         
          
          .row.justify-content-center.p-4
            .col-lg-5.col-md-6
              h4 Hombro
              p Se mide en línea recta desde la base del cuello (vértice cuello - hombro) hasta el punto acromial.
            .col-lg-4.col-md-6.col-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 10. 
                span  Ejemplo hombro
              figure
                img(src='@/assets/curso/Tema2/figura10.svg', alt='Ilustra el método para medir el hombro. Una línea recta resaltada sobre la figura humana muestra la trayectoria de la medida desde la base del cuello hasta el punto acromial del hombro.')
         
          
          .row.justify-content-center.p-4
            .col-lg-5.col-md-6
              h4 Contorno de puño
              p Se rodea la muñeca con la cinta métrica, dejando un poco de holgura.
            .col-lg-4.col-md-6.col-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 11.
                span   Ejemplo contorno de puño
              figure
                img(src='@/assets/curso/Tema2/figura11.svg', alt='Ilustra el método para medir el contorno de puño. La imagen presenta una figura humana, y una banda resaltada rodea la muñeca para indicar la ubicación correcta de la cinta métrica.')
         
          
          .row.justify-content-center.p-4
            .col-lg-5.col-md-6
              h4 Contorno de cintura
              p Se rodea la cintura, pasando aproximadamente por encima del ombligo, ajustando la cinta sin que quede floja.
            .col-lg-4.col-md-6.col-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 12. 
                span  Ejemplo contorno de cintura 
              figure
                img(src='@/assets/curso/Tema2/figura12.svg', alt='Ilustra el método para medir el contorno de cintura. Sobre una figura humana, una banda resaltada rodea la cintura, a la altura aproximada del ombligo, para señalar la ubicación correcta de la cinta métrica')
        

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          h3.bg8.py-2.w-card-text2 Medidas para la parte inferior del cuerpo

    p.mb-3 Para el desarrollo de patrones de la parte inferior del cuerpo, como los pantalones, se requiere un conjunto específico de medidas que garantizan la comodidad y el ajuste correcto. A continuación, se detallan las medidas clave para esta tipología de prendas.

    .row.justify-content-center.align-items-center.mb-3.fondo_pasos_t2(data-aos="fade-down")
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="l").mt-5
          .row
            .col-md-7.mb-4.mb-md-0
              h3 Tiro
              p Con la persona sentada en una superficie plana, se mide por el costado desde la línea de la cintura hasta la superficie del asiento. Es una medida fundamental para la comodidad del pantalón.
            .col-md-4
              .titulo-sexto.color-acento-contenido
                h5 Figura 13. 
                span  Ejemplo tiro
              figure
                img(src='@/assets/curso/Tema2/figura13.svg', alt='Ilustra el método para medir el tiro. Una flecha vertical en el costado de una figura sentada muestra la medida desde la línea de la cintura hasta la superficie plana del asiento.')

          .row
            .col-md-4.mb-3
              .titulo-sexto.color-acento-contenido
                h5 Figura 14. 
                span  Ejemplo contorno de base o cadera
              figure
                img(src='@/assets/curso/Tema2/figura14.svg', alt='Ilustra el método para medir el contorno de base o cadera. La imagen presenta una figura humana, y una banda horizontal resaltada rodea las caderas por la parte más saliente de los glúteos, para indicar la posición correcta de la cinta métrica.')
            .col-md-6
              h3 Contorno de base o cadera
              p Se pasa la cinta métrica horizontalmente por la parte más saliente de los glúteos.


          .row
            .col-md-7.mb-4.mb-md-0
              h3 Largo total
              p Para pantalones, se ubica la cinta en el costado, desde la cintura hasta la altura del tobillo o según el largo deseado.

            .col-md-4
              .titulo-sexto.color-acento-contenido
                h5 Figura 15. 
                span  Ejemplo largo total
              figure
                img(src='@/assets/curso/Tema2/figura15.svg', alt='Ilustra el método para medir el largo total para pantalones. Una línea vertical resaltada en el costado de la figura muestra la medida desde la cintura hasta el tobillo.')

          .row
            .col-md-4.mb-3
              .titulo-sexto.color-acento-contenido
                h5 Figura 16. 
                span Ejemplo bota
              figure
                img(src='@/assets/curso/Tema2/figura16.svg', alt='Ilustración que detalla la toma de medida para la bota del pantalón. La imagen presenta una figura humana, y una banda resaltada rodea el tobillo para indicar el contorno que define el ancho final.')
            .col-md-6
              h3 Bota
              p Se mide el contorno del tobillo, dejando el margen deseado para definir el ancho final de la bota del pantalón.



    p.mb-4 Para dar profundidad al tema y establecer un aprendizaje significativo se debe revisar detalladamente el siguiente video:

    .row.justify-content-center.align-items-center(data-aos="fade-down")    
      .col-lg-10.col-11
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/UkwF4YVTnLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Patronaje industrial masculino: toma de medidas


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Clasificación y aplicación de medidas

    .row.justify-content-center.align-items-center.mb-4.fondo01t31.p-4(data-aos="zoom-in-left")
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.col-md-2.mb-2
            img(src="@/assets/curso/Tema3/img06.svg")
          .col-lg-10.col-11
            p Una vez tomadas las dimensiones del cuerpo, y para su correcta aplicación en el patronaje, las medidas se clasifican en tres grandes grupos. Esta clasificación no solo atiende a su naturaleza si son verticales, horizontales o circulares, sino, de manera fundamental, a la forma en que se aplican matemáticamente sobre el patrón plano. Este paso es crucial, ya que permite traducir las dimensiones de un cuerpo tridimensional a un plano bidimensional de manera proporcional y precisa.
        
    p.mb-5 La necesidad de esta aplicación matemática surge del hecho de que los patrones base, por lo general, no representan el cuerpo completo, sino una fracción simétrica del mismo, como la mitad del delantero o la mitad de la espalda. Por lo tanto, una medida de contorno que rodea todo el cuerpo debe ser adaptada para que corresponda a la porción que el patrón representa. De esta lógica se derivan las reglas de aplicación completa, a la mitad o a un cuarto que son distintas para cada tipo de medida, garantizando que al unir las piezas cortadas se reconstruya el volumen corporal correcto.

    .row.justify-content-center(data-aos="flip-up")  
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3(src='@/assets/curso/Tema2/ico1.svg', alt='tema1')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.p-1.col-6
              h4.text-center.texto_tarjetas Largos
            .col-lg-11  
              p.text-center Son medidas tomadas en sentido vertical o ligeramente inclinados. Forman parte de este grupo los talles, los largos de prendas y las alturas. Se caracterizan porque se aplican al patrón completo; es decir, no se dividen.
      
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3(src='@/assets/curso/Tema2/ico2.svg', alt='tema1')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.p-1.col-6
              h4.text-center.texto_tarjetas Anchos
            .col-lg-11  
              p.text-center  Se toman las medidas en sentido horizontal desde un punto a otro. A este grupo pertenece el ancho de pecho. Se caracterizan porque se aplican al patrón en proporción ½.
   
      
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3(src='@/assets/curso/Tema2/ico3.svg', alt='tema1')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.p-1.col-6
              h4.text-center.texto_tarjetas Contornos
            .col-lg-11  
              p.text-center  Son medidas tomadas de manera circular y el punto de partida será el mismo punto de llegada. Se denominan también medidas perimetrales porque rodean totalmente el volumen del cuerpo. Pertenecen a este grupo el contorno de cuello, el contorno de pecho, el contorno de cintura y el contorno de cadera, entre otros. Su característica es que se aplican al patrón en proporción ¼.






















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
