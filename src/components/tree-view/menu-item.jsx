import MenuList from "./menu-list";
import { useState } from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'


export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(itemLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [itemLabel]: !displayCurrentChildren[itemLabel]
        })
    }

    return (
        <li>
            <div className="menu-item-container">
                <p>{item.label}</p>
                {item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? <FaMinus color="white" size={25}/> : <FaPlus color="white" size={25}/>
                    }
                </span> 
                
                : null}
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                    <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}