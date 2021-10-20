import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Account,
    BlockList,
    ChangePassword,
    Communities,
    CommunitiesDetail,
    ForgotPassword,
    FriendRequestSent,
    Home,
    InvitaitionSenderProfile,
    Login,
    PersonalIntroduction,
    PersonalIntroduction2,
    Profile,
    PurchaseCoin,
    Register,
    ResetPassword,
    ResetPasswordSuccessfully,
    RuiTomoList,
    StrangerProfile,
    UpdateProfile,
    Verification,
    WaitingForApprovalScreen,
} from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '@components';
import { AccountTab, CommunitiesTab, HomeTab } from '@svg';
import { ReduxState } from '@interfaces';
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator();

function MyHome() {

    return (
        <Tab.Navigator initialRouteName={'Home'} tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,

            }} />

            <Tab.Screen name="Communities" component={Communities} options={{
                headerShown: false,
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                headerShown: false,
            }} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export function AppNavigation() {
    const TOKEN = useSelector((state: ReduxState) => state.user.token);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={`${TOKEN === '' ? 'Login' : 'MyHome'}`}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Verification"
                    component={Verification}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="ResetPasswordSuccessfully"
                    component={ResetPasswordSuccessfully}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="PersonalIntroduction"
                    component={PersonalIntroduction}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="PersonalIntroduction2"
                    component={PersonalIntroduction2}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="MyHome"
                    component={MyHome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Purchase"
                    component={PurchaseCoin}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CommunitiesDetail"
                    component={CommunitiesDetail}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="UpdateProfile"
                    component={UpdateProfile}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="WaitingForApproval"
                    component={WaitingForApprovalScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="FriendRequestSent"
                    component={FriendRequestSent}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="RuiTomoList"
                    component={RuiTomoList}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BlockList"
                    component={BlockList}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="StrangerProfile"
                    component={StrangerProfile}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="InvitaitionSenderProfile"
                    component={InvitaitionSenderProfile}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


