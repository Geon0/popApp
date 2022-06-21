import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ItemList() {
  const data = [
    {
      title: '삼계옥',
      price: 35,
      upanddown: 2,
      percentage: 10,
    },
    {
      title: '푸팟퐁커리',
      price: 10,
      upanddown: 10,
      percentage: 30,
    },
    {
      title: '마라샹궈',
      price: 56,
      upanddown: 20,
      percentage: 40,
    },
  ]; //길이가 긴 Array 라고 가정
  return (
    <FlatList
      data={data}
      renderItem={({item, i}) => (
        <View style={styles.container} key={i}>
          <View>
            <Text style={styles.itemNameText}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.itemPriceText}>{item.price}</Text>
            <Text style={styles.itemPercentText}>
              {item.upanddown} ({item.percentage})
            </Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    height: 86,
    shadowColor: '#f1f2f3',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 18.95,
    elevation: 1,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: '#F2F3F4',
    borderWidth: 1,
  },
  itemNameText: {
    fontSize: 20,
  },
  itemPriceText: {
    textAlign: 'right',
    fontSize: 28,
    fontWeight: '700',
  },
  itemPercentText: {
    paddingTop: 6,
    textAlign: 'right',
    fontSize: 15,
    color: '#2090F8',
    fontWeight: '500',
  },
});
