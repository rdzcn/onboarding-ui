import styled, { css, keyframes } from "styled-components";
import CheckMarkIcon from "../icons/CheckMark";

export const SELECT_ANIMATION_TIME = 200;

export const SelectList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 12px 0 12px 0;
`;

export const Checkmark = styled(CheckMarkIcon)`
  color: ${({ theme }) => theme.colors.grey[70]};
`;

interface IElementWrapper {
  isSelected: boolean;
}

export const ElementWrapper = styled.option<IElementWrapper>(
  ({ isSelected, theme }) => css`
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${isSelected ? theme.colors.grey[10] : "none"};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.grey[10]};
    }
  `,
);

export const SelectContainer = styled.select`
  width: 100%;
  max-width: 256px;
  margin-top: 12px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: -8px;
  }
`;

const moveIn = keyframes`
  from {
    margin-top: -8px;
  }
`;

export const InnerWrapper = styled.div`
  position: absolute;
  display: flex;
  margin-top: 1rem;
  min-width: 100%;
  left: 0;
  justify-content: flex-start;
  z-index: 9;
`;

export const SelectInner = styled.div(
  ({ theme }) => css`
    min-width: 140px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.grey[20]};
    background-color: ${theme.colors.grey[0]};
    width: 100%;
    box-shadow: ${theme.shadows.outset.first};
    left: 0;

    &::before {
      content: "";
      position: absolute;
      top: -3.2px;
      width: 6.4px;
      height: 6.4px;
      transform: rotate(45deg);
      background-color: ${theme.colors.grey[0]};
      border: solid ${theme.colors.grey[20]};
      border-width: 1px 0 0 1px;
      border-radius: 0 0 4px;
      left: 8px;
    }

    &.entering {
      animation: ${fadeIn} ${SELECT_ANIMATION_TIME + 40}ms ease-in-out;

      &::before {
        animation: ${moveIn} ${SELECT_ANIMATION_TIME + 40}ms ease-in-out;
      }
    }

    &.exiting {
      animation: ${fadeIn} ${SELECT_ANIMATION_TIME + 40}ms ease-in-out;
      animation-direction: reverse;

      &::before {
        animation: ${moveIn} ${SELECT_ANIMATION_TIME + 40}ms ease-in-out;
        animation-direction: reverse;
      }
    }

    &.exiting,
    &.entering,
    &.entered {
      display: block;
    }

    &.exited {
      display: none;
    }
  `,
);
