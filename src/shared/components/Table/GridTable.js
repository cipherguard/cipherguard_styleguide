/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2023 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2023 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         4.2.0
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactList from "react-list";
import Row from "./Row";
import TableContextProvider from "./Context/TableContext";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

/**
 * This component represents a grid table
 */
class GridTable extends Component {
  /**
   * Render item rows
   * @param index
   * @param key
   * @return {JSX.Element}
   */
  renderItem(index, key) {
    const item = this.props.rows[index];

    return <Row
      key={key}
      item={item}
      className={index % 2 === 0 ? "even" : "odd"}
      onClick={this.props.onRowClick}
      onContextMenu={this.props.onRowContextMenu}
      onDragStart={this.props.onRowDragStart}
      onDragEnd={this.props.onRowDragEnd}/>;
  }

  /**
   * Render table for rows
   * @param items
   * @param ref
   * @return {JSX.Element}
   */
  renderTable(items, ref) {
    return <TableBody items={items} tableBodyRef={ref}/>;
  }

  /**
   * Render the component
   * @return {JSX}
   */
  render() {
    const hasRows = this.props.rows !== null;
    return (
      <TableContextProvider
        columns={this.props.columns}
        rows={this.props.rows}
        selectedRowsIds={this.props.selectedRowsIds}
        sorter={this.props.sorter}
        onSortChange={this.props.onSortChange}
        onChange={this.props.onChange}>
        <TableHead/>
        {hasRows &&
          <div className="tableview-content">
            <ReactList
              itemRenderer={(index, key) => this.renderItem(index, key)}
              itemsRenderer={(items, ref) => this.renderTable(items, ref)}
              length={this.props.rows.length}
              pageSize={20}
              minSize={20}
              type="uniform"
              ref={this.props.rowsRef}>
            </ReactList>
          </div>
        }
      </TableContextProvider>
    );
  }
}

GridTable.propTypes = {
  columns: PropTypes.array.isRequired, // The columns to display
  rows: PropTypes.array.isRequired, // The rows to display
  sorter: PropTypes.object, // The sorter object containing the property name and the direction
  selectedRowsIds: PropTypes.array, // The selected row ids
  onSortChange: PropTypes.func, // The on sort property
  onRowClick: PropTypes.func, // The onRowClick property
  onRowContextMenu: PropTypes.func, // The onRowContextMenu property
  onRowDragStart: PropTypes.func, // The onRowDragStart property
  onRowDragEnd: PropTypes.func, // The onRowDragEnd property
  onChange: PropTypes.func, // The onChange property
  rowsRef: PropTypes.any // The ref of the rows
};

export default GridTable;
