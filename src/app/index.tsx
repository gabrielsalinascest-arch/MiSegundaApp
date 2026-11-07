import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [mensaje, setMensaje] = useState('¡Estoy aprendiendo otra vez React Native!');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mi segunda aplicación</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      <Pressable
        style={styles.boton}
        onPress={() => setMensaje('¡Mi primer botón funciona!')}
      >
        
        <Text style={styles.textoBoton}>Púlsame</Text>
      </Pressable>

      <Pressable
        style={styles.boton2}
        onPress={() => setMensaje('¡Mi segundo botón funciona!')}
      >
        
        <Text style={styles.textoBoton}>Púlsame también</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eef4ff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173b75',
    marginBottom: 18,
  },
  mensaje: {
    fontSize: 17,
    marginBottom: 22,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#a11313',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  boton2: {
    backgroundColor: '#7913a1',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
  },  
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});