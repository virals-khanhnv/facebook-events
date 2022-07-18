import React from 'react'
import {Page, Layout, Card} from "@shopify/polaris";
import MainPreview from './MainPreview';
import CalendarPreview from './CalendarPreview';

function CalendarSnippet() {
    return (
        <Page fullWidth>
            <div className='main_generalSetting'>
                <div className='col-sm mb-2'>
                    <Layout>
                        <Layout.Section>
                            <Card title="Calendar Snippet" sectioned>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                        <label className="form-check-label" for="invalidCheck">
                                            Show Calendar snippet
                                        </label>
                                    </div>
                                </div>
                                <p className="howto">You can put code
                                    <code> &lt;div class="ot-facebook-events-calendar"&gt;&lt;/div&gt; </code>
                                    where you want to show calendar</p>
                                <div className="form-group">
                                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Calendar theme</label>
                                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>Airbnb</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Calendar language</label>
                                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>English</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Event page URL</label>
                                    <input type="text" className="form-control" placeholder="Event page URL"/>
                                </div>
                                <p className="howto">The page with
                                    <code> &lt;div class="ot-facebook-events"&gt;&lt;/div&gt; </code>
                                    can show event when you click a date in calendar.</p>
                                <button type="button" className="btn btn-primary">Save Setting</button>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </div>
                <div className='col-sm'>
                    <div className='main_preview'>
                        <CalendarPreview />
                    </div>
                </div>
            </div>

        </Page>
    )
}

export default CalendarSnippet
