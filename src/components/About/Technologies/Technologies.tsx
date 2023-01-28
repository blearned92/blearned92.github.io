import "./Technologies.scss"
import {Texts} from "../../../common/texts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from '@iconify/react';


const Technologies = () => {

    const renderListItemType = (technology:any) => {
        if(technology[2].toString() === "i"){
            return(
                <Icon className="icon" icon={technology[1].toString()} height="47"/> 
            )
        } else {
            return (
                <FontAwesomeIcon className="faicon" icon={technology[1] as IconProp} size="3x"/>
            )
        }
    }


    return (
        <ul className="skill-list">
            {
                Texts.technologyStack.map((technology)=>{
                    return(
                        <li key={technology[0].toString()} className="tech-list-item">
                            {renderListItemType(technology)}
                            <h3 className="tech-header">{technology[0].toString()}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Technologies;
