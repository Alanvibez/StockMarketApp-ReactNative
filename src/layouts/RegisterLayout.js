import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function RegisterLayout({ title, subTitle, children }) {
  return (
    <View className='flex-1 justify-center items-center'>
      <StatusBar barStyle={'dark-content'}></StatusBar>
      <View className='max-w-[300px] w-full'>
        <Text style={[styles.title, subTitle && { marginBottom: 13 }]}>
          {title}
        </Text>
        {subTitle && (
          <Text style={[styles.subtitle, subTitle && { marginBottom: 19 }]}>
            {subTitle}
          </Text>
        )}
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#055A55',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#055A55',
    fontSize: 20,
    fontWeight: 'light',
  },
});
