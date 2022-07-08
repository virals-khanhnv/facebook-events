import React from 'react'
import {Page, Layout, Card, Icon} from "@shopify/polaris";
import {RefreshMinor} from '@shopify/polaris-icons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ModalCommon from '../modal/ModalCommon';
import {DeleteMinor} from '@shopify/polaris-icons';

function MainEvents() {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                        <div className="form-group pl-0 d-flex justify-content-center align-items-center">
                            <p className='mr-2 mb-0'>EVENTS :</p>
                            <select className="custom-select mr-sm-2 col-4">
                                <option selected>Test</option>
                            </select>
                            <button type="button" className="btn btn-primary d-flex justify-content-center align-items-center"><Icon source={RefreshMinor}
                                    color="white"/>
                                <span className='ml-2'>SYNC EVENTS</span>
                            </button>
                        </div>
                        <b className='d-flex justify-content-center align-items-center'>Auto Schedule Syncing. Last updated on: 07/05/2022 02:09</b>
                        <div className="form-group mt-2 col-12 d-flex justify-content-center align-items-center">
                            <input type="text" className="form-control col-8" placeholder="Type to search"/>
                        </div>
                        <div id='table_main_event'>
                            <table role="table">
                                <thead role="rowgroup">
                                    <tr role="row">
                                        <th role="columnheader">#</th>
                                        <th role="columnheader">Events</th>
                                        <th role="columnheader">Start</th>
                                        <th role="columnheader">End</th>
                                        <th role="columnheader">Place</th>
                                        <th role="columnheader">Page</th>
                                        <th role="columnheader">Publish</th>
                                        <th role="columnheader">Action</th>
                                    </tr>
                                </thead>
                                <tbody role="rowgroup">
                                    <tr role="row">
                                        <td role="cell">1</td>
                                        <td role="cell">SU KIEN TEST 1</td>
                                        <td role="cell">06/25/2019 17:00</td>
                                        <td role="cell">07/04/2019 20:00</td>
                                        <td role="cell">Testtt</td>
                                        <td role="cell">Testtt</td>
                                        <td className='d-flex justify-content-center' role="cell">
                                            <FormGroup>
                                                <FormControlLabel control={
                                                    <Switch
                                                    defaultChecked/>
                                                }/>
                                            </FormGroup>
                                        </td>
                                        <td role="cell">
                                            <ModalCommon/>
                                        </td>
                                    </tr>
                                    <tr role="row">
                                        <td role="cell">2</td>
                                        <td role="cell">SU KIEN TEST 2</td>
                                        <td role="cell">06/25/2019 17:00</td>
                                        <td role="cell">07/04/2019 20:00</td>
                                        <td role="cell">Testtt</td>
                                        <td role="cell">Testtt</td>
                                        <td className='d-flex justify-content-center' role="cell">
                                            <FormGroup>
                                                <FormControlLabel control={
                                                    <Switch
                                                    defaultChecked/>
                                                }/>
                                            </FormGroup>
                                        </td>
                                        <td role="cell">
                                            <Icon source={DeleteMinor}
                                                color="base"/>
                                        </td>
                                    </tr>
                                    <tr role="row">
                                        <td role="cell">3</td>
                                        <td role="cell">SU KIEN TEST 3</td>
                                        <td role="cell">06/25/2019 17:00</td>
                                        <td role="cell">07/04/2019 20:00</td>
                                        <td role="cell">Testtt</td>
                                        <td role="cell">Testtt</td>
                                        <td className='d-flex justify-content-center' role="cell">
                                            <FormGroup>
                                                <FormControlLabel control={
                                                    <Switch
                                                    defaultChecked/>
                                                }/>
                                            </FormGroup>
                                        </td>
                                        <td role="cell">
                                            <Icon source={DeleteMinor}
                                                color="base"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default MainEvents
