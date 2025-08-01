import React from "react";
import { useState } from "react";
import ListaDeMensajes from "../../Components/ListaMensajes/ListaMensajes";
import dataMensajes from "../../data/mensajes";

const ChatScreen = () => {
    const [mensajes, setMensajes] = useState(dataMensajes);

    return <ListaDeMensajes mensajes={mensajes} />;
};

export default ChatScreen;
