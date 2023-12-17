import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const MessagingScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: Date.now(), text: message }]);
      setMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={styles.message}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Tapez un message"
      />
      <Button title="Envoyer" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  message: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
});

export default MessagingScreen;
