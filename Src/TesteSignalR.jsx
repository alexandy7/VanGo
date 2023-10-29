import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native'; 
import { HubConnectionBuilder } from '@microsoft/signalr';


const ChatScreen = () => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://apivango.azurewebsites.net/Solicitacao")
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log("Conectado ao hub SignalR!");
        })
        .catch((error) => {
          console.error(error + 'aaaaaa deu erro filho da puta');
        });

      connection.on("ReceiveMessage", (usuário, mensagem) => {
        // Atualize o estado com a nova mensagem
        setMessages(prevMessages => [...prevMessages, { usuário, mensagem }]);
      });
    }
  }, [connection]);

  const enviarMensagem = () => {
    const usuário = "Carlos";
    const mensagem = "Olá, mundo!";
    if (connection) {
      connection.invoke("SendMessage", usuário, mensagem)
      .catch((error) => {
        console.error(error);
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{`${item.usuário}: ${item.mensagem}`}</Text>
        )}
      />
      <Button title="Enviar Mensagem" onPress={enviarMensagem} />
    </View>
  );
};

export default ChatScreen;
