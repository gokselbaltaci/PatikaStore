import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './Container.style';
import Header from '../shared_component/Header/Header';
import SearchBox from '../shared_component/SearchBox/SearchBox';
import Card from '../shared_component/Card/Card';
import products from '../../esset/product.json';

export default function Container() {
  const renderProduct = ({item}) => <Card product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBox />
      <FlatList data={products} renderItem={renderProduct} numColumns={2} />
    </SafeAreaView>
  );
}
