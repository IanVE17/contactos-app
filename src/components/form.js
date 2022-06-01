import { useState, useEffect } from "react";
import {
    IonButton,
    IonLabel,
    IonGrid,
    IonCol,
    IonList,
    IonListHeader,
    IonRow,
    IonItem,
    IonInput,
} from "@ionic/react";
import { addContacts, updateContacts } from "../enviroments/request";

const initialState = {
    nombre: "",
    apellido: "",
    edad: null,
    email: "",
    telefono: "",
};

const Form = ({ contact, finish, edit }) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        setData(contact);
    }, [contact]);

    const getFieldValue = ({ target }) => {
        if (target.value !== "") {
            setData({
                ...data,
                [target.name]: target.value,
            });
        }
    };
    const save = () => {
        if (Object.keys(data).length) {
            if (edit) {
                updateContacts(data);
                finish();
            } else {
                addContacts(data);
                finish();
            }
        }
    };

    return (
        <>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonList>
                            <IonListHeader>
                                <IonLabel>
                                    Rellena todos los campos siguientes:
                                </IonLabel>
                            </IonListHeader>

                            <form>
                                <IonItem>
                                    <IonLabel position="floating">
                                        Nombre(s)
                                    </IonLabel>
                                    <IonInput
                                        value={data?.nombre}
                                        onIonChange={getFieldValue}
                                        name="nombre"
                                    ></IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="floating">
                                        Apellidos
                                    </IonLabel>
                                    <IonInput
                                        value={data?.apellido}
                                        onIonChange={getFieldValue}
                                        name="apellido"
                                    ></IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="floating">
                                        Email
                                    </IonLabel>
                                    <IonInput
                                        value={data?.email}
                                        onIonChange={getFieldValue}
                                        type="email"
                                        name="email"
                                    ></IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="floating">
                                        Edad
                                    </IonLabel>
                                    <IonInput
                                        value={data?.edad}
                                        onIonChange={getFieldValue}
                                        type="number"
                                        name="edad"
                                    ></IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="floating">
                                        Telefono
                                    </IonLabel>
                                    <IonInput
                                        value={data?.telefono}
                                        onIonChange={getFieldValue}
                                        type="number"
                                        name="telefono"
                                    ></IonInput>
                                </IonItem>

                                <IonButton expand="block" onClick={save}>
                                    {edit ? "Editar" : "Agregar"} Contacto
                                </IonButton>
                            </form>
                        </IonList>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
};

export default Form;
