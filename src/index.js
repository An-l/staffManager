import React from 'react';
import ReactDom from 'react-dom';

require('./style.css')

import StaffHeader from './StaffHeader.js';
import StaffList from './StaffList.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';

import STAFF from './STAFF'


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            staff: new STAFF,
            staffDetail: null
        }
    }
    // 增
    addStaffItem(item){
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    }
    // 删
    removeStaffItem(key){
        this.setState({
            staff: this.state.staff.removeStaffItem(key)
        });
    }

    // 搜索
    searchStaff(txt){
        this.setState({
            staff: this.state.staff.searchStaff(txt)
        });
    }

    // 筛选
    filtStaff(val){
        this.setState({
            staff: this.state.staff.filtStaff(val)
        });
    }

    // 排序
    sortStaff(val){
        this.setState({
            staff: this.state.staff.sortStaff(val)
        });
    }


	/*
	 *详情
	 */
	//打开
	detailStaffItem(key){
	    this.setState({
		    staffDetail: this.state.staff.staff.filter(item => {
			    return item.key==key;
			})[0]
		});
	}
	//关闭
	closeDetail(){
	    this.setState({
		    staffDetail: null
		});
	}
    //编辑
	editDetail(item){
	    this.setState({
		    staff : this.state.staff.editStaffItem(item)
		});
	}

    render () {
        return (
            <div>
                <StaffHeader searchStaff={this.searchStaff.bind(this)}
                    filtStaff={this.filtStaff.bind(this)}
                    sortStaff={this.sortStaff.bind(this)}/>
                <StaffList items={this.state.staff.staff}
                    removeStaffItem={this.removeStaffItem.bind(this)}
                    detailStaffItem={this.detailStaffItem.bind(this)}/>
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                <StaffDetail/>
                <StaffDetail staffDetail={this.state.staffDetail}
                    closeDetail={this.closeDetail.bind(this)}
                    editDetail={this.editDetail.bind(this)}/>
            </div>
        )
    }
}



ReactDom.render(
    <App/>,
    document.getElementById('AppRoot')
)
