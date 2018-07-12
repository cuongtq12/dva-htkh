import React from 'react';
import {Button, Form, Input, Checkbox, Icon} from 'antd';
import {connect} from 'dva';

const FormItem = Form.Item;

const Login = ({
                   dispatch,
                   form: {
                       getFieldDecorator,
                       validateFieldsAndScroll,
                   },
               }
) => {
    function handleOk () {
        validateFieldsAndScroll((errors, values) => {
            if (errors) {
                return;
            }
            dispatch({type: 'login/login', payload: values});
        })
    }

    return (
        <Form>
            <FormItem>
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onPressEnter={handleOk} placeholder="Tên tài khoản"/>
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onPressEnter={handleOk} placeholder={"Mật khẩu"} type={"password"}/>
                )}
            </FormItem>

            <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                }) (
                    <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                )}
            </FormItem>

            <Button onClick={handleOk}>Đăng nhập</Button>
        </Form>
    );
};

export default connect()(Form.create()(Login));