import React from 'react'
import {Button, Modal, TextContainer} from "@shopify/polaris";
import {useState, useCallback} from "react";
import {CalendarMajor, FinancesMinor, DeleteMinor} from '@shopify/polaris-icons';
import {Icon} from "@shopify/polaris";
import { useDispatch } from 'react-redux';
import { deleteFacebookPage } from '../../redux/Action';

function ModalCommon({nameOfEvent, location, eventDate, phaseAction, id, nameOfButton, valueColorText, valueColorBackground}) {
    const [active, setActive] = useState(false);
   const dispatch = useDispatch();

    const handleChange = useCallback(() => setActive(!active), [active]);
    var listTextPhaseActionModal = ['Are you sure you want to delete this Facebook page? You can get this again when connect to your Facebook.', 'Are you sure you want to delete this event? You can get this again when syncing events from Facebook.']
    const handleDelete = () => {
        handleChange()
        dispatch(deleteFacebookPage(id))
    }

    const activator = phaseAction === 'preview' ? <Button
    onClick={handleChange}>{nameOfButton}</Button> : <div role={'button'}
        onClick={handleChange}><Icon source={DeleteMinor}
            color="base"/></div>

    return (
        <div>
            <Modal activator={activator}
                open={active}
                onClose={handleChange}
                title={
                    (() => {
                        if (phaseAction === 'preview') {
                            return nameOfEvent
                        } else if (phaseAction === 'deleteFacebookPage') {
                            return listTextPhaseActionModal[0]
                        } else {
                            return listTextPhaseActionModal[1]
                        }
                    })()
                }
                primaryAction={
                    phaseAction === 'preview' ? '' : {
                        content: "Disagree",
                        onAction: handleChange
                    }
                }
                secondaryActions={
                    phaseAction === 'preview' ? [{
                            content: "Close",
                            onAction: handleChange
                        },] : [{
                            content: "Agree",
                            onAction: handleDelete
                        },]
            }>

                {
                phaseAction === 'preview' ? <Modal.Section>
                    <TextContainer>
                        <div className='d-flex'>
                            <p className='d-flex mr-2'><Icon source={CalendarMajor}
                                    color="base"/>
                                <span className='ml-2'>Event Date :</span>
                            </p>
                            <p> {eventDate}</p>
                        </div>
                        <div className='d-flex'>
                            <p className='d-flex mr-2'><Icon source={FinancesMinor}
                                    color="base"/>
                                <span className='ml-2'>Venue :</span>
                            </p>
                            <p>{location}</p>
                        </div>
                    </TextContainer>
                </Modal.Section> : ''
            } </Modal>
        </div>
    )
}

export default ModalCommon
