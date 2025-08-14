import {View, Text, StyleSheet, Image} from 'react-native';

 interface propsCotas{
        date:string,
        max:number,
        min:number,
        description:string,
        condition:string,
        luas:string,
        humidity:number, 
           
    }

export default function Cotas({ } : propsCotas){
    const icones: Record<string, any> = {
       
    }

    return(
        <View style={styles.principal}>
                <Text style={styles.texto}>Previsão para o dia: {date}</Text>
                <Text style={styles.texto}>Máx: {max}</Text>
                <Text style={styles.texto}>Mín: {min}</Text>
                <Text style={styles.texto}>Descrição: {description}</Text>
                <Text style={styles.texto}>Condição:{condition}</Text>
                <Text style={styles.texto}>Umidade do ar:{humidity}</Text>
                
                <Image
                    style={styles.imagem}
                    source={icones[condition]}
                />
                <Image 
                    style={styles.imagem}
                    source={{uri:`https://assets.hgbrasil.com/weather/icons/moon/${luas}.png`}}
                />
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
    
});