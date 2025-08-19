import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Api from '../components/Api';

  interface Moeda {
      name: string;
      buy: number;
      sell: number;
      variation: number;
   }
export default function Euro(){
    const [euro, setEuro] = useState<Moeda | null>(null);

  async function buscaCotacoes() {
    try {
      const response = await Api.get('finance?key=a4dfe232'); 
      const dados = response.data.results;

      const euroDados = dados.currencies.EUR;
      setEuro(euroDados);

    } catch (error) {
      console.error('Erro ao buscar cotações:', error);
    }
  }
    useEffect(() => {
    buscaCotacoes();
  }, []);

  return (
    <View style={styles.bloco}>
      <Text style={styles.titulo}>Cotação do Euro</Text>

      {euro ? (
        <View style={styles.moeda}>
          <Text style={styles.texto}>Moeda: {euro.name}</Text>
          <Text style={styles.texto}>Compra: R$ {euro.buy.toFixed(2)}</Text>
          <Text style={styles.texto}>Venda: R$ {euro.sell.toFixed(2)}</Text>
          <Text style={styles.texto}>Variação: {euro.variation.toFixed(2)}%</Text>
        </View>
      ) : (
        <Text style={styles.texto}>Carregando...</Text>
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