import React from 'react'
import {Page, Layout, Card} from "@shopify/polaris";

function LabelCustom() {
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Card title="General Settings" sectioned>
                    <div class="form-group">
                      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">View Mode <span className='important_input'>*</span></label>
                      <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>List View</option>
                        <option value="1">Grid View</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="pageName">Page Name</label>
                      <input type="text" class="form-control" id="pageName" placeholder="Facebook Events 1" />
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                          Show Filter button
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                        Show Search Bar
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="event-limit">Event limit per page</label>
                      <input type="number" class="form-control" id="event-limit" />
                    </div>
                    <div class="form-group">
                      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Ordering Events <span className='important_input'>*</span></label>
                      <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>Show from older to newer</option>
                        <option value="1">Show from older to older</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                        Show Old Events
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                        Show Event place
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                        Show Event description
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                        Show "Buy ticket" button
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Show Event date</label>
                      <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>Both start and end date</option>
                        <option value="1">Only start date</option>
                        <option value="1">Hide event date</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="seeAllEvents">See All Events</label>
                      <input type="text" class="form-control" id="seeAllEvents" />
                    </div>
                    <div class="form-group">
                      <label for="event-limit">Cover image height (px)</label>
                      <input type="number" class="form-control" id="event-limit" />
                    </div>
                    <div class="form-group">
                      <label for="seeAllEvents">Readmore text custom</label>
                      <input type="text" class="form-control" id="seeAllEvents" placeholder="readmore" />
                    </div>
                    <div class="form-group">
                      <div class="colorpicker">
                        <label className='mr-3' for="section1ParagraphColor">Readmore background color :</label>
                        <input type="color" id="section1backgroundColor" name="head" value="#fdffff" />
                      </div>
                      <div class="colorpicker">
                        <label className='mr-3' for="section1ParagraphColor">Readmore text color :</label>
                        <input type="color" id="section1ParagraphColor" name="head" value="#fdffff"  />
                      </div>
                    </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default LabelCustom
