import './Style.css'
import Probo from './assets/probo-3.png'
import Language from './assets/language-change.avif'

function User () {
    return(
    <>
 <div className="navbar">
            <div className="logo" ><img src={Probo} alt="probo-logo" /></div>
            <div className="list-item">
                <div>Trading</div>
                <div>Team 11</div>
                <div>Read</div>
                <div>Cares</div>
                <div>Carrers</div>
            </div>
            <div className="right-item">
                <div className="para">For 18 years and above only</div>
                <button className="download-button">Download App</button>
                <button className="trade-online-button">Trade Online</button>
                <div className="language-change-icon"><img src={Language} alt="language-change-icon" /></div>
            </div>
        </div>
    </>
    )
    }
    export default User