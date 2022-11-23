import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Inicio  from '../pages/Inicio';
import ToDo from '../pages/ToDo';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
      <Stack.Screen name="ToDo" component={ToDo} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
