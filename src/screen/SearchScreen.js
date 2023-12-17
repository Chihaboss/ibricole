// Importez les composants nécessaires de React Native
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fonction pour gérer la soumission de la recherche
  const handleSearch = () => {
    // Ici, vous intégrerez la logique de recherche et de navigation vers les résultats
    console.log(searchQuery, selectedCategory);
    // navigation.navigate('SearchResults', { searchQuery, selectedCategory });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trouvez un artisan</Text>
      <TextInput
        style={styles.input}
        placeholder="Que recherchez-vous ?"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Plombier" value="plumber" />
        <Picker.Item label="Électricien" value="electrician" />
        <Picker.Item label="Peintre" value="painter" />
        {/* Ajoutez d'autres catégories ici */}
      </Picker>
      <Button title="Rechercher" onPress={handleSearch} />
    </View>
  );
};

// Styles pour l'écran de recherche
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
});

export default SearchScreen;
