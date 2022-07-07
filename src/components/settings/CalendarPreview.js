import { DatePicker, Page, Layout, Card } from "@shopify/polaris";
import {} from "@shopify/polaris";
import { useState, useCallback } from "react";

function CalendarPreview() {
  const [{ month, year }, setDate] = useState({ month: 8, year: 2022 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
    end: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
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