import React from 'react';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

charts(FusionCharts)

var transactionChartConfigs = {
    type: "area2d",
    width: "600",
    height: "300",
    dataFormat: "json",
    dataSource: {
        chart:{
            caption: "Daily Footfalls",
            subcaption:"Last 3 weeks",
            xaxisname:"Date",
            yaxisname:"No. of Footfalls",
            showvalues:"0",
            theme:"carbon"
        },

        data:[
            {
                label:"14 May",
                value:"2154"
            },
            {
                label:"15 May",
                value:"1742"
            },
            {
                label:"16 May",
                value:"1845"
            },
            {
                label:"17 May",
                value:"2490"
            },
            {
                label:"18 May",
                value:"1975"
            },
            {
                label:"19 May",
                value:"1840"
            },
            {
                label:"20 May",
                value:"2054"
            },
            {
                label:"21 May",
                value:"2153"
            },
            {
                label:"22 May",
                value:"1755"
            },
            {
                label:"23 May",
                value:"2080"
            },
            {
                label:"24 May",
                value:"1617"
            },
            {
                label:"25 May",
                value:"2053"
            },
            {
                label:"26 May",
                value:"2435"
            },
            {
                label:"27 May",
                value:"2177"
            },
            {
                label:"28 May",
                value:"2214"
            },
            {
                label:"29 May",
                value:"1998"
            },
            {
                label:"30 May",
                value:"1871"
            },
            {
                label:"31 May",
                value:"1822"
            },
            {
                label:"1 Jun",
                value:"1909"
            },
            {
                label:"2 Jun",
                value:"1689"
            },
            {
                label:"Yesterday",
                value:"2076"
            }
        ]
    }
};

export default class Area2D extends React.Component{
    render() {
        return (
            <ReactFC {...transactionChartConfigs} />
        );
    }
};