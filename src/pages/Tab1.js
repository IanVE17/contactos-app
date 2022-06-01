import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonModal,
    IonButton,
} from "@ionic/react";
import "./Tab1.css";
import List from "../components/list";
import { useEffect, useState } from "react";
import { fetchContacts } from "../enviroments/request";
import Form from "../components/form";

const Tab1 = () => {
    const [contacts, setContacts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(false);
    const [contact, setContact] = useState({});

    const fetchData = async () => {
        let data = await fetchContacts();
        let temp = [];
        data.forEach((doc) => {
            temp.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        if (temp.length) {
            
            setTimeout(() => {
                setContacts(temp);
            }, 1000)
        } else {
            setTimeout(() => {
                setContacts([]);
            }, 1000)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const finish = () => {
        setVisible(!visible)
        setContact({})
        fetchData()
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Lista de contactos</IonTitle>
                    <IonButton slot="end" onClick={() => setVisible(!visible)}>
                        Agregar
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <List contacts={contacts} setIsVisible={setVisible} setEdit={setEdit} setContact={setContact} finish={fetchData} />
                <IonModal isOpen={visible}>
                    <IonContent>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>{edit ? "Editar" : "Añadir" }</IonTitle>
                                <IonButton
                                    slot="end"
                                    onClick={() => {
                                        setVisible(!visible)
                                        setEdit(false)
                                        setContact({})
                                    }}
                                    color="danger"
                                >
                                    Cerrar
                                </IonButton>
                            </IonToolbar>
                        </IonHeader>
                        <Form contact={contact} finish={finish} edit={edit}/>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
