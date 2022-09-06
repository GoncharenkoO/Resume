import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 10px;
  margin-left: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: left;
    flex-direction: column;
    line-height: 1.71;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    line-height: 1.71;
  }
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
  color: #595959;
`;

export const Tech = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
  color: #595959;
`;

export const Link = styled.a`
  margin-right: 15px;
  overflow: hidden;
  white-space: nowrap;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.71;
  color: #595959;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #aa73d6;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
