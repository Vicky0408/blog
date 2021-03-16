import React, {useContext, useState} from 'react';
import { Button, Text ,StyleSheet,TextInput, TouchableOpacity } from 'react-native';


const BlogPostForm =({onSubmit, initialValues})=>{
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    
    return(
        <>
        <Text style={styles.level}> Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={styles.level}>Enter Content:</Text>
        <TextInput style={styles.input}  value={content} onChangeText={(text) => setContent(text)}/>
        <Button title="Save Blog Post"  
        onPress={() => onSubmit(title,content)}/>
        </>
    );
};
BlogPostForm.defaultProps ={
    initialValues:{
        title: '',
        content: ''
    }
};
const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5,
        marginBottom: 15,
        
    },
    level:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    }
});

export default BlogPostForm;