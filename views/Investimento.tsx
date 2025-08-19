import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';

export default function Investimento() {
  const [valorInicial, setValorInicial] = useState('');
  const [aporteMensal, setAporteMensal] = useState('');
  const [meses, setMeses] = useState('');
  const [taxaAno, setTaxaAno] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    const V0 = parseFloat(valorInicial);
    const aporte = parseFloat(aporteMensal);
    const n = parseInt(meses);
    const taxa = parseFloat(taxaAno);

    const taxaMes = Math.pow(1 + taxa / 100, 1 / 12) - 1;
    let montante = V0;

    for (let i = 0; i < n; i++) {
      montante = montante * (1 + taxaMes) + aporte;
    }

    setResultado(montante);
  };

    return (
      <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo_invest.png')} style={styles.logo} />
      <Text style={styles.titulo}>Simulador de Investimento</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor Inicial"
        keyboardType="numeric"
        value={valorInicial}
        onChangeText={setValorInicial}
      />
      <TextInput
        style={styles.input}
        placeholder="Aporte Mensal"
        keyboardType="numeric"
        value={aporteMensal}
        onChangeText={setAporteMensal}
      />
      <TextInput
        style={styles.input}
        placeholder="Meses"
        keyboardType="numeric"
        value={meses}
        onChangeText={setMeses}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa ao ano (%)"
        keyboardType="numeric"
        value={taxaAno}
        onChangeText={setTaxaAno}
      />

      <Button title="Calcular" onPress={calcular} />

      {resultado !== null && (
        <Text style={styles.resultado}>
          Montante Final: R$ {resultado.toFixed(2)}
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
    resultado: { fontSize: 20, marginTop: 20 },
    logo: { width: 120, height: 120, marginBottom: 20 },

});