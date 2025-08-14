import {View, Text, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react';

      interface Moeda {
          name: string;
          buy: number;
          sell: number;
          variation: number;
        }

      export default function Cotas() {
         const [dolar, setDolar] = useState<Moeda | null>(null);
         const [euro, setEuro] = useState<Moeda | null>(null);

  // Ícones personalizados para cada moeda

        const icones: Record<string, any> = {
         USD: require('./assets/usd.png'), // coloque uma imagem do dólar na pasta assets
         EUR: require('./assets/eur.png'), // coloque uma imagem do euro na pasta assets
        };
       
        useEffect(() => {
    async function fetchCotacoes() {
      try {
        const response = await fetch('finance?format=json&key=a4dfe232');
        const data = await response.json();

        setDolar(data.results.currencies.USD);
        setEuro(data.results.currencies.EUR);
      } catch (error) {
        console.error('Erro ao buscar cotações:', error);
      }
    }

    fetchCotacoes();
  }, []);


   return (
    <View style={styles.principal}>
      <Text style={styles.titulo}>Cotações</Text>

      {dolar && (
        <View style={styles.moeda}>
          <Image style={styles.imagem} source={icones.USD} />
          <Text style={styles.texto}>Moeda: {dolar.name}</Text>
          <Text style={styles.texto}>Compra: R$ {dolar.buy.toFixed(2)}</Text>
          <Text style={styles.texto}>Venda: R$ {dolar.sell.toFixed(2)}</Text>
          <Text style={styles.texto}>Variação: {dolar.variation.toFixed(2)}%</Text>
        </View>
      )}

      {euro && (
        <View style={styles.moeda}>
          <Image style={styles.imagem} source={icones.EUR} />
          <Text style={styles.texto}>Moeda: {euro.name}</Text>
          <Text style={styles.texto}>Compra: R$ {euro.buy.toFixed(2)}</Text>
          <Text style={styles.texto}>Venda: R$ {euro.sell.toFixed(2)}</Text>
          <Text style={styles.texto}>Variação: {euro.variation.toFixed(2)}%</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    imagem:{
        width:80,
        height:80
    },
    principal:{
        width:'80%',
        borderWidth:2,
        borderRadius:30,
        padding:20,
        margin:20
    },
    texto:{
        fontSize:20
    }
    moeda: {
    marginBottom: 30,
    alignItems: 'center',
  },
    
});