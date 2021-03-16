import React, {useContext} from 'react';
import { View, Text ,StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen =({navigation, route})=>{
    const {state} = useContext(Context);
    const id= route.params.id;
    const blogPost = state.find((blogPost) => blogPost.id === id);
    return(
        <>

        <TouchableOpacity onPress = {()=> navigation.navigate('Edit' , {id:id})} >
        <EvilIcons name="pencil" size={30} color="black" />
        </TouchableOpacity>

            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;