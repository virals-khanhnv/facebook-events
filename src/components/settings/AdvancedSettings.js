import React from 'react'
import {Page, Layout, Card} from "@shopify/polaris";
import MainPreview from './MainPreview';

function AdvancedSettings() {
    return (
        <Page fullWidth>
            <div className='main_generalSetting'>
                <div className='col-sm mb-2'>
                    <Layout>
                        <Layout.Section>
                            <Card title="Advanced Settings" sectioned>
                                <div className="form-group">
                                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Timezone</label>
                                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>( UTC+00:00) UTC</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Advanced Settings</label>
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary">Save Setting</button>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </div>
                <div className='col-sm'>
                    <MainPreview/>
                </div>
            </div>
        </Page>
    )
}

export default AdvancedSettings
