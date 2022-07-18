import React, { useEffect } from 'react'
import {Page, Layout, Card, Icon} from "@shopify/polaris";
import {CalendarMajor, FinancesMinor} from '@shopify/polaris-icons';
import imageTest from '../../assets/images/istockphoto-1181250359-612x612.jpg'
import ModalCommon from '../modal/ModalCommon';
import { changeViewMode } from '../../helper/Helper';

function LayoutPreview({state, valueColorText, valueColorBackground}) {
    useEffect(() => {
        changeViewMode(state.viewMode, 'eventList', state.columns)
    }, [state.viewMode, state.columns])
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card title="Layout Preview" sectioned>
                            <div className='d-flex flex-column justify-content-center'>
                                <h1>{state.pageName}</h1>
                            {
                                state.showFilterButton === true ?
                                <div className="container-btn">
                                    <div className="buttons">
                                        <div className="btn-group">
                                        <button className="button active"> All Events</button>
                                        <button className="button">Today</button>
                                        <button className="button">Tomorrow</button>
                                        <button className="button">This Weekend</button>
                                        <button className="button">Select date</button>
                                        </div>
                                    </div>
                                </div> : ''
                            }
                            {
                                state.showSearchBar === true ?
                                <div className="form-group col-12 pl-0 pr-0">
                                    <input type="email" className="form-control" placeholder="Type to search ..."/>
                                </div> : ''
                            }
                            <div className='eventList pl-0 pr-0'>
                                <div className='eventItem'>
                                    <div className='eventItem__image mr-2'>
                                        <img src={imageTest}
                                            alt=""/>
                                    </div>
                                    <div className='eventItem__info'>
                                        <p className='mt-0 mb-0'>SU KIEN TEST</p>
                                        {
                                            state.showEventDescription === true 
                                            ? <p className='mt-0 mb-0'>Description</p> : ''
                                        }
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2 mb-0'><Icon source={CalendarMajor}
                                                    color="base"/>
                                                <span className='ml-2'>Event Date :</span>
                                            </p>
                                            <p className='mb-0'>
                                                July 5, 2022, 12:00 pm until November 30</p>
                                        </div>
                                    {
                                            state.showEventPlace === true ?
                                            <div className='d-flex'>
                                                <p className='d-flex mr-2'><Icon source={FinancesMinor} color="base"/>
                                                    <span className='ml-2'>Venue :</span>
                                                </p>
                                                <p>Test</p>
                                            </div> : ''
                                    }
                                        <ModalCommon nameOfEvent={'SU KIEN TEST'}
                                            eventDate={'July 5, 2022, 12:00 pm until November 30'}
                                            location={'Test'}
                                            phaseAction={'preview'}
                                            valueColorText={valueColorText}
                                            valueColorBackground={valueColorBackground}
                                            nameOfButton={state.readmoreTextCustom}
                                            />
                                    </div>
                                </div>
                                <div className='eventItem'>
                                    <div className='eventItem__image mr-2'>
                                        <img src={imageTest}
                                            alt=""/>
                                    </div>
                                    <div className='eventItem__info'>
                                        <p className='mt-0 mb-0'>SU KIEN TEST</p>
                                        {
                                            state.showEventDescription === true 
                                            ? <p className='mt-0 mb-0'>Description</p> : ''
                                        }
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2 mb-0'><Icon source={CalendarMajor}
                                                    color="base"/>
                                                <span className='ml-2'>Event Date :</span>
                                            </p>
                                            <p className='mb-0'>
                                                July 5, 2022, 12:00 pm until November 30</p>
                                        </div>
                                    {
                                            state.showEventPlace === true ?
                                            <div className='d-flex'>
                                                <p className='d-flex mr-2'><Icon source={FinancesMinor} color="base"/>
                                                    <span className='ml-2'>Venue :</span>
                                                </p>
                                                <p>Test</p>
                                            </div> : ''
                                    }
                                        <ModalCommon nameOfEvent={'SU KIEN TEST'}
                                            eventDate={'July 5, 2022, 12:00 pm until November 30'}
                                            location={'Test'}
                                            phaseAction={'preview'}
                                            valueColorText={valueColorText}
                                            valueColorBackground={valueColorBackground}
                                            nameOfButton={state.readmoreTextCustom}
                                            />
                                    </div>
                                </div>
                                <div className='eventItem'>
                                    <div className='eventItem__image mr-2'>
                                        <img src={imageTest}
                                            alt=""/>
                                    </div>
                                    <div className='eventItem__info'>
                                        <p className='mt-0 mb-0'>SU KIEN TEST</p>
                                        {
                                            state.showEventDescription === true 
                                            ? <p className='mt-0 mb-0'>Description</p> : ''
                                        }
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2 mb-0'><Icon source={CalendarMajor}
                                                    color="base"/>
                                                <span className='ml-2'>Event Date :</span>
                                            </p>
                                            <p className='mb-0'>
                                                July 5, 2022, 12:00 pm until November 30</p>
                                        </div>
                                    {
                                            state.showEventPlace === true ?
                                            <div className='d-flex'>
                                                <p className='d-flex mr-2'><Icon source={FinancesMinor} color="base"/>
                                                    <span className='ml-2'>Venue :</span>
                                                </p>
                                                <p>Test</p>
                                            </div> : ''
                                    }
                                        <ModalCommon nameOfEvent={'SU KIEN TEST'}
                                            eventDate={'July 5, 2022, 12:00 pm until November 30'}
                                            location={'Test'}
                                            phaseAction={'preview'}
                                            valueColorText={valueColorText}
                                            valueColorBackground={valueColorBackground}
                                            nameOfButton={state.readmoreTextCustom}
                                            />
                                    </div>
                                </div>
                                <div className='eventItem'>
                                    <div className='eventItem__image mr-2'>
                                        <img src={imageTest}
                                            alt=""/>
                                    </div>
                                    <div className='eventItem__info'>
                                        <p className='mt-0 mb-0'>SU KIEN TEST</p>
                                        {
                                            state.showEventDescription === true 
                                            ? <p className='mt-0 mb-0'>Description</p> : ''
                                        }
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2 mb-0'><Icon source={CalendarMajor}
                                                    color="base"/>
                                                <span className='ml-2'>Event Date :</span>
                                            </p>
                                            <p className='mb-0'>
                                                July 5, 2022, 12:00 pm until November 30</p>
                                        </div>
                                    {
                                            state.showEventPlace === true ?
                                            <div className='d-flex'>
                                                <p className='d-flex mr-2'><Icon source={FinancesMinor} color="base"/>
                                                    <span className='ml-2'>Venue :</span>
                                                </p>
                                                <p>Test</p>
                                            </div> : ''
                                    }
                                        <ModalCommon nameOfEvent={'SU KIEN TEST'}
                                            eventDate={'July 5, 2022, 12:00 pm until November 30'}
                                            location={'Test'}
                                            phaseAction={'preview'}
                                            valueColorText={valueColorText}
                                            valueColorBackground={valueColorBackground}
                                            nameOfButton={state.readmoreTextCustom}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default LayoutPreview
