import styled from 'styled-components';

export const div = styled.div`
  padding-top: 95px;
  height: 100vh;
  margin-bottom: -200px;
`;

export const Container = styled.div`
  background-color: #ecf0f3;
  box-shadow: 12px 12px 16px 0 #b5bbc2, -8px -8px 12px 0 #f8fbff;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
  margin: auto;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: ${({ signinIn }) => (signinIn ? '0' : '1')};
  transform: ${({ signinIn }) => (signinIn ? 'none' : 'translateX(100%)')};
  z-index: ${({ signinIn }) => (signinIn ? '1' : '5')};
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  transform: ${({ signinIn }) => (signinIn ? 'none' : 'translateX(100%)')};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: #eee;
  box-shadow: 5px 5px 10px 0 #b5bbc2, -5px -5px 20px 0 #f8fbff;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 20px;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:hover {
    transform: scale(0.9);
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #fff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  transform: ${({ signinIn }) => (signinIn ? 'none' : 'translateX(-100%)')};
`;

export const Overlay = styled.div`
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-size: cover;
  color: #fff;
  position: relative;
  height: 100%;
  width: 200%;
  transform: ${({ signinIn }) => (signinIn ? 'translateX(0)' : 'translateX(50%)')};
  transition: transform 0.6s ease-in-out;
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  left: 0;
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  transform: translateX(20%);
  right: 0;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0;
`;
