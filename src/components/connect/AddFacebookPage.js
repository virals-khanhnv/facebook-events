import {
    Page,
    Layout,
    Card,
    // FormLayout,
    // TextField,
    // Icon,
    Button,
    Toast, 
    Frame,
    // Tabs,
    EmptyState
} from "@shopify/polaris";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React, { useState, useCallback, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import { useDispatch } from "react-redux";
import {fetchListFacebookPage} from "../../redux/Action";
import { fetchInfoFacebookLogin } from '../../redux/Action';

function AddFacebookPage() {
    // const [appId, setAppId] = useState('')
    const [stepper, setStepper] = useState(1)
    const [listFacebookPage, setListFacebookPage] = useState([]);
    const [listPageMulti, setListPageMulti] = useState([]);
    const [checked, setChecked] = useState([]);
    const [listOfPage, setListOfPage] = useState([]); 
    const dispatch = useDispatch();
   
    const handleChangeCheckbox = (e) => {
        if(e.target.checked) {
            setChecked([...checked, e.target.value]);
            listOfPage.map(item => {if(item.id === e.target.value) {
                setListPageMulti([...listPageMulti, item])
            }})
        }else {
            setChecked(checked.filter(item => item !== e.target.value))
        }
    }

    const [logged, setLogged] = useState(false)

    const handleChooseMulti = () => {
        dispatch(fetchListFacebookPage(listPageMulti))
        setStepper(stepper + 1)
        setChecked([])
        toggleActive()
    }

    const buttonChooseAll = () => {
        return (
            <div className="custom_button_chooseAll" >
                <Button onClick={handleChooseMulti} primary>Multichoose</Button>
            </div>
        )
    }
 
    const onLoginClick = () => {
        window.FB.login(function(response) {
            document.cookie = `access_token=${response.authResponse.accessToken}`
            if (response.status === 'connected') {
                setLogged(true)
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
        }, {scope: 'public_profile,email,page_events,pages_show_list,read_insights,manage_pages,pages_read_engagement,pages_manage_metadata'});
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

    const handleClear = () => {
        // setAppId('')
        window.FB.logout(function(response) {
            console.log('logout success');
            setLogged(false)
        });
    }

    return (
        <Frame>
            <Page fullWidth>
                    {toastMarkup}
                        <Layout>
                            <Layout.Section oneHalf>
                                <Card title="Add Facebook page">
                                {checked.length === 0 || stepper === 1 || stepper === 3 ? '' : buttonChooseAll()}
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
                                       
                                        </div>)} 
                                    else if (stepper === 2) {
                                        return (
                                            <div>
                                            {
                                                listOfPage ? listOfPage.map(item => (
                                                    <Card key={item.id} sectioned>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <input onChange={handleChangeCheckbox} value={item.id} className="mr-2" type="checkbox" />
                                                                <Avatar>{item.name?.charAt(0)?.toUpperCase()}</Avatar>
                                                                <p className="mb-0 ml-2">{item.name}</p>
                                                            </div>
                                                            {
                                                                item.id == checked.filter((check) => check === item.id) ? '' : <div onClick={() => {setStepper(stepper + 1); toggleActive() ; handleAddFacebookPage(item)}}>
                                                                    <Button primary>Choose</Button>
                                                                </div>
                                                            }
                                                        </div>
                                                    </Card>
                                                )) :

                                                <Card sectioned>
                                                    <EmptyState
                                                        heading="Empty Pages"
                                                        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                                                    >
                                                    </EmptyState>
                                                </Card>
                                            }
                                            </div>
                                        )
                                    } else {
                                            return (
                                                <div>
                                                    <Card sectioned>
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <button onClick={() => {setStepper(2); setListPageMulti([])}} type="button" className="btn btn-primary mb-2 col-4">Add More Page</button>
                                                            <button onClick={() => {setStepper(1); handleClear()}} type="button" className="btn btn-success col-4">Done</button>
                                                        </div>
                                                    </Card>
                                                </div>
                                            )
                                            }
                                        })()}
                                    </div>
                                    <div className="card_custom_tab">
                                        {
                                            logged === false ? <div className="d-flex align-items-center justify-content-center button_custom_facebook"><button className="fb connect" onClick={onLoginClick} > Login With Facebook</button></div> : ''

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
