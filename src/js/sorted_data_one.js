class DataOne {
  creteHeader() {
    const tableDiv = document.querySelector(".sorted_one");
    const trHeader = document.createElement("tr");
    const thId = document.createElement("th");
    const span = document.createElement("span");
    const thTitle = document.createElement("th");
    const thImdb = document.createElement("th");
    const thYear = document.createElement("th");
    thId.textContent = "id";
    thTitle.textContent = "title";
    thYear.textContent = "year";
    thImdb.textContent = "imdb";
    tableDiv.append(trHeader);
    trHeader.append(thId);
    thId.append(span);
    trHeader.append(thTitle);
    trHeader.append(thYear);
    trHeader.append(thImdb);
  }

  insertTable(dataSet) {
    const tableDiv = document.querySelector(".sorted_one");
    for (let data of dataSet) {
      const tr = document.createElement("tr");
      tr.setAttribute("data-id", data.id);
      tr.setAttribute("data-title", data.title);
      tr.setAttribute("data-imdb", data.imdb);
      tr.setAttribute("data-year", data.year);
      tableDiv.append(tr);
      let tableElem = tableDiv.querySelectorAll("tr");
      tableElem = tableElem[tableElem.length - 1];
      const tdId = document.createElement("td");
      const tdTitle = document.createElement("td");
      const tdImdb = document.createElement("td");
      const tdYear = document.createElement("td");
      tdId.textContent = `#${tableElem.dataset.id}`;
      tdTitle.textContent = `${tableElem.dataset.title}`;
      tdYear.textContent = `(${tableElem.dataset.year})`;
      tdImdb.textContent = `Imdb: ${Number(tableElem.dataset.imdb).toFixed(2)}`;
      tableElem.append(tdId);
      tableElem.append(tdTitle);
      tableElem.append(tdYear);
      tableElem.append(tdImdb);
    }
  }

  sortedData(dataSet, field) {
    const tableDiv = document.querySelector(".sorted_one");
    let tableHeaders = tableDiv.querySelectorAll("tr")[0];
    for (let header of tableHeaders.querySelectorAll("th")) {
      if (header.textContent === field) {
        header.classList.add("arrow_down");
      }
    }
    dataSet.sort(function (a, b) {
      if (a[field] > b[field]) {
        return 1;
      }
      if (a[field] < b[field]) {
        return -1;
      }
      return 0;
    });
    return dataSet;
  }

  sortedDataReverse(dataSet, field) {
    const tableDiv = document.querySelector(".sorted_one");
    let tableHeaders = tableDiv.querySelectorAll("tr")[0];
    for (let header of tableHeaders.querySelectorAll("th")) {
      if (header.textContent === field) {
        header.classList.add("arrow_top");
      }
    }
    dataSet.sort(function (a, b) {
      if (a[field] < b[field]) {
        return 1;
      }
      if (a[field] > b[field]) {
        return -1;
      }
      return 0;
    });
    return dataSet;
  }

  clearTable() {
    const tableDiv = document.querySelector(".sorted_one");
    let tableElem = tableDiv.querySelectorAll("tr");
    let count = 0;
    for (let elem of tableElem) {
      if (count !== 0) {
        elem.remove();
      } else {
        const thAll = elem.querySelectorAll("th");
        for (let th of thAll) {
          th.classList.remove("arrow_down", "arrow_top");
        }
      }
      count++;
    }
  }
}
