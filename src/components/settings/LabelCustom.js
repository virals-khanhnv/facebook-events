import React from 'react'
import {Page, Layout, Card} from "@shopify/polaris";

function LabelCustom() {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card title="Label Custom" sectioned>
                      <div className="form-group">
                        <label>"Upcoming Events" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Past Events" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"All Events" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Today" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Tomorrow" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"This Weekend" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Select date" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Venue" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"Show In Map" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>"No event found" label</label>
                        <input type="text" className="form-control" />
                      </div>
                      <button type="button" className="btn btn-primary">Save Setting</button>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default LabelCustom
