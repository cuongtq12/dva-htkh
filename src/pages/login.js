import React from 'react';
import {Button, Form, Input} from 'antd';
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
    function handleOk() {
        validateFieldsAndScroll((errors, values) => {
            if (errors) {
                return;
            }
            dispatch({type: 'login/login', payload: values});
        })
    }

    return (
        <Form>
            <FormItem hasFeedback>
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(
                    <Input onPressEnter={handleOk} placeholder="Username"/>
                )}
            </FormItem>
            <FormItem hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(
                    <Input placeholder={"Mật khẩu"} type={"password"}></Input>
                )}
            </FormItem>

            <Button onClick={handleOk}>Đăng nhập</Button>
        </Form>
    );
};

export default connect()(Form.create()(Login));