import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginScreen = ({ setIsSignedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  // Fonction pour gérer la connexion
  const handleLogin = () => {
    // Ici, vous intégrerez la logique de vérification des identifiants
    if (email === '12345@test.com' && password === '1234') {
      // Si les identifiants sont corrects
      setIsSignedIn(true);
    } else {
      // Sinon, afficher une erreur ou un message
      alert('Identifiants incorrects');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Pas de compte ? Inscrivez-vous</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles pour la page de connexion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  link: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
