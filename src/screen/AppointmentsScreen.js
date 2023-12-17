import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

const AppointmentsScreen = () => {
  const [appointments, setAppointments] = useState([
    // Exemple de données
    { id: '1', date: '2022-07-01', time: '10:00', artisan: 'John Doe', service: 'Plomberie' },
    { id: '2', date: '2022-07-02', time: '11:00', artisan: 'John Doe', service: 'Eelectricien' },
    { id: '3', date: '2022-07-03', time: '11:00', artisan: 'John Doe', service: 'Menuisier' },
    { id: '4', date: '2022-07-01', time: '12:00', artisan: 'John Doe', service: 'Chodronier' },
    // Ajoutez d'autres rendez-vous ici
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArtisan, setSelectedArtisan] = useState(null);

  // Fonction pour gérer la modification d'un rendez-vous
  const handleEdit = (appointmentId) => {
    // Logique pour la modification
  };

  // Fonction pour gérer l'annulation d'un rendez-vous
  const handleCancel = (appointmentId) => {
    // Logique pour l'annulation
  };
  const handleConfirmation = (appointmentId) => {
    // Logique pour la confirmation
  };

  // Fonction pour afficher les détails du rendez-vous
  const viewDetails = (appointmentId) => {
    // Naviguer vers un écran de détails ou afficher une modale
  };

  const contactOptions = () => {
    // Afficher le pop-up avec les options de contact
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
    <TouchableOpacity onPress={() => viewDetails(item.id)}>
      <Text>{item.date} à {item.time}</Text>
      <Text>Artisan : {item.artisan}</Text>
      <Text>Service : {item.service}</Text>
    </TouchableOpacity>
    <View style={styles.buttons}>
      <View style={styles.buttonContainer}>
        <Button title="Confirmer" onPress={() => handleConfirmation(item.id)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Modifier" onPress={() => handleEdit(item.id)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Annuler" onPress={() => handleCancel(item.id)} color="red" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Contacter" onPress={() => {
          setSelectedArtisan(item);
          contactOptions();
        }} />
      </View>
    </View>
  </View>

  );

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Contacter {selectedArtisan?.artisan}</Text>
            {/* Boutons pour différentes actions de contact */}
            <Button title="Appeler" onPress={() => {/* Logique d'appel */}} />
            <Button title="Envoyer un message" onPress={() => {/* Logique de messagerie */}} />
            <Button title="Envoyer un email" onPress={() => {/* Logique d'email */}} />
            <Button title="Annuler" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </View>
      
    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F5F5F5', // Utilisation de l'arrière-plan blanc cassé
    },
    item: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#FFA500', // Utilisation de l'orange pour la bordure inférieure
      backgroundColor: '#FFF', // Fond blanc pour chaque élément
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFA500', // Texte orange pour les titres
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      buttonContainer: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 10,
      },
   
    buttonText: {
      color: '#FFF', // Texte blanc sur le bouton
    },
    detailText: {
      color: '#004D99', // Texte bleu marine pour les détails
    },
});

export default AppointmentsScreen;
