import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='blank'>My Todo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AddTodo/>
        <Navbar/>
        <Todos/>
      </IonContent>
       
    </IonPage>
  );
};

export default Home;
