import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { RecordComponent } from 'components/Record'
import {
  makeSelectRecordList,
  makeSelectCurrentPage,
  makeSelectPerPage,
  makeSelectTotalCount,
} from 'selectors/record.selector'
import {
  recordListRequest,
  recordDeleteRequest,
  recordChangeTablePageRequest,
} from 'actions/record.action'

const RecordsContainer = ({
  recordList,
  recordListRequest,
  recordDeleteRequest,
  recordChangeTablePageRequest,
  currentPage,
  perPage,
  user,
  totalCount,
}) => {
  useEffect(() => {
    recordListRequest({ currentPage, perPage })
  }, [currentPage, perPage, recordListRequest])
  return (
    <RecordComponent
      recordList={recordList}
      recordListRequest={recordListRequest}
      recordDeleteRequest={recordDeleteRequest}
      recordChangeTablePageRequest={recordChangeTablePageRequest}
      currentPage={currentPage}
      perPage={perPage}
      totalCount={totalCount}
      user={user}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  recordList: makeSelectRecordList(),
  currentPage: makeSelectCurrentPage(),
  perPage: makeSelectPerPage(),
  totalCount: makeSelectTotalCount(),
})

const mapDispatchToProps = {
  recordListRequest,
  recordDeleteRequest,
  recordChangeTablePageRequest,
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default compose(withConnect)(RecordsContainer)
