import { DatePicker, Page, Layout, Card } from "@shopify/polaris";
import {} from "@shopify/polaris";
import { useState, useCallback } from "react";

function CalendarPreview() {
  const dateCurrent = new Date();
  const [{ month, year }, setDate] = useState({ month: dateCurrent.getUTCMonth(), year: dateCurrent.getUTCFullYear() });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(dateCurrent.toUTCString()),
    end: new Date(dateCurrent.toUTCString()),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  return (
    <Page fullWidth>
      <Layout>
          <Layout.Section>
              <Card title="Calendar Preview" sectioned>
              <DatePicker
                month={month}
                year={year}
                onChange={setSelectedDates}
                onMonthChange={handleMonthChange}
                selected={selectedDates}
              />
              </Card>
          </Layout.Section>
      </Layout>
    </Page>
  );
}
export default CalendarPreview