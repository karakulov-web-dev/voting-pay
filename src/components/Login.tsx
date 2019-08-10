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
  restorePassword: ActionCreator<void>;
  restorePasswordVerification: ActionCreator<void>;
  pathname: string;
  [key: string]: any;
  errorMessageLogin: string;
  errorMessageRegistration: string;
  errorMessageRestorePass: string;
  authStatus: boolean | undefined;
  restorePasswordSessionId?: string;
  restorePasswordVerificationCode?: string;
}

interface StateLogin {
  verificationCode: string;
  email: string;
  password: string;
  repeatPassword: string;
  errorMessageLogin: string;
  errorMessageRegistration: string;
  errorMessageRestorePass: string;
}

export class Login extends React.Component<LoginProps, StateLogin> {
  constructor(props: LoginProps) {
    super(props);
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
        {this.redirects()}
        {this.style()}
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {this.header()}
            {this.form()}
            <Switch>
              <Route path="/registration" component={MessageRegistration} />
              <Route path="/login" component={MessageLogin} />
            </Switch>

            <Switch>
              <Route path="/registration" component={MessageLoginRestorePass} />
              <Route path="/login" component={MessageLoginRestorePass} />
            </Switch>

            <Switch>
              <Route
                path="/restore-password-session"
                render={() => {
                  return (
                    <div
                      onClick={() => {
                        this.props.dispatch({
                          type: "SET_RESTORE_PASSWORD_SESSION_ID",
                          payload: {
                            restorePasswordSessionId: "",
                            errorStatus: false,
                            errorText: ""
                          }
                        });
                      }}
                    >
                      <MessageRestorePassSessionBack />
                    </div>
                  );
                }}
              />
            </Switch>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  private redirects() {
    if (this.props.authStatus) {
      return <Redirect to={{ pathname: "/panel" }} />;
    }
    if (
      this.props.restorePasswordSessionId &&
      this.props.restorePasswordVerificationCode &&
      this.props.pathname !== "/restore-password-allowed"
    ) {
      return <Redirect to={{ pathname: "/restore-password-allowed" }} />;
    }
    if (
      this.props.pathname === "/restore-password-allowed" &&
      (!this.props.restorePasswordSessionId ||
        !this.props.restorePasswordVerificationCode)
    ) {
      return <Redirect to={{ pathname: "/restore-password" }} />;
    }
    if (
      this.props.restorePasswordSessionId &&
      this.props.pathname === "/restore-password"
    ) {
      return <Redirect to={{ pathname: "/restore-password-session" }} />;
    }
    if (
      this.props.pathname === "/restore-password-session" &&
      !this.props.restorePasswordSessionId
    ) {
      return <Redirect to={{ pathname: "/restore-password" }} />;
    }
  }
  private style() {
    return (
      <style>
        {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
      </style>
    );
  }

  private header() {
    return (
      <Switch>
        <Route
          path={["/restore-password", "/restore-password-session"]}
          component={HeaderRestorePassword}
        />
        <Route
          path="/restore-password-allowed"
          component={HeaderChangePassword}
        />
        <Route path="/registration" component={HeaderRegistration} />
        <Route path="/login" component={HeaderLogin} />
      </Switch>
    );
  }

  private form() {
    return (
      <Form
        size="large"
        onSubmit={() => {
          this.formSubmit();
        }}
      >
        <Segment stacked>
          <Switch>
            <Route
              path={["/login", "/registration", "/restore-password"]}
              render={() => {
                return (
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
                );
              }}
            />
          </Switch>

          <Switch>
            <Route
              path="/restore-password-session"
              render={() => {
                const message =
                  "На ваш email отправленно письмо с кодом подтверждения";
                return <p style={{ color: "#86181d" }}>{message}</p>;
              }}
            />
          </Switch>

          <Switch>
            <Route
              path="/restore-password-session"
              render={() => {
                return (
                  <Form.Input
                    fluid
                    icon="shield alternate"
                    iconPosition="left"
                    placeholder="Введите код подтверждения"
                    onChange={event => {
                      let value = event.target.value;
                      this.setState((state: StateLogin) => {
                        return {
                          ...state,
                          verificationCode: value
                        };
                      });
                    }}
                  />
                );
              }}
            />
          </Switch>

          <Switch>
            <Route
              path={["/login", "/registration", "/restore-password-allowed"]}
              render={() => {
                return (
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
                );
              }}
            />
          </Switch>

          <Switch>
            <Route
              path={["/registration", "/restore-password-allowed"]}
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
                let { errorMessageRegistration } = this.state as StateLogin;
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
              path="/login"
              render={() => {
                let { errorMessageLogin } = this.state as StateLogin;
                if (!errorMessageLogin) {
                  errorMessageLogin = this.props.errorMessageLogin;
                }
                if (errorMessageLogin) {
                  return (
                    <p style={{ color: "#86181d" }}>{errorMessageLogin}</p>
                  );
                }
              }}
            />

            <Route
              path={[
                "/restore-password",
                "/restore-password-session",
                "/restore-password-allowed"
              ]}
              render={() => {
                let { errorMessageRestorePass } = this.state as StateLogin;
                if (!errorMessageRestorePass) {
                  errorMessageRestorePass = this.props.errorMessageRestorePass;
                }
                if (errorMessageRestorePass) {
                  return (
                    <p style={{ color: "#86181d" }}>
                      {errorMessageRestorePass}
                    </p>
                  );
                }
              }}
            />
          </Switch>

          <Switch>
            <Route
              path={["/restore-password", "/restore-password-session"]}
              component={ButtonSubmitRestorePassword}
            />
            <Route
              path="/restore-password-allowed"
              component={ButtonSubmitChangePassword}
            />
            <Route path="/registration" component={ButtonSubmitRegistration} />
            <Route path="/login" component={ButtonSubmitLogin} />
          </Switch>
        </Segment>
      </Form>
    );
  }

  private formSubmit() {
    this.setState((state: StateLogin) => {
      return {
        ...state,
        errorMessageLogin: "",
        errorMessageRegistration: "",
        errorMessageRestorePass: ""
      };
    });
    if (this.props.pathname === "/registration") {
      if (this.registrationFormValidate()) {
        let { email, password } = this.state;
        this.props.registrationSubmitForm(email, password);
      }
    } else if (this.props.pathname === "/restore-password") {
      if (this.restorePassFormValidate()) {
        let { email } = this.state;
        this.props.restorePassword(email);
      }
    } else if (this.props.pathname === "/restore-password-session") {
      if (this.restorePassSessionFormValidate()) {
        this.props.restorePasswordVerification(
          this.state.verificationCode,
          this.props.restorePasswordSessionId
        );
      }
    } else if (this.props.pathname === "/restore-password-allowed") {
      if (this.changePasswordFormValidate()) {
        this.props.restorePasswordVerification(
          this.props.restorePasswordVerificationCode,
          this.props.restorePasswordSessionId,
          this.state.password
        );
      }
    } else {
      if (this.loginFormValidate()) {
        let { email, password } = this.state;
        this.props.loginSubmitForm(email, password);
      }
    }
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
  private restorePassFormValidate(): boolean {
    let status = true;
    let { email } = this.state as StateLogin;
    if (!email) {
      this.setState(state => {
        return {
          ...state,
          errorMessageRestorePass: "Введите корректные данные"
        };
      });
      return (status = false);
    }
    return status;
  }
  private restorePassSessionFormValidate(): boolean {
    let status = true;
    let { verificationCode } = this.state as StateLogin;
    if (!verificationCode) {
      this.setState(state => {
        return {
          ...state,
          errorMessageRestorePass: "Введите корректные данные"
        };
      });
      return (status = false);
    }
    return status;
  }
  private changePasswordFormValidate(): boolean {
    let status = true;
    let { password, repeatPassword } = this.state as StateLogin;
    if (!(password && repeatPassword)) {
      this.setState(state => {
        return {
          ...state,
          errorMessageRestorePass: "Введите корректные данные"
        };
      });
      return (status = false);
    }
    if (password !== repeatPassword) {
      this.setState(state => {
        return {
          ...state,
          errorMessageRestorePass: "Пароли не совпадают"
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
const ButtonSubmitRestorePassword = ButtonSubmit.bind(null, "Восстановить");
const ButtonSubmitChangePassword = ButtonSubmit.bind(null, "Сменить пароль");

const HeaderRegistration = HeaderSection.bind(null, "Зарегистрируйтесь");
const HeaderLogin = HeaderSection.bind(null, "Войдите в аккаунт");
const HeaderRestorePassword = HeaderSection.bind(null, "Восстановление пароля");
const HeaderChangePassword = HeaderSection.bind(null, "Сменить пароль");

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
const MessageLoginRestorePass = MessageBox.bind(
  null,
  "Забыли пароль?",
  "/restore-password",
  "Восстановить"
);

const MessageRestorePassSessionBack = MessageBox.bind(
  null,
  "Письмо не пришло?",
  "/restore-password",
  "Попробуйте еще раз"
);
