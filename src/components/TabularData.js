import React from 'react'
// import { ReactTabulator } from 'react-tabulator'
// import 'react-tabulator/lib/styles.css';
import * as ReactBootStrap from "react-bootstrap";

const TabularData = (props) => {

    //dataArray holds array of objects used to populate table
    const dataArray = []

    //gets just first 25 streelights records
    for (const [i, v] of props.streetlights.features.entries()) {
        if (i < 25) {
            dataArray.push(v.properties);    // properties of each item is what contains the info about each streetlight 
        }   
    }

    const renderData = (record, index) => {
        return (
            <tr>
                <td>{record.BASE_COLOR}</td>
                <td>{record.BASIC_PREM}</td>
                <td>{record.BRACKET_CD}</td>
                <td>{record.BRIDGE_IND}</td>
                <td>{record.COLOR_TEMP}</td>
                <td>{record.CONTRACT_N}</td>
                <td>{record.CUI}</td>
                <td>{record.DECAL_COLOR}</td>
                <td>{record.DECAL_NUMB}</td>
                <td>{record.DESIGNID}</td>
                <td>{record.ENABLED}</td>
                <td>{record.FIRSTONPOL}</td>
                <td>{record.FIXTURE_ST}</td>
                <td>{record.GRID_ADDRE}</td>
                <td>{record.INSPECTION}</td>
                <td>{record.INSTALL_DA}</td>
                <td>{record.ISWATCHLIG}</td>
                <td>{record.LAMP_CD}</td>
                <td>{record.LUMENS}</td>
                <td>{record.MATERIAL_C}</td>
                <td>{record.MOUNT_HEIG}</td>
                <td>{record.NOM_VOLT}</td>
                <td>{record.NONSTANDAR}</td>
                <td>{record.NONSTAND_1}</td>
                <td>{record.OWNER}</td>
                <td>{record.PATTERN}</td>
                <td>{record.PREMISE_ID}</td>
                <td>{record.RELATEDPOL}</td>
                <td>{record.STREETLIGH}</td>
                <td>{record.STYLE}</td>
                <td>{record.SUBMISSION}</td>
                <td>{record.SUBTYPECD}</td>
                <td>{record.SYMBOLROTA}</td>
                <td>{record.USE_CD}</td>
                <td>{record.WATTS}</td>
                <td>{record.WORKFLOWST}</td>
                <td>{record.WORKFUNCTI}</td>
                <td>{record.WORKLOCATI}</td>
                <td>{record.WORKREQUES}</td>
                <td>{record.WORK_EFFEC}</td>
                <td>{record.WORK_REQUE}</td>
        </tr>
        )
    }

    return (
        <div>
            <ReactBootStrap.Table striped bordered hover variant="dark" responsive>  
            <thead>
                <tr>
                    <th>BASE_COLOR</th>
                    <th>BASIC_PREM</th>
                    <th>BRACKET_CD</th>
                    <th>BRIDGE_IND</th>
                    <th>COLOR_TEMP</th>
                    <th>CONTRACT_N</th>
                    <th>CUI</th>
                    <th>DECAL_COLOR</th>
                    <th>DECAL_NUMB</th>
                    <th>DESIGNID</th>
                    <th>ENABLED</th>
                    <th>FIRSTONPOL</th>
                    <th>FIXTURE_ST</th>
                    <th>GRID_ADDRE</th>
                    <th>INSPECTION</th>
                    <th>INSTALL_DA</th>
                    <th>ISWATCHLIG</th>
                    <th>LAMP_CD</th>
                    <th>LUMENS</th>
                    <th>MATERIAL_C</th>
                    <th>MOUNT_HEIG</th>
                    <th>NOM_VOLT</th>
                    <th>NONSTANDAR</th>
                    <th>NONSTAND_1</th>
                    <th>OWNER</th>
                    <th>PATTERN</th>
                    <th>PREMISE_ID</th>
                    <th>RELATEDPOL</th>
                    <th>STREETLIGH</th>
                    <th>STYLE</th>
                    <th>SUBMISSION</th>
                    <th>SUBTYPECD</th>
                    <th>SYMBOLROTA</th>
                    <th>USE_CD</th>
                    <th>WATTS</th>
                    <th>WORKFLOWST</th>
                    <th>WORKFUNCTI</th>
                    <th>WORKLOCATI</th>
                    <th>WORKREQUES</th>
                    <th>WORK_EFFEC</th>
                    <th>WORK_REQUE</th>
                </tr>
            </thead>
            <tbody>
                    {dataArray.map(renderData)}
            </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}

export default TabularData
