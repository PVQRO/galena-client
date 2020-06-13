import React from 'react'
import NewCard from './NewCard';
import './index.css';

export default function NewsPage(){


    return(<div className="row news">
                <div className="news-title"><h3 className="section-title"><b>NEWS ABOUT PROJECT</b></h3></div>
                <br />
                <br />
                <br />
                <div className="row new-cards">
                    <NewCard title='Tres estudiantes españoles crean una app que agiliza la investigación del coronavirus a los médicos'
                            img="https://album.mediaset.es/eimg/2020/05/29/QNU8c8KHDod4x2NOHuw6b6.jpg?w=1024"
                            description="La crisis del coronavirus nos pilló a todos con la guardia baja. Nadie se veía venir que una pandemia nos iba a obligar a parar durante dos meses, a refugiarnos en nuestras casas ..."
                            link="https://www.yasss.es/current-mood/estudiantes-desarrollan-app-estudio-coronavirus_18_2953920132.html"/>
                    <NewCard title='Un estudiante de la UVA inventa una aplicación que permite ver cómo se comporta el Covid'
                            img="https://album.mediaset.es/eimg/2020/05/29/QNU8c8KHDod4x2NOHuw6b6.jpg?w=1024"
                            description="Aunque muchas veces confusos en esta crisis no somos ajenos a los datos. Pueden además ser vitales para luchar contra el covid 19. Un estudiante de la Universidad de Valladolid ..."
                            link="https://www.rtvcyl.es/noticia/C424C044-C7A7-5B3D-166DF92AE382F3FC/20200529/estudiante/uva/inventa/aplicacion/permite/ver/comporta/covid"/>
                    <NewCard title='Un estudiante de la UVA gana un Hackhaton con una plataforma que agrupa las variables clínicas ...'
                            img="https://www.tribunavalladolid.com/uploads/imagenes/images/2020/5/21/5ec695ddd86b9e312f000717/uva-hackaton_detail.jpg?1590072796"
                            description="Víctor Vaquero Martínez, estudiante del doble grado de Informática y Estadística en la Universidad de Valladolid (UVa), ha ganado el premio del Consorcio Santiario Mareme (Barcelona) ..."
                            link="https://www.tribunavalladolid.com/noticias/un-estudiante-de-la-uva-gana-un-hackhaton-con-una-plataforma-que-agrupa-las-variables-clinicas-de-un-paciente-con-covid-19/1590072849"/>
                
                </div>
            </div>)
}