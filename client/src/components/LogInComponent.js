import React, { Component } from "react";
import styled from "styled-components";
import { Form, Button, Icon, Card } from "semantic-ui-react";

const OverWrap = styled.div`
  background-image: url("https://media.bizj.us/view/img/3972271/skyline-of-atlanta*1024xx1600-900-0-1384.jpg");
  background-size: cover;
  z-index: -9;
  position: fixed;
  height: 100vh;
  width: 100vw;
  #modal .menu-overlay {
    position: fixed;
    background: rgb(14, 37, 110);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const FormWrap = styled.div`
  max-width: 40vw;
  height: auto;
  min-height: 530px;
  min-width: 300px;
  margin: 10px auto;
  align-content: center;
  h1 { 
      color: white;
  }
  div.card {
    min-height: 540px;
    max-height: 540px;
    background-color: lightgray;
    div.pad {
      margin: 50px 2px;
      input {
        margin: 10px auto;
        height: 50px;
      }
    }
  }
`;
const ButtonWrap = styled.div`
  text-align: center;
  margin: 28px auto;
`;

class LogInComponent extends Component {
  render() {
    return (
      <OverWrap id="modal" className="menu-overlay">
        <FormWrap>
          <h1>Sign Up</h1>
          <Card centered raised>
            <div className="pad">
              <Form onSubmit={this.createNewPost}>
                <Form.Input
                  className="inputs"
                  name="first_name"
                  onChange=""
                  type="text"
                  placeholder="first name"
                  value=""
                  required
                />
                <Form.Input
                  className="inputs"
                  name="last_name"
                  onChange=""
                  type="text"
                  placeholder="last name"
                  value=""
                  required
                />
                <Form.Input
                  className="inputs"
                  placeholder="Photo Url"
                  name="img"
                  onChange=""
                  value=""
                />

                <Form.Input
                  large
                  className="inputs"
                  name="email"
                  onChange=""
                  placeholder="EMAIL"
                  type="text"
                  value=""
                  required
                />

                <ButtonWrap>
                  <Button
                    animated
                    color="green"
                    type="submit"
                    onClick={this.props.toggleShowLogin}
                  >
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                      <Icon name="login" />
                    </Button.Content>
                  </Button>
                </ButtonWrap>
              </Form>
            </div>
          </Card>
        </FormWrap>
      </OverWrap>
    );
  }
}

export default LogInComponent;
