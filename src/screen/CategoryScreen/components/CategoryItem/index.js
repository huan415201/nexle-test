import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategories } from '../../../../features/reduck/category/categorySlice';
import color from '../../../../util/color';
import getStyles from './styles';

const CategoryItem = ({ item, index }) => {
  const chosenCats = useSelector(state => state.category.selectedCategories);
  const isChosen = chosenCats?.findIndex(i => i.id === item.id) > -1;
  const haveMarginRight = (index + 1) % 3 !== 0;
  const dispatch = useDispatch();
  const styles = getStyles();

  const toggleItem = () => {
    const togglingIndex = chosenCats.findIndex(i => i.id === item.id);
    let temp = [...chosenCats];
    if (togglingIndex > -1) {
      temp.splice(togglingIndex, 1);
    } else {
      temp = [...temp, item];
    }
    dispatch(setSelectedCategories(temp));
  };

  return (
    <TouchableOpacity onPress={toggleItem}>
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

export default CategoryItem;
