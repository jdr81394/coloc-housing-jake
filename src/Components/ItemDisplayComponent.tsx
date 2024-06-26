import React, { Fragment, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useList from "../Hooks/useList"
import { ItemInterface } from '../Interfaces/ItemInterface';

const ItemDisplay: React.FC = () => {
    
    const { id } = useParams<{ id: string }>();
    
    const itemId = parseInt(id as string, 10); // Convert id to number

    const { list }: { list: ItemInterface[]} = useList()

    const item : ItemInterface= list.find((item) => item.id === itemId)  as ItemInterface

    return (
        <Fragment>
            <h1>Item:</h1>
            {item && <div>{item.id} - {item.name} </div> }
        </Fragment>
    );
};

export default ItemDisplay;
