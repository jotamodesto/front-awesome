import React from "react";
import styled from "styled-components";
import { useAppState } from "../../store/AppContext";

//#region TYPES
interface SidebarProps {
  items: string[];
  itemSelected?: string;
  onItemClick: (item: string) => void;
}
//#endregion

//#region STYLES
const Container = styled.aside<{ visible: boolean }>`
  position: fixed;
  left: ${props => (props.visible ? 0 : "-90%")};
  z-index: 10;
  width: 90%;
  min-height: 100%;
  padding: 1.5rem;
  color: var(--gray-100);
  background: var(--indigo-800);
  border-right: 1px solid var(--indigo-900);
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
  transition: left 0.2s;

  @media (min-width: 768px) {
    position: static;
    width: 31rem;
  }
`;
const MenuItem = styled.li`
  width: 100%;
  height: 4.5rem;
`;
const MenuButton = styled.button<{ selected: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  color: var(--gray-100);
  text-align: start;
  text-transform: capitalize;
  background: ${props => props.selected && "var(--indigo-900)"};
  border: 0;
  border-radius: 0.3rem;
  outline: 0;
  transition: background-color 0.2s;

  :hover {
    background: var(--indigo-700);
  }
  :active {
    background: var(--indigo-900);
  }
`;
//#endregion

const Sidebar = ({ items, itemSelected, onItemClick }: SidebarProps) => {
  const appState = useAppState();

  const handleItemClick = (item: string) => () => {
    onItemClick(item);
  };

  return (
    <Container visible={appState.menuVisible}>
      <ul data-testid="items">
        {items.map((item, i) => (
          <MenuItem key={i}>
            <MenuButton
              type="button"
              selected={item === itemSelected}
              onClick={handleItemClick(item)}
            >
              {item}
            </MenuButton>
          </MenuItem>
        ))}
      </ul>
    </Container>
  );
};

export default Sidebar;
