import React from 'react';
import { Modal, Form, Input } from 'antd';

interface Props {
    open: boolean;
    initialValue?: string;
    title?: string;
    onOk: (value: string) => Promise<void> | void;
    onCancel: () => void;
}

const TodoEditModal: React.FC<Props> = ({ open, initialValue = '', title = 'Edit Todo', onOk, onCancel }) => {
    const [form] = Form.useForm();

    React.useEffect(() => {
        if (open) form.setFieldsValue({ todo: initialValue });
    }, [open, initialValue]);

    const handleOk = async () => {
        const values = await form.validateFields();
        await onOk(values.todo);
        form.resetFields();
    };

    const handleCancel = () => {
        form.resetFields();
        onCancel();
    };

    return (
        <Modal title={title} open={open} onOk={handleOk} onCancel={handleCancel} okText="OK" cancelText="Cancel">
            <Form form={form} layout="vertical">
                <Form.Item name="todo" label="Todo" rules={[{ required: true, message: 'Please enter todo' }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default TodoEditModal;
