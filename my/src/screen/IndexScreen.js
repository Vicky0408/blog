import React, {useContext} from 'react'
import {View ,Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import {Context} from '../context/BlogContext';
import { color } from 'react-native-reanimated';

const IndexScreen = ({navigation}) =>{
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    return(
        <>
        <TouchableOpacity onPress = {()=> navigation.navigate('Screen')} >
        <Feather name='plus' size={24} color="black" />
        </TouchableOpacity>
        
        <FlatList
        data= {state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
            return(
                <TouchableOpacity  onPress={() => navigation.navigate('Show', {id: item.id})}>
                    <View style ={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather style={styles.icon} name="trash" />
                    </TouchableOpacity>
                </View>
                
                </TouchableOpacity>
                
                
            );  
        }}
        />

        </>
    )
};
/*IndexScreen.navigationOptions = () => {
    return{
        headerRight: <Feather name='plus' size={24} color="black" />
    };
}; */
const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal:10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title:{
        fontSize:18,
    },
    icon: {
        fontSize:24,
    }
});

export default IndexScreen;