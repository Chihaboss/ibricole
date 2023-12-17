import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const UserProfileScreen = () => {
  // Remplacez par les données réelles de l'utilisateur
  const userInfo = {
    name: "laarbi ennaji",
    email: "johndoe@example.com",
    // imageUrl: 'url_to_image' // Décommentez si vous utilisez des images
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        {/* Affichez la photo de profil si disponible */}
        {/* <Image source={{ uri: userInfo.imageUrl }} style={styles.profileImage} /> */}
        <Text style={styles.profileName}>{userInfo.name}</Text>
        <Text style={styles.profileEmail}>{userInfo.email}</Text>
      </View>
      <View style={styles.statsSection}>
        <Text style={styles.statsTitle}>Votre Activité</Text>
        {/* Exemple: Afficher le nombre de rendez-vous */}
        <Text>Rendez-vous pris: 5</Text>
        {/* Autres statistiques */}
      </View>
      <View style={styles.linksSection}>
        {/* Liens vers d'autres fonctionnalités */}
        <Button title="Voir les rendez-vous à venir" onPress={() => {/* logique de navigation */}} />
        <Button title="Voir les messages" onPress={() => {/* logique de navigation */}} />
        {/* Autres liens */}
      </View>

      {/* Boutons d'action */}
      <Button title="Modifier le profil" onPress={() => {/* logique de modification */}} />
      <Button title="Changer le mot de passe" onPress={() => {/* logique de changement de mot de passe */}} />
      <Button title="Se déconnecter" onPress={() => {/* logique de déconnexion */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center', // Centre les éléments
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  statsSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  linksSection: {
    marginTop: 20,
  },
  // Décommentez pour utiliser les images
  // profileImage: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  // },
});

export default UserProfileScreen;
