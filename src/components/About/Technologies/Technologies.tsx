import "./Technologies.scss"
import {Texts} from "../../../common/texts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from '@iconify/react';


const Technologies = () => {

    const renderListItemType = (technology:any) => {
        if(technology[2].toString() === "i"){
            return(
                <Icon icon={technology[1].toString()} height="47"/> 
            )
        } else {
            return (
                <FontAwesomeIcon icon={technology[1] as IconProp} size="3x"/>
            )
        }
    }


    return (
        <section className="technologies" id="technologies">
            <h2 className="technologies-h2">Technologies:</h2>
            <aside className="top">
                {Texts.technologies}
                <br/><br/>
            </aside>
            <aside className="bottom">
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
            </aside>
        </section>
    )
}

export default Technologies;
