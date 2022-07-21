import React from "react";
import {View } from "react-native";
import Button from '../../components/Button/CustomButton'
import Layout from "../../layout/Layout";
import Input from "../../components/Inputs/Input";
import Header from "../../components/Header/Header";
import { styles } from "../LoginScreen/styles";
import *as Yup from 'yup';
import { useFormik } from "formik";

const SignInScreen =({navigation}) =>{
    const [status, setStatus] = useState(false);

    const formik= useFormik({
        initialValues:initialValues(),
        validationSchema : Yup.object(validationSchema()),
        validateOnChange : false,
        onSubmit: formValue => {
            
        }
        

    })



    return (
    <Layout>
        <View style={styles.container}>
            <View style={styles.header}>
            <Header navigation={navigation}/>
            </View>
            <View style={styles.body}>
                <Input type="name" title="Full name"
                err={formik.errors.fullname}
                value={formik.values.fullname}
                onChangeText={text => formik.setFieldValue('fullname', text)}
                />

                <Input type="email" title="Email"
                    err={formik.errors.email}
                    value={formik.errors.email}
                    onChangeText={text=> formik.setFieldValue('email', text )}
                />
                <Input type="password" title="Password" state={true}
                    err={formik.errors.password}
                    value={formik.errors.password}
                    onChangeText={text=>formik.setFieldValue('password', text)}    
                />
                
                <Input type="password" title="Password" state={true}
                    err={formik.errors.password}
                    values={formik.errors.password}
                    onChangeText={text => formik.setFieldValue('password',text)}
                />

            </View>
            <View style={styles.buttonContainer}>
                <Button title={'Sign In'} onPress={formik.handleSubmit}/>
            </View>

        </View>
    </Layout>
)
}
function initialValues(){
    return{
        fullname:' ',
        email: ' ',
        password:' ',
    }
}

function validationSchema(){
    return{
        fullname: Yup.string().required('Full name is required'),
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('The password is required'),
    }
}


export default SignInScreen