import React, { PropTypes } from 'react'

class StaffFooter extends React.Component {
    handleAddClick(event) {
        event.preventDefault();

        let item = {};
        let addForm = this.refs.addForm;

        let sex = addForm.querySelector('#staffAddSex');
        let id = addForm.querySelector('#staffAddId');

        item.name = addForm.querySelector('#staffAddName').value.trim();
        item.age = addForm.querySelector('#staffAddAge').value.trim();
        item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;

        /**
         * 表单验证
         */
        if (item.name == '' || item.age == '' || item.descrip == '') {
            let tips = this.refs.tipsUnDone;
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 1000);
            return;
        }

        let numReg = /^\d+$/;
        if (!numReg.test(item.age) || parseInt(item.age) > 150) {
            let tip = this.refs.tipsUnAge;
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 1000);
            return;
        }

        this.props.addStaffItem(item);
        // addFrom.reset();

        let tips = this.refs.tips;
        tips.style.display = 'block';
        setTimeout(function () {
            tips.style.display = 'none';
        }, 1000);
    }

    render () {
        return (
            <div>
                <h4 style={{'textAlign': 'center'}}>人员新增</h4>
                <hr/>
                <form ref='addForm' className='addForm'>
                    <div>
                        <label htmlFor='staffAddName' style={{'display': 'block'}}>姓名</label>
                        <input ref='addName' id='staffAddName' type='text' placeholder='Your Name' />
                    </div>
                    <div>
                        <label htmlFor='staffAddAge' style={{'display': 'block'}}>年龄</label>
                        <input ref='addAge' id='staffAddAge' type='text' placeholder='Your Age(0-150)'/>
                    </div>
                    <div>
                        <label htmlFor='staffAddSex' style={{'display': 'block'}}>性别</label>
                        <select ref='addSex' id='staffAddSex'>
                            <option value='男'>男</option>
                            <option value='女'>女</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='staffAddId' style={{'display': 'block'}}>身份</label>
                        <select ref='addId' id='staffAddId'>
                            <option value='男'>主人</option>
                            <option value='女'>老师</option>
                            <option value='女'>学生</option>
                            <option value='女'>实习</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='staffAddDescrip' style={{'display': 'block'}}>个人描述</label>
                        <textarea ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
                    </div>
                    <p ref='tips' className='tips'>提交成功</p>
                    <p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
                    <p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
                    <div>
                        <button onClick={this.handleAddClick.bind(this)}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default StaffFooter;
