import {
    Page,
    Layout,
    Card,
    FormLayout,
    TextField,
    Icon,
    Toast, 
    Frame,
    Tabs,
    EmptyState
} from "@shopify/polaris";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React, { useState, useCallback, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import {
    ChannelsMajor
} from '@shopify/polaris-icons';
import { useDispatch } from "react-redux";
import {fetchListFacebookPage} from "../../redux/Action";
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import { fetchInfoFacebookLogin } from '../../redux/Action';

function AddFacebookPage() {
    const [appId, setAppId] = useState('')
    const [stepper, setStepper] = useState(1)
    const [listFacebookPage, setListFacebookPage] = useState([]);
    const [listOfPage, setListOfPage] = useState([]); 
    // const {fetchInfoFacebookLogin} = useSelector((state) => ({...state.data}));
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(0);
    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        []
    );

    const handleAppId = (e) => {
        setAppId(e)
    }

    const onLoginClick = () => {
        window.FB.login(function(response) {
            console.log(response);
            document.cookie = `access_token=${response.authResponse.accessToken}`
            if (response.status === 'connected') {
                window.FB.api(
                    `/${response.authResponse.userID}/accounts`,
                    function (response) {
                      if (response && !response.error) {
                        dispatch(fetchInfoFacebookLogin(response.data))
                        setListOfPage(response.data);
                        setStepper(2)
                      }
                    }
                );
            } else {
              console.log('Not login in iframe');
            }
        }, {scope: 'public_profile,email,page_events,pages_show_list,read_insights,manage_pages,pages_read_engagement'});
    };

    
    useEffect(() => {
        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : process.env.REACT_APP_ID_FACEBOOK,
                cookie     : true,
                xfbml      : true,
                version    : 'v14.0'
            });
          };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/pl_PL/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);
   
    const tabs = [
        {
            id: "accepts-marketing-1",
            content: "Direct Connection Facebook",
        },
        {
            id: "all-customers-1",
            content: "Connect With Facebook AppId",
        },
      ];

    const [active, setActive] = useState(false);

    const toggleActive = useCallback(() => setActive((active) => !active), []);
  
    const toastMarkup = active ? (
      <Toast content="Sync Facebook app success" onDismiss={toggleActive} />
    ) : null;

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
            document.cookie = `access_token=${response.accessToken}`
            const access_token = response?.accessToken;
            const userId = response?.userID
            axios.get(`https://graph.facebook.com/v14.0/${userId}/accounts`, {
                params: {
                    access_token: access_token
                }
            }).then((response) => {
                setListOfPage(response.data.data);
                window.FB.api("/me/permissions","DELETE",function(response){
                    console.log(response); 
                });
                setStepper(2)
                }).catch((error) => {
                    setStepper(1)
            })
        } 
    }

    const handleClear = () => {
        setAppId('')
        window.FB.logout(function(response) {
            console.log('logout success');
        });
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
                                    <Card.Section >
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
                                    <div className="list_of_page">
                                    {(() => {
                                    if (stepper === 1) {
                                        return (
                                        <div>
                                        <Card sectioned>
                                        <EmptyState
                                            heading="Empty Pages"
                                            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                                        >
                                        </EmptyState>
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
                                                                <Avatar>{item.name?.charAt(0)?.toUpperCase()}</Avatar>
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
                                                            <button onClick={() => {setStepper(1); handleClear()}} type="button" className="btn btn-success col-4">Done</button>
                                                        </div>
                                                    </Card>
                                                </div>
                                            )
                                            }
                                        })()}
                                    </div>
                                    <div className="card_custom_tab">
                                        <Card>
                                            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                                                <Card.Section>
                                                {(() => {
                                                        if (selected === 0) {
                                                            return (
                                                                <div className="d-flex align-items-center justify-content-center button_custom_facebook"><button onClick={onLoginClick} > Login With Facebook</button></div>
                                                            )
                                                        } else if (selected === 1) {
                                                            return (
                                                                <div>
                                                                    <FormLayout>
                                                                    <TextField
                                                                        label="Facebook App Id"
                                                                        onChange={handleAppId}
                                                                        value={appId}
                                                                    />
                                                                    </FormLayout>
                                                        
                                                                <div className="button__connect_facebook mt-4">
                                                                    <div className="btn btn-primary d-flex">
                                                                    <Icon
                                                                    source={ChannelsMajor}
                                                                    color="white"
                                                                    /> 
                                                                    <span className="ml-2"> {
                                                                        appId ? <FacebookLogin 
                                                                        appId={appId}
                                                                        autoLoad={false}
                                                                        fields="link,first_name,middle_name,name,birthday,last_name,email,gender,locale,verified,picture.height(2048),age_range"
                                                                        onClick={handleFaceBook}
                                                                        callback={responseFacebook}
                                                                        textButton="Login With Facebook"
                                                                        cssClass="my-facebook-button-class"/> : 'Login With Facebook'
                                                                    }</span>
                                                                    </div>
                                                                </div>

                                                                </div>
                                                            )
                                                        }
                                                })()}
                                                </Card.Section>
                                            </Tabs>
                                        </Card>

                                    </div>
                            </Card>
                        </Layout.Section>
                </Layout>
            </Page>
        </Frame>
    );
}

export default AddFacebookPage
