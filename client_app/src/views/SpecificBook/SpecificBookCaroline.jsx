import React from 'react';
import Card from '../../components/UI/Card/Card';
import ISBN from '../../components/UI/Iconos/ISBN/ISBN';
import '../SpecificBook/style.css';
import Navar from '../../components/UI/Navar/Navar';

import Description from '../../components/ComponentsSpecificBook/Description/Description';
import Gender from '../../components/ComponentsSpecificBook/Gender/Gender';
import Information from '../../components/ComponentsSpecificBook/Information/Information';


export default function SpecificBookCaroline() {
  return (
   <>
      <Navar/>
      <div className='container'>
        <div className="grid-container">
          <Card
            className={"card link center"}
            icon={<ISBN/>}
            title='Coraline'
            bodyText='Autor: Neil Gaiman'
            redirectUrl='https://corazondeartista.wordpress.com/wp-content/uploads/2014/09/gaimanneil-coraline.pdf'
          />
          <Description
            className={"color description"}
            description='Coraline Jones y sus padres "workaholics" se mudan a una vieja casa que ha sido dividida en distintos pisos de departamentos. Entre los inquilinos están las señoritas Spink y Forcible, dos mujeres ancianas retiradas de la farándula del teatro, y el Señor Bob, inicialmente referido a él como "el viejo loco de arriba”, que se define como entrenador de un circo de ratones. El piso junto al de Coraline está deshabitado, y una puerta enlaza ambos departamentos, pero esta está bloqueada por ladrillos una vez abierta.'
          />       

          <Gender
            className={"content-Gender"}
            text1={"Fantasía oscura"}
            text2={"Terror"}
            text3={"Cuento de hada"}
            text4={"Infantil"}
          />

          <Information
            className={"content-Information"}
            n_pag={208}
            editorial={"HarperCollins; Reprint,Anniversary edición (24 Abril 2012)"}
            idiomas={"Inglés"}
            fecha_publicacion={"2 de julio de 2002"}
          />

        </div>
      </div>
   </>
  )
}
