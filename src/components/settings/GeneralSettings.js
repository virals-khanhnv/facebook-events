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

    // Func handle
    const handleChangeColorText = (e) => {
      setValueColorText(e.target.value);
    }

    const handleChangeColorBackground = (e) => {
      setValueColorBackground(e.target.value)
    }

    const handleChangeOpenSave = (evt) => {
      const value = evt.target.value;
      console.log(value);
      if (value) 
        dispatch(openNavbarSaveChange(true))
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
                      <select onChange={handleChangeOpenSave} className="custom-select my-1 mr-sm-2" >
                        <option>List View</option>
                        <option>Grid View</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="pageName">Page Name</label>
                      <input onChange={handleChangeOpenSave} type="text" className="form-control" id="pageName" placeholder="Facebook Events 1" />
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
                      <input onChange={handleChangeOpenSave} type="number" className="form-control" id="event-limit" />
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
                      <input onChange={handleChangeOpenSave} type="text" className="form-control" id="seeAllEvents" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="event-limit">Cover image height (px)</label>
                      <input onChange={handleChangeOpenSave} type="number" className="form-control" id="event-limit" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="seeAllEvents">Readmore text custom</label>
                      <input onChange={handleChangeOpenSave} type="text" className="form-control" id="seeAllEvents" placeholder="readmore" />
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
                    <button type="button" className="btn btn-primary">Save Setting</button>
                    </Card>
                </Layout.Section>
            </Layout>
          </div>
          <div className='col-sm'>
            <MainPreview />
          </div>
        </div>
        </Page>
    )
}

export default GeneralSettings
