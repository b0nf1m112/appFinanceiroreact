import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Financiamento() {
  const [valorBem, setValorBem] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [taxaAno, setTaxaAno] = useState('');
  const [parcela, setParcela] = useState<number | null>(null);

  const calcularParcela = () => {
    const V = parseFloat(valorBem);
    const n = parseInt(parcelas);
    const taxa = parseFloat(taxaAno);

    const i = Math.pow(1 + taxa / 100, 1 / 12) - 1;
    const p = V * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    setParcela(p);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de Financiamento</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor do Bem"
        keyboardType="numeric"
        value={valorBem}
        onChangeText={setValorBem}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Parcelas"
        keyboardType="numeric"
        value={parcelas}
        onChangeText={setParcelas}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa ao ano (%)"
        keyboardType="numeric"
        value={taxaAno}
        onChangeText={setTaxaAno}
      />

      <Button title="Calcular Parcela" onPress={calcularParcela} />

      {parcela !== null && (
        <Text style={styles.resultado}>
          Parcela Mensal: R$ {parcela.toFixed(2)}
        </Text>
      )}
    </View>
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
});