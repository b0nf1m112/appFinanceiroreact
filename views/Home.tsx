import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Cotas from '../components/Cotas';

export default function Home({navigation}: any) {
   
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.titulo}>App Financeiro</Text>
      <Text style={styles.boasVindas}>Seja bem-vindo!</Text>

      {/* Exibir e inserir uma ou mais moedas */}
      <Cotas moedaNome="USD" icone={require('../assets/usd.png')} />
      <Cotas moedaNome="EUR" icone={require('../assets/eur.png')} />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Investimento')}
      >
        <Text style={styles.textoBotao}>Investimento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Financiamento')}
      >
        <Text style={styles.textoBotao}>Financiamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', paddingVertical: 40 },
  logo: { width: 140, height: 140, marginBottom: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  boasVindas: { fontSize: 20, marginBottom: 20 },
  botao: {
    backgroundColor: '#5b9eafff',
    padding: 15,
    marginBottom: 20,
    width: '70%',
    borderRadius: 15,
  },
  textoBotao: { color: '#ffffffff', fontSize: 20, textAlign: 'center' },
});