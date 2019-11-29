import React from 'react';
import Plot from 'react-plotly.js';


const PieChart = (props) => {

    return (
        <Plot data={[
            {
                values: props.repoSize,
                labels: props.repoNames,
                type: 'pie'
            }
        ]}
            layout={{ width: 700, height: 400,title: 'Languages Pie Chart', paper_bgcolor :'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)' }}
        />
    );
}

export default PieChart;

