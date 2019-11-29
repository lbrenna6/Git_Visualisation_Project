import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart.jsx';
import Plot from 'react-plotly.js';


let i = '';
let languages = '';

const LanguageList = (props) => {
    if (props.langslist) {
        { var total =
            Object.entries(props.langslist).map(([key, value]) =>
                (value)).reduce((pv, cv) => pv + cv, 0)
        }

//Put this in return for the figures to appear on screen, but just want it to calculate them and use for charts so took out of //return.
        Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {Math.round(100*value/total)}%
                        {console.log(i = i + value)}
                        {console.log(languages=languages+key+",")}

                    </li>
                )

        return (
            <ul>
                <div className='Chart'>
                    <div>
                        {(i != '') ?
                            <div>
                                <h4>What languages does this user use?</h4>

                                    <div>
                                         <div>
                                             <PieChart repoSize={i.split('')} repoNames={languages.split(',')} />
                                        </div>
                                   
                                    <BarChart repoSize={i.split('')} repoNames={languages.split(',')} />
                                {i = ''}
                                {languages = ''}
                                    </div>
                            </div>:
                            <div></div>
                        }
                    </div>
                </div>

            </ul>
        )
    } else { return null; }
};
export default LanguageList;