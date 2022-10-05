import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContentContainer from "../containers/ContentContainer";
import TabContainer from "../containers/TabContainer";
import IndexScreen from "../screens/IndexScreen";


const Stack = createNativeStackNavigator();
const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Movies App' component={TabContainer} />

            <Stack.Screen name='Index' component={IndexScreen}
                options={{
                    title: 'Movies App'
                    , headerStyle: {
                        backgroundColor: '#2c3e50'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }}
            />
            <Stack.Screen name='Content' component={ContentContainer} />
        </Stack.Navigator>

    </NavigationContainer>
)
export default AppStack
