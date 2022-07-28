import { Chart } from "react-google-charts";

const data = [
  ["Ülke", "Kullanıcı Sayısı"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["Turkey", 1900],
];

const options = {
  colorAxis: { colors: ["#47B5FF", "#1363DF", "006778"] },
  backgroundColor: '#F5F7FA',
  datalessRegionColor: "CDC2AE",
  defaultColor: "black",
};

function AppGoogleMaps() {
  return (
    <Chart style={{
      display: "flex",
      justifyContent: "flex-end",
}}
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="600px"
      chartLanguage="tr"
      data={data}
      options={options}
    />
  );
}

export default AppGoogleMaps;
