import React, { Component } from 'react';
import { Container, Header, Body, Button, Icon, Left, Right, Tabs, Tab, Title } from 'native-base';
import PercentagesGrid from './app/percentagesGrid';
import RoundUpGrid from './app/roundUpGrid';
import { Alert } from 'react-native';

export default class Main extends Component {
  
  constructor() {
    super();
    this.state = {
      amount: ""
    }
  }

  _showAlert = () => {
    Alert.alert(
      'About me',
      '@GuillaumeHaben',
      [
        {text: 'OK'},
      ],
      { cancelable: false }
    )
  }

  handleChangeAmount = (amount) => {
    this.setState({amount});
  }

  render() {

    return (
      <Container style={{backgroundColor: "#fff"}}>
        <Header hasTabs>
        <Left></Left>
          <Body>
            <Title>SmarTip</Title>
          </Body>
          <Right>
            <Button transparent onPress={this._showAlert}>
                <Icon active type="MaterialIcons" name="info-outline"/>
            </Button>
          </Right>
        </Header>
        <Tabs initialPage={0}>
          <Tab heading="Basic">
            <PercentagesGrid amount={this.state.amount} onChange={this.handleChangeAmount.bind(this)}/>
          </Tab>
          <Tab heading="Rounded up">
            <RoundUpGrid  amount={this.state.amount} onChange={this.handleChangeAmount.bind(this)}/>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}
