import React, { useEffect } from 'react'
import {Page, Layout, Card, Icon} from "@shopify/polaris";
import {CalendarMajor, FinancesMinor} from '@shopify/polaris-icons';
import imageTest from '../../assets/images/istockphoto-1181250359-612x612.jpg'
import ModalCommon from '../modal/ModalCommon';
import { changeViewMode } from '../../helper/Helper';

function LayoutPreview({viewMode}) {
    useEffect(() => {
        changeViewMode(viewMode, 'eventItem')
    }, [viewMode])

    console.log(viewMode);
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card title="Layout Preview" sectioned>
                        <div className='d-flex flex-column justify-content-center'>
                            <h1>Khanh test 1</h1>
                            <div className="form-group col-12 pl-0 pr-0">
                                <input type="email" className="form-control" placeholder="Type to search ..."/>
                            </div>
                            <div className='eventList pl-0 pr-0'>
                                <div className='eventItem'>
                                    <div className='eventItem__image mr-2'>
                                        <img src={imageTest}
                                            alt=""/>
                                    </div>
                                    <div className='eventItem__info'>
                                        <p>SU KIEN TEST</p>
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2'><Icon source={CalendarMajor}
                                                    color="base"/>
                                                <span className='ml-2'>Event Date :</span>
                                            </p>
                                            <p>
                                                July 5, 2022, 12:00 pm until November 30</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2'><Icon source={FinancesMinor}
                                                    color="base"/>
                                                <span className='ml-2'>Venue :</span>
                                            </p>
                                            <p>Test</p>
                                        </div>
                                        <ModalCommon nameOfEvent={'SU KIEN TEST'}
                                            eventDate={'July 5, 2022, 12:00 pm until November 30'}
                                            location={'Test'}
                                            phaseAction={'preview'}
                                            />
                                    </div>
                                </div>
                                <div className='eventItem'>
                                    <div className='eventItem__image mr-2'>
                                        <img src={imageTest}
                                            alt=""/>
                                    </div>
                                    <div className='eventItem__info'>
                                        <p>SU KIEN TEST</p>
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2'><Icon source={CalendarMajor}
                                                    color="base"/>
                                                <span className='ml-2'>Event Date :</span>
                                            </p>
                                            <p>
                                                July 5, 2022, 12:00 pm until November 30</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2'><Icon source={FinancesMinor}
                                                    color="base"/>
                                                <span className='ml-2'>Venue :</span>
                                            </p>
                                            <p>Test</p>
                                        </div>
                                        <ModalCommon nameOfEvent={'SU KIEN TEST'}
                                            eventDate={'July 5, 2022, 12:00 pm until November 30'}
                                            location={'Test'}
                                            phaseAction={'preview'}
                                            />
                                    </div>
                                </div>
                                <div className='eventItem'>
                                    <div className='eventItem__image mr-2'>
                                        <img src={imageTest}
                                            alt=""/>
                                    </div>
                                    <div className='eventItem__info'>
                                        <p>SU KIEN TEST</p>
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2'><Icon source={CalendarMajor}
                                                    color="base"/>
                                                <span className='ml-2'>Event Date :</span>
                                            </p>
                                            <p>
                                                July 5, 2022, 12:00 pm until November 30</p>
                                        </div>
                                        <div className='d-flex'>
                                            <p className='d-flex mr-2'><Icon source={FinancesMinor}
                                                    color="base"/>
                                                <span className='ml-2'>Venue :</span>
                                            </p>
                                            <p>Test</p>
                                        </div>
                                        <ModalCommon nameOfEvent={'SU KIEN TEST'}
                                            eventDate={'July 5, 2022, 12:00 pm until November 30'}
                                            location={'Test'}
                                            phaseAction={'preview'}
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
