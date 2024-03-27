import { IonCol, IonGrid, IonItem, IonPage, IonRow } from '@ionic/react'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <IonGrid>
            <IonRow>
                <IonCol>
                   <IonItem href='/'> All</IonItem> 
                </IonCol>
                <IonCol>
                <IonItem href='/?todos=active'> Active</IonItem>
                </IonCol>
                <IonCol>
                <IonItem href='/?todos=completed'>Completed</IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  )
}
