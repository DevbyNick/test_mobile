import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Container, Content, Card, CardItem, Button} from 'native-base';
import {Actions} from 'react-native-router-flux'; // New code
import Axios from 'axios';

export default function Home() {
  const [dataUser, setdataUser] = useState('dataUser');

  // fetch('https://127.0.0.1/ci_backend/index.php/user').then(response);
  // .then(json => {
  //   return data.names;
  // // })
  // .catch(error => {
  //   console.error(error);
  // });

  return (
    <Container>
      <Content style={{marginHorizontal: 10}}>
        <Button
          block
          success
          onPress={() => Actions.Formulir()}
          style={{alignSelf: 'flex-end', paddingHorizontal: 10}}>
          <Text style={{color: '#ffffff'}}>Isi Formulir</Text>
        </Button>
        <Card style={{marginTop: 10}}>
          <CardItem style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: -5,
              }}>
              Name
            </Text>
            <Text style={{alignSelf: 'flex-start', fontSize: 14}}>25 YO</Text>
            <Text
              style={{alignSelf: 'flex-start', marginTop: 5, marginBottom: -5}}>
              Sidoarjo, East Java
            </Text>
          </CardItem>
        </Card>
        <Card style={{marginTop: 10}}>
          <CardItem style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: -5,
              }}>
              Name
            </Text>
            <Text style={{alignSelf: 'flex-start', fontSize: 14}}>25 YO</Text>
            <Text
              style={{alignSelf: 'flex-start', marginTop: 5, marginBottom: -5}}>
              Sidoarjo, East Java
            </Text>
          </CardItem>
        </Card>
        <Card style={{marginTop: 10}}>
          <CardItem style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: -5,
              }}>
              Name
            </Text>
            <Text style={{alignSelf: 'flex-start', fontSize: 14}}>25 YO</Text>
            <Text
              style={{alignSelf: 'flex-start', marginTop: 5, marginBottom: -5}}>
              Sidoarjo, East Java
            </Text>
          </CardItem>
        </Card>
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
