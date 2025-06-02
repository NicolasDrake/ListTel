import { View, Text, StyleSheet } from 'react-native';

interface PropsContato {
  nome: string;
  tel: string;
}

export default function Contatos({ nome, tel }: PropsContato) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.nome}>Nome: {nome}</Text>
      <Text style={styles.tel}>Telefone: {tel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    width: '100%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tel: {
    fontSize: 16,
    color: '#555',
  },
});
