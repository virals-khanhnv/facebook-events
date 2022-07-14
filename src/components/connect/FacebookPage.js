import {
    Page,
    Layout,
    Card,
    Icon,
    Toast,
    Frame
} from "@shopify/polaris";
import React, {useState, useCallback} from "react";
import {DuplicateMinor} from '@shopify/polaris-icons';
import ModalCommon from "../modal/ModalCommon";
import '../../assets/scss/StylesTable.scss'
import {useSelector} from 'react-redux';
import {getUnique} from "../../helper/Helper";

function FacebookPage() {
    const [active, setActive] = useState(false);
    const {listFacebookpage} = useSelector((state) => ({
        ...state.data
    }));
    
    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const toastMarkup = active ? (
        <Toast content="COPPIED"
            onDismiss={toggleActive}/>
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
                                        <tr className="tr_custom">
                                            <th>Facebook page id</th>
                                            <th>Page name</th>
                                            <th>Short code</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>{
                                        getUnique(listFacebookpage, 'id').map(item => (
                                            <tr key={
                                                item.id
                                            }>
                                                <td>{
                                                    item.id
                                                }</td>
                                                <td>{
                                                    item.name
                                                }</td>
                                                <td title="Copy short code" role="button"
                                                    onClick={
                                                        () => handleCopyText(item.id)
                                                }><Icon source={DuplicateMinor}
                                                        color="white"/></td>
                                                <td><ModalCommon id={
                                                            item.id
                                                        }
                                                        phaseAction={'deleteFacebookPage'}/></td>
                                            </tr>
                                        ))
                                    }</tbody>
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
