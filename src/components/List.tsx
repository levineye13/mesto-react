import React from 'react';

interface IListProps<T> {
  className: string;
  items: T[];
  render: (item: T) => React.ReactElement<T>;
}

const List = function <T>({ className, items, render }: IListProps<T>) {
  return <ul className={className}>{items.map(render)}</ul>;
};

export default List;
