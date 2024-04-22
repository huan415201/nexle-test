import { useIsFocused } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { arrowLeft, categoryBg } from '../../asset/image';
import { setSelectedCategories } from '../../features/reduck/category/categorySlice';
import { api } from '../../network';
import color from '../../util/color';
import CategoryItem from './components/CategoryItem';
import { CAT_DUMMY } from './dummy';
import getStyles from './styles';

const CategoryScreen = ({ navigation }) => {
  const styles = getStyles();
  const isFocused = useIsFocused();
  const [data, setData] = useState(null);
  const token = useSelector(state => state.user.token);

  const keyExtractor = item => item?.id;

  const getData = async () => {
    const res = await api.get(
      '/categories',
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (res?.data) setData(res.data);
  };

  const renderItem = ({ item, index }) => (
    <CategoryItem item={item} index={index} />
  );

  useEffect(() => {
    if (isFocused && !!token) {
      getData();
    }
  }, [isFocused, token]);

  useEffect(() => {
    return () => {
      setSelectedCategories([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={categoryBg} resizeMode="cover" style={styles.bg} />

      <LinearGradient
        colors={[color.black1, color.black0]}
        locations={[0.13, 0.35]}
        style={styles.gradientFilter}>
        <View style={styles.topWrapper}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}>
            <Image source={arrowLeft} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomWrapper}>
          <Text style={styles.title}>Welcome to Nexle Entrance Test</Text>
          <Text style={styles.des}>
            Please select categories what you would like to see on your feed.
            You can set this later on Filter.
          </Text>
        </View>
        <FlatList
          data={data?.length > 0 ? data : CAT_DUMMY}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </LinearGradient>
    </View>
  );
};

export default CategoryScreen;
