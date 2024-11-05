import React, { useState } from 'react';
import * as Components from './Components';

const LoginSignup = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={isSignIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={isSignIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={isSignIn}>
        <Components.Overlay signinIn={isSignIn}>
          <Components.LeftOverlayPanel signinIn={isSignIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To stay connected, please login with your personal info.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => setIsSignIn(true)}>Sign In</Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={isSignIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your details to start your journey with us.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => setIsSignIn(false)}>Sign Up</Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default LoginSignup;
