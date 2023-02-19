import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setAccessToken(token: string) {
  await AsyncStorage.setItem('access_token', token);
}

export async function getAccessToken() {
  const tokenAccess = await AsyncStorage.getItem('access_token');
  return tokenAccess;
}

export async function removeAcessToken() {
  await AsyncStorage.setItem('access_token', '');
}