import {View, Text, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import Api from './Api';

     interface Moeda {
       name: string;
       buy: number;
       sell: number;
       variation: number;
}

interface Props {
       moedaNome: 'USD' | 'EUR'; 
       icone: any; 
}

export default function Cotas({ moedaNome, icone }: Props) {
  const [cotacao, setCotacao] = useState<Moeda | null>(null);

       
     useEffect(() => {
    async function fetchCotacao() {
      try {
        const response = await Api.get('finance?key=a4dfe232');
        const dados = response.data.results.currencies;
        const moeda = dados[moedaNome];
        setCotacao(moeda);
    
      } catch (error) {
        console.error('Erro ao buscar cotações:', error);
      }
    }

    fetchCotacao();
  }, [moedaNome]);

  if (!cotacao) return <Text>Carregando...</Text>;
  

    return (
    <View style={styles.container}>
      {cotacao && (
        <View style={styles.moeda}>
          <Image style={styles.icone} source={icone} />
          <Text style={styles.texto}>Moeda: {cotacao.name}</Text>
          <Text style={styles.texto}>Compra: R$ {cotacao.buy.toFixed(2)}</Text>
          <Text style={styles.texto}>Venda: R$ {cotacao.sell.toFixed(2)}</Text>
          <Text style={styles.texto}>Variação: {cotacao.variation.toFixed(2)}%</Text>
        </View>
      )}
    </View>
  );
}
   
const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 20 },
  icone: { width: 60, height: 60, marginBottom: 10 },
  texto: { fontSize: 18 },
  moeda: { alignItems: 'center' }
});