
import Table from "../../components/tables/Table";

import { data, columns } from "../../mock/test/data";

const Capillarity = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", paddingTop: 10 }}>
        Smart Capillarity
      </h2>
      <Table data={data} columns={columns} />
    </div>

  );
};
export default Capillarity;
