import React, { useState } from 'react';
import ListItems from './ListItems';
import '../cssfiles/Todo.css';
import { CiCirclePlus } from "react-icons/ci";

export default function TodoList() {
    const [item, setItem] = useState('')
    const [listItem, setListItem] = useState([])
    const catchItem = (event) => {
        setItem(event.target.value)
    }

    const addItem = () => {
        setListItem((itemValue) => {
            return [...itemValue, item]
        })
        setItem('')
    }

    const deleteItem = (id) => {
        setListItem((itemValue) => {
            return itemValue.filter((ele, index) => {
                return index !== id
            })
        })
    }
    

    return (
        <>    <div className='main-div'>
            <div className='app-box'>
                <h3>Todo List</h3>
                
                <div className='Input-btn-div'>
                    <input type="text" placeholder='Add Items' onChange={catchItem} value={item} />
                    <CiCirclePlus onClick={addItem} className='add-btn' />
                </div>

                <ol>
                    {listItem.map((list, index) => {
                        return <ListItems
                            key={index}
                            id={index}
                            text={list}
                            onSelect={deleteItem}
                            // onCheck = {checkMark}
                        />
                    })}
                </ol>
            </div>
        </div>
        </>

    );
}
