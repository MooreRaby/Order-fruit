import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./login.style";
import { ScrollView } from "react-native";
import BlackBtn from "../components/BlackBtn";
import Button from "../components/Button";
import { Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../contants";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import axios from "axios";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Required"),
  location: Yup.string()
    .min(3, "Privide a valid location address")
    .required("Required"),
  username: Yup.string()
    .min(3, "Provide a valid username")
    .required("Required"),
});

const Signup = ({ navigation }) => {
  const [ loader, setLoader ] = useState(false);
  const [ responseData, setResponseData ] = useState(null);
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

  const registerUser = async (values) => {
    setLoader(true);

    try {
      const endpoint = "http://rest-api.phuquy.info.vn/api/register";
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 201) {
        navigation.replace('Login')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView>
      <View>
        <View>
          <View style={ styles.upperRow }>
            <BlackBtn onPress={ () => navigation.goBack() } />
          </View>
          <Image
            source={ require("../assets/images/fruit_bg.jpg") }
            style={ styles.image }
          />
          <View style={ styles.form }>
            <Text style={ styles.title }>SIGNUP AN ACCOUNT</Text>
            <Formik
              initialValues={ { email: "", password: "", location: "", username: "" } }
              validationSchema={ validationSchema }
              onSubmit={ (values) => registerUser(values) }
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
              }) => (
                <View>
                  <View style={ styles.wrapper }>
                    <Text style={ styles.label }>Username</Text>

                    <View
                      style={ styles.inputWrapper(
                        touched.username ? COLORS.green : COLORS.offwhite
                      ) }
                    >
                      <MaterialCommunityIcons
                        name="face-man-profile"
                        size={ 20 }
                        color={ COLORS.gray }
                        style={ styles.iconStyle }
                      />

                      <TextInput
                        placeholder="Enter Username"
                        onFocus={ () => {
                          setFieldTouched("username");
                        } }
                        onBlur={ () => {
                          setFieldTouched("username", "");
                        } }
                        value={ values.username }
                        onChangeText={ handleChange("username") }
                        autoCapitalize="none"
                        autoCorrect={ false }
                        style={ { flex: 1 } }
                      />
                    </View>
                    { touched.username && errors.username && (
                      <Text style={ styles.errorMessage }>{ errors.username }</Text>
                    ) }
                  </View>

                  {/* -----------------email-------------*/ }
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
                        } }
                        value={ values.email }
                        onChangeText={ handleChange("email") }
                        autoCapitalize="none"
                        autoCorrect={ false }
                        style={ { flex: 1 } }
                      />
                    </View>
                    { touched.email && errors.email && (
                      <Text style={ styles.errorMessage }>{ errors.email }</Text>
                    ) }
                  </View>

                  {/* --------------location----------*/ }

                  <View style={ styles.wrapper }>
                    <Text style={ styles.label }>Location</Text>

                    <View
                      style={ styles.inputWrapper(
                        touched.location ? COLORS.green : COLORS.offwhite
                      ) }
                    >
                      <Ionicons
                        name="location-outline"
                        size={ 20 }
                        color={ COLORS.gray }
                        style={ styles.iconStyle }
                      />

                      <TextInput
                        placeholder="Enter location"
                        onFocus={ () => {
                          setFieldTouched("location");
                        } }
                        onBlur={ () => {
                          setFieldTouched("location", "");
                        } }
                        value={ values.location }
                        onChangeText={ handleChange("location") }
                        autoCapitalize="none"
                        autoCorrect={ false }
                        style={ { flex: 1 } }
                      />
                    </View>
                    { touched.location && errors.location && (
                      <Text style={ styles.errorMessage }>{ errors.location }</Text>
                    ) }
                  </View>

                  {/*----------------  setpass--------------- */ }

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
                          name={
                            obsecureText ? "eye-outline" : "eye-off-outline"
                          }
                          size={ 20 }
                        />
                      </TouchableOpacity>
                    </View>
                    { touched.password && errors.password && (
                      <Text style={ styles.errorMessage }>{ errors.password }</Text>
                    ) }
                  </View>

                  <Button
                    loader={ loader }
                    title={ "S I G N U P" }
                    onPress={ isValid ? handleSubmit : () => inValidForm }
                    isValid={ isValid }
                  />

                </View>
              ) }
            </Formik>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
