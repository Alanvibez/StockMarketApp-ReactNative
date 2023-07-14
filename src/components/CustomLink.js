import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CustomLink({ item, onPress }) {
  const { title, icon } = item;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.link}>
        <AntDesign name={icon} size={24} color='#06716A' />
      </View>
      <Text style={styles.linkText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  link: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#6AAAA680',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 10,
  },
});
