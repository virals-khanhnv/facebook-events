import {
    Page,
    Layout,
    Card,
    FormLayout,
    TextField,
    Icon,
    Toast, 
    Frame
} from "@shopify/polaris";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React, { useState, useCallback} from "react";
import Avatar from '@mui/material/Avatar';
import {
    ChannelsMajor
} from '@shopify/polaris-icons';
import { useDispatch } from "react-redux";
import { fetchListFacebookPage } from "../../redux/Action";
import FacebookLogin from 'react-facebook-login';
import axios from "axios";

function AddFacebookPage() {
    const [appId, setAppId] = useState('')
    const [stepper, setStepper] = useState(1)
    const [listFacebookPage, setListFacebookPage] = useState([]);
    const [listOfPage, setListOfPage] = useState([]); 

    const dispatch = useDispatch();

    const [active, setActive] = useState(false);

    const toggleActive = useCallback(() => setActive((active) => !active), []);
  
    const toastMarkup = active ? (
      <Toast content="Sync Facebook app success" onDismiss={toggleActive} />
    ) : null;

    const handleAppId = (e) => {
        setAppId(e)
    }
    const steps = [
        'Connect',
        'Choose Page',
        'Confirm',
    ];

    const handleAddFacebookPage = (e) => {
        setListFacebookPage([...listFacebookPage, e]);
        dispatch(fetchListFacebookPage([...listFacebookPage, e]))
    }

    const responseFacebook = (response) => {
        if (response) {
            const userId = response.userID
            axios.get(`https://graph.facebook.com/v14.0/${userId}/accounts`, {
                params: {
                    access_token: response.accessToken
                }
            }).then((response) => {
                setListOfPage(response.data.data);
                setStepper(stepper+1)
                }).catch((error) => {
                    setStepper(1)
            })
        } 
    }
    const handleFaceBook = () => {
        responseFacebook();
    }
     
    return (
        <Frame>
            <Page fullWidth>
                    {toastMarkup}
                        <Layout>
                            <Layout.Section oneHalf>
                                <Card title="Add Facebook page">
                                    <Card.Section title="Connect to Facebook">
                                    <Box sx={{ width: '100%' }}>
                                    <Stepper activeStep={stepper} alternativeLabel>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                    </Box>
                                    </Card.Section>
                                    <div className="ml-2 mr-2 pb-2">
                                    {(() => {
                                    if (stepper === 1) {
                                        return (
                                        <div>
                                            <Card sectioned>
                                                <FormLayout>
                                                <TextField
                                                    label="Facebook App Id"
                                                    onChange={handleAppId}
                                                    value={appId}
                                                />
                                                </FormLayout>
                                            </Card>
                                        </div>)} 
                                    else if (stepper === 2) {
                                        return (
                                            <div>
                                            {
                                                listOfPage?.map(item => (
                                                    <Card key={item.id} sectioned>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Avatar>{item.avatar}</Avatar>
                                                                <p className="mb-0 ml-2">{item.name}</p>
                                                            </div>
                                                            <div onClick={() => {setStepper(stepper + 1); toggleActive() ; handleAddFacebookPage(item)}}>
                                                                <button type="button" className="btn btn-info">choose</button>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                ))
                                            }
                                            </div>
                                        )
                                    } else {
                                            return (
                                                <div>
                                                    <Card sectioned>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <button onClick={() => setStepper(2)} type="button" className="btn btn-primary mb-2 col-4">Add More Page</button>
                                                            <button onClick={() => setStepper(1)} type="button" className="btn btn-success col-4">Done</button>
                                                        </div>
                                                    </Card>
                                                </div>
                                            )
                                            }
                                        })()}
                                        {
                                            stepper <= 1 ?
                                            <div className="button__connect_facebook">
                                                <button disabled={appId ? false : true} type="button" className="btn btn-primary d-flex">
                                                <Icon
                                                source={ChannelsMajor}
                                                color="white"
                                                /> 
                                                <span className="ml-2"> {
                                                    appId ? <FacebookLogin 
                                                    appId={appId}
                                                    autoLoad={false}
                                                    fields="name,email,picture"
                                                    callback={responseFacebook}
                                                    onClick={handleFaceBook}
                                                    cssClass="my-facebook-button-class"/> : 'Login With Facebook'
                                                }</span>
                                                </button>
                                            </div> : ''
                                        }
                                    </div>
                            </Card>
                        </Layout.Section>
                </Layout>
            </Page>
        </Frame>
    );
}

export default AddFacebookPage
