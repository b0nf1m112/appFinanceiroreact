import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Tempo from '../components/Cotas';
import Api from '../components/Api';
export default function mongagua(){
    const [dados, setDados] = useState<any[]>([]);

    async function buscaTempo(){
        const response = await Api.get('weather?array_limit=4&fields=only_results,temp,city_name,forecast,condition,max,min,description,moon_phase,humidity,date&key=1c749c47&city_name=mongagua,SP');
        setDados(response.data.forecast);
    }
    useEffect(
        ()=>{buscaTempo()
        },[]);

    return(
        <View style={styles.bloco}>
            <Text style={styles.Texto}>Previsão do Tempo para mongagua</Text>

            <FlatList 
                
            />
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