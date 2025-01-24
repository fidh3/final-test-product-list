import React, { ReactElement } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({
  children,
  disabled,
  onPress,
  title,
}: {
  children: ReactElement;
  disabled?: boolean;
  onPress: () => void;
  title?: string;
}) => {
  return (
    <TouchableOpacity disabled={disabled} style={styles.button} onPress={onPress}>
      {title ? <Text style={styles.buttonText}>{title}</Text> : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#757471',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;