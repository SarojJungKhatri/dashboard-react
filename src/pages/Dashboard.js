import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import Style from './Dashboard.css';
import BarDiagram from './BarDiagram';

function Dashboard(){
    return(
        <div className='dashboard'>
            <div className="notice-box">
                <ul>
                    <li>
                        <div className="nBox">
                            <div className="mTitle">
                                <p>Active Link<br/>
                                    <span>500</span>
                                </p>
                            </div>
                            <div className="mImage m1">
                            <ImIcons.ImLink/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="nBox">
                            <div className="mTitle">
                                <p>Active Customer<br/>
                                    <span>800</span>
                                </p>
                            </div>
                            <div className="mImage m2">
                            <ImIcons.ImUsers />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="nBox">
                            <div className="mTitle">
                                <p>Generate Link<br/>
                                    <span>900</span>
                                </p>
                            </div>
                            <div className="mImage m3">
                            <ImIcons.ImCogs />
                            </div>
                        </div>
                    </li>
                     <li>
                        <div className="nBox">
                            <div className="mTitle">
                                <p>Active Business<br/>
                                    <span>400</span>
                                </p>
                            </div>
                            <div className="mImage m4">
                            <ImIcons.ImOffice />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Dashboard;