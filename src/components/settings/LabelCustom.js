import React from 'react'
import {Page, Layout, Card} from "@shopify/polaris";
import { useDispatch } from 'react-redux';
import { openNavbarSaveChange } from '../../redux/Action';
import MainPreview from './MainPreview';

function LabelCustom() {
    const dispatch = useDispatch();

    const handleChangeOpenSave = (evt) => {
      const value = evt.target.value;
      if (value) 
        dispatch(openNavbarSaveChange(true))
    }
    
    return (
        <Page fullWidth>
        <div className='main_generalSetting'>
          <div className='col-sm mb-2'>
            <Layout>
                <Layout.Section>
                    <Card title="Label Custom" sectioned>
                      <div className="form-group">
                        <label>"Upcoming Events" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Past Events" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"All Events" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Today" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Tomorrow" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"This Weekend" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Select date" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Venue" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Show In Map" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"No event found" label</label>
                        <input onChange={handleChangeOpenSave} type="text" className="form-control" />
                      </div>
                      <button type="button" className="btn btn-primary">Save Setting</button>
                    </Card>
                </Layout.Section>
            </Layout>
          </div>
        </div>
        </Page>
    )
}

export default LabelCustom
