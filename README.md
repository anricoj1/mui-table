## Material UI v4 Table
Experimenting with building my own Material UI table component similar to the [Mui Data Grid](https://v4.mui.com/components/data-grid/#data-grid) and [AG Grid](https://www.ag-grid.com/react-data-grid/reactui/).

* Sort columns **asc** and  **desc** order.
* Filter rows from column **contains** / **equals**.
* Add **Row Grouping** (*expandable rows*).
* Render custom components in **Table Cell**.
    * This will allow the **field** key to be `null` in exchange for a **cellRenderer**. 