import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { ActionCreator } from "redux";
import { accessTokenChecker } from "../actions/Auth";

interface LoginProps {
  loginSubmitForm: ActionCreator<void>;
  registrationSubmitForm: ActionCreator<void>;
  checkAccessToken: ActionCreator<void>;
  pathname: string;
  [key: string]: any;
  errorMessageLogin: string;
  errorMessageRegistration: string;
  authStatus: boolean;
}

interface StateLogin {
  email: string;
  password: string;
  repeatPassword: string;
  errorMessageLogin: string;
  errorMessageRegistration: string;
}

export class Login extends React.Component<LoginProps, StateLogin> {
  constructor(props: LoginProps) {
    super(props);
    console.log(this.props);
    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
      errorMessageLogin: "",
      errorMessageRegistration: ""
    } as StateLogin;
  }
  componentDidMount() {
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return false;
    }
    if (this.props.authStatus) {
      return true;
    }
    setTimeout(() => {
      this.props.checkAccessToken(AccessToken, accessTokenChecker);
    });
  }
  render() {
    return (
      <div className="login-form">
        {(() => {
          if (this.props.authStatus) {
            return <Redirect to={{ pathname: "/panel" }} />;
          }
        })()}
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Switch>
              <Route path="/registration" component={HeaderRegistration} />
              <Route path="/" component={HeaderLogin} />
            </Switch>
            <Form
              size="large"
              onSubmit={() => {
                this.setState((state: StateLogin) => {
                  return {
                    ...state,
                    errorMessageLogin: "",
                    errorMessageRegistration: ""
                  };
                });
                if (this.props.pathname === "/registration") {
                  if (this.registrationFormValidate()) {
                    let { email, password } = this.state;
                    this.props.registrationSubmitForm(email, password);
                  }
                } else {
                  if (this.loginFormValidate()) {
                    let { email, password } = this.state;
                    this.props.loginSubmitForm(email, password);
                  }
                }
              }}
            >
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Введите E-mail"
                  onChange={event => {
                    let value = event.target.value;
                    this.setState((state: StateLogin) => {
                      return {
                        ...state,
                        email: value
                      };
                    });
                  }}
                />

                <FormInputEnterPassword
                  onChange={(event: any) => {
                    let value = event.target.value;
                    this.setState((state: StateLogin) => {
                      return {
                        ...state,
                        password: value
                      };
                    });
                  }}
                />
                <Switch>
                  <Route
                    path="/registration"
                    render={() => (
                      <FormInputRepeatPassword
                        onChange={(event: any) => {
                          let value = event.target.value;
                          this.setState((state: StateLogin) => {
                            return {
                              ...state,
                              repeatPassword: value
                            };
                          });
                        }}
                      />
                    )}
                  />
                </Switch>

                <Switch>
                  <Route
                    path="/registration"
                    render={() => {
                      let { errorMessageRegistration } = this
                        .state as StateLogin;
                      if (!errorMessageRegistration) {
                        errorMessageRegistration = this.props
                          .errorMessageRegistration;
                      }
                      if (errorMessageRegistration) {
                        return (
                          <p style={{ color: "#86181d" }}>
                            {errorMessageRegistration}
                          </p>
                        );
                      }
                    }}
                  />

                  <Route
                    path="/"
                    render={() => {
                      let { errorMessageLogin } = this.state as StateLogin;
                      if (!errorMessageLogin) {
                        errorMessageLogin = this.props.errorMessageLogin;
                      }
                      if (errorMessageLogin) {
                        return (
                          <p style={{ color: "#86181d" }}>
                            {errorMessageLogin}
                          </p>
                        );
                      }
                    }}
                  />
                </Switch>

                <Switch>
                  <Route
                    path="/registration"
                    component={ButtonSubmitRegistration}
                  />
                  <Route path="/" component={ButtonSubmitLogin} />
                </Switch>
              </Segment>
            </Form>
            <Switch>
              <Route path="/registration" component={MessageRegistration} />
              <Route path="/" component={MessageLogin} />
            </Switch>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  private registrationFormValidate(): boolean {
    let status = true;
    let { email, password, repeatPassword } = this.state as StateLogin;
    if (!(email && password && repeatPassword)) {
      this.setState(state => {
        return {
          ...state,
          errorMessageRegistration: "Введите корректные данные"
        };
      });
      return (status = false);
    }
    if (password !== repeatPassword) {
      this.setState(state => {
        return {
          ...state,
          errorMessageRegistration: "Пароли не совпадают"
        };
      });
      return (status = false);
    }
    return status;
  }
  private loginFormValidate(): boolean {
    let status = true;
    let { email, password } = this.state as StateLogin;
    if (!(email && password)) {
      this.setState(state => {
        return {
          ...state,
          errorMessageLogin: "Введите корректные данные"
        };
      });
      return (status = false);
    }
    return status;
  }
}
interface StateLogin {
  email: string;
  password: string;
  repeatPassword: string;
}

const HeaderSection = (text: string) => {
  return (
    <Header
      as="h2"
      color="teal"
      textAlign="center"
      style={{
        margin: "0 0",
        borderRadius: "2px",
        backgroundColor: "#44433e",
        paddingRight: "20px"
      }}
    >
      <Image src="/img/logo.png" /> {text}
    </Header>
  );
};

const FormInputPassword = (placeholder: string, props: any) => {
  return (
    <Form.Input
      fluid
      icon="lock"
      iconPosition="left"
      placeholder={placeholder}
      type="password"
      onChange={props.onChange}
    />
  );
};

const ButtonSubmit = (text: string) => {
  return (
    <Button color="teal" fluid size="large">
      {text}
    </Button>
  );
};

const MessageBox = (text: string, linkTo: string, linkText: string) => {
  return (
    <Message>
      {text}
      <Link to={linkTo}> {linkText}</Link>
    </Message>
  );
};

const FormInputEnterPassword = FormInputPassword.bind(null, "Введите пароль");
const FormInputRepeatPassword = FormInputPassword.bind(
  null,
  "Повторите пароль"
);

const ButtonSubmitRegistration = ButtonSubmit.bind(null, "Регистрация");
const ButtonSubmitLogin = ButtonSubmit.bind(null, "Войти");

const HeaderRegistration = HeaderSection.bind(null, "Зарегистрируйтесь");
const HeaderLogin = HeaderSection.bind(null, "Войдите в аккаунт");

const MessageRegistration = MessageBox.bind(
  null,
  "Уже зарегистрированы?",
  "/login",
  "Войти"
);
const MessageLogin = MessageBox.bind(
  null,
  "Впервые на VotingPay?",
  "/registration",
  "Регистрация"
);
