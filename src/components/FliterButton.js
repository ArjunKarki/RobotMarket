import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../utility';

const FilterButton = ({onSelect, isSelected, label}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.btn}>
      <Text style={[styles.label(isSelected)]}>{label}</Text>
      <View style={styles.dot(isSelected)} />
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  btn: {
    marginRight: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: isSelected => {
    return {
      color: isSelected ? Colors.primary : Colors.mediumGray,
      fontWeight: 'bold',
    };
  },
  dot: isSelected => {
    return {
      width: 5,
      height: 5,
      backgroundColor: isSelected ? Colors.primary : 'white',
      borderRadius: 5,
      marginTop: 5,
    };
  },
});
