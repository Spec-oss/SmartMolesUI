export const options = {
    filter: true,
    filterType: 'dropdown',
    serverSide: true,
    rowsPerPage: 10,
    selectableRows: true,
    textLabels: {
      body: {
        noMatch: "Listede bir kayıt bulunmamaktadır.",
      },
      pagination:{
        next: "Following page",
        previous: "Preceding page",
        rowsPerPage: "Listele"
      },
      filter: {
        all: "Tüm Kayıtlar",
        title: "Filtreler",
        reset: "Temizle",          
      },
      selectedRows: {
        text: "rows has been deleted",
        delete: "Delete Row",
        deleteAria: "Deleted Selected Rows"
      },
      toolbar: {
        search: "Arama",
        downloadCsv: "CSV İndir",
        print: "Yazdır",
        viewColumns: "Kolonları Göster",
        filterTable: "Filtrele",
      },
    },
    onTableChange: (action, tableState) => {
      console.log(action, tableState);

      switch (action) {
        case 'changePage':
          this.changePage(tableState.page, tableState.rowsPerPage);
          break;
      }
    },
  };  