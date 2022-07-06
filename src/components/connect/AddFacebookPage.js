import {
    Page,
    Layout,
    Card,
    FormLayout,
    TextField
} from "@shopify/polaris";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React from "react";

function AddFacebookPage() {
    const steps = [
        'Connect',
        'Choose Page',
        'Confirm',
    ];
    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section oneHalf>
                    <Card title="Add Facebook page">
                        <Card.Section title="Connect to Facebook">
                        <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                        </Box>
                        </Card.Section>
                        <div className="ml-2 mr-2 pb-2">
                            <Card sectioned>
                                <FormLayout>
                                <TextField
                                    label="Facebook App Id"
                                    onChange={() => {}}
                                />
                                <TextField
                                    label="Facebook App Secret"
                                    onChange={() => {}}
                                />
                                <p className="howto">Leave blank if don't want to use long-lived access token.</p>
                                </FormLayout>
                            </Card>
                            <div className="button__connect_facebook">
                                <button type="button" className="btn btn-primary">
										Connect to Your Facebook Account
                                </button>
                            </div>
                        </div>
                </Card>
            </Layout.Section>
    </Layout>
</Page>
    );
}

export default AddFacebookPage
