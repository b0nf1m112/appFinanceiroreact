 import {useState, useEffect} from 'react';
 import {View, Text, StyleSheet, FlatList} from 'react-native';
 import Cotas from '../components/Cotas';
 import Api from '../components/Api';

     interface Moeda {
      name: string;
      buy: number;
      sell: number;
      variation: number;
   }
 export default function Dolar(){
    const [dolar, setDolar] = useState<Moeda | null>(null);

    async function buscaCotas() {
    try {
      const response = await Api.get('finance?key=12b2bb19');
      const dados = response.data.results;
      setDolar(dados.currencies.USD);
    } catch (error) {
      console.error('Erro ao buscar cotação do dólar:', error);
    }
  }
    useEffect(() => {
    buscaCotas();
  }, []);

  return (
    <View style={styles.bloco}>
      <Text style={styles.titulo}>Cotação do Dólar</Text>

      {dolar ? (
        <View style={styles.moeda}>
          <Text style={styles.texto}>Moeda: {dolar.name}</Text>
          <Text style={styles.texto}>Compra: R$ {dolar.buy.toFixed(2)}</Text>
          <Text style={styles.texto}>Venda: R$ {dolar.sell.toFixed(2)}</Text>
          <Text style={styles.texto}>Variação: {dolar.variation.toFixed(2)}%</Text>
        </View>
      ) : (
        <Text style={styles.texto}>Carregando cotação...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  moeda: {
    alignItems: 'center',
    marginBottom: 30,
  },
  texto: {
    fontSize: 18,
    marginVertical: 2,
  },
});