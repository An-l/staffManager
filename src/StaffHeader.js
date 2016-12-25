import React, { PropTypes } from 'react'

class StaffHeader extends React.Component {

    // Search
    handleSearch(){
        let bar = this.refs.searchBar;
        let value = bar.value.trim();
        this.props.searchStaff(value);
    }

    // 根据id筛选
    handleIdFilter(){
        let idSelect = this.refs.idSelect;
        let value = idSelect.options[idSelect.selectedIndex].value;
        this.props.filtStaff(value);
    }

    // 排序
    handleSort(){
        let orderSelect = this.refs.orderSelect;
        let value = orderSelect.options[orderSelect.selectedIndex].value;
        this.props.sortStaff(value);
    }

    render () {
        return (
            <div>
                <h3 style={{'textAlign':'center'}}>人员管理系统</h3>
                <table>
                    <tbody>
                        <tr>
                            <td className='headerTd'>
                                <input type='text' placeholder='Search...'
                                     ref='searchBar'
                                     onChange={this.handleSearch.bind(this)}/>
                            </td>
                            <td className='headerTd'>
                                <label htmlFor='idSelect'>人员筛选</label>
                                <select id='idSelect' ref='idSelect' onChange={this.handleIdFilter.bind(this)}>
                                    <option value='0'>全部</option>
                                    <option value='1'>主任</option>
                                    <option value='2'>老师</option>
                                    <option value='3'>学生</option>
                                    <option value='4'>实习</option>
                                </select>
                            </td>
                            <td>
                                <label htmlFor='orderSelect'>排列方式</label>
                                <select id='orderSelect' ref='orderSelect'
                                    onChange={this.handleSort.bind(this)}>
                                    <option value='0'>身份</option>
                                    <option value='1'>年龄升</option>
                                    <option value='2'>年龄降</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StaffHeader;
