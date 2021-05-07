import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {Actions} from 'react-native-router-flux'; // New code

export default function Home() {
  return (
    <Container>
      <Content style={{marginHorizontal: 10}}>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Age</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>City</Label>
            <Input />
          </Item>
          <Button
            block
            onPress={() => Actions.Formulir()}
            style={{marginTop: 10}}>
            <Text style={{color: '#ffffff'}}>Simpan Data</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
