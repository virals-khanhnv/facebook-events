import React, { useState } from 'react'
import {Page, Layout, Card} from "@shopify/polaris";
import { useDispatch } from 'react-redux';
import { openNavbarSaveChange } from '../../redux/Action';
import MainPreview from './MainPreview'

function GeneralSettings() {
    // Create initial state
    const [valueColorText, setValueColorText] = useState('#fdffff');
    const [valueColorBackground, setValueColorBackground] = useState('#fdffff');
    const dispatch = useDispatch();

    //set initial state for all fields 
    const [validationMsg, setValidationMsg] = useState({});
    const [state, setState] = useState({
      pageName: "",
      eventLimitPerPage: "",
      seeAllEvent: "",
      coverImageHeight: "",
      readmoreTextCustom: "",
      viewMode: "",
    })

    // Func handle
    const handleChangeColorText = (e) => {
      setValueColorText(e.target.value);
    }

    const handleChangeColorBackground = (e) => {
      setValueColorBackground(e.target.value)
    }

    const handleChangeOpenSave = (evt) => {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value
      });
      if (value) 
        dispatch(openNavbarSaveChange(true))
    }

    // validate 
    const validateAll = () => {
      const msg = {}
      if(state.pageName.length <= 0) {
          msg.pageName = 'Please enter the page name'
      } else if (state.pageName.length >= 255) {
        msg.pageName = "Can't enter more than 255 characters"
      }

      if(state.eventLimitPerPage <= 0) {
          msg.eventLimitPerPage = 'Please enter the event limit per page'
      }

      if(state.seeAllEvent <= 0) {
        msg.seeAllEvent = 'Please enter the see All Events'
      } else if (state.seeAllEvent.length >= 255) {
        msg.seeAllEvent = "Can't enter more than 255 characters"
      }

      if(state.coverImageHeight <= 0) {
        msg.coverImageHeight = 'Please enter the cover image height (px)'
      }

      if(state.readmoreTextCustom <= 0) {
        msg.readmoreTextCustom = 'Please enter the readmore text custom'
      } else if (state.readmoreTextCustom.length >= 255) {
        msg.readmoreTextCustom = "Can't enter more than 255 characters"
      }
 
      setValidationMsg(msg) 
      if(Object.keys(msg).length > 0){
          return false
      }else{
          return true
      }
    }

    // submit when all okay
    const onSubmitLogin =  async (e) => {
      e.preventDefault();
      const isValidate = validateAll()
      if(!isValidate) return
    }

    return (
        <Page fullWidth>
        <div className='main_generalSetting'>
          <div className='col-sm mb-2'>
            <Layout>
                <Layout.Section>
                    <Card title="General Settings" sectioned>
                    <div className="form-group">
                      <label className="my-1 mr-2" >View Mode <span className='important_input'>*</span></label>
                      <select name="viewMode" onChange={handleChangeOpenSave} className="custom-select my-1 mr-sm-2" >
                        <option value="0">Widget View</option>
                        <option value="1">List View</option>
                        <option value="2">Grid View</option>
                        <option value="3">Iframe View</option>
                        <option value="4">Mansory View</option>
                        <option value="5">Slider View</option>
                        <option value="6">Upcomming Events View</option>
                        <option value="7">Facebook Events View</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="pageName">Page Name</label>
                      <input onChange={handleChangeOpenSave} type="text" className="form-control" name='pageName' id="pageName" defaultValue={state.pageName} placeholder="Facebook Events 1" />
                      <p className="text-danger">{validationMsg.pageName}</p> 
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input onChange={handleChangeOpenSave} className="form-check-input" type="checkbox" id="invalidCheck1" required />
                        <label className="form-check-label" htmlFor="invalidCheck1">
                          Show Filter button
                        </label>
                      </div>
                      <div className="form-check">
                        <input onChange={handleChangeOpenSave} className="form-check-input" type="checkbox" id="invalidCheck2" required />
                        <label className="form-check-label" htmlFor="invalidCheck2">
                        Show Search Bar
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="event-limit">Event limit per page</label>
                      <input onChange={handleChangeOpenSave} type="number" name='eventLimitPerPage' className="form-control" id="event-limit" />
                       <p className="text-danger">{validationMsg.eventLimitPerPage}</p> 
                    </div>
                    <div className="form-group">
                      <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Ordering Events <span className='important_input'>*</span></label>
                      <select onChange={handleChangeOpenSave} className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option>Show from older to newer</option>
                        <option >Show from older to older</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input onChange={handleChangeOpenSave} className="form-check-input" type="checkbox" id="invalidCheck3" required />
                        <label className="form-check-label" htmlFor="invalidCheck3">
                        Show Old Events
                        </label>
                      </div>
                      <div className="form-check">
                        <input onChange={handleChangeOpenSave} className="form-check-input" type="checkbox" id="invalidCheck4" required />
                        <label className="form-check-label" htmlFor="invalidCheck4">
                        Show Event place
                        </label>
                      </div>
                      <div className="form-check">
                        <input onChange={handleChangeOpenSave} className="form-check-input" type="checkbox" id="invalidCheck5" required />
                        <label className="form-check-label" htmlFor="invalidCheck5">
                        Show Event description
                        </label>
                      </div>
                      <div className="form-check">
                        <input onChange={handleChangeOpenSave} className="form-check-input" type="checkbox" id="invalidCheck6" required />
                        <label className="form-check-label" htmlFor="invalidCheck6">
                        Show "Buy ticket" button
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Show Event date</label>
                      <select onChange={handleChangeOpenSave} className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option >Both start and end date</option>
                        <option value="1">Only start date</option>
                        <option value="1">Hide event date</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="seeAllEvents">See All Events</label>
                      <input onChange={handleChangeOpenSave} type="text" name='seeAllEvent' className="form-control" id="seeAllEvents" />
                      <p className="text-danger">{validationMsg.seeAllEvent}</p> 
                    </div>
                    <div className="form-group">
                      <label htmlFor="event-limit">Cover image height (px)</label>
                      <input onChange={handleChangeOpenSave} type="number" name="coverImageHeight" className="form-control" id="event-limit" />
                      <p className="text-danger">{validationMsg.coverImageHeight}</p> 
                    </div>
                    <div className="form-group">
                      <label htmlFor="seeAllEvents">Readmore text custom</label>
                      <input onChange={handleChangeOpenSave} type="text" name="readmoreTextCustom" className="form-control" id="seeAllEvents" placeholder="readmore" />
                      <p className="text-danger">{validationMsg.readmoreTextCustom}</p> 
                    </div>
                    <div className="form-group">
                      <div className="colorpicker">
                        <label className='mr-3' htmlFor="section1backgroundColor">Readmore background color :</label>
                        <input onChange={handleChangeOpenSave} type="color" id="section1backgroundColor" onInput={(e) => handleChangeColorBackground(e)} name="head" value={valueColorBackground} />
                      </div>
                      <div className="colorpicker">
                        <label className='mr-3' htmlFor="section1ParagraphColor">Readmore text color :</label>
                        <input onChange={handleChangeOpenSave} type="color" id="section1ParagraphColor" onInput={(e) => handleChangeColorText(e)} name="head" value={valueColorText}  />
                      </div>
                    </div>
                    <button type="button" onClick={onSubmitLogin} className="btn btn-primary">Save Setting</button>
                    </Card>
                </Layout.Section>
            </Layout>
          </div>
          <div className='col-sm'>
            <MainPreview stateOfSetting={state}/>
          </div>
        </div>
        </Page>
    )
}

export default GeneralSettings
