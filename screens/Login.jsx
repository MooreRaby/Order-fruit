import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./login.style";
import { ScrollView } from "react-native";
import BlackBtn from "../components/BlackBtn";
import Button from "../components/Button";
import { Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../contants";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Required"),
});

const Login = ({ navigation }) => {
  const [ loader, setLoader ] = useState(false);
  let [ responseData, setResponseData ] = useState(null);
  const reference = useRef();
  reference.current = responseData;
  const [ obsecureText, setObsecureText ] = useState(false);

  const inValidForm = () => {
    Alert.alert("Invalid Form", "Please provide all valid fields", [
      {
        text: "Cancel",
        onPress: () => { },
      },
      {
        text: "Continue",
        onPress: () => { },
      },
    ]);
  };

  const login = async values => {
    setLoader(true);

    try {
      const endpoint = "http://rest-api.phuquy.info.vn/api/login/";
      const data = values;

      console.log(data);
      const response = await axios.post(endpoint, data);
      console.log(response.data, "aaa")


      if (response.status === 200) {
        setLoader(false);
        setResponseData(response.data);
        console.log(reference.current)

        await AsyncStorage.setItem(`user${reference.current._id}`, JSON.stringify(reference.current))
        await AsyncStorage.setItem('id', JSON.stringify(reference.current._id))
        navigation.replace("Bottom Navigation");

      } else {
        Alert.alert("Error logging in", "Please provide all valid credential",
          {
            text: "Cancel",
            onPress: () => { },
          },
        );
      }
    } catch (error) {
      console.log(error.message, "error logging");
      Alert.alert("Error", "Email or password isvalid", [
        {
          text: "Cancel",
          onPress: () => { },
        },
        {
          text: "Continue",
          onPress: () => { },
        },
      ]);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView>
      <View>
        <View style={ styles.upperRow }>
          <BlackBtn onPress={ () => navigation.goBack() } />
        </View>
        <Image
          source={ require("../assets/images/fruit_bg.jpg") }
          style={ styles.imageLogin }
        />
        <View style={ styles.form }>
          <Text style={ styles.title }>Login To Account</Text>
          <Formik
            initialValues={ { email: "", password: "" } }
            validationSchema={ validationSchema }
            onSubmit={ values => login(values) }
          >
            { ({
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
            }) =>
              <View>
                <View style={ styles.wrapper }>
                  <Text style={ styles.label }>Email</Text>

                  <View
                    style={ styles.inputWrapper(
                      touched.email ? COLORS.green : COLORS.offwhite
                    ) }
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={ 20 }
                      color={ COLORS.gray }
                      style={ styles.iconStyle }
                    />

                    <TextInput
                      placeholder="Enter email"
                      onFocus={ () => {
                        setFieldTouched("email");
                      } }
                      onBlur={ () => {
                        setFieldTouched("email", "");
                        handleBlur("email");
                      } }
                      value={ values.email }
                      onChangeText={ handleChange("email") }
                      autoCapitalize="none"
                      autoCorrect={ false }
                      style={ { flex: 1 } }
                    />
                  </View>
                  { touched.email &&
                    errors.email &&
                    <Text style={ styles.errorMessage }>
                      { errors.email }
                    </Text> }
                </View>

                {/*-----------------------------  pass----------------------------- */ }

                <View style={ styles.wrapper }>
                  <Text style={ styles.label }>Password</Text>

                  <View
                    style={ styles.inputWrapper(
                      touched.password ? COLORS.green : COLORS.offwhite
                    ) }
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={ 20 }
                      color={ COLORS.gray }
                      style={ styles.iconStyle }
                    />

                    <TextInput
                      secureTextEntry={ obsecureText }
                      placeholder="Enter password"
                      onFocus={ () => {
                        setFieldTouched("password");
                      } }
                      onBlur={ () => {
                        setFieldTouched("password", "");
                      } }
                      value={ values.password }
                      onChangeText={ handleChange("password") }
                      autoCapitalize="none"
                      autoCorrect={ false }
                      style={ { flex: 1 } }
                    />

                    <TouchableOpacity
                      onPress={ () => {
                        setObsecureText(!obsecureText);
                      } }
                    >
                      <MaterialCommunityIcons
                        name={ obsecureText ? "eye-outline" : "eye-off-outline" }
                        size={ 20 }
                      />
                    </TouchableOpacity>
                  </View>
                  { touched.password &&
                    errors.password &&
                    <Text style={ styles.errorMessage }>
                      { errors.password }
                    </Text> }
                </View>

                <Button
                  loader={ loader }
                  title={ "L O G I N" }
                  onPress={ isValid ? handleSubmit : inValidForm }
                  isValid={ isValid }
                />

                <Text
                  style={ styles.registration }
                  onPress={ () => navigation.navigate("Signup") }
                >
                  Register
                </Text>
              </View> }
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
