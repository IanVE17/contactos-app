import {
    IonButton,
    IonCol,
    IonGrid,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
} from "@ionic/react";
import { createOutline, trashOutline } from "ionicons/icons";
import { delContacts } from "../enviroments/request";

const List = ({ contacts = [], setIsVisible, setEdit, setContact, finish }) => {
    return !contacts.length ? (
        <h3>No hay contactos añadidos</h3>
    ) : (
        contacts.map((contact) => (
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonList>
                            <IonItem key={contact.id}>
                                <IonLabel>
                                    <h2>
                                        {contact.nombre} {contact.apellido}
                                    </h2>
                                    <h3> {contact.telefono}</h3>
                                    <p>{contact.email}</p>
                                </IonLabel>
                                <IonButton
                                    onClick={({ target }) => {
                                        setIsVisible(true);
                                        setEdit(true);
                                        setContact(target.contact);
                                    }}
                                    contact={contact}
                                >
                                    <IonIcon icon={createOutline} />
                                </IonButton>
                                <IonButton
                                    contact={contact}
                                    onClick={async ({ target }) => {
                                        await delContacts(target.contact.id)
                                        finish()
                                    }}
                                >
                                    <IonIcon icon={trashOutline} />
                                </IonButton>
                            </IonItem>
                        </IonList>
                    </IonCol>
                </IonRow>
            </IonGrid>
        ))
    );
};
export default List;
