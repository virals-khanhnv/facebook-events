import {Page, Layout, Card, Icon} from "@shopify/polaris";
import React from "react";
import {DuplicateMinor, DeleteMinor} from '@shopify/polaris-icons';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalCommon from "../modal/ModalCommon";

function FacebookPage() {
    const notify = () => toast("Copied");
    const handleCopyText = (e) => {
        navigator.clipboard.writeText(`<div class="ot-facebook-events" data-page-id=${e}></div>`)
        notify();
    }
    return (
        <Page fullWidth>
            <ToastContainer/>
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
    );
}

export default FacebookPage
