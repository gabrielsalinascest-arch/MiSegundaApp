import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function Index() {

  const [resultado, setResultado] = useState(
    'Esperando tu respuesta...'
  );

  function revisarRespuesta(respuesta: string) {

    // Aquí cambiamos la respuesta correcta a 'Phishing'
    if (respuesta === 'Phishing') {

      setResultado(
        '¡Excelente! El phishing es una técnica de engaño para robar datos.'
      );

    } else {

      setResultado(
        'Incorrecto. ¡Sigue estudiando para protegerte!'
      );

    }
  }

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>
        CYBER QUIZ
      </Text>

      <Text style={styles.pregunta}>
        ¿Cómo se llama el delito de hacerse pasar por una entidad bancaria para robar datos?
      </Text>

      <Button
        title="Ransomware"
        onPress={() => revisarRespuesta('Ransomware')}
      />

      <Button
        title="Phishing"
        onPress={() => revisarRespuesta('Phishing')}
      />

      <Button
        title="Malware"
        onPress={() => revisarRespuesta('Malware')}
      />
      
      {/* RETO OPCIONAL: El cuarto botón que pediste */}
      <Button
        title="Firewall"
        onPress={() => revisarRespuesta('Firewall')}
      />

      <Text style={styles.resultado}>
        {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  // Cambio de estilo 1: Fondo oscuro
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#1e1e2f' 
  },

  // Cambio de estilo 2: Color de letra y fuente más grande
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#00d8ff' 
  },

  pregunta: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffffff' 
  },

  resultado: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
    fontWeight: 'bold',
    color: '#ffcc00' 
  }

});