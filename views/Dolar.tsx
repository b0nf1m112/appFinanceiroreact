import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Cotas from '../components/Cotas';
import Api from '../components/Api';

export default function Dolar(){
    const [dados, setDados] = useState<any[]>([]);

    async function buscaCotas(){
        const response = await Api.get('https://api.hgbrasil.com/finance/quotations?key=a4dfe232');
        setDados(response.data.forecast);
    }
    useEffect(
        ()=>{
            buscaCotas()
        },[]);

    return(
        <View style={styles.bloco}>
            <Text style={styles.Texto}>Cotação do Dolar.</Text>

            <FlatList 
              
                style={styles.lista}
                />
                
            /
        </View>
    );
}

const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:40
    },
    Texto:{
        fontSize:20,
    },
    lista:{
        height:'70%',
        width:'100%'
    }
    
});