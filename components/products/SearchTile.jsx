import { Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './searchTile.style'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'


const SearchTile = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={ styles.container } onPress={() => navigation.navigate('ProductDetails',{item})}>
        <View style={ styles.image }>
          <Image source={ { uri: item.imageUrl } } style={ styles.productImg } />
        </View>
        <View style={ styles.textContainer }>
          <Text style={ styles.productTitle } > { item.title }</Text>
          <Text style={ styles.productSupplier }>{ item.supplier } </Text>
          <Text style={ styles.productSupplier }>{ item.price } </Text>

        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile

