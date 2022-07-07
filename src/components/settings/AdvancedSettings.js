import React from 'react'
import {Page, Layout, Card} from "@shopify/polaris";

function AdvancedSettings() {
    return (
        <Page fullWidth>
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
                      <label >Advanced Settings</label>
                      <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Save Setting</button>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default AdvancedSettings
