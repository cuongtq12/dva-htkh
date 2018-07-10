import React from 'react';
import {Button, Form, Input} from 'antd';

const FormItem = Form.Item;

const Login = ({
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
        })
    }

    return (
        <form>
            <FormItem hasFeedback>
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                        },
                    ],
                })(
                        <Input onPressEnter={handleOk} placeholder="Username" />
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
        </form>
    );
};

export default Form.create()(Login);