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

function AddFacebookPage() {
    const [appId, setAppId] = useState('')
    const [appSecret, setAppScret] = useState('')
    const [stepper, setStepper] = useState(1)
    const [listFacebookPage, setListFacebookPage] = useState([]);

    const dispatch = useDispatch();

    const [active, setActive] = useState(false);

    const toggleActive = useCallback(() => setActive((active) => !active), []);
  
    const toastMarkup = active ? (
      <Toast content="Sync Facebook app success" onDismiss={toggleActive} />
    ) : null;

    const handleConnect = () => {
        setStepper(stepper+1)
    }
    const handleAppId = (e) => {
        setAppId(e)
    }
    const steps = [
        'Connect',
        'Choose Page',
        'Confirm',
    ];

    var fakeDataPage = [
        {
            id: 1,
            avatar: "T",
            pageName: "test_1",
            facebookPageId:  189861595184608,
        },
        {
            id: 2,
            avatar: "T1",
            pageName: "test_2",
            facebookPageId:  189861595123123,
        },
        {
            id: 3,
            avatar: "T2",
            pageName: "test_3",
            facebookPageId:  189833333184608,
        },
        {
            id: 4, 
            avatar: "T3",
            pageName: "test_4",
            facebookPageId:  189833333184601,
        },
    ]

    const handleAddFacebookPage = (e) => {
        setListFacebookPage([...listFacebookPage, e]);
        dispatch(fetchListFacebookPage([...listFacebookPage, e]))
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
                                                <TextField
                                                    label="Facebook App Secret"
                                                    onChange={setAppScret}
                                                    value={appSecret}
                                                />
                                                <p className="howto">Leave blank if don't want to use long-lived access token.</p>
                                                </FormLayout>
                                            </Card>
                                        </div>)} 
                                    else if (stepper === 2) {
                                        return (
                                            <div>
                                            {
                                                fakeDataPage.map(item => (
                                                    <Card sectioned>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <Avatar>{item.avatar}</Avatar>
                                                                <p className="mb-0 ml-2">{item.pageName}</p>
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
                                                <button onClick={() => handleConnect()} type="button" className="btn btn-primary d-flex">
                                                <Icon
                                                source={ChannelsMajor}
                                                color="white"
                                                /> 
                                                <span className="ml-2">Connect to Your Facebook Account</span>
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
