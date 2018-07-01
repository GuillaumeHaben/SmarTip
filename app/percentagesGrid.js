import React, { Component } from 'react';
import { Item, Form, Button, Label, Input, Icon, Text, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class percentagesGrid extends Component {

  constructor() {
    super();
    this.state = {
      buttonActivated: "middle",
      percentage: "17.00"
    }
  }

  render() {
  
    var tipsAmount = (this.state.percentage * this.props.amount.replace(",", ".") / 100).toFixed(2);
    var totalAmount = (parseFloat(tipsAmount) + parseFloat(this.props.amount)).toFixed(2);

    const { onChange } = this.props;

    return (
      <Grid>
        <View style={{flexDirection: "column", flex: 1, justifyContent: 'space-around', marginTop: 20, marginBottom: 70 }}>
          <Row style={{ height: 80 }}>
            <Col>
              <Form>
                <Item floatingLabel>
                  <Label>Amount</Label>
                  <Input 
                    keyboardType='numeric' returnKeyType='done'
                    value={this.props.amount} 
                    style={{textAlign: 'right'}}
                    onChangeText={(amount) => onChange(amount)}
                  />
                  <Icon active type="MaterialCommunityIcons" name="currency-usd" style={{color: '#555'}}/>
                </Item>
              </Form>
            </Col>
          </Row>
          <Row style={{ height: 80}}>
            <View style={{flexDirection: "row", flex: 1, justifyContent: 'space-around' }}>
              <Button 
                bordered={this.state.buttonActivated == "left" ? false : true}
                onPress={() => this.setState({buttonActivated: "left", percentage: "15"})}
              >
                <Text>15.00%</Text>
              </Button>
              <Button 
                bordered={this.state.buttonActivated == "middle" ? false : true}
                onPress={() => this.setState({buttonActivated: "middle", percentage: "17"})}
              >
                <Text>17.00%</Text>
              </Button>
              <Button 
                bordered={this.state.buttonActivated == "right" ? false : true}
                onPress={() => this.setState({buttonActivated: "right", percentage: "20"})}
              >
                <Text>20.00%</Text>
              </Button>
            </View>
          </Row>
          <Row style={{ height: 80 }}>
            <Col>
              <Form>
                <Item inlineLabel>
                  <Label>Tips</Label>
                  <Input 
                    keyboardType='numeric' 
                    style={{textAlign: 'right'}}
                    value={tipsAmount}
                    editable={false}
                  />
                  <Icon active type="MaterialCommunityIcons" name="currency-usd" style={{color: '#555'}}/>
                </Item>
              </Form>
            </Col>
          </Row>
          <Row style={{ height: 80 }}>
            <Col>
              <Form>
                <Item inlineLabel>
                  <Label>Total</Label>
                  <Input 
                    keyboardType='numeric' 
                    style={{textAlign: 'right'}}
                    value={isNaN(totalAmount) ? "0.00" : totalAmount.toString()}
                    editable={false}
                  />
                  <Icon active type="MaterialCommunityIcons" name="currency-usd" style={{color: '#555'}}/>
                </Item>
              </Form>
            </Col>
          </Row>
        </View>
      </Grid>
    )
  }
};