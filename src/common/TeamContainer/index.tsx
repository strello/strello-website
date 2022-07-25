import { TeamMemberProps } from "../types";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TeamMember = ({
    img,
    name,
    linkedin,
    twitter,
    instagram
}: TeamMemberProps)=>(
    <div className="container">
        <img className="member-image" src={img} alt="Could not display img"/>
        <div className="member-name">
            <p>{name}</p>
        </div>
        <div className="links-container">
            <button className="btn">
                <a href={twitter} target="_blank"><img className="social-image" src="img/svg/twitter1.svg" /></a>
            </button>
            <button className="btn">
                <a href={instagram} target="_blank"><img className="social-image" src="img/svg/instagram.svg" /></a>
            </button>
            <button className="btn">
                <a href={linkedin} target="_blank"><img className="social-image" src="img/svg/linkedin.svg"/></a>
            </button>
        </div>
    </div>
);
