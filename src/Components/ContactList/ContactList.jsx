import React from "react";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contactos }) => {
    return (
        <div>
            {contactos.map((contacto) => (
                <ContactItem key={contacto.id} contacto={contacto} />
            ))}
        </div>
    );
};

export default ContactList;
