import { View, Text, StyleSheet, FlatList } from 'react-native';
import Contatos from './componentes/Contatos';

const listaContatos = [
  { id: '1', nome: 'Brenda', tel: '(11)99923-6761' },
  { id: '2', nome: 'Lucas', tel: '(14)92834-8348' },
  { id: '3', nome: 'Mariana', tel: '(25)67887-1457' },
  { id: '4', nome: 'Carlos', tel: '(94)03988-1444' },
  { id: '5', nome: 'Brenda', tel: '(19)58781-7861' },
  { id: '6', nome: 'Lucas', tel: '(36)17483-2843' },
  { id: '7', nome: 'Mariana', tel: '(09)99345-1982' },
  { id: '8', nome: 'Diego', tel: '(78)12345-1234' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Contatos</Text>

      <Contatos nome="Nicolas" tel="(13)12345-6789" />

      <View style={styles.lista}>
        <FlatList
          data={listaContatos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Contatos nome={item.nome} tel={item.tel} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  lista: {  
    height: 500,
    width: '90%',
    marginLeft: '5%'
  },
  cartao: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    marginVertical: 4,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
