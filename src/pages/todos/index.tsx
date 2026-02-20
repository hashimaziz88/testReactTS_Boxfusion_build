import React, { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Modal } from 'antd';
import type { CardMetaProps, CardProps } from 'antd';
import { useStyles, stylesCard } from './styles/style';
import { useTodoActions, useTodoState } from '../../providers/todoProvider';
import { ITodo } from '../../providers/todoProvider/context';
import TodoEditModal from '../../components/todoEditModal';
const { Meta } = Card;


// actions are rendered per-card so handlers can reference the todo

const App: React.FC = () => {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editingTodo, setEditingTodo] = useState<ITodo | null>(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const { styles: classNames } = useStyles();
    const { todos, isPending, isError } = useTodoState();
    const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = useTodoActions();

    useEffect(() => {
        getTodos();
    }, []);



    const openCreateModal = () => setIsCreateOpen(true);

    const handleCreateOk = async (value: string) => {
        if (!value?.trim()) return;
        const newTodo: ITodo = { id: 0, todo: value.trim(), completed: false, userId: 1 };
        createTodo(newTodo);
        setIsCreateOpen(false);
    };

    const handleCreateCancel = () => setIsCreateOpen(false);

    const openEditModal = (todo: ITodo) => {
        setEditingTodo(todo);
        setIsEditOpen(true);
    };

    const handleEditOk = async (value?: string) => {
        if (!editingTodo) return;
        const updated: ITodo = { ...editingTodo, todo: (value ?? editingTodo.todo).trim() };
        updateTodo(updated);
        setIsEditOpen(false);
        setEditingTodo(null);
    };

    const handleEditCancel = () => {
        setIsEditOpen(false);
        setEditingTodo(null);
    };

    const handleDelete = (todo: ITodo) => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Delete this todo?',
            okText: 'Delete',
            cancelText: 'Cancel',
            onOk: async () => {
                deleteTodo(todo);
            }
        });
    }
    if (isPending) {
        return <div>Loading Todos...</div>;
    }

    if (isError) {
        return <div>Error loading Todos. Please try again later.</div>;
    }

    if (!todos || todos.length === 0) {
        return <div>No Todos found.</div>;
    }

    const sharedCardProps: CardProps = {
        classNames,
    };

    const randomNumber = Math.floor(Math.random() * 1000)

    const sharedCardMetaProps: CardMetaProps = {
        avatar: <Avatar src={`${import.meta.env.VITE_API_AVATAR_URL}${randomNumber}`} />,
    };

    return (
        <div className={classNames.divContainer}>
            <div className={classNames.buttonContainer}>
                <Button type="primary" onClick={openCreateModal}>Create Todo</Button>
            </div>

            <div className={classNames.cardContainer}>
                {todos?.map((todo: ITodo) => (
                    <Card key={todo.id}
                        {...sharedCardProps}
                        title={todo.id}
                        styles={stylesCard}
                        actions={[
                            <EditOutlined key="edit" style={{ color: '#45b7d1' }} onClick={() => openEditModal(todo)} />,
                            <DeleteOutlined key="delete" style={{ color: '#ff6b6b' }} onClick={() => handleDelete(todo)} />,
                        ]}
                        extra={<Button type="link">More</Button>}
                        variant="borderless"

                    >
                        <Meta {...sharedCardMetaProps} title={todo.todo} />
                    </Card>
                ))}
            </div>
            <TodoEditModal open={isEditOpen} initialValue={editingTodo?.todo} onOk={handleEditOk} onCancel={handleEditCancel} />
            <TodoEditModal open={isCreateOpen} initialValue={''} title={'Create Todo'} onOk={handleCreateOk} onCancel={handleCreateCancel} />

        </div >
    );
};

export default App;