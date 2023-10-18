import React, { useState } from 'react';
import styled from 'styled-components';

const SignInContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
`;

const SignInHeading = styled.h2`
  font-size: 24px;
  text-align: center;
`;

const SubHeading = styled.p`
  font-size: 18px;
  text-align: center;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  label {
    font-size: 16px;
  }
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  input[type="email"],
  input[type="password"] {
    width: 80%;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
`;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Implement your sign-in logic here
    // You can send the email and password to your backend for authentication

    // Example: You can log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <SignInContainer>
      <SignInHeading>Sign In</SignInHeading>
      <SubHeading>Already have a profile? Sign in below:</SubHeading>
      <SignInForm onSubmit={handleSignIn}>
        <FormField>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email" // Unique ID for email input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password" // Unique ID for password input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormField>
        <SubmitButton type="submit">Sign In</SubmitButton>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;

