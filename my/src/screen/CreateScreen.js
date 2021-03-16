import React, {useContext, useState} from 'react';
import { View, Text ,StyleSheet ,TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen =({navigation, route})=>{
    const {addBlogPost} = useContext(Context);

    return (
    <BlogPostForm onSubmit={(title,content) =>{
        addBlogPost(title,content, ()=> navigation.navigate('Home'));
    }}/>
    );
};

const styles = StyleSheet.create({
    
});

export default CreateScreen;