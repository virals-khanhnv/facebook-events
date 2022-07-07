import {Page, Layout, Card, Icon, Toast, Frame} from "@shopify/polaris";
import React, { useState, useCallback } from "react";
import {DuplicateMinor, DeleteMinor} from '@shopify/polaris-icons';
import ModalCommon from "../modal/ModalCommon";

function FacebookPage() {
    const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="COPPIED" onDismiss={toggleActive} />
  ) : null;

    // const notify = () => toast("Copied");
    const handleCopyText = (e) => {
        navigator.clipboard.writeText(`<div class="ot-facebook-events" data-page-id=${e}></div>`)
        toggleActive();
    }
    return (
        <Frame>
                    <Page fullWidth>
           {toastMarkup}
            <Layout>
                <Layout.Section oneHalf>
                    <Card title="Facebook Pages">
                        <div id="page-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>FACEBOOK_PAGE_ID</th>
                                        <th>PAGE_NAME</th>
                                        <th>SHORT CODE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>189861595184608</td>
                                        <td>Test 0</td>
                                        <td title="Copy short code" role="button"
                                            onClick={
                                                () => handleCopyText(189861595184608)
                                        }><Icon source={DuplicateMinor}
                                                color="white"/></td>
                                        <td><ModalCommon phaseAction={'deleteFacebookPage'}/></td>
                                    </tr>
                                    <tr>
                                        <td>189861595184608</td>
                                        <td>Test 1</td>
                                        <td>
                                            <Icon source={DuplicateMinor}
                                                color="white"/></td>
                                        <td><Icon source={DeleteMinor}
                                                color="base"/></td>
                                    </tr>
                                    <tr>
                                        <td>189861595184608</td>
                                        <td>Test 2</td>
                                        <td><Icon source={DuplicateMinor}
                                                color="white"/></td>
                                        <td><Icon source={DeleteMinor}
                                                color="base"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
        </Frame>

    );
}

export default FacebookPage
