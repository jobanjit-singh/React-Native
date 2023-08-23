import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
    },
  });

  const onSubmit = data => console.warn(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 10,
        }}
        render={({field: {value, onBlur, onChange}}) => (
          <TextInput
            placeholder="Firstname"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={styles.input}
          />
        )}
        name="firstname"
      />
      {errors.firstname && (
        <Text>This is required and must be longer than 10</Text>
      )}

      <Button title="Click Here" onPress={handleSubmit(onSubmit)}></Button>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fe4e00',
    margin: 20,
    borderRadius: 10,
  },
});
