import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Exemple de bascule pour les notifications
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  // Exemple de bascule pour le mode sombre
  const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      <View style={styles.setting}>
        <Text>Mode Sombre</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={darkModeEnabled}
        />
      </View>

      {/* Exemple de bouton pour naviguer vers un sous-écran */}
      <Button
        title="Modifier le mot de passe"
        onPress={() => navigation.navigate('ChangePasswordScreen')}
      />
      {/* Ajoutez d'autres boutons ou options ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SettingsScreen;
