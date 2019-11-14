import React, { Fragment, useState } from 'react'
import { Table, Row, Button, Divider, Modal, Collapse } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import produce from 'immer'
import CSVReader from 'react-csv-reader'
import moment from 'moment'

const { Column } = Table
const { confirm } = Modal
const { Panel } = Collapse

const StyledRow = styled(Row)`
  margin: 30px 0;
`
const CustomPanel = styled(Panel)`
  margin-bottom: 20px;
`
const HeaderTitle = styled.span`
  font-size: 20px;
`

const RecordComponent = ({
  recordList,
  recordListRequest,
  recordChangeTablePageRequest,
  currentPage,
  perPage,
  totalCount,
}) => {
  const [minerList, setMinerList] = useState([])
  const nextRecordList = produce(minerList, (draftState) => {
    draftState.map((e, index) => (e['key'] = index))
  })

  const pageChange = (currentPage) => {
    recordChangeTablePageRequest(currentPage)
    recordListRequest({ currentPage, perPage })
  }

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
  }

  const handleForce = (data) => {
    setMinerList(data)
    console.log(data)
  }

  const handleDarkSideForce = (err) => {
    console.log(err)
  }

  return (
    <Fragment>
      <StyledRow justify="space-between" type="flex" align="middle">
        <HeaderTitle>Records</HeaderTitle>
        <Divider />
      </StyledRow>
      <Collapse>
        <CustomPanel header="Filter">
          <CSVReader
            cssClass="csv-reader-input"
            label="Select CSV:  "
            onFileLoaded={handleForce}
            onError={handleDarkSideForce}
            parserOptions={papaparseOptions}
            inputId="ObiWan"
            inputStyle={{ color: 'red' }}
          />
        </CustomPanel>
      </Collapse>
      <Table
        dataSource={nextRecordList}
        bordered
        pagination={{
          total: totalCount,
          onChange: (page, pageSize) => pageChange(page),
          current: currentPage,
        }}
      >
        <Column
          title="Date Time"
          dataIndex="datetime_beginning_ept"
          key="datetime_beginning_ept"
          render={(text, record, index) => moment(text).format('YYYY-MM-DD HH:mm')}
          sorter={(a, b) =>
            moment(b.datetime_beginning_ept).unix() -
            moment(a.datetime_beginning_ept).unix()
          }
        />
        <Column
          title="Pricing Node ID"
          dataIndex="pnode_id"
          key="pnode_id"
          sorter={(a, b) => b.pnode_id - a.pnode_id}
        />
        <Column
          title="Pricing Node Name"
          dataIndex="pnode_name"
          key="pnode_name"
          sorter={(a, b) => b.pnode_name > a.pnode_name}
        />
        <Column
          title="Voltage"
          dataIndex="voltage"
          key="voltage"
          sorter={(a, b) => b.voltage > a.voltage}
        />
        <Column
          title="Equipment"
          dataIndex="equipment"
          key="equipment"
          sorter={(a, b) => b.equipment > a.equipment}
        />
        <Column
          title="Pricing Node Type"
          dataIndex="type"
          key="type"
          sorter={(a, b) => b.type > a.type}
        />
        <Column
          title="Transmission Zone"
          dataIndex="zone"
          key="zone"
          sorter={(a, b) => b.zone > a.zone}
        />
      </Table>
    </Fragment>
  )
}

export default RecordComponent
