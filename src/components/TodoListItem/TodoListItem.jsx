import { GridItem, Text } from '..';
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({ text, counter, onDelete, id }) => {
  return (
    <>
      <GridItem>
        <div className={style.box}>
          <Text textAlign="center" marginBottom="20">
            TODO {counter}
          </Text>
          <Text>{text}</Text>
          <button
            className={style.deleteButton}
            type="button"
            onClick={() => onDelete(id)}
          >
            <RiDeleteBinLine size={24} />
          </button>
        </div>
      </GridItem>
    </>
  );
};
