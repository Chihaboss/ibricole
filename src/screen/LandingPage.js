// LandingPage.js
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ibricoleImage from '../../assets/images/ibricole.png';


const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={ibricoleImage} style={styles.image} /> 
        
      
      <Text style={styles.title}>Découvrez I-bricole</Text>
      <Text style={styles.description}>
        Trouvez facilement des artisans qualifiés près de chez vous pour tous vos projets.
      </Text>
      <Button 
        title="Explorer"
        onPress={() => navigation.navigate('Search')}
        style={styles.button}
      />
      <Text style={styles.footerText}>
        Déjà inscrit ? 
        <Text 
          style={styles.linkText}
          onPress={() => navigation.navigate('Login')}>
          Connectez-vous
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%', // ou une dimension spécifique
    height: 200, // ajustez selon vos besoins
    resizeMode: 'cover', // ou 'cover', selon l'effet désiré
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default LandingPage;
