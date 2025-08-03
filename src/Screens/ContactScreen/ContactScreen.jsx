
import React, { useState } from "react";
import ContactList from "../../Components/ContactList/ContactList";

const initialContacts = [
    {
        id: 1,
        nombre: "Femme Fatal",
        descripcion: "Mens sana in corpore sana",
        avatar: "https://www.thenewworld.co.uk/wp-content/uploads/sites/2/2025/03/GettyImages-1457620013-e1741688147211-1536x864.jpg",
        ultimaConeccion: "11:33",
        statusConeccion: "offline"
    },
    {
        id: 2,
        nombre: "Sean Connery",
        descripcion: "My name is Bond, James Bond",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Sean_Connery_1980_Crop.jpg",
        ultimaConeccion: "04:23",
        statusConeccion: "online"
    },
    {
        id: 3,
        nombre: "Zena Marshall",
        descripcion: "Goldfinger",
        avatar: "https://upload.wikimedia.org/wikipedia/en/0/0a/Zena_Marshall.jpg",
        ultimaConeccion: "21:07",
        statusConeccion: "online"
    },
];


const ContactScreen = () => {
    const [contactos, setContactos] = useState(initialContacts);
    return (
        <div>
            <ContactList contactos={contactos} />
        </div>
    );
};

export default ContactScreen;

/*
Para el archivo ContactScreen.jsx
Hace un componente de React llamado ContactScreen, que tenga un estado con la lista de contactos, dicha lista debera renderizrase dentro del componente, por contacto quiero que crees un <div></div> con la información del contacto. Observa las propiedades de cada contacto para mostarlas en el palntalla.
Necesito que dividas el renderizado de la lista  en un componentea aparte llamado ContactList que reciba el estado de la lista y cada ContacItem también ser'aun compnente aparte.


*/