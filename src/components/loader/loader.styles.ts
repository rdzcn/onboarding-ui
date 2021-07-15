import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderIcon = styled.div`
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid transparent;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;

  &:before,
  &:after {
    content: "";
    border-radius: 50%;
    border: 2px solid transparent;
  }

  &:before {
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    border-top-color: ${({ theme }) => theme.colors.blue[70]};
    animation: ${spin} 3s linear infinite;
  }

  &:after {
    position: absolute;
    top: 6px;
    right: 6px;
    bottom: 6px;
    left: 6px;
    border-top-color: #06ad69;
    animation: ${spin} 1.5s linear infinite;
  }
`;

export const LoaderIconContainer = styled.div`
  z-index: 1;
  min-height: 200px;
`;
