import React, {useState, useCallback} from 'react'
import {Page, Layout, Card, Icon, Toast, Frame} from "@shopify/polaris";
import {RefreshMinor} from '@shopify/polaris-icons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ModalCommon from '../modal/ModalCommon';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { formatDateTime, getUnique } from '../../helper/Helper';

function MainEvents() {
    const [currentPage, setCurrentPage] = useState('');
    const [currentPageName, setCurrentPageName] = useState('');
    const [textSearch, setTextSearch] = useState('');
    
    const {listFacebookpage} = useSelector((state) => ({
        ...state.data
    }));

    const [syncEvents, setSyncEvents] = useState([]);
    const [active, setActive] = useState(false);

    const toggleActive = useCallback(() => setActive((active) => !active), []);
  
    const toastMarkup = active ? (
      <Toast content={`Events on page ${currentPageName} are synced successful !`} onDismiss={toggleActive} />
    ) : null;

    const handleTextInSearch = (e) => {
        setTextSearch(e.target.value);
    }
  
    const handleChangePage = (e) => {
        setCurrentPage(e.target.value);
        
        const index = e.nativeEvent.target.selectedIndex;
        setCurrentPageName(e.nativeEvent.target[index].text);
    }

    const handleSyncEvents = () => {
        listFacebookpage.filter(item => {
            if (item.id === currentPage) {
                console.log(item.access_token); 
                   axios.get(`https://graph.facebook.com/${currentPage}/events`, {
                        params: {
                            access_token: item.access_token
                        }
                    }).then((response) => {
                        const data = response.data.data
                        setSyncEvents([...syncEvents, data]);
                        toggleActive();
                        }).catch(() => {
                    })
            }
        })
     
    }

    const flattenedEvents = [].concat(...syncEvents);

    return (
        <Frame>
            <Page fullWidth>
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <div className="form-group pl-0 d-flex justify-content-center align-items-center">
                                <p className='mr-2 mb-0'>EVENTS :</p>
                                <select onChange={handleChangePage} className="custom-select mr-sm-2 col-4">
                                <option> ---- </option>
                                {
                                    getUnique(listFacebookpage, 'id')?.map(item => 
                                        <option key={item.id} name={item.name} value={item.id} >{item.name}</option>
                                    )
                                }
                                </select>
                                <button type="button" className="btn btn-primary d-flex justify-content-center align-items-center">
                                <Icon source={RefreshMinor}
                                        color="warning"/>
                                    <span className='ml-2' onClick={handleSyncEvents}>SYNC EVENTS</span>
                                </button>
                            </div>
                            <b className='d-flex justify-content-center align-items-center'>Auto Schedule Syncing. Last updated on: 07/05/2022 02:09</b>
                            <div className="form-group mt-2 col-12 d-flex justify-content-center align-items-center">
                                <input type="text" onChange={handleTextInSearch} className="form-control col-8" placeholder="Type to search"/>
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
                                    {
                                            getUnique(flattenedEvents, 'id').filter((val) => {
                                                if(textSearch === ''){
                                                    return val
                                                }else if(val.name.toLowerCase().includes(textSearch.toLowerCase())){
                                                    return val
                                                }
                                            })?.map(item => 
                                            <tr key={item.id} role="row">
                                                <td role="cell">{item.id}</td>
                                                <td role="cell">{item.description}</td>
                                                <td role="cell">{formatDateTime(item.start_time)}</td>
                                                <td role="cell">{formatDateTime(item.end_time)}</td>
                                                <td role="cell">{item.place && item.place.name}</td>
                                                <td role="cell">{item.name}</td>
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
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Layout.Section>
                </Layout>
            </Page>
            {toastMarkup}
        </Frame>
    )
}

export default MainEvents
