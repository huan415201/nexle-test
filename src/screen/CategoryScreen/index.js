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
import { api } from '../../network';
import color from '../../util/color';
import { CAT_DUMMY } from './dummy';
import getStyles from './styles';

const CategoryScreen = () => {
  const styles = getStyles();
  const [data, setData] = useState(null);
  const [chosenCats, setChosenCats] = useState([]);
  const token = useSelector(state => state.user.token);

  const toggleItem = item => {
    const index = chosenCats.findIndex(i => i.id === item.id);
    if (index > -1) {
      setChosenCats(prev => {
        const temp = [...prev];
        temp.splice(index, 1);
        return temp;
      });
    } else {
      setChosenCats(prev => [...prev, item]);
    }
  };

  const renderItem = ({ item, index }) => {
    const haveMarginRight = (index + 1) % 3 !== 0;
    const isChosen = chosenCats.findIndex(i => i.id === item.id) > -1;
    return (
      <TouchableOpacity onPress={() => toggleItem(item)}>
        <LinearGradient
          angle={45}
          colors={
            isChosen
              ? [color.purple2, color.purple1]
              : ['transparent', 'transparent']
          }
          style={[styles.item, haveMarginRight && styles.itemMRight]}>
          <Text style={styles.itemText}>{item.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const keyExtractor = item => item?.id;

  const getData = async () => {
    const res = await api.get(
      '/categories',
      {},
      { headers: { Authorization: token } },
    );
    if (res?.data) setData(res.data);
  };

  useEffect(() => {
    if (!data && !!token) {
      getData();
    }
  }, [token, data]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={categoryBg} resizeMode="cover" style={styles.bg} />

      <LinearGradient
        colors={[color.black1, color.black0]}
        locations={[0.13, 0.35]}
        style={styles.gradientFilter}>
        <View style={styles.topWrapper}>
          <TouchableOpacity style={styles.backBtn}>
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
          data={data ? data : CAT_DUMMY}
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
